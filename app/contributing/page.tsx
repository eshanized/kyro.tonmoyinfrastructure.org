import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CodeBlock } from "@/components/CodeBlock";
import { GitPullRequest, CheckCircle2, Terminal, BookOpen, Bug, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contributing to Kyro",
  description:
    "Developer guide for contributing to Kyro: local setup, Makefile targets, verification pipeline, commit conventions, and pull request checklist.",
};

export default function ContributingPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <Breadcrumbs items={[{ label: "Contributing" }]} />

      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 mb-3">
          <span>Tonmoy Infrastructure • Owned by Eshan Roy</span>
        </div>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Contributing to Kyro
        </h1>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
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
          . We welcome contributions from developers, designers, technical writers, and testers of all skill levels.
          Follow this guide to set up your environment, run checks, and submit pull requests.
        </p>
      </div>

      {/* 1. Prerequisites & Setup */}
      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          1. Development Setup
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Clone the repository and install Node dependencies:
        </p>
        <CodeBlock
          filename="Terminal"
          language="bash"
          code={`git clone https://github.com/eshanized/Kyro.git
cd Kyro
npm install`}
        />
        <div className="rounded-xl border border-border bg-surface p-4 text-xs text-muted-foreground">
          <span>Prerequisites: Node.js &ge; 20.x, Rust &ge; 1.75.0 (<code className="text-foreground">rustc</code>, <code className="text-foreground">cargo</code>, <code className="text-foreground">rustfmt</code>, <code className="text-foreground">clippy</code>).</span>
        </div>
      </section>

      {/* 2. Development Commands */}
      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          2. Common Makefile Targets
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Kyro includes a versatile Makefile for standard development workflows:
        </p>
        <CodeBlock
          filename="Terminal"
          language="bash"
          code={`# Run full desktop app (Vite UI + Rust native backend)
make dev

# Run Vite frontend only in browser at http://localhost:1420 (rapid UI styling)
make dev-ui

# Run full desktop app with verbose debug logging
make dev-debug

# Run headless under virtual X11 framebuffer (Linux / CI)
make dev-headless`}
        />
      </section>

      {/* 3. Testing & Verification */}
      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          3. Testing & Verification Pipeline
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Before submitting a pull request, all automated checks must pass locally. Kyro provides a unified command:
        </p>
        <CodeBlock
          filename="Terminal"
          language="bash"
          code={`make verify`}
        />
        <p className="text-xs text-muted-foreground">
          This single command automatically validates:
        </p>
        <ul className="space-y-1.5 text-xs text-muted-foreground">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <span><code className="text-foreground">make fmt-check</code>: Rust code formatting validation (<code className="text-foreground">rustfmt</code>)</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <span><code className="text-foreground">make clippy</code>: Rust Clippy linter with strict warning enforcement (<code className="text-foreground">-D warnings</code>)</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <span><code className="text-foreground">make test</code>: Over 230 Rust unit, integration, and security regression tests</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <span><code className="text-foreground">make test-ui</code>: 60+ frontend Vitest test suites and TypeScript compiler check (<code className="text-foreground">tsc --noEmit</code>)</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <span><code className="text-foreground">make build-ui</code>: Production frontend bundle build verification</span>
          </li>
        </ul>
      </section>

      {/* 4. Commit Guidelines */}
      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          4. Conventional Commit Standards
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          We enforce Conventional Commits for automated changelogs:
        </p>
        <CodeBlock
          filename="Commit Message Format"
          language="text"
          code={`<type>(<scope>): <short description>

Examples:
feat(ui): add visual artifact comparison slider
fix(governance): prevent unverified shell expansions in executor
test(audit): add regression tests for element inspection
docs(runtime): update connector authentication flow`}
        />
      </section>

      {/* 5. PR Checklist */}
      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          5. Pull Request Checklist
        </h2>
        <div className="rounded-xl border border-border bg-card p-6 space-y-3 text-xs sm:text-sm text-muted-foreground">
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" readOnly checked className="rounded text-emerald-500 focus:ring-emerald-500 mt-1" />
            <span>Branch is based off the latest <code className="text-foreground">master</code> branch.</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" readOnly checked className="rounded text-emerald-500 focus:ring-emerald-500 mt-1" />
            <span>All verification checks pass locally via <code className="text-foreground">make verify</code>.</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" readOnly checked className="rounded text-emerald-500 focus:ring-emerald-500 mt-1" />
            <span>Any new capability includes automated unit or regression tests.</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" readOnly checked className="rounded text-emerald-500 focus:ring-emerald-500 mt-1" />
            <span>Relevant architectural documents under <code className="text-foreground">docs/</code> are updated.</span>
          </label>
        </div>
      </section>

      {/* Actions */}
      <div className="mt-12 flex flex-wrap items-center gap-4">
        <Link
          href={siteConfig.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-black hover:bg-emerald-400 transition-colors shadow-sm"
        >
          <GithubIcon className="h-4 w-4" />
          <span>Open GitHub Repository</span>
        </Link>
        <Link
          href={`${siteConfig.repoUrl}/pulls`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-medium text-foreground hover:bg-surface-hover transition-colors"
        >
          <GitPullRequest className="h-4 w-4" />
          <span>Submit a Pull Request</span>
        </Link>
      </div>
    </div>
  );
}
