import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CodeBlock } from "@/components/CodeBlock";
import { AlertTriangle, Wrench, CheckCircle2, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Troubleshooting & System Diagnostics",
  description:
    "Diagnose and resolve common configuration, keyring, container sandbox, and display issues in Kyro.",
};

export default function TroubleshootingDocPage() {
  return (
    <div className="space-y-10">
      <Breadcrumbs
        items={[
          { label: "Docs", href: "/docs" },
          { label: "Troubleshooting & Health" },
        ]}
      />

      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500">
          Support & Diagnostics
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Troubleshooting & System Health
        </h1>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
          Diagnostic checks and common remediation steps for operating system permissions, container daemons,
          and display environments.
        </p>
      </div>

      {/* Health Probe */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Integrated System Health Probe</h2>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          In Kyro desktop settings, navigate to <strong>Diagnostics</strong>. Kyro executes an automated probe checking:
        </p>
        <ul className="space-y-1 text-xs text-muted-foreground">
          <li>• SQLite database connectivity and WAL mode activation.</li>
          <li>• Operating system keyring availability (or fallback status).</li>
          <li>• Docker and Podman daemon responsiveness.</li>
          <li>• Virtual display utilities (Xvfb status for Ghost Mode).</li>
          <li>• System CLI binaries (git, node, npm).</li>
        </ul>
      </section>

      {/* Common Issues & Solutions */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-foreground">Common Scenarios & Fixes</h2>

        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="font-semibold text-sm text-foreground mb-2 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-amber-500" />
            <span>Sandbox execution denied: &quot;Container engine is unavailable&quot;</span>
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            <strong>Cause:</strong> Your shell governance policy is set to <code className="text-foreground">SandboxOnly</code>,
            but Docker or Podman is not running.
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed mt-2">
            <strong>Fix:</strong> Start Docker Desktop or start your local service:
          </p>
          <CodeBlock
            filename="Terminal (Linux)"
            language="bash"
            code={`sudo systemctl start docker
# or if using podman:
podman machine start`}
          />
        </div>

        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="font-semibold text-sm text-foreground mb-2 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-amber-500" />
            <span>macOS: Screen Recording or Accessibility Permission Prompts</span>
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            <strong>Cause:</strong> macOS requires explicit user grants in System Settings for applications that capture
            the screen or synthesize mouse and keyboard strokes.
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed mt-2">
            <strong>Fix:</strong> Open <em>System Settings &rarr; Privacy &amp; Security</em>, enable <strong>Kyro</strong> under
            both <strong>Screen Recording</strong> and <strong>Accessibility</strong>, and restart the application.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="font-semibold text-sm text-foreground mb-2 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-amber-500" />
            <span>Linux: Keyring daemon DBus error on headless/minimal setups</span>
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            <strong>Cause:</strong> In minimal window managers (i3, bspwm) without GNOME Keyring or KWallet, DBus secret
            service queries may time out.
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed mt-2">
            <strong>Fix:</strong> Kyro automatically falls back to an authenticated AES-256-GCM encrypted database file
            with <code className="text-foreground">0600</code> permissions located in <code className="text-foreground">~/.config/kyro/vault.db</code>.
            No manual intervention is required.
          </p>
        </div>
      </section>

      {/* Reporting bugs */}
      <section className="space-y-4 border-t border-border pt-8">
        <h2 className="text-xl font-bold text-foreground">Reporting Unresolved Issues</h2>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          If you encounter an unhandled exception or reproducible crash:
        </p>
        <div className="flex items-center gap-3">
          <Link
            href="https://github.com/eshanized/Kyro/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-xs font-semibold text-black hover:bg-emerald-400 transition-colors shadow-sm"
          >
            <span>Open GitHub Issue</span>
          </Link>
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-xs font-medium text-foreground hover:bg-surface-hover transition-colors"
          >
            <span>Read FAQ</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
