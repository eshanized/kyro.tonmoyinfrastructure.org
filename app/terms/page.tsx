import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AlertTriangle, FileText } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Use & License Terms",
  description:
    "Terms of use and open-source licensing terms governing the Kyro website and desktop software.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <Breadcrumbs items={[{ label: "Terms of Use" }]} />

      <div className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500">
          Legal & Open Source Terms
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Terms of Use
        </h1>
        <p className="mt-3 text-xs font-mono text-muted-foreground">
          Last updated: October 2026 • Product Owner Review Recommended
        </p>
      </div>

      <div className="mt-8 rounded-xl border border-border bg-surface p-4 text-xs text-muted-foreground leading-relaxed flex items-start gap-3">
        <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-foreground">Notice: </span>
          This document describes the terms governing access to this website and the open-source software provided under the MIT License.
          For details on local data handling and zero-telemetry commitments, see our{" "}
          <Link href="/privacy/" className="text-emerald-400 font-semibold underline hover:text-emerald-300">
            Privacy Policy
          </Link>
          .
        </div>
      </div>

      <div className="mt-10 space-y-8 text-xs sm:text-sm text-muted-foreground leading-relaxed">
        {/* Open Source License */}
        <section className="rounded-xl border border-border bg-card p-6">
          <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
            <FileText className="h-4 w-4 text-emerald-500" />
            <span>1. Open Source MIT License</span>
          </h2>
          <p>
            The Kyro software source code and pre-compiled release binaries are released under the terms of the
            <strong> MIT License</strong>:
          </p>
          <div className="mt-4 rounded-lg border border-border bg-surface p-4 font-mono text-xs text-foreground/80 leading-relaxed whitespace-pre-wrap">
{`Copyright (c) 2026 Eshan Roy and Kyro Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}
          </div>
        </section>

        {/* Desktop Automation Advisory */}
        <section className="rounded-xl border border-border bg-card p-6">
          <h2 className="text-lg font-bold text-foreground mb-3">
            2. Desktop Automation & Autonomous Action Advisory
          </h2>
          <p>
            Kyro is an autonomous desktop agent capable of synthesizing mouse inputs, keyboard keystrokes, browser
            navigations, and shell commands. While Kyro includes rigorous centralized authorization controls,
            workspace confinement, and approval checkpoints:
          </p>
          <ul className="mt-3 space-y-2 list-disc list-inside">
            <li>You are responsible for reviewing tool calls, approving commands, and setting appropriate governance policies for your environment.</li>
            <li>Do not execute untrusted commands or connect unverified MCP servers without reviewing their input schemas and permissions.</li>
            <li>Maintain proper backups of important files and repositories when experimenting with automated development workflows.</li>
          </ul>
        </section>

        {/* Website Use */}
        <section className="rounded-xl border border-border bg-card p-6">
          <h2 className="text-lg font-bold text-foreground mb-3">3. Website Access</h2>
          <p>
            This website is provided as an informational resource. You agree not to abuse, disrupt, or attempt unauthorized
            access to any hosting infrastructure serving this site.
          </p>
        </section>
      </div>
    </div>
  );
}
