import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site-config";
import { Shield, Terminal, Heart, Users, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";

export const metadata: Metadata = {
  title: "About Kyro",
  description:
    "The mission, origins, and architectural philosophy of Kyro, an open-source local-first autonomous desktop AI agent.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <Breadcrumbs items={[{ label: "About" }]} />

      <div className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500">
          Project Origins
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          About Kyro
        </h1>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
          Kyro is an open-source autonomous desktop AI agent created by Eshan Roy and community contributors.
          It was engineered around a core conviction: desktop AI agents should live on your machine, respect your
          privacy, and give you complete control over computer automation.
        </p>
      </div>

      <div className="mt-12 space-y-10 text-xs sm:text-sm text-muted-foreground leading-relaxed">
        {/* The Philosophy */}
        <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <Shield className="h-5 w-5 text-emerald-500" />
            <span>Why Local-First Matters</span>
          </h2>
          <p>
            Many modern AI tools require uploading entire codebases, local documents, and terminal outputs to third-party
            cloud servers. Kyro takes a fundamentally different path:
          </p>
          <ul className="mt-3 space-y-1.5 list-disc list-inside">
            <li><strong>Your Machine, Your Data:</strong> SQLite with Write-Ahead Logging keeps all task histories, memories, and artifacts locally on disk.</li>
            <li><strong>Zero Secret Exposure:</strong> Credentials live in your OS Keyring (macOS Keychain, Linux Secret Service, Windows Credential Manager).</li>
            <li><strong>Fail-Closed Boundaries:</strong> When sandbox isolation is requested, the system halts if the container runtime is offline rather than falling back to host execution unsafely.</li>
          </ul>
        </section>

        {/* The Technology */}
        <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <Terminal className="h-5 w-5 text-emerald-500" />
            <span>Modern Native Architecture</span>
          </h2>
          <p>
            Kyro is built with <strong>Rust</strong>, <strong>Tauri v2</strong>, and <strong>React 19</strong>.
            This gives users a desktop application that starts instantly, uses minimal system memory, and achieves
            zero-latency screen capture and mouse/keyboard interaction.
          </p>
        </section>

        {/* Open Source */}
        <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <Heart className="h-5 w-5 text-emerald-500" />
            <span>Open Source Community</span>
          </h2>
          <p>
            Kyro is licensed under the permissive <strong>MIT License</strong>. The entire source code—including backend
            Rust execution, frontend UI, CI workflows, and documentation—is publicly inspectable on GitHub.
          </p>
          <div className="mt-6 flex items-center gap-4">
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
              href="/contributing"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-xs font-medium text-foreground hover:bg-surface-hover transition-colors"
            >
              <span>Contribution Guide</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
