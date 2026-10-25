import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CodeBlock } from "@/components/CodeBlock";
import { Clock, Send, ShieldCheck, Repeat } from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Routines, Scheduler & Telegram Bridge",
  description:
    "Record desktop demonstrations into parameterized skills, schedule cron routines, and manage tasks remotely via Telegram in Kyro.",
  path: "/docs/routines-telegram",
});

export default function RoutinesTelegramDocPage() {
  return (
    <div className="space-y-10">
      <Breadcrumbs
        items={[
          { label: "Docs", href: "/docs" },
          { label: "Routines & Telegram Bridge" },
        ]}
      />

      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500">
          Automation & Remote Supervision
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Teach-a-Task, Scheduler & Telegram Bridge
        </h1>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
          Convert repetitive manual actions into durable, parameterized skills. Schedule them with cron and receive
          alerts or trigger runs on your mobile phone via the Telegram bridge.
        </p>
      </div>

      {/* Teach-a-Task Recorder */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Teach-a-Task Demonstration Recorder</h2>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Activate the recorder in Kyro, perform your workflow (clicking, typing, opening files), and stop the recording.
          Kyro compiles the captured actions into a reusable skill:
        </p>
        <div className="rounded-xl border border-border bg-surface p-4 text-xs text-muted-foreground">
          <span className="font-semibold text-foreground block mb-1">Active Credential Sanitization:</span>
          <span>
            During recording, keystrokes entered into recognized password fields or matching credential patterns
            are scrubbed from the stored replay script. Replay steps pass through the authorization engine just like autonomous tool calls.
          </span>
        </div>
      </section>

      {/* Cron Scheduler */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Timezone-Aware Cron Scheduler</h2>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Kyro includes a background routine worker powered by the <code className="text-foreground">chrono-tz</code> library:
        </p>
        <ul className="space-y-1.5 text-xs text-muted-foreground">
          <li>• Supports standard 5-part cron syntax (<code className="text-foreground">0 9 * * 1-5</code>).</li>
          <li>• Full IANA timezone names (e.g. <code className="text-foreground">America/New_York</code>, <code className="text-foreground">Asia/Tokyo</code>) with Daylight Saving Time adjustments.</li>
          <li>• Concurrency overlap guards prevent duplicate instances of long-running routines from running simultaneously.</li>
        </ul>
      </section>

      {/* Telegram Bridge */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Telegram Remote Bridge</h2>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          The Telegram Bridge allows you to interact with Kyro away from your desk:
        </p>
        <CodeBlock
          filename="Telegram Configuration (Settings Modal)"
          language="text"
          code={`Telegram Bot Token:  <Stored securely in OS Keyring>
Allowed Chat ID:     123456789 (Fail-closed authentication)`}
        />
        <ul className="space-y-1 text-xs text-muted-foreground mt-3">
          <li>• <strong>Fail-Closed Security:</strong> Rejects any Telegram update whose sender ID does not match the configured <code className="text-foreground">allowed_chat_id</code>.</li>
          <li>• <strong>Remote Triggers:</strong> Send prompts or routine names directly via Telegram messages.</li>
          <li>• <strong>Mobile Approvals:</strong> Interactive callback buttons allow approving or denying sensitive tool executions from your phone.</li>
        </ul>
      </section>
    </div>
  );
}
