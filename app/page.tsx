import Link from "next/link";
import Image from "next/image";
import {
  Download,
  Shield,
  Terminal,
  Cpu,
  Layers,
  CheckCircle2,
  Lock,
  Eye,
  Workflow,
  ArrowRight,
  Database,
  Key,
  FolderSync,
  FileText,
  ScanEye,
  GitBranch,
  Bot,
  ExternalLink,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { ScreenshotGallery } from "@/components/ScreenshotGallery";
import { CodeBlock } from "@/components/CodeBlock";
import { GithubIcon } from "@/components/BrandIcons";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20 pb-20 sm:gap-28 sm:pb-28">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 md:pt-20 lg:pt-24">
        {/* Subtle background glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[650px] rounded-full bg-emerald-500/10 blur-[130px]"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Version & License pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-medium text-emerald-400 backdrop-blur-md mb-6">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Kyro v{siteConfig.currentVersion} Desktop Client</span>
              <span className="text-emerald-500/40">•</span>
              <span className="text-foreground/80">MIT Open Source</span>
            </div>

            {/* Main Headline */}
            <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]">
              The Local-First Autonomous{" "}
              <span className="text-emerald-400 drop-shadow-sm">Desktop AI Agent</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              Kyro runs directly on your computer with a multi-threaded Rust native core, Tauri v2, and React 19.
              Bridging natural language reasoning with real computer interaction, browser automation, developer workflows,
              and Model Context Protocol (MCP) integrations—backed by zero-trust local governance.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
              <Link
                href="/download"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-black hover:bg-emerald-400 transition-all shadow-md shadow-emerald-500/20 active:scale-[0.98]"
              >
                <Download className="h-4 w-4" />
                <span>Download for Free</span>
              </Link>

              <Link
                href="/features"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-3.5 text-sm font-medium text-foreground hover:bg-surface-hover hover:border-border-hover transition-all active:scale-[0.98]"
              >
                <span>Explore Features</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </Link>

              <Link
                href={siteConfig.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-3.5 text-sm font-medium text-foreground hover:bg-surface-hover transition-all"
                aria-label="View Kyro on GitHub"
              >
                <GithubIcon className="h-4 w-4" />
                <span className="hidden sm:inline">GitHub</span>
              </Link>
            </div>

            {/* Operating System badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 font-medium text-emerald-400">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                Linux (.deb, .AppImage) — Available Now
              </span>
              <span className="text-border">•</span>
              <span className="inline-flex items-center gap-1.5 text-muted-foreground/80">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                macOS (Coming Soon)
              </span>
              <span className="text-border">•</span>
              <span className="inline-flex items-center gap-1.5 text-muted-foreground/80">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                Windows (Coming Soon)
              </span>
            </div>

            {/* Authentic Hero Visual */}
            <div className="mt-12 w-full max-w-6xl rounded-2xl border border-border/80 bg-card p-2 sm:p-3 shadow-2xl transition-all">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-border/60 bg-black">
                <Image
                  src="/assets/screenshot_1.png"
                  alt="Kyro Everyday Mode Application Interface with Dual Experience Selector and Live Execution Timeline"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-lg bg-black/80 px-4 py-2 backdrop-blur-md border border-border/60 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="text-white font-medium">Verified Kyro Desktop Client Interface</span>
                    <span className="hidden sm:inline text-gray-400">— Everyday Mode & Step Timeline</span>
                  </div>
                  <Link
                    href="/features"
                    className="inline-flex items-center gap-1 text-emerald-400 hover:underline font-medium"
                  >
                    <span>View all modules</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Architecture Context */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500">
                Local-First Architecture
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                What local-first means in practical terms
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Kyro runs locally without cloud intermediaries. Your conversation history, memories, file organizer
                logs, and task traces remain on your machine in local SQLite storage.
              </p>
              <div className="mt-5">
                <Link
                  href="/security"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-500 hover:text-emerald-400 transition-colors"
                >
                  <span>Read our Security & Governance architecture</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-surface p-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 mb-3">
                  <Database className="h-4 w-4" />
                </div>
                <h3 className="font-semibold text-sm text-foreground">SQLite in WAL Mode</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                  All task states, agent runs, timeline steps, and chat histories are committed directly to SQLite with
                  Write-Ahead Logging on your SSD. Zero cloud databases or external telemetry.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface p-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 mb-3">
                  <Key className="h-4 w-4" />
                </div>
                <h3 className="font-semibold text-sm text-foreground">OS Keyring Credential Vault</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                  API tokens and OAuth secrets are encrypted inside your OS Keyring (macOS Keychain, Linux Secret Service,
                  Windows Credential Manager) with AES-256-GCM authenticated fallback.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface p-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 mb-3">
                  <Shield className="h-4 w-4" />
                </div>
                <h3 className="font-semibold text-sm text-foreground">Centralized Rust Authorization</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                  Shell execution is lexed into exact argv tokens. Chained commands, pipes, and unauthorized absolute paths
                  are stopped cold at the Rust backend boundary before execution.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface p-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 mb-3">
                  <Cpu className="h-4 w-4" />
                </div>
                <h3 className="font-semibold text-sm text-foreground">Transparent Model Routing</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                  Reasoning queries are dispatched to NVIDIA NIM or your configured OpenAI-compatible endpoint. Kyro never
                  routes your private requests through proprietary proxy relay servers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Capability Showcase: Everyday Mode vs Dev Workbench */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500">
            Tailored Experiences
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Dual Experience Modes in a Single Native App
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground">
            Switch effortlessly between an intuitive everyday assistant and an advanced engineering workbench.
            Every feature is verified in the Kyro source tree and backed by automated test suites.
          </p>
        </div>

        {/* Everyday Mode Feature Card */}
        <div className="mt-12 rounded-2xl border border-border bg-card overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-6 sm:p-10">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 border border-emerald-500/20 mb-4">
                <FolderSync className="h-3.5 w-3.5" />
                <span>Everyday Mode</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-foreground">
                Natural Desktop Workflows for Knowledge Workers
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Automate repetitive desktop tasks without touching a terminal. Kyro provides safe file organization,
                confidential document reading, and visual screen explanations through natural conversation.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-surface border border-border text-emerald-500 mt-0.5">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Safe Reversible File Organizer</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Categorizes by extension, isolates duplicates with SHA-256 content hashes, and stores a complete rollback manifest.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-surface border border-border text-emerald-500 mt-0.5">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Local Document Assistant & Diffing</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Pure Rust PDF stream decompression (FlateDecode) and text extraction (Tj/TJ) for zero-cloud document analysis.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-surface border border-border text-emerald-500 mt-0.5">
                    <ScanEye className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Multimodal Screen Explainer</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Extracts visible facts vs inferred causes from any active window or snipped region with 1-click grounded action triggers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/use-cases#file-organization-cleanup"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-500 hover:text-emerald-400 transition-colors"
                >
                  <span>Explore everyday use cases</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-border bg-black shadow-lg">
              <Image
                src="/assets/screenshot_3.png"
                alt="Kyro Safe Reversible File Organizer Interface"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <span className="absolute bottom-3 left-3 rounded-md bg-black/80 px-2.5 py-1 text-[11px] font-medium text-emerald-400 border border-emerald-500/20 backdrop-blur-md">
                Verified File Organizer Modal
              </span>
            </div>
          </div>
        </div>

        {/* Developer Workbench Feature Card */}
        <div className="mt-8 rounded-2xl border border-border bg-card overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-6 sm:p-10">
            <div className="order-2 lg:order-1 relative aspect-[16/10] rounded-xl overflow-hidden border border-border bg-black shadow-lg">
              <Image
                src="/assets/screenshot_2.png"
                alt="Kyro Developer Workbench with Managed Dev Servers and Port Status"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <span className="absolute bottom-3 left-3 rounded-md bg-black/80 px-2.5 py-1 text-[11px] font-medium text-emerald-400 border border-emerald-500/20 backdrop-blur-md">
                Verified Developer Workbench
              </span>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 border border-emerald-500/20 mb-4">
                <Terminal className="h-3.5 w-3.5" />
                <span>Developer Workbench</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-foreground">
                Autonomous Diagnostics & Multi-Agent Engineering
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Supercharge your software engineering with local project discovery, background development servers,
                instant git code checkpoints, and parallel coding teammates running in isolated worktrees.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-surface border border-border text-emerald-500 mt-0.5">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Projects & Dev Server Manager</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Scans local workspaces, boots Next.js/Vite/Rust dev servers, tracks active ports, and streams live stderr/stdout logs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-surface border border-border text-emerald-500 mt-0.5">
                    <GitBranch className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Code Checkpoints & Safe Rollback</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Captures unified git diffs before modifying code. Protects uncommitted human edits with conflict-checked restoration.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-surface border border-border text-emerald-500 mt-0.5">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Multi-Agent Git Worktrees</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Specialist teammates (Apex, Forge, Scout) execute in isolated Git worktrees with human-reviewed reconciliation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/use-cases#web-ui-visual-regression"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-500 hover:text-emerald-400 transition-colors"
                >
                  <span>Explore developer workflows</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500">
            Execution Flow
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How Kyro Executes Autonomous Tasks
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            A transparent four-step cycle that prioritizes user sovereignty, verification, and deterministic recovery.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-xl border border-border bg-card p-6 relative">
            <span className="font-mono text-2xl font-bold text-emerald-500/30">01</span>
            <h3 className="mt-2 text-base font-semibold text-foreground">Prompt & Intent Ingestion</h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              Describe your objective via chat, floating HUD, hotkey (<code className="text-emerald-400">Ctrl+K</code>), or Telegram. Kyro pulls scoped memory and active window context.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 relative">
            <span className="font-mono text-2xl font-bold text-emerald-500/30">02</span>
            <h3 className="mt-2 text-base font-semibold text-foreground">Central Policy Gate</h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              The Rust AuthorizationEngine evaluates required tools. Shell commands are lexed into exact argv tokens; container isolation is probed if SandboxOnly is configured.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 relative">
            <span className="font-mono text-2xl font-bold text-emerald-500/30">03</span>
            <h3 className="mt-2 text-base font-semibold text-foreground">Grounded Tool Execution</h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              Actions execute via Set-of-Marks visual coordinates, WebDriver BiDi browser sessions, or child process groups. Sensitive checkpoints halt for human takeover.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 relative">
            <span className="font-mono text-2xl font-bold text-emerald-500/30">04</span>
            <h3 className="mt-2 text-base font-semibold text-foreground">Verification & Control</h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              Real pixel diffs are computed on the step timeline. Code changes remain attached to rollback checkpoints, ensuring you retain total authority over your workstation.
            </p>
          </div>
        </div>
      </section>

      {/* Screenshot Showcase Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500">
            Genuine Product Gallery
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Inspect the Real Kyro Desktop Client
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            No mockups or concept art. Every image below is a genuine screenshot captured directly from the running Kyro application.
          </p>
        </div>

        <ScreenshotGallery />
      </section>

      {/* Security & Control Preview */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-surface p-8 sm:p-12">
          <div className="max-w-3xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 mb-4">
              <Shield className="h-5 w-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Zero-Trust Security & Fail-Closed Container Isolation
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Autonomous computer control demands rigorous boundaries. Kyro does not treat security as an afterthought:
            </p>
            <ul className="mt-4 space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>
                  <strong>Fail-closed container sandbox:</strong> If Docker or Podman is unavailable under a <code className="text-foreground">SandboxOnly</code> policy, Kyro refuses execution rather than silently falling back to the host.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>
                  <strong>Workspace path confinement:</strong> Restricts operations to verified folder boundaries, rejecting directory traversal (<code className="text-foreground">..</code>) and symlink escapes.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>
                  <strong>Atomic CAS approval queue:</strong> Time-bounded human approvals are bound to exact tool names and JSON argument hashes to prevent replay or substitution attacks.
                </span>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/security"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2.5 text-xs sm:text-sm font-semibold text-black hover:bg-emerald-400 transition-colors shadow-sm"
              >
                <span>Read Full Security Specification</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/docs/security"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-xs sm:text-sm font-medium text-foreground hover:bg-surface-hover transition-colors"
              >
                <span>Security Boundaries Documentation</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start for Developers */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500">
              Developer Quick Start
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Built with Rust & Tauri v2. Fully inspectable.
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Kyro includes a unified <code className="text-foreground">Makefile</code> covering development, formatting,
              Clippy linting, and automated test execution across 230+ backend tests and 60+ frontend tests.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/docs/installation"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-500 hover:text-emerald-400 transition-colors"
              >
                <span>View complete build prerequisites</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <span className="text-border">•</span>
              <Link
                href="/contributing"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                <span>Contribution Guide</span>
              </Link>
            </div>
          </div>

          <div>
            <CodeBlock
              filename="Terminal"
              language="bash"
              code={`# 1. Clone the repository
git clone https://github.com/eshanized/Kyro.git
cd Kyro

# 2. Install dependencies & run complete verification
npm install
make verify

# 3. Launch the desktop application in dev mode
make dev`}
            />
          </div>
        </div>
      </section>

      {/* Open Source & Community */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-card p-8 sm:p-12 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 mb-4">
            <GithubIcon className="h-6 w-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            100% Free & Open Source on GitHub
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground leading-relaxed">
            Kyro is developed openly under the MIT License by Eshan Roy and community contributors.
            Inspect the code, report issues, propose enhancements, or participate in architectural discussions.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={siteConfig.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-surface border border-border px-5 py-3 text-sm font-semibold text-foreground hover:bg-surface-hover transition-colors shadow-sm"
            >
              <GithubIcon className="h-4 w-4" />
              <span>Star on GitHub</span>
            </Link>
            <Link
              href={siteConfig.discussionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-surface border border-border px-5 py-3 text-sm font-medium text-foreground hover:bg-surface-hover transition-colors"
            >
              <span>GitHub Discussions</span>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
            </Link>
            <Link
              href="/contributing"
              className="inline-flex items-center gap-2 rounded-xl bg-surface border border-border px-5 py-3 text-sm font-medium text-foreground hover:bg-surface-hover transition-colors"
            >
              <span>How to Contribute</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final Conversion Banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-emerald-950/20 to-card p-8 sm:p-14 text-center">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(0,221,123,0.12),transparent_70%)]"
            aria-hidden="true"
          />
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Ready to experience local-first desktop intelligence?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base text-muted-foreground">
            Download the desktop client for your platform or inspect the source repository.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/download"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-black hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
            >
              <Download className="h-4 w-4" />
              <span>Get Kyro v{siteConfig.currentVersion}</span>
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-3.5 text-sm font-medium text-foreground hover:bg-surface-hover transition-colors"
            >
              <span>Read Documentation</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
