import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { changelogEntries } from "@/lib/changelog-data";
import { siteConfig } from "@/lib/site-config";
import { GitCommit, Tag, ExternalLink, Calendar, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Changelog & Release Notes",
  description:
    "Authoritative history of Kyro releases, architectural milestones, and verified git commit updates.",
};

export default function ChangelogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <Breadcrumbs items={[{ label: "Changelog" }]} />

      <div className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500">
          Release History
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Changelog & Updates
        </h1>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
          Track official releases, architectural milestones, and commit changes for the Kyro desktop application.
          All entries correspond to verified milestones in the repository.
        </p>
      </div>

      <div className="mt-12 space-y-10">
        {changelogEntries.map((entry) => {
          const isRelease = entry.type === "release";
          return (
            <article
              key={entry.version}
              className={`rounded-2xl border p-6 sm:p-8 transition-colors ${
                isRelease
                  ? "border-emerald-500/30 bg-card shadow-sm"
                  : "border-border bg-card/60"
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                      isRelease
                        ? "bg-emerald-500/10 text-emerald-500"
                        : "bg-surface text-muted-foreground"
                    }`}
                  >
                    {isRelease ? <Tag className="h-4 w-4" /> : <GitCommit className="h-4 w-4" />}
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                      {entry.title}
                    </h2>
                    <span className="text-xs font-mono text-emerald-500 font-semibold">
                      {entry.version}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
                  <span className="flex items-center gap-1.5 font-sans">
                    <Calendar className="h-3.5 w-3.5" />
                    {entry.date}
                  </span>
                  {entry.commitHash && (
                    <a
                      href={`${siteConfig.repoUrl}/commit/${entry.commitHash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded bg-surface px-2 py-0.5 border border-border hover:text-foreground hover:border-border-hover transition-colors inline-flex items-center gap-1"
                    >
                      <span>{entry.commitHash}</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-foreground/90 leading-relaxed font-medium">
                {entry.summary}
              </p>

              <div className="mt-6 space-y-4">
                {entry.changes.map((group, idx) => (
                  <div key={idx} className="rounded-xl border border-border/80 bg-surface/40 p-4">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground/80 mb-2">
                      {group.category}
                    </h3>
                    <ul className="space-y-1.5 text-xs text-muted-foreground">
                      {group.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-12 text-center text-xs text-muted-foreground">
        <span>Want to inspect full commit diffs? </span>
        <a
          href={`${siteConfig.repoUrl}/commits/master`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-500 hover:underline font-semibold"
        >
          View full commit history on GitHub &rarr;
        </a>
      </div>
    </div>
  );
}
