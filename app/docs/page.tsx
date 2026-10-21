import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Cpu, Shield, Terminal, Globe, Workflow } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Documentation Overview",
  description:
    "Comprehensive guides and technical documentation for the Kyro local-first autonomous desktop AI agent.",
};

export default function DocsHomePage() {
  return (
    <div className="space-y-10">
      <Breadcrumbs items={[{ label: "Docs", href: "/docs" }, { label: "Overview" }]} />

      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 mb-3">
          <span>Tonmoy Infrastructure • Owned by Eshan Roy</span>
        </div>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Introduction & Architectural Overview
        </h1>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
          Welcome to the authoritative documentation for Kyro. Kyro is an open-source, local-first autonomous
          desktop AI agent from{" "}
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
          </a>{" "}
          with community contributors. It unites high-speed Rust native execution with Tauri v2 and React 19 to provide seamless computer control, browser automation, and developer tooling.
        </p>
      </div>

      {/* Quick Start Card */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
        <h2 className="text-xl font-bold text-foreground">Quick Setup (Development Build)</h2>
        <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Kyro requires Node.js &ge; 20 and Rust &ge; 1.75. Clone the repository and run the verification pipeline:
        </p>

        <div className="mt-4">
          <CodeBlock
            filename="Terminal"
            language="bash"
            code={`git clone https://github.com/eshanized/Kyro.git
cd Kyro
npm install
make verify
make dev`}
          />
        </div>

        <div className="mt-4 flex items-center justify-between text-xs">
          <span className="text-muted-foreground">Looking for pre-compiled binaries?</span>
          <Link href="/download" className="font-semibold text-emerald-500 hover:text-emerald-400">
            View Platform Installers (.deb, .dmg, .msi) →
          </Link>
        </div>
      </div>

      {/* Guide Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          href="/docs/installation"
          className="group rounded-xl border border-border bg-surface p-5 hover:border-emerald-500/40 hover:bg-surface-hover transition-all"
        >
          <div className="flex items-center justify-between mb-2">
            <Terminal className="h-5 w-5 text-emerald-500" />
            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-emerald-400 group-hover:translate-x-1 transition-transform" />
          </div>
          <h3 className="font-bold text-base text-foreground">Installation & Prerequisites</h3>
          <p className="mt-1 text-xs text-muted-foreground">
            System libraries for Ubuntu, Debian, macOS, and Windows build environments.
          </p>
        </Link>

        <Link
          href="/docs/configuration"
          className="group rounded-xl border border-border bg-surface p-5 hover:border-emerald-500/40 hover:bg-surface-hover transition-all"
        >
          <div className="flex items-center justify-between mb-2">
            <Cpu className="h-5 w-5 text-emerald-500" />
            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-emerald-400 group-hover:translate-x-1 transition-transform" />
          </div>
          <h3 className="font-bold text-base text-foreground">Model Providers & Keys</h3>
          <p className="mt-1 text-xs text-muted-foreground">
            Configuring NVIDIA NIM, OpenAI-compatible endpoints, and local inference servers.
          </p>
        </Link>

        <Link
          href="/docs/security"
          className="group rounded-xl border border-border bg-surface p-5 hover:border-emerald-500/40 hover:bg-surface-hover transition-all"
        >
          <div className="flex items-center justify-between mb-2">
            <Shield className="h-5 w-5 text-emerald-500" />
            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-emerald-400 group-hover:translate-x-1 transition-transform" />
          </div>
          <h3 className="font-bold text-base text-foreground">Security & Governance</h3>
          <p className="mt-1 text-xs text-muted-foreground">
            Centralized policy matrix, shell token verification, and fail-closed sandboxing.
          </p>
        </Link>

        <Link
          href="/docs/developer-workbench"
          className="group rounded-xl border border-border bg-surface p-5 hover:border-emerald-500/40 hover:bg-surface-hover transition-all"
        >
          <div className="flex items-center justify-between mb-2">
            <Workflow className="h-5 w-5 text-emerald-500" />
            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-emerald-400 group-hover:translate-x-1 transition-transform" />
          </div>
          <h3 className="font-bold text-base text-foreground">Developer Workbench</h3>
          <p className="mt-1 text-xs text-muted-foreground">
            Dev server manager, git code checkpoints, Build Doctor, and multi-agent worktrees.
          </p>
        </Link>
      </div>

      {/* Architecture Highlights */}
      <div className="rounded-xl border border-border bg-surface/50 p-6 text-xs sm:text-sm text-muted-foreground leading-relaxed">
        <h3 className="font-semibold text-foreground text-sm mb-2">Source Documentation References</h3>
        <p>
          These guides reflect the architecture specifications in the Kyro source repository:
        </p>
        <ul className="mt-3 space-y-1 text-xs">
          <li>• <Link href="/docs/architecture" className="text-emerald-500 hover:underline">Runtime Architecture Overview (`docs/architecture/runtime-overview.md`)</Link></li>
          <li>• <Link href="/docs/security" className="text-emerald-500 hover:underline">Security Boundaries & Governance (`docs/architecture/security-boundaries.md`)</Link></li>
          <li>• <Link href="/docs/mcp-connectors" className="text-emerald-500 hover:underline">Connector System & Remote MCP (`docs/architecture/connector-system.md`)</Link></li>
          <li>• <Link href="/features" className="text-emerald-500 hover:underline">Authoritative Feature Implementation Matrix (`docs/implementation/feature-matrix.md`)</Link></li>
        </ul>
      </div>
    </div>
  );
}
