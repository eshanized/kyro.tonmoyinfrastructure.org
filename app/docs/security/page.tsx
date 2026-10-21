import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CodeBlock } from "@/components/CodeBlock";
import { Shield, Lock, AlertTriangle, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Security & Governance Documentation",
  description:
    "In-depth guide to Kyro's centralized authorization engine, shell policies, fail-closed sandboxing, and workspace confinement.",
};

export default function SecurityDocPage() {
  return (
    <div className="space-y-10">
      <Breadcrumbs
        items={[
          { label: "Docs", href: "/docs" },
          { label: "Security & Governance" },
        ]}
      />

      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500">
          Security Guide
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Zero-Trust Security & Authorization
        </h1>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
          Kyro implements a zero-trust policy matrix at the native execution boundary. This document covers
          policy modes, shell lexical analysis, fail-closed container isolation, and atomic approval consumption.
        </p>
      </div>

      {/* Policy Modes */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Configurable Policy Modes</h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-left text-xs border-collapse">
            <thead className="bg-surface text-foreground border-b border-border">
              <tr>
                <th className="p-3">Policy Mode</th>
                <th className="p-3">Behavior</th>
                <th className="p-3">Failure Mode</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 text-muted-foreground">
              <tr>
                <td className="p-3 font-mono font-semibold text-foreground">SafeAutoApprove</td>
                <td className="p-3">
                  Permits verified read-only inspection commands (e.g. <code className="text-emerald-400">git status</code>). Ambiguous or modifying commands require approval.
                </td>
                <td className="p-3">Prompts Human Approval</td>
              </tr>
              <tr>
                <td className="p-3 font-mono font-semibold text-foreground">SandboxOnly</td>
                <td className="p-3">
                  Mandatory execution inside an isolated Docker or Podman container with <code className="text-foreground">--network=none</code>.
                </td>
                <td className="p-3 text-rose-400 font-semibold">Fails Closed (Denies Action)</td>
              </tr>
              <tr>
                <td className="p-3 font-mono font-semibold text-foreground">AskAlways</td>
                <td className="p-3">
                  Generates an approval request for every shell command or modifying operation.
                </td>
                <td className="p-3">Prompts Human Approval</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Fail-Closed Container Sandbox */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Fail-Closed Container Sandbox Implementation</h2>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          A common vulnerability in desktop agent tools is transparently falling back to the host system when a container
          engine is missing. In Kyro, <code className="text-emerald-400">auth.rs</code> strictly checks daemon availability:
        </p>

        <CodeBlock
          filename="libkyro/src/governance/auth.rs (lines 381-395)"
          language="rust"
          code={`// Fail-closed sandbox policy
if policy.shell_mode == "SandboxOnly" || requested_sandbox {
    let sandbox_status = DockerSandbox::probe();
    if !sandbox_status.available {
        return ShellAnalysis {
            decision: AuthDecision::Deny {
                reason: format!(
                    "Sandbox execution required by policy ({}), but container engine is unavailable: {}",
                    policy.shell_mode, sandbox_status.message
                ),
            },
            argv: None,
            requires_shell: true,
            lexed_words: Vec::new(),
        };
    }
    // Only proceed into isolated container if probe succeeded
}`}
        />
      </section>

      {/* Approval CAS Binding */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Approval Proof Binding & TOCTOU Defense</h2>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          To prevent Time-of-Check to Time-of-Use (TOCTOU) race conditions and argument tampering:
        </p>
        <ul className="space-y-1.5 text-xs text-muted-foreground">
          <li>• Every approval proof is bound to the exact <code className="text-foreground">approval_id</code>, <code className="text-foreground">run_id</code>, and tool name.</li>
          <li>• Arguments are compared using canonical JSON equivalence (<code className="text-foreground">json_values_canonically_equal</code>).</li>
          <li>• Consumption happens in an atomic SQLite transaction via <code className="text-foreground">consume_approval_request_bound</code>, transitioning status from <code className="text-foreground">approved</code> to <code className="text-foreground">consumed</code>.</li>
        </ul>
      </section>
    </div>
  );
}
