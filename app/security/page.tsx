import { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  Lock,
  Terminal,
  FolderLock,
  Clock,
  Key,
  Box,
  Globe,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Zero-Trust Security & Governance Boundaries",
  description:
    "Authoritative specification of Kyro's security architecture: centralized Rust policy evaluation, fail-closed container sandboxing, OS Keyring vault, and human-in-the-loop takeover.",
};

export default function SecurityPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <Breadcrumbs items={[{ label: "Security & Governance" }]} />

      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 mb-4">
          <Shield className="h-3.5 w-3.5" />
          <span>Zero-Trust Architecture • Tonmoy Infrastructure</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Security Boundaries & Control Architecture
        </h1>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
          Allowing an autonomous AI agent to interact with your operating system requires strict, verifiable boundaries.
          Kyro is an open-source product from{" "}
          <a
            href={siteConfig.organization.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 font-semibold underline hover:text-emerald-300"
          >
            Tonmoy Infrastructure
          </a>
          , owned and architected by{" "}
          <a
            href={siteConfig.owner.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground font-semibold underline hover:text-emerald-400"
          >
            Eshan Roy
          </a>
          . It is engineered with a zero-implicit-approval philosophy: every consequential action is evaluated and authorized
          at the native Rust backend execution gate.
        </p>
      </div>

      {/* Notice Banner */}
      <div className="mt-8 rounded-xl border border-border bg-surface p-4 text-xs text-muted-foreground leading-relaxed flex items-start gap-3">
        <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-foreground">Technical Product Documentation Notice: </span>
          This documentation describes the technical controls, invariants, and enforcement policies implemented in the
          Kyro codebase (<a href={`${siteConfig.repoUrl}/blob/master/libkyro/src/governance/auth.rs`} target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:underline">libkyro/src/governance/</a>).
          It is not a warranty of absolute invulnerability or a substitute for an independent third-party security audit.
        </div>
      </div>

      {/* 5 Core Principles */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Five Core Security Invariants
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 mb-3">
              <span className="font-mono text-sm font-bold">1</span>
            </div>
            <h3 className="font-semibold text-base text-foreground">Zero Implicit Approval</h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              No tool invocation can proceed merely because a frontend flag (<code className="text-foreground">autoApprove: true</code>)
              was supplied. Enforcement occurs exclusively inside the Rust binary.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 mb-3">
              <span className="font-mono text-sm font-bold">2</span>
            </div>
            <h3 className="font-semibold text-base text-foreground">Centralized Rust Evaluation</h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              Every operation (shell tokens, file I/O, mouse/keyboard, virtual displays, MCP tools, container execution)
              passes through the unified <code className="text-emerald-400">AuthorizationEngine</code>.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 mb-3">
              <span className="font-mono text-sm font-bold">3</span>
            </div>
            <h3 className="font-semibold text-base text-foreground">Fail-Closed Container Sandbox</h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              When container sandboxing is required (<code className="text-foreground">SandboxOnly</code>), absence or failure of
              Docker/Podman aborts the action rather than falling back to host execution.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 mb-3">
              <span className="font-mono text-sm font-bold">4</span>
            </div>
            <h3 className="font-semibold text-base text-foreground">Zero Secret Leakage</h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              API tokens and OAuth keys are stored in the OS Keyring. Tauri IPC commands return presence metadata
              (<code className="text-foreground">is_configured: true</code>) rather than plaintext secrets.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 mb-3">
              <span className="font-mono text-sm font-bold">5</span>
            </div>
            <h3 className="font-semibold text-base text-foreground">Durable CAS Approval Proofs</h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              Human approvals are cryptographically bound to exact tool names and argument hashes, consumed via
              atomic SQLite Compare-and-Swap (CAS) to prevent replay attacks.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 mb-3">
              <span className="font-mono text-sm font-bold">6</span>
            </div>
            <h3 className="font-semibold text-base text-foreground">Autonomous Checkpoint Takeover</h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              When screen or browser automation detects 2FA prompts, password inputs, CAPTCHAs, or banking domains,
              Kyro automatically halts and requires human intervention.
            </p>
          </div>
        </div>
      </section>

      {/* Subsystem Deep Dive */}
      <section className="mt-16 space-y-12">
        <div className="border-b border-border pb-3">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Enforcement Mechanisms by Subsystem
          </h2>
        </div>

        {/* 1. Shell Command Governance */}
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
              <Terminal className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">Shell Command Governance</h3>
              <span className="text-xs font-mono text-muted-foreground">Source: libkyro/src/governance/auth.rs</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Unlike simple string execution, Kyro's authorization engine runs a lexical parser on shell commands,
            extracting exact <code className="text-foreground">argv</code> tokens. The engine rejects:
          </p>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="rounded-lg border border-border bg-surface p-3">
              <span className="font-semibold text-rose-400 block mb-1">Unchecked Metacharacters:</span>
              <p className="text-muted-foreground">Pipelines (<code className="text-foreground">|</code>), subshells (<code className="text-foreground">$(...)</code>, <code className="text-foreground">`...`</code>), command chaining (<code className="text-foreground">;</code>, <code className="text-foreground">&&</code>), and backgrounding (<code className="text-foreground">&</code>).</p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-3">
              <span className="font-semibold text-emerald-400 block mb-1">SafeAutoApprove Policy:</span>
              <p className="text-muted-foreground">Only permits verified read-only inspection commands (<code className="text-foreground">git status</code>, <code className="text-foreground">cargo check</code>, <code className="text-foreground">npm test</code>). Any ambiguity prompts human approval.</p>
            </div>
          </div>
        </div>

        {/* 2. Fail-Closed Sandbox Policy */}
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
              <Box className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">Fail-Closed Container Sandbox</h3>
              <span className="text-xs font-mono text-muted-foreground">Source: libkyro/src/sandbox/docker.rs</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            When configuring the agent in <code className="text-foreground">SandboxOnly</code> mode:
          </p>
          <ul className="mt-3 space-y-2 text-xs sm:text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>Probe & Enforce:</strong> Kyro probes for active Docker or Podman daemons using CLI status checks.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>Strict Denial:</strong> If neither container engine is responsive, the engine returns <code className="text-foreground">AuthDecision::Deny</code>. It explicitly refuses to fall back to host execution unsafely.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>Network & Resource Isolation:</strong> Spawned containers run with <code className="text-foreground">--network=none</code>, memory limited to 512MB, and CPU quota capped at 1.0.
              </span>
            </li>
          </ul>
        </div>

        {/* 3. Filesystem Workspace Confinement */}
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
              <FolderLock className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">Filesystem Workspace Confinement</h3>
              <span className="text-xs font-mono text-muted-foreground">Source: libkyro/src/governance/auth.rs (`validate_path_confinement`)</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            All file operations (<code className="text-foreground">Read</code>, <code className="text-foreground">Write</code>, <code className="text-foreground">Create</code>, <code className="text-foreground">Delete</code>)
            are canonicalized and checked against authorized project directory roots. Path traversal sequences
            (<code className="text-foreground">../</code>), null bytes (<code className="text-foreground">\0</code>),
            unauthorized root paths (<code className="text-foreground">/etc/</code>, <code className="text-foreground">C:\Windows</code>),
            and symlinks that point outside the sandbox boundary are rejected unconditionally.
          </p>
        </div>

        {/* 4. Credentials & Vault Service */}
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
              <Key className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">Credential Storage & Secret Redaction</h3>
              <span className="text-xs font-mono text-muted-foreground">Source: libkyro/src/storage/vault.rs</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Kyro stores API keys (NVIDIA NIM, Telegram bot tokens, GitHub OAuth tokens) inside your host operating system
            credential manager:
          </p>
          <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-muted-foreground">
            <li>• <strong>macOS:</strong> Apple Keychain Services</li>
            <li>• <strong>Linux:</strong> FreeDesktop Secret Service via DBus</li>
            <li>• <strong>Windows:</strong> Windows Credential Manager</li>
            <li>• <strong>Headless Fallback:</strong> Authenticated AES-256-GCM encrypted database file with strict 0600 POSIX permissions.</li>
          </ul>
          <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
            When exporting workspace templates or sharing routine files (<code className="text-foreground">kyro.routine.v1</code>),
            keys matching sensitive patterns (<code className="text-foreground">KEY</code>, <code className="text-foreground">TOKEN</code>, <code className="text-foreground">SECRET</code>, <code className="text-foreground">PASS</code>)
            are automatically replaced with <code className="text-emerald-400">&lt;REDACTED_ON_EXPORT&gt;</code>.
          </p>
        </div>

        {/* 5. Browser Navigation Security */}
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
              <Globe className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">Browser Automation Safety</h3>
              <span className="text-xs font-mono text-muted-foreground">Source: libkyro/src/browser/safety.rs</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            The browser automation worker restricts web sessions to an explicit origin scope. Navigations to
            disallowed top-level domains, private local addresses (unless permitted for development), or blocked
            domains (banking and financial institutions like PayPal, Chase) are halted immediately, triggering an
            interactive human takeover request.
          </p>
        </div>
      </section>

      {/* Security Reporting */}
      <section className="mt-16 rounded-2xl border border-border bg-surface p-8 sm:p-10">
        <h2 className="text-xl font-bold tracking-tight text-foreground">
          Vulnerability Reporting & Responsible Disclosure
        </h2>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          If you discover a security vulnerability or bypass in Kyro's authorization engine, please do not open a public
          issue. Send a private report to:
        </p>
        <div className="mt-4 flex items-center gap-3">
          <a
            href={`mailto:${siteConfig.author.email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-xs font-semibold text-black hover:bg-emerald-400 transition-colors"
          >
            <span>Email {siteConfig.author.email}</span>
          </a>
          <Link
            href={`${siteConfig.repoUrl}/blob/master/SECURITY.md`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>View SECURITY.md on GitHub</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
