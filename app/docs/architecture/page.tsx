import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CodeBlock } from "@/components/CodeBlock";
import { Layers, Cpu, Database, Shield, Radio, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Runtime Architecture & System Topology",
  description:
    "High-level system topology, Tauri IPC communication, SQLite WAL persistence, and agent execution loop in Kyro.",
};

export default function ArchitectureDocPage() {
  return (
    <div className="space-y-10">
      <Breadcrumbs
        items={[
          { label: "Docs", href: "/docs" },
          { label: "Runtime Architecture" },
        ]}
      />

      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500">
          Engineering Specification
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Runtime Architecture & Dataflow
        </h1>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
          Kyro is structured as a native desktop application with a clear separation of concerns between its
          React 19 presentation layer and multi-threaded Rust execution core (`libkyro`).
        </p>
      </div>

      {/* High Level Topology */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Subsystem Inventory</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="font-semibold text-foreground flex items-center gap-2 mb-2">
              <Layers className="h-4 w-4 text-emerald-500" />
              <span>Frontend Shell (`kyroui/`)</span>
            </h3>
            <p className="text-muted-foreground text-xs leading-relaxed">
              React 19 + TypeScript + Vite. Hosts dual-experience shells, floating HUD panels (`hud/HudPanel.tsx`),
              screen region snippers, timeline drawers, interactive xterm.js terminals, and modal tools.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="font-semibold text-foreground flex items-center gap-2 mb-2">
              <Cpu className="h-4 w-4 text-emerald-500" />
              <span>Agent Loop Engine (`agent/loop_engine.rs`)</span>
            </h3>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Manages multi-turn reasoning steps, dynamic tool registration, scoped cancellation tokens,
              context window budgeting, and step timeline events.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="font-semibold text-foreground flex items-center gap-2 mb-2">
              <Shield className="h-4 w-4 text-emerald-500" />
              <span>Central Authorization (`governance/auth.rs`)</span>
            </h3>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Unified security boundary that evaluates every tool invocation against active policies,
              parses shell tokens, enforces filesystem boundaries, and manages approval lifecycles.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="font-semibold text-foreground flex items-center gap-2 mb-2">
              <Database className="h-4 w-4 text-emerald-500" />
              <span>Local Storage & Vault (`storage/`)</span>
            </h3>
            <p className="text-muted-foreground text-xs leading-relaxed">
              SQLite database in WAL mode handling v1-v5 schema migrations. Vault service handles OS Keyring
              integration with authenticated AES-256-GCM encrypted fallback.
            </p>
          </div>
        </div>
      </section>

      {/* IPC Bridge */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Tauri v2 IPC Bridge</h2>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          The frontend interacts with Rust backend modules across 75 strictly-typed Tauri commands registered in
          <code className="text-foreground"> libkyro/src/main.rs</code>. Real-time updates (timeline steps, terminal output,
          dev server logs, approval requests) are dispatched as unidirectional Tauri events.
        </p>

        <CodeBlock
          filename="libkyro/src/main.rs (IPC Handler Sample)"
          language="rust"
          code={`tauri::Builder::default()
    .manage(state)
    .invoke_handler(tauri::generate_handler![
        list_conversations,
        run_agent_turn,
        check_command_permission,
        resolve_approval,
        discover_projects,
        start_dev_server,
        create_code_checkpoint,
        diagnose_build_failure,
        explain_screen_capture,
        preview_file_organization,
        export_routine,
        // ... 75 registered commands
    ])`}
        />
      </section>

      {/* Cancellation and Process Management */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Run Cancellation & Subprocess Trees</h2>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Every agent execution turn is assigned a unique <code className="text-foreground">run_id</code> and linked to a
          <code className="text-emerald-400"> CancellationToken</code>. When a user clicks Cancel or interrupts a task:
        </p>
        <ul className="space-y-1.5 text-xs text-muted-foreground">
          <li>• HTTP model inference requests are aborted immediately.</li>
          <li>• Child process groups (PGID) spawned by shell commands are signaled with SIGKILL.</li>
          <li>• Ongoing browser automation sessions and PTY sessions are cleanly closed.</li>
          <li>• The task state in SQLite transitions to <code className="text-foreground">interrupted</code>.</li>
        </ul>
      </section>
    </div>
  );
}
