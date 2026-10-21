import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site-config";
import {
  Shield,
  Terminal,
  Heart,
  Sparkles,
  ExternalLink,
  Mail,
  Code,
  Cpu,
  Database,
  CheckCircle2,
  Lock,
  Layers,
  Globe,
  Server,
  Zap,
  ArrowRight,
  GitBranch,
  KeyRound,
  FileCode2,
  Activity,
  Check,
} from "lucide-react";
import { GithubIcon, TonmoyLogo, TonmoyIcon } from "@/components/BrandIcons";
import { OwnerAvatar } from "@/components/OwnerAvatar";

export const metadata: Metadata = {
  title: "About Kyro — Product of Tonmoy Infrastructure, Owned by Eshan Roy",
  description:
    "The mission, origins, ownership, and architectural philosophy of Kyro, an open-source local-first autonomous desktop AI agent from Tonmoy Infrastructure, owned and architected by Eshan Roy.",
  openGraph: {
    title: "About Kyro — Product of Tonmoy Infrastructure, Owned by Eshan Roy",
    description:
      "Explore the mission, architectural tenets, ownership, and parent organization behind Kyro, the sovereign local-first autonomous AI agent.",
    url: "https://kyro.tonmoyinfrastructure.org/about/",
  },
};

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Ambient background lighting */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 -translate-y-1/3 h-[600px] w-[800px] rounded-full bg-emerald-500/10 blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-96 -z-10 h-[450px] w-[450px] rounded-full bg-[#E5484D]/8 blur-[160px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <Breadcrumbs items={[{ label: "About" }]} />

        {/* Hero Section */}
        <div className="mt-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-gradient-to-r from-emerald-500/15 via-surface to-emerald-500/15 px-3.5 py-1 text-xs font-semibold text-emerald-400 mb-5 shadow-xs">
            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <Sparkles className="h-3.5 w-3.5" />
            <span>Product Origins &amp; Sovereign Architecture</span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.15]">
            Engineering Sovereign Intelligence for the{" "}
            <span className="gradient-text-emerald">Local Machine</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Kyro is an open-source, local-first autonomous desktop AI agent developed as a flagship project from{" "}
            <a
              href={siteConfig.organization.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 font-semibold hover:underline inline-flex items-center gap-1 transition-colors"
            >
              Tonmoy Infrastructure
              <ExternalLink className="h-3.5 w-3.5" />
            </a>{" "}
            and is owned and architected by systems engineer{" "}
            <a
              href={siteConfig.owner.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground font-semibold hover:text-emerald-400 hover:underline transition-colors"
            >
              Eshan Roy
            </a>
            . Built with a native Rust core, Tauri v2 shell, and zero-trust permission governance, Kyro operates under a strict principle:{" "}
            <em className="text-foreground not-italic font-medium">your hardware, your data, your sovereign control.</em>
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="rounded-xl border border-border/70 bg-surface/80 p-3.5 backdrop-blur-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-400">
                <Shield className="h-4 w-4" />
                <span>100% Local</span>
              </div>
              <p className="mt-1 text-[11px] text-muted-foreground">SQLite WAL &amp; zero telemetry</p>
            </div>
            <div className="rounded-xl border border-border/70 bg-surface/80 p-3.5 backdrop-blur-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-400">
                <Cpu className="h-4 w-4" />
                <span>Native Rust</span>
              </div>
              <p className="mt-1 text-[11px] text-muted-foreground">Multi-threaded core engine</p>
            </div>
            <div className="rounded-xl border border-border/70 bg-surface/80 p-3.5 backdrop-blur-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-400">
                <Lock className="h-4 w-4" />
                <span>Zero-Trust</span>
              </div>
              <p className="mt-1 text-[11px] text-muted-foreground">Hardware OS keyring vault</p>
            </div>
            <div className="rounded-xl border border-border/70 bg-surface/80 p-3.5 backdrop-blur-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-400">
                <Code className="h-4 w-4" />
                <span>MIT License</span>
              </div>
              <p className="mt-1 text-[11px] text-muted-foreground">Free &amp; inspectable code</p>
            </div>
          </div>
        </div>

        {/* Primary Spotlight Cards: Organization & Owner */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* 1. Tonmoy Infrastructure Card */}
          <div className="relative group overflow-hidden rounded-2xl border border-rose-500/25 bg-gradient-to-b from-rose-950/20 via-surface to-card p-6 sm:p-8 shadow-xl transition-all hover:border-rose-500/50 hover:shadow-rose-950/20 flex flex-col justify-between">
            {/* Top ambient badge & logo */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                {/* Official Tonmoy Infrastructure Logo & Brand Mark */}
                <a
                  href={siteConfig.organization.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group/brand transition-transform hover:scale-[1.02]"
                  aria-label="Visit Tonmoy Infrastructure and Vision"
                >
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-[#E5484D] shadow-md shadow-rose-900/40">
                    <span className="font-display text-2xl font-black text-white">T</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display text-base font-bold tracking-tight text-foreground group-hover/brand:text-rose-400 transition-colors">
                      Tonmoy Infrastructure
                    </span>
                    <span className="text-[11px] font-mono text-muted-foreground tracking-wide">
                      and Vision · TIV
                    </span>
                  </div>
                </a>

                <span className="rounded-full bg-rose-500/10 px-3 py-1 text-[11px] font-mono font-semibold text-rose-400 border border-rose-500/25">
                  Parent Organization
                </span>
              </div>

              {/* Tonmoy Logo Vector Banner Display */}
              <div className="rounded-xl border border-rose-500/20 bg-black/40 p-4 mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src="/assets/tonmoy-logo.svg"
                    alt="Tonmoy Infrastructure Official Logo"
                    width={100}
                    height={32}
                    className="h-7 w-auto drop-shadow-sm"
                    unoptimized
                  />
                  <div className="border-l border-border pl-3">
                    <p className="text-xs font-semibold text-foreground">Official Brand Mark</p>
                    <p className="text-[10px] text-muted-foreground font-mono">Coral Red · #E5484D</p>
                  </div>
                </div>
                <span className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-wider text-rose-400/90 bg-rose-950/40 px-2 py-0.5 rounded border border-rose-800/40">
                  Verified Lab
                </span>
              </div>

              <h2 className="text-xl font-bold text-foreground tracking-tight">
                Systems, Infrastructure &amp; Sovereign Computing Lab
              </h2>
              <p className="mt-1 text-xs text-rose-400 font-mono flex items-center gap-1.5">
                <Globe className="h-3 w-3" />
                <span>https://tonmoyinfrastructure.org/</span>
              </p>

              <p className="mt-3.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Tonmoy Infrastructure and Vision (TIV) is an independent engineering organization dedicated to building practical, sovereign software platforms, internet infrastructure, networking systems, and local-first developer runtimes. Kyro represents its flagship desktop autonomous agent for high-assurance local computation.
              </p>

              {/* Key Commitments Checklist */}
              <div className="mt-6 space-y-2.5 text-xs text-muted-foreground">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">Sovereign Data Custody:</strong> Zero-telemetry policy ensuring confidential source trees, credentials, and logs never leak to corporate cloud sinks.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">Autonomous Systems Engineering:</strong> Architectural stewardship of verifiable developer runtimes (Kyro, M31A, OpenMail, Runstead).
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">100% Open &amp; Verifiable:</strong> Committed to inspectable open-source software with deterministic security governance.
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-5 border-t border-rose-500/20 flex flex-wrap items-center justify-between gap-3">
              <a
                href={siteConfig.organization.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#E5484D] px-4 py-2 text-xs font-semibold text-white hover:bg-[#d43c41] transition-all shadow-md shadow-rose-950/30"
              >
                <span>Visit tonmoyinfrastructure.org</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://github.com/TIVerse"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-rose-400 transition-colors"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                <span>GitHub @TIVerse</span>
              </a>
            </div>
          </div>

          {/* 2. Eshan Roy (Owner & Lead Architect) Card */}
          <div className="relative group overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-b from-emerald-950/20 via-surface to-card p-6 sm:p-8 shadow-xl transition-all hover:border-emerald-500/50 hover:shadow-emerald-950/20 flex flex-col justify-between">
            <div>
              {/* Owner Header with GitHub Profile Image */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  {/* GitHub Profile Photo with Dynamic Fallback & Active Status Ring */}
                  <div className="relative">
                    <div className="relative h-14 w-14 sm:h-16 sm:w-16 rounded-2xl p-0.5 bg-gradient-to-tr from-emerald-500 to-cyan-400 shadow-md shadow-emerald-950/40">
                      <OwnerAvatar
                        src={siteConfig.owner.avatar}
                        fallbackSrc={siteConfig.owner.localAvatar}
                        alt="Eshan Roy — Owner & Lead Architect of Kyro"
                        size={64}
                        className="h-full w-full rounded-[14px]"
                      />
                    </div>
                    {/* Active pulse dot */}
                    <span
                      className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-surface border-2 border-background"
                      title="Active Maintainer & Creator"
                    >
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl font-bold text-foreground tracking-tight group-hover:text-emerald-400 transition-colors">
                        Eshan Roy
                      </h2>
                    </div>
                    <a
                      href={siteConfig.owner.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-emerald-400 hover:underline inline-flex items-center gap-1"
                    >
                      <GithubIcon className="h-3 w-3" />
                      <span>@eshanized</span>
                    </a>
                  </div>
                </div>

                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-mono font-semibold text-emerald-400 border border-emerald-500/25">
                  Owner &amp; Lead Architect
                </span>
              </div>

              {/* Verified Owner GitHub Pill */}
              <div className="rounded-xl border border-emerald-500/20 bg-black/40 p-3 mb-6 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-muted-foreground font-mono">
                  <Activity className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Creator &amp; Architectural Authority</span>
                </div>
                <span className="text-[11px] font-mono text-foreground/90 font-medium">
                  Rust · Tauri v2 · React 19
                </span>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Systems engineer and software developer who created Kyro. Leading the architectural design and implementation of its multi-threaded Rust native core, Set-of-Marks visual coordinate grounding, centralized zero-trust authorization pipeline, and dual-mode desktop interface.
              </p>

              {/* Owner Technical Stewardship Checklist */}
              <div className="mt-6 space-y-2.5 text-xs text-muted-foreground">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">Rust Native Core Architecture:</strong> Engineered Kyro&apos;s multi-threaded execution runtime, argv shell tokenization, and Set-of-Marks visual grounding.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">Deterministic Security Pipeline:</strong> Designed the centralized permission gate, OS keyring delegation, and fail-closed container sandbox.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">Dual Experience Interface:</strong> Author of the Everyday Mode and Developer Workbench layouts in Tauri v2 and React 19.
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-5 border-t border-border flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <a
                  href={siteConfig.owner.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3.5 py-2 text-xs font-semibold text-foreground hover:bg-surface-hover hover:border-emerald-500/40 transition-colors shadow-xs"
                >
                  <GithubIcon className="h-3.5 w-3.5 text-emerald-400" />
                  <span>GitHub @eshanized</span>
                  <ExternalLink className="h-3 w-3 text-muted-foreground" />
                </a>
                <a
                  href={`mailto:${siteConfig.owner.email}`}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3.5 py-2 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-surface-hover transition-colors"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>Contact</span>
                </a>
              </div>

              <a
                href="https://eshanized.is-a.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-muted-foreground hover:text-emerald-400 transition-colors"
              >
                eshanized.is-a.dev
              </a>
            </div>
          </div>
        </div>

        {/* Narrative Section: Architectural Tenets (Interactive Bento Grid) */}
        <div className="mt-16 sm:mt-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              Core Architectural Tenets
            </h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Why Kyro was constructed from first principles rather than wrapped in conventional cloud scripting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tenet 1 */}
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-7 hover:border-emerald-500/40 transition-all shadow-md group">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:scale-105 transition-transform">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-base group-hover:text-emerald-400 transition-colors">
                    The Model Proposes. The Runtime Decides.
                  </h3>
                  <span className="text-[11px] font-mono text-muted-foreground">Deterministic Execution Boundary</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Most agentic platforms grant probabilistic LLMs direct shell and file access. Kyro rejects this vulnerability. An AI model can only suggest structured tool proposals; Kyro&apos;s deterministic Rust runtime evaluates every operation against strict policy allowlists, path barriers, and explicit human confirmations before anything is executed.
              </p>
              <div className="mt-4 rounded-lg bg-surface p-2.5 font-mono text-[11px] text-emerald-400/90 border border-border/80 flex items-center justify-between">
                <span>Policy Gate: Strict Allowlist &amp; Checkpoint Rollback</span>
                <Check className="h-3.5 w-3.5 text-emerald-400" />
              </div>
            </div>

            {/* Tenet 2 */}
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-7 hover:border-emerald-500/40 transition-all shadow-md group">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:scale-105 transition-transform">
                  <Database className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-base group-hover:text-emerald-400 transition-colors">
                    Sovereign Local Custody &amp; Zero Telemetry
                  </h3>
                  <span className="text-[11px] font-mono text-muted-foreground">No Cloud Sinks, No Data Harvesting</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Cloud-dependent AI services upload your workspace code, shell outputs, and screenshots to external corporate clusters. Kyro stores all memories, task logs, vector embeddings, and execution histories locally in high-performance SQLite WAL databases on your hardware. Zero background tracking.
              </p>
              <div className="mt-4 rounded-lg bg-surface p-2.5 font-mono text-[11px] text-emerald-400/90 border border-border/80 flex items-center justify-between">
                <span>Local SQLite WAL · Fast Vector Index · Zero Tracking</span>
                <Check className="h-3.5 w-3.5 text-emerald-400" />
              </div>
            </div>

            {/* Tenet 3 */}
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-7 hover:border-emerald-500/40 transition-all shadow-md group">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:scale-105 transition-transform">
                  <Terminal className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-base group-hover:text-emerald-400 transition-colors">
                    Fail-Closed Container Isolation
                  </h3>
                  <span className="text-[11px] font-mono text-muted-foreground">Never Degrade to Unsafe Host Execution</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                When containerized execution is enabled, Kyro routes commands through isolated Docker boundaries. If the container daemon crashes or the bridge drops, Kyro abruptly halts execution with an explicit alert rather than silently falling back to run dangerous commands on the host machine.
              </p>
              <div className="mt-4 rounded-lg bg-surface p-2.5 font-mono text-[11px] text-emerald-400/90 border border-border/80 flex items-center justify-between">
                <span>Fail-Closed Abort · Ephemeral Sandbox Volumes</span>
                <Check className="h-3.5 w-3.5 text-emerald-400" />
              </div>
            </div>

            {/* Tenet 4 */}
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-7 hover:border-emerald-500/40 transition-all shadow-md group">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:scale-105 transition-transform">
                  <KeyRound className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-base group-hover:text-emerald-400 transition-colors">
                    Hardware Vault OS Keyring Storage
                  </h3>
                  <span className="text-[11px] font-mono text-muted-foreground">Zero Plaintext API Keys on Disk</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Credentials and model API tokens are never saved in cleartext configuration files or environment blobs. Kyro delegates storage directly to native OS security hardware: macOS Keychain, Linux Secret Service (libsecret), and Windows Credential Manager.
              </p>
              <div className="mt-4 rounded-lg bg-surface p-2.5 font-mono text-[11px] text-emerald-400/90 border border-border/80 flex items-center justify-between">
                <span>macOS Keychain · Linux libsecret · Windows Vault</span>
                <Check className="h-3.5 w-3.5 text-emerald-400" />
              </div>
            </div>
          </div>
        </div>

        {/* High Performance Native Stack Breakdown */}
        <div className="mt-16 sm:mt-24 rounded-2xl border border-border bg-card p-6 sm:p-10 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-6">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
                ENGINEERING SPECIFICATION
              </span>
              <h2 className="text-2xl font-bold text-foreground mt-1">
                The High-Performance Native Stack
              </h2>
            </div>
            <span className="self-start sm:self-auto rounded-full bg-surface border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
              Sub-second startup · 60MB base RAM
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-semibold text-foreground">
                <Cpu className="h-4 w-4 text-emerald-400" />
                <span>Rust Native Core</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Multi-threaded execution engine handling tool dispatch, safe shell tokenization (shlex), Set-of-Marks visual coordinates, and local PDF FlateDecode decompression with zero overhead.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 font-semibold text-foreground">
                <Layers className="h-4 w-4 text-emerald-400" />
                <span>Tauri v2 OS Bridge</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Ultra-light native desktop shell replacing heavy Chromium instances. Delivers sub-second cold starts, native OS system tray integrations, and minimal hardware resource footprints.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 font-semibold text-foreground">
                <FileCode2 className="h-4 w-4 text-emerald-400" />
                <span>React 19 Frontend</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Dual experience modes: Everyday Mode for natural language desktop workflows and Developer Workbench for full terminal logs, git checkpoints, and diff reviews.
              </p>
            </div>
          </div>
        </div>

        {/* Project Evolution Timeline */}
        <div className="mt-16 sm:mt-24">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
              ORIGIN &amp; EVOLUTION
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mt-1">
              From Sovereign Research to Desktop Agent
            </h2>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-border/80 bg-surface/60 p-5 flex flex-col sm:flex-row sm:items-start gap-4">
              <span className="rounded-md bg-emerald-500/10 px-2.5 py-1 text-xs font-mono font-bold text-emerald-400 border border-emerald-500/20 shrink-0">
                PHASE 01
              </span>
              <div>
                <h3 className="font-semibold text-foreground text-sm">
                  Sovereign Architecture Thesis at Tonmoy Infrastructure
                </h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Conceived within Tonmoy Infrastructure as a countermeasure against cloud AI vendor lock-in, recurring per-seat fees, and invasive telemetry pipelines. The objective: give developers and knowledge workers complete computational sovereignty.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-border/80 bg-surface/60 p-5 flex flex-col sm:flex-row sm:items-start gap-4">
              <span className="rounded-md bg-emerald-500/10 px-2.5 py-1 text-xs font-mono font-bold text-emerald-400 border border-emerald-500/20 shrink-0">
                PHASE 02
              </span>
              <div>
                <h3 className="font-semibold text-foreground text-sm">
                  Rust Core Engine &amp; Visual Grounding Implementation
                </h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Architected by Eshan Roy in Rust, establishing a fast native executor and integrating Set-of-Marks visual UI grounding for pixel-accurate cross-application automation without reliance on brittle web selectors.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-border/80 bg-surface/60 p-5 flex flex-col sm:flex-row sm:items-start gap-4">
              <span className="rounded-md bg-emerald-500/10 px-2.5 py-1 text-xs font-mono font-bold text-emerald-400 border border-emerald-500/20 shrink-0">
                PHASE 03
              </span>
              <div>
                <h3 className="font-semibold text-foreground text-sm">
                  Zero-Trust Governance &amp; Dual-Mode Workbench
                </h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Implementation of the centralized permission pipeline, fail-closed Docker sandboxing, OS keyring security, and the React 19 / Tauri v2 dual-mode interface (Everyday Mode &amp; Developer Workbench).
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-border/80 bg-surface/60 p-5 flex flex-col sm:flex-row sm:items-start gap-4">
              <span className="rounded-md bg-emerald-500/10 px-2.5 py-1 text-xs font-mono font-bold text-emerald-400 border border-emerald-500/20 shrink-0">
                PHASE 04
              </span>
              <div>
                <h3 className="font-semibold text-foreground text-sm">
                  Open Source v0.1.0 &amp; Model Context Protocol (MCP)
                </h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Release of Kyro under the permissive MIT license on GitHub, dynamic contributor discovery, cross-platform AppImage / DMG builds, and standardized MCP connector expansion.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Open Source Commitment & CTA Banner */}
        <div className="mt-16 sm:mt-24 rounded-2xl border border-border bg-gradient-to-b from-card via-surface to-background p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 h-[300px] w-[500px] rounded-full bg-emerald-500/10 blur-[100px]"
            aria-hidden="true"
          />

          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-4">
            <Heart className="h-6 w-6" />
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            100% Free &amp; Open Source Under the MIT License
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Kyro belongs to the community. No artificial feature gating, no telemetry spyware, and no recurring enterprise seat licenses. Fork the code, audit the Rust engine, or contribute back.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={siteConfig.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-xs sm:text-sm font-semibold text-black hover:bg-emerald-400 transition-all shadow-md shadow-emerald-950/30"
            >
              <GithubIcon className="h-4 w-4" />
              <span>Explore GitHub Repository</span>
              <ExternalLink className="h-3.5 w-3.5 opacity-70" />
            </a>

            <Link
              href="/contributing/"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-xs sm:text-sm font-medium text-foreground hover:bg-surface-hover hover:border-emerald-500/30 transition-all"
            >
              <span>Contribution Guidelines</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/docs/"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-surface-hover transition-all"
            >
              <span>Read Documentation</span>
            </Link>

            <a
              href={siteConfig.organization.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-rose-500/30 bg-rose-950/20 px-5 py-3 text-xs sm:text-sm font-semibold text-rose-300 hover:bg-rose-900/30 hover:text-white transition-all"
            >
              <span className="flex h-2 w-2 rounded-full bg-rose-400" />
              <span>Tonmoy Infrastructure</span>
              <ExternalLink className="h-3.5 w-3.5 opacity-70" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
