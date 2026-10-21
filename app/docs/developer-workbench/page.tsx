import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CodeBlock } from "@/components/CodeBlock";
import { Terminal, GitBranch, Bot, Wrench, Play } from "lucide-react";

export const metadata: Metadata = {
  title: "Developer Workbench Documentation",
  description:
    "How Kyro manages development servers, git-aware code checkpoints, Build Doctor triage, and isolated multi-agent worktrees.",
};

export default function DeveloperWorkbenchDocPage() {
  return (
    <div className="space-y-10">
      <Breadcrumbs
        items={[
          { label: "Docs", href: "/docs" },
          { label: "Developer Workbench" },
        ]}
      />

      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500">
          Engineering Tooling
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Developer Workbench & Workflows
        </h1>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
          The Developer Workbench equips software engineers with automated process supervision, reversible git-aware
          checkpoints, compiler diagnostic triage, and parallel multi-agent workspaces.
        </p>
      </div>

      {/* Dev Servers */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Projects & Dev Server Manager</h2>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Kyro discovers local projects using a bounded filesystem traversal that ignores noisy folders like
          <code className="text-foreground"> node_modules</code> and <code className="text-foreground">.git</code>.
          When you start a development server:
        </p>
        <ul className="space-y-1.5 text-xs text-muted-foreground">
          <li>• Frameworks are identified automatically (Next.js, Vite, React, Astro, Cargo).</li>
          <li>• Kyro watches standard output streams for server-ready lines and active listening ports.</li>
          <li>• Server process groups (PGID) are monitored and terminated cleanly when stopped or when the app exits.</li>
        </ul>
      </section>

      {/* Checkpoints */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Code Checkpoints & Conflict-Checked Rollback</h2>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Before performing any file modifications, Kyro snapshots git status and computes unified diffs.
          If an autonomous edit produces unintended regressions:
        </p>
        <CodeBlock
          filename="libkyro/src/project/checkpoint.rs"
          language="rust"
          code={`// Checkpoint structure preserved in SQLite
pub struct CodeCheckpoint {
    pub id: String,
    pub workspace_path: String,
    pub description: String,
    pub commit_hash: Option<String>,
    pub diff: String,
    pub created_at: String,
}

// Rollback checks working-tree cleanliness before applying reverse diff`}
        />
      </section>

      {/* Build Doctor */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Build Doctor Automated Triage</h2>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Build Doctor ingests raw terminal stderr output and runs specialized pattern matchers:
        </p>
        <ul className="space-y-1.5 text-xs text-muted-foreground">
          <li>• <strong>Rust compiler:</strong> Detects <code className="text-foreground">error[E...]</code> codes and extracts target line/column.</li>
          <li>• <strong>TypeScript:</strong> Parses <code className="text-foreground">error TS...</code> type mismatch signatures.</li>
          <li>• <strong>Vitest & Jest:</strong> Parses failed test assertions and stack traces.</li>
          <li>• Synthesizes candidate repair patches formatted as unified diffs for developer review.</li>
        </ul>
      </section>

      {/* Multi-Agent Git Worktrees */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Multi-Agent Workspace with Git Worktrees</h2>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          To prevent multiple AI agents from colliding on the same working tree, Kyro uses native
          <code className="text-foreground"> git worktree</code> commands to spin up isolated secondary checkouts for
          specialist agents (<strong className="text-foreground">Apex</strong>, <strong className="text-foreground">Forge</strong>, <strong className="text-foreground">Scout</strong>):
        </p>
        <div className="rounded-xl border border-border bg-surface p-4 text-xs text-muted-foreground">
          <p>
            Each agent works independently in its own worktree directory. Once subtasks are verified, Kyro presents
            a <strong>Reviewed Reconciliation</strong> panel where developers inspect changes before they merge back into the main branch.
          </p>
        </div>
      </section>
    </div>
  );
}
