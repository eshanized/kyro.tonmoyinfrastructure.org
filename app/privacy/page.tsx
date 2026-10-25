import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ShieldCheck, Lock, AlertTriangle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Transparent privacy policy for Kyro website visitors and desktop application users: local-first storage, zero tracking, and direct provider communication.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

      <div className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500">
          Transparency & Trust
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-xs font-mono text-muted-foreground">
          Last updated: October 2026 • Product Owner Review Recommended
        </p>
      </div>

      <div className="mt-8 rounded-xl border border-border bg-surface p-4 text-xs text-muted-foreground leading-relaxed flex items-start gap-3">
        <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-foreground">Notice: </span>
          This document describes the technical data handling practices of the Kyro website and the open-source Kyro desktop software.
          For software licensing and usage conditions, please review the{" "}
          <Link href="/terms/" className="text-emerald-400 font-semibold underline hover:text-emerald-300">
            Terms of Use
          </Link>
          . It is provided for informational clarity and should be reviewed by legal counsel if customized for commercial operations.
        </div>
      </div>

      <div className="mt-10 space-y-8 text-xs sm:text-sm text-muted-foreground leading-relaxed">
        {/* Website Privacy */}
        <section className="rounded-xl border border-border bg-card p-6">
          <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
            <Lock className="h-4 w-4 text-emerald-500" />
            <span>1. Website Data Handling (kyro.tonmoyinfrastructure.org)</span>
          </h2>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong>Zero Tracking Cookies:</strong> This website does not use tracking cookies, marketing beacons, or session recording scripts.</li>
            <li><strong>Zero Third-Party Analytics:</strong> We do not embed Google Analytics, Mixpanel, or third-party user fingerprinting tools.</li>
            <li><strong>Web Hosting Logs:</strong> Standard web server connection logs (IP address, user-agent, requested URL) may be processed by hosting infrastructure solely for DDoS mitigation and operational stability.</li>
          </ul>
        </section>

        {/* Desktop Application Privacy */}
        <section className="rounded-xl border border-border bg-card p-6">
          <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            <span>2. Kyro Desktop Application Data Handling</span>
          </h2>
          <p>
            The Kyro desktop application was architected from day one under a strict <strong>Zero-Trust Local-First</strong> design:
          </p>
          <ul className="mt-3 space-y-2 list-disc list-inside">
            <li><strong>Local SQLite Storage:</strong> All chat histories, task runs, memories, timeline steps, artifacts, and local preferences are stored exclusively on your device in SQLite (WAL mode).</li>
            <li><strong>Operating System Keyring:</strong> Your API keys and OAuth tokens are stored in your OS Keyring (macOS Keychain, Linux Secret Service, Windows Credential Manager). They are never saved in plaintext.</li>
            <li><strong>Zero Telemetry to Kyro Authors:</strong> The Kyro desktop application contains no telemetry reporting back to the project authors or maintainers.</li>
            <li><strong>Local Document & File Processing:</strong> PDF extraction, file organization, and code diff calculations execute purely within local Rust memory and never upload files to cloud servers.</li>
          </ul>
        </section>

        {/* External Model Providers */}
        <section className="rounded-xl border border-border bg-card p-6">
          <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
            <Lock className="h-4 w-4 text-emerald-500" />
            <span>3. External Model Inference Providers</span>
          </h2>
          <p>
            When you instruct Kyro to solve a task, prompt text and any attached screenshots are sent directly from your
            machine to your configured model endpoint (such as NVIDIA NIM or an OpenAI-compatible server):
          </p>
          <ul className="mt-3 space-y-2 list-disc list-inside">
            <li>Requests flow directly between your machine and the selected model API provider. Kyro operates zero intermediate proxy servers.</li>
            <li>Your interactions with model providers are governed by the respective privacy policies and terms of those providers (e.g. NVIDIA, OpenAI, Anthropic, Google).</li>
            <li>If you configure a self-hosted local model server (such as Ollama or vLLM), zero network data leaves your computer.</li>
          </ul>
        </section>

        {/* Contact */}
        <section className="rounded-xl border border-border bg-card p-6">
          <h2 className="text-lg font-bold text-foreground mb-3">4. Questions & Privacy Inquiries</h2>
          <p>
            For questions regarding Kyro&apos;s data practices or to report privacy concerns, email{" "}
            <a href={`mailto:${siteConfig.author.email}`} className="text-emerald-500 hover:underline">
              {siteConfig.author.email}
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
