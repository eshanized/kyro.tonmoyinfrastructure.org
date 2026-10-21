import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site-config";
import { Shield, Terminal, Heart, Users, Sparkles, Building2, User, ExternalLink, Mail, Code, Cpu, Database, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";

export const metadata: Metadata = {
  title: "About Kyro — Product of Tonmoy Infrastructure",
  description:
    "The mission, origins, ownership, and architectural philosophy of Kyro, an open-source local-first autonomous desktop AI agent from Tonmoy Infrastructure, owned by Eshan Roy.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <Breadcrumbs items={[{ label: "About" }]} />

      {/* Header section */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400 mb-4">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Product Origins & Ownership</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl leading-tight">
          About Kyro
        </h1>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
          Kyro is an open-source, local-first autonomous desktop AI agent from{" "}
          <a
            href={siteConfig.organization.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 font-semibold hover:underline inline-flex items-center gap-1"
          >
            Tonmoy Infrastructure
            <ExternalLink className="h-3.5 w-3.5" />
          </a>{" "}
          and is owned and architected by{" "}
          <a
            href={siteConfig.owner.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground font-semibold hover:text-emerald-400 hover:underline"
          >
            Eshan Roy
          </a>
          .
        </p>
      </div>

      {/* Spotlight Cards: Organization & Owner */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tonmoy Infrastructure Card */}
        <div className="relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-b from-emerald-950/20 via-surface to-card p-6 sm:p-8 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Building2 className="h-6 w-6" />
            </div>
            <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-mono font-medium text-emerald-400 border border-emerald-500/20">
              Parent Organization
            </span>
          </div>

          <h2 className="text-xl font-bold text-foreground">Tonmoy Infrastructure</h2>
          <p className="mt-1 text-xs text-emerald-400 font-mono">https://tonmoyinfrastructure.org/</p>
          
          <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Tonmoy Infrastructure is an engineering organization dedicated to creating sovereign, local-first computing systems, developer tools, and privacy-first autonomous intelligence. Kyro represents its flagship desktop autonomous runtime.
          </p>

          <div className="mt-5 space-y-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
              <span>Sovereign local computing and zero-leak telemetry</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
              <span>Infrastructure for agentic and multi-threaded systems</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
              <span>100% committed to inspectable open-source software</span>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
            <a
              href={siteConfig.organization.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 px-3.5 py-2 text-xs font-semibold text-black hover:bg-emerald-400 transition-colors shadow-xs"
            >
              <span>Visit Website</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <span className="text-[11px] text-muted-foreground">tonmoyinfrastructure.org</span>
          </div>
        </div>

        {/* Eshan Roy Card */}
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-lg hover:border-emerald-500/40 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface border border-border text-foreground">
              <User className="h-6 w-6 text-emerald-400" />
            </div>
            <span className="rounded-full bg-surface px-2.5 py-1 text-[11px] font-mono font-medium text-foreground border border-border">
              Owner & Lead Architect
            </span>
          </div>

          <h2 className="text-xl font-bold text-foreground">Eshan Roy</h2>
          <p className="mt-1 text-xs text-muted-foreground font-mono">m.eshanized@gmail.com</p>

          <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Systems engineer and software developer who created Kyro. Leading the architectural design of its multi-threaded Rust native core, centralized zero-trust authorization pipeline, and dual-mode desktop interface.
          </p>

          <div className="mt-5 space-y-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
              <span>Lead Maintainer & Architectural Authority</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
              <span>Rust, Tauri v2, and React 19 native engineering</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
              <span>Directs zero-trust security & fail-closed runtime</span>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-border flex items-center gap-3">
            <a
              href={siteConfig.owner.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3.5 py-2 text-xs font-semibold text-foreground hover:bg-surface-hover hover:border-emerald-500/30 transition-colors"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              <span>GitHub @eshanized</span>
            </a>
            <a
              href={`mailto:${siteConfig.owner.email}`}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-surface-hover transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>Contact</span>
            </a>
          </div>
        </div>
      </div>

      {/* Narrative & Architecture Sections */}
      <div className="mt-14 space-y-8 text-xs sm:text-sm text-muted-foreground leading-relaxed">
        {/* The Philosophy */}
        <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2.5">
            <Shield className="h-5 w-5 text-emerald-400" />
            <span>Why Local-First Sovereignty Matters</span>
          </h2>
          <p>
            Cloud-dependent AI services require sending private codebase repositories, terminal histories, desktop screenshots, and API credentials to third-party corporate servers. Kyro was built on a different thesis:
          </p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="rounded-xl border border-border bg-surface p-4">
              <div className="font-semibold text-foreground mb-1">Your Hardware, Your Data</div>
              <p className="text-muted-foreground">
                SQLite WAL mode keeps conversations, memories, task artifacts, and execution logs strictly local.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-4">
              <div className="font-semibold text-foreground mb-1">OS Keyring Security</div>
              <p className="text-muted-foreground">
                Credentials reside in your system vault (macOS Keychain, Linux Secret Service, Windows Credential Manager).
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-4">
              <div className="font-semibold text-foreground mb-1">Fail-Closed Sandboxes</div>
              <p className="text-muted-foreground">
                If container isolation is active and the Docker runtime is unreachable, operations halt rather than silently falling back to the host.
              </p>
            </div>
          </div>
        </section>

        {/* The Technology */}
        <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2.5">
            <Terminal className="h-5 w-5 text-emerald-400" />
            <span>The High-Performance Native Stack</span>
          </h2>
          <p>
            Kyro was constructed from the ground up without bloated web wrappers. It combines:
          </p>
          <ul className="mt-3 space-y-2 list-none">
            <li className="flex items-start gap-2.5">
              <span className="font-mono text-emerald-400 font-bold">•</span>
              <span><strong>Rust Core Engine:</strong> Multi-threaded execution, Set-of-Marks visual coordinate grounding, fast local PDF FlateDecode decompression, and argv shell tokenization.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="font-mono text-emerald-400 font-bold">•</span>
              <span><strong>Tauri v2:</strong> Ultra-lightweight native operating system bridge delivering sub-second startup times and minimal memory footprint.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="font-mono text-emerald-400 font-bold">•</span>
              <span><strong>React 19 Frontend:</strong> Dual experience modes (Everyday Mode and Developer Workbench) with optimistic UI updates and live execution timelines.</span>
            </li>
          </ul>
        </section>

        {/* Open Source */}
        <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2.5">
            <Heart className="h-5 w-5 text-emerald-400" />
            <span>Open Source Community & MIT License</span>
          </h2>
          <p>
            Kyro is licensed under the permissive <strong>MIT License</strong>. The entire source code—including backend Rust execution, frontend UI, CI workflows, and documentation—is open for public inspection, fork, and contribution on GitHub.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link
              href={siteConfig.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-semibold text-black hover:bg-emerald-400 transition-colors shadow-sm"
            >
              <GithubIcon className="h-4 w-4" />
              <span>Explore GitHub Repository</span>
            </Link>
            <Link
              href="/contributing/"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-xs font-medium text-foreground hover:bg-surface-hover transition-colors"
            >
              <span>Contribution Guide</span>
            </Link>
            <a
              href={siteConfig.organization.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:underline"
            >
              <span>Tonmoy Infrastructure</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
