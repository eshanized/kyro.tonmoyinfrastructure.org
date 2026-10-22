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
  Sparkles,
  Building2,
  User,
  Zap,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { getContributors } from "@/lib/contributors";
import { getLatestRelease } from "@/lib/releases";
import { ScreenshotGallery } from "@/components/ScreenshotGallery";
import { CodeBlock } from "@/components/CodeBlock";
import { GithubIcon } from "@/components/BrandIcons";
import { HeroContributors } from "@/components/HeroContributors";
import { HeroDownloadButton } from "@/components/HeroDownloadButton";
import { LatestReleaseVersion } from "@/components/LatestReleaseVersion";

export default async function HomePage() {
  const [contributors, release] = await Promise.all([
    getContributors(),
    getLatestRelease(),
  ]);
  return (
    <div className="flex flex-col gap-20 pb-20 sm:gap-28 sm:pb-28">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 md:pt-20 lg:pt-24 bg-dot-pattern">
        {/* Ambient atmospheric glows */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 -translate-y-1/2 h-[350px] sm:h-[550px] w-[450px] sm:w-[750px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,221,123,0.15)_0%,rgba(0,221,123,0.05)_50%,transparent_70%)] blur-2xl sm:blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-10 top-40 -z-10 h-[200px] sm:h-[300px] w-[250px] sm:w-[350px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.12)_0%,transparent_70%)] blur-xl sm:blur-2xl"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Origin & Ownership Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-gradient-to-r from-emerald-500/15 via-surface to-emerald-500/15 px-4 py-1.5 text-xs font-medium text-emerald-400 backdrop-blur-md mb-6 shadow-xs hover:border-emerald-500/50 transition-all flex-wrap justify-center">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-muted-foreground">Product from</span>
              <a
                href={siteConfig.organization.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-emerald-300 hover:text-emerald-200 underline underline-offset-2 decoration-emerald-500/40 inline-flex items-center gap-1 transition-colors"
              >
                Tonmoy Infrastructure
                <ExternalLink className="h-3 w-3" />
              </a>
              <span className="text-emerald-500/40">•</span>
              <span className="text-muted-foreground">Owner:</span>
              <a
                href={siteConfig.owner.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-foreground hover:text-emerald-400 underline underline-offset-2 decoration-border transition-colors"
              >
                Eshan Roy
              </a>
              <span className="text-emerald-500/40 hidden sm:inline">•</span>
              <span className="text-emerald-400 font-mono hidden sm:inline"><LatestReleaseVersion initialTagName={release.tagName} /> MIT</span>
            </div>

            {/* Main Headline */}
            <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08]">
              The Local-First Autonomous{" "}
              <span className="gradient-text-emerald drop-shadow-sm">
                Desktop AI Agent
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              Kyro is an open-source product from <strong>Tonmoy Infrastructure</strong>, owned and architected by <strong>Eshan Roy</strong>.
              Engineered with a multi-threaded Rust native core, Tauri v2, and React 19 to deliver zero-latency screen understanding, browser automation, developer workflows, and Model Context Protocol (MCP) integrations with fail-closed local security.
            </p>

            {/* Capability Feature Badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 max-w-3xl">
              {[
                "Zero Cloud Telemetry",
                "100% Local SQLite WAL",
                "Rust Native Core",
                "Tauri v2 Native",
                "OS Keyring Vault",
                "Set-of-Marks Computer Use",
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-surface/80 px-2.5 py-1 text-xs text-muted-foreground font-medium backdrop-blur-xs"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {badge}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
              <HeroDownloadButton initialDownloads={release.totalDownloads} />

              <Link
                href="/features/"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-surface-hover hover:border-emerald-500/30 transition-all active:scale-[0.98]"
              >
                <span>Explore Features</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </Link>

              <Link
                href={siteConfig.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-3.5 text-sm font-medium text-foreground hover:bg-surface-hover hover:border-border-hover transition-all"
                aria-label="View Kyro on GitHub"
              >
                <GithubIcon className="h-4 w-4" />
                <span className="hidden sm:inline">GitHub</span>
              </Link>
            </div>

            {/* GitHub Contributors */}
            <div className="mt-6 flex justify-center">
              <HeroContributors initialContributors={contributors} />
            </div>

            {/* Operating System badges */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-400">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
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

            {/* Simulated Window Frame with Screenshot */}
            <div className="mt-12 w-full max-w-6xl rounded-2xl border border-border/80 bg-gradient-to-b from-card via-surface to-card p-2 sm:p-3 shadow-2xl shadow-emerald-500/10 transition-all">
              {/* Window Title Bar */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-border/60 bg-surface/90 rounded-t-xl text-xs mb-2">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-green-500/80 inline-block" />
                  <span className="ml-2 font-mono text-[11px] text-muted-foreground hidden sm:inline">
                    kyro-desktop — everyday_workspace
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-medium text-emerald-400 border border-emerald-500/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Tonmoy Infrastructure • Fail-Closed Active
                  </span>
                </div>
              </div>

              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-border/60 bg-black">
                <picture className="block h-full w-full">
                  <source
                    media="(max-width: 640px)"
                    type="image/webp"
                    srcSet="/assets/screenshot_1-mobile.webp"
                  />
                  <source
                    type="image/webp"
                    srcSet="/assets/screenshot_1.webp"
                  />
                  <img
                    src="/assets/screenshot_1.png"
                    alt="Kyro Everyday Mode Application Interface with Dual Experience Selector and Live Execution Timeline"
                    fetchPriority="high"
                    loading="eager"
                    decoding="async"
                    width={1886}
                    height={1016}
                    className="h-full w-full object-cover object-top"
                  />
                </picture>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-lg bg-black/85 px-4 py-2.5 backdrop-blur-md border border-border/60 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    <span className="text-white font-medium">Verified Kyro Desktop Client Interface</span>
                    <span className="hidden sm:inline text-gray-400">— Everyday Mode & Step Timeline</span>
                  </div>
                  <Link
                    href="/features/"
                    className="inline-flex items-center gap-1 text-emerald-400 hover:underline font-semibold"
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

      {/* Metrics & Architecture Stats Strip */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-xl border border-border bg-card p-5 text-center hover:border-emerald-500/30 transition-colors">
            <span className="text-3xl font-extrabold text-foreground font-display">100%</span>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">Local Storage</p>
            <p className="mt-1 text-[11px] text-muted-foreground">Zero cloud databases; SQLite WAL on SSD</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5 text-center hover:border-emerald-500/30 transition-colors">
            <span className="text-3xl font-extrabold text-foreground font-display">230+</span>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">Backend Tests</p>
            <p className="mt-1 text-[11px] text-muted-foreground">Rust native suite with strict Clippy gates</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5 text-center hover:border-emerald-500/30 transition-colors">
            <span className="text-3xl font-extrabold text-foreground font-display">60+</span>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">Frontend Specs</p>
            <p className="mt-1 text-[11px] text-muted-foreground">React 19 & Vitest automated verifications</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5 text-center hover:border-emerald-500/30 transition-colors">
            <span className="text-3xl font-extrabold text-foreground font-display">&lt; 10ms</span>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">Native Capture</p>
            <p className="mt-1 text-[11px] text-muted-foreground">High-performance xcap screen buffer</p>
          </div>
        </div>
      </section>

      {/* Product Origin & Leadership Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-card via-surface to-card p-8 sm:p-12 shadow-xl">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400 mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Product Origin & Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              A Product from Tonmoy Infrastructure, Owned by Eshan Roy
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Kyro is engineered with a strict local-first philosophy to give developers and knowledge workers complete digital sovereignty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {/* Tonmoy Infrastructure Card */}
            <div className="rounded-2xl border border-emerald-500/25 bg-surface/90 p-6 sm:p-8 flex flex-col justify-between hover:border-emerald-500/40 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-mono font-medium text-emerald-400 border border-emerald-500/20">
                    Parent Organization
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground">Tonmoy Infrastructure</h3>
                <p className="text-xs text-emerald-400 font-mono mt-0.5">https://tonmoyinfrastructure.org/</p>

                <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  The infrastructure engineering and research organization advancing sovereign computing, resilient systems, and privacy-preserving desktop AI runtimes.
                </p>

                <ul className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span>Backing autonomous local desktop intelligence</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span>Zero cloud telemetry, fail-closed security</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span>Permissive MIT open source licensing</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
                <a
                  href={siteConfig.organization.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 px-3.5 py-2 text-xs font-semibold text-black hover:bg-emerald-400 transition-colors"
                >
                  <span>Visit Website</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <span className="text-[11px] text-muted-foreground font-mono">tonmoyinfrastructure.org</span>
              </div>
            </div>

            {/* Eshan Roy Card */}
            <div className="rounded-2xl border border-border bg-surface/90 p-6 sm:p-8 flex flex-col justify-between hover:border-emerald-500/30 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-elevated border border-border text-foreground">
                    <User className="h-6 w-6 text-emerald-400" />
                  </div>
                  <span className="rounded-full bg-surface-elevated px-2.5 py-1 text-[11px] font-mono font-medium text-foreground border border-border">
                    Owner & Lead Architect
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground">Eshan Roy</h3>
                <p className="text-xs text-muted-foreground font-mono mt-0.5">m.eshanized@gmail.com</p>

                <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Product owner and lead systems developer of Kyro. Driving the implementation of its multi-threaded Rust native core, centralized authorization engine, and visual computer use.
                </p>

                <ul className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span>Architectural leadership & project governance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span>Rust native engine & Tauri v2 runtime design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span>Open development & developer community lead</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
                <a
                  href={siteConfig.owner.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3.5 py-2 text-xs font-semibold text-foreground hover:bg-surface-hover hover:border-emerald-500/30 transition-colors"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  <span>GitHub @eshanized</span>
                </a>
                <Link
                  href="/about/"
                  className="text-xs font-semibold text-emerald-400 hover:underline"
                >
                  Read full story →
                </Link>
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
                  href="/security/"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span>Read our Security & Governance architecture</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-surface p-5 hover:border-emerald-500/30 transition-colors">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 mb-3">
                  <Database className="h-4 w-4" />
                </div>
                <h3 className="font-semibold text-sm text-foreground">SQLite in WAL Mode</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                  All task states, agent runs, timeline steps, and chat histories are committed directly to SQLite with
                  Write-Ahead Logging on your SSD. Zero cloud databases or external telemetry.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface p-5 hover:border-emerald-500/30 transition-colors">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 mb-3">
                  <Key className="h-4 w-4" />
                </div>
                <h3 className="font-semibold text-sm text-foreground">OS Keyring Credential Vault</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                  API tokens and OAuth secrets are encrypted inside your OS Keyring (macOS Keychain, Linux Secret Service,
                  Windows Credential Manager) with AES-256-GCM authenticated fallback.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface p-5 hover:border-emerald-500/30 transition-colors">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 mb-3">
                  <Shield className="h-4 w-4" />
                </div>
                <h3 className="font-semibold text-sm text-foreground">Centralized Rust Authorization</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                  Shell execution is lexed into exact argv tokens. Chained commands, pipes, and unauthorized absolute paths
                  are stopped cold at the Rust backend boundary before execution.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface p-5 hover:border-emerald-500/30 transition-colors">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 mb-3">
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
        <div className="mt-12 rounded-2xl border border-border bg-card overflow-hidden hover:border-emerald-500/30 transition-colors">
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
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-surface border border-border text-emerald-400 mt-0.5">
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
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-surface border border-border text-emerald-400 mt-0.5">
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
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-surface border border-border text-emerald-400 mt-0.5">
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
                  href="/use-cases/#file-organization-cleanup"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span>Explore everyday use cases</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-border bg-black shadow-lg">
              <Image
                src="/assets/screenshot_3.webp"
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
        <div className="mt-8 rounded-2xl border border-border bg-card overflow-hidden hover:border-emerald-500/30 transition-colors">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-6 sm:p-10">
            <div className="order-2 lg:order-1 relative aspect-[16/10] rounded-xl overflow-hidden border border-border bg-black shadow-lg">
              <Image
                src="/assets/screenshot_2.webp"
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
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-surface border border-border text-emerald-400 mt-0.5">
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
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-surface border border-border text-emerald-400 mt-0.5">
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
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-surface border border-border text-emerald-400 mt-0.5">
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
                  href="/use-cases/#web-ui-visual-regression"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
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
          <div className="rounded-xl border border-border bg-card p-6 relative hover:border-emerald-500/30 transition-colors">
            <span className="font-mono text-2xl font-bold text-emerald-400/40">01</span>
            <h3 className="mt-2 text-base font-semibold text-foreground">Prompt & Intent Ingestion</h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              Describe your objective via chat, floating HUD, hotkey (<code className="text-emerald-400">Ctrl+K</code>), or Telegram. Kyro pulls scoped memory and active window context.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 relative hover:border-emerald-500/30 transition-colors">
            <span className="font-mono text-2xl font-bold text-emerald-400/40">02</span>
            <h3 className="mt-2 text-base font-semibold text-foreground">Central Policy Gate</h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              The Rust AuthorizationEngine evaluates required tools. Shell commands are lexed into exact argv tokens; container isolation is probed if SandboxOnly is configured.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 relative hover:border-emerald-500/30 transition-colors">
            <span className="font-mono text-2xl font-bold text-emerald-400/40">03</span>
            <h3 className="mt-2 text-base font-semibold text-foreground">Grounded Tool Execution</h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              Actions execute via Set-of-Marks visual coordinates, WebDriver BiDi browser sessions, or child process groups. Sensitive checkpoints halt for human takeover.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 relative hover:border-emerald-500/30 transition-colors">
            <span className="font-mono text-2xl font-bold text-emerald-400/40">04</span>
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
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 mb-4">
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
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>
                  <strong>Fail-closed container sandbox:</strong> If Docker or Podman is unavailable under a <code className="text-foreground">SandboxOnly</code> policy, Kyro refuses execution rather than silently falling back to the host.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>
                  <strong>Workspace path confinement:</strong> Restricts operations to verified folder boundaries, rejecting directory traversal (<code className="text-foreground">..</code>) and symlink escapes.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>
                  <strong>Atomic CAS approval queue:</strong> Time-bounded human approvals are bound to exact tool names and JSON argument hashes to prevent replay or substitution attacks.
                </span>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/security/"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2.5 text-xs sm:text-sm font-semibold text-black hover:bg-emerald-400 transition-colors shadow-sm"
              >
                <span>Read Full Security Specification</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/docs/security/"
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
                href="/docs/installation/"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>View complete build prerequisites</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <span className="text-border">•</span>
              <Link
                href="/contributing/"
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
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 mb-4">
            <GithubIcon className="h-6 w-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            100% Free & Open Source on GitHub
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground leading-relaxed">
            Kyro is an open-source product from <strong>Tonmoy Infrastructure</strong>, owned and architected by <strong>Eshan Roy</strong> with community contributors under the MIT License.
            Inspect the code, report issues, propose enhancements, or participate in architectural discussions.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={siteConfig.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-surface border border-border px-5 py-3 text-sm font-semibold text-foreground hover:bg-surface-hover hover:border-emerald-500/30 transition-colors shadow-sm"
            >
              <GithubIcon className="h-4 w-4" />
              <span>Star on GitHub</span>
            </Link>
            <Link
              href={siteConfig.discussionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-medium text-foreground hover:bg-surface-hover transition-colors"
            >
              <span>GitHub Discussions</span>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
            </Link>
            <a
              href={siteConfig.organization.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/5 px-5 py-3 text-sm font-semibold text-emerald-400 hover:bg-emerald-500/10 transition-colors"
            >
              <Building2 className="h-4 w-4" />
              <span>Tonmoy Infrastructure</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Final Conversion Banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-emerald-950/25 via-surface to-card p-8 sm:p-14 text-center">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(0,221,123,0.15),transparent_70%)]"
            aria-hidden="true"
          />
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Ready to experience local-first desktop intelligence?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base text-muted-foreground">
            A product from Tonmoy Infrastructure, owned by Eshan Roy. Download the desktop client for your platform or inspect the source repository.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <HeroDownloadButton
              initialDownloads={release.totalDownloads}
              label="Get Kyro"
              showVersion
              initialTagName={release.tagName}
              className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400 px-6 py-3.5 text-sm font-bold text-black hover:brightness-110 transition-all shadow-lg shadow-emerald-500/20 group"
            />
            <Link
              href="/docs/"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-3.5 text-sm font-medium text-foreground hover:bg-surface-hover transition-colors"
            >
              <span>Read Documentation</span>
            </Link>
            <a
              href={siteConfig.organization.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-3.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <span>Tonmoy Infrastructure ↗</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
