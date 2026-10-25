import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CodeBlock } from "@/components/CodeBlock";
import { Globe, Shield, Camera, Laptop } from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Browser Automation & Web Audits",
  description:
    "How Kyro conducts provider-neutral browser automation via Firefox WebDriver BiDi and Chromium CDP with origin safety.",
  path: "/docs/browser",
});

export default function BrowserDocPage() {
  return (
    <div className="space-y-10">
      <Breadcrumbs
        items={[
          { label: "Docs", href: "/docs" },
          { label: "Browser Automation" },
        ]}
      />

      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500">
          Web Automation
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Browser Automation & Web Audits
        </h1>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
          Kyro interacts with web applications through a lightweight native WebSocket protocol adapter that
          communicates directly with standard browser debugging protocols.
        </p>
      </div>

      {/* Protocol Adapter */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Dual Protocol Architecture</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-1">Firefox (WebDriver BiDi)</h3>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Connects to Firefox instances via the modern W3C standard WebDriver BiDi protocol over WebSockets.
              Enables bi-directional element inspection, console message streaming, and network tracking.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-1">Chromium Family (CDP)</h3>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Connects to Google Chrome, Chromium, Brave, Microsoft Edge, Opera, and Vivaldi using the Chrome DevTools
              Protocol (CDP) without requiring third-party testing driver binaries.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Safety */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Origin-Scoped Safety & Navigation Policy</h2>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          The Rust backend evaluates all URL navigation requests before dispatching them to the browser worker:
        </p>
        <ul className="space-y-1.5 text-xs text-muted-foreground">
          <li>• <strong>Scope confinement:</strong> Keeps test runs confined to the target development server origin.</li>
          <li>• <strong>Blocked domain lists:</strong> Financial, banking, and payment gateways (PayPal, Chase) trigger an immediate human takeover rather than automated form filling.</li>
          <li>• <strong>No silent browser substitution:</strong> If a requested browser is not installed, Kyro fails closed and presents a list of detected alternatives.</li>
        </ul>
      </section>

      {/* Visual Baselines */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Visual Regression Baselines</h2>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Kyro stores baseline snapshots in <code className="text-foreground">~/.config/kyro/baselines/</code>:
        </p>
        <CodeBlock
          filename="Visual Baseline CLI & Audit Flow"
          language="bash"
          code={`# During UI Audit, renders are checked across standard viewports:
Desktop:  1920 x 1080
Tablet:   768 x 1024
Mobile:   375 x 812

# Pixel differences are evaluated using compute_diff_percent()
# Differences above tolerance threshold trigger a VisualRegression finding.`}
        />
      </section>
    </div>
  );
}
