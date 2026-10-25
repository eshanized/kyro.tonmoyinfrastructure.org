import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, AlertCircle, ArrowRight, BookOpen, Layers } from "lucide-react";
import { useCasesData } from "@/lib/use-cases-data";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Workflows & Use Cases",
  description:
    "Workflows for everyday desktop automation, safe file organization, document analysis, browser visual regression, and multi-agent Git engineering in Kyro.",
  path: "/use-cases",
});

export default function UseCasesPage() {
  const everydayCases = useCasesData.filter((u) => u.targetAudience === "Everyday Users");
  const developerCases = useCasesData.filter(
    (u) => u.targetAudience === "Software Engineers" || u.targetAudience === "Technical Teams"
  );

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <Breadcrumbs items={[{ label: "Use Cases" }]} />

      <div className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500">
          Practical Workflows
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Real Problem-Solving with Kyro
        </h1>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
          Every use case below follows a structured, verified execution path tested against the Kyro runtime.
          No synthetic case studies, exaggerated metrics, or invented customer testimonials—just concrete steps
          and required prerequisites.
        </p>
      </div>

      {/* Everyday Use Cases */}
      <section className="mt-14">
        <div className="border-b border-border pb-3 mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Everyday Workflows (Non-Developers)
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              File maintenance, confidential document analysis, and visual diagnostics.
            </p>
          </div>
          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 border border-emerald-500/20">
            Everyday Mode
          </span>
        </div>

        <div className="space-y-8">
          {everydayCases.map((useCase) => (
            <article
              key={useCase.id}
              id={useCase.id}
              className="rounded-2xl border border-border bg-card p-6 sm:p-8 scroll-mt-20 hover:border-border-hover transition-colors"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                  {useCase.title}
                </h3>
                <span className="rounded-full bg-surface px-3 py-1 text-xs font-mono text-muted-foreground border border-border">
                  {useCase.targetAudience}
                </span>
              </div>

              {/* Problem Statement */}
              <div className="mt-6 rounded-xl border border-rose-500/20 bg-rose-500/5 p-4 text-xs sm:text-sm">
                <span className="font-semibold text-rose-400 uppercase tracking-wider text-[11px] block mb-1">
                  The Problem
                </span>
                <p className="text-foreground/90 leading-relaxed">{useCase.problem}</p>
              </div>

              {/* Capability */}
              <div className="mt-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-xs sm:text-sm">
                <span className="font-semibold text-emerald-400 uppercase tracking-wider text-[11px] block mb-1">
                  Kyro's Verified Capability
                </span>
                <p className="text-foreground/90 leading-relaxed">{useCase.capability}</p>
              </div>

              {/* Workflow Steps */}
              <div className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Step-by-Step Workflow
                </h4>
                <ol className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                  {useCase.workflow.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-surface border border-border font-mono text-[11px] font-semibold text-emerald-500 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Prerequisites & Feature Link */}
              <div className="mt-6 pt-4 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                <div>
                  <span className="font-semibold text-foreground/80">Important Prerequisites: </span>
                  <span className="text-muted-foreground">{useCase.prerequisites.join(" ")}</span>
                </div>
                <Link
                  href={useCase.docLink}
                  className="inline-flex items-center gap-1.5 font-semibold text-emerald-500 hover:text-emerald-400 shrink-0"
                >
                  <span>Documentation</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Developer & Technical Workflows */}
      <section className="mt-16">
        <div className="border-b border-border pb-3 mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Software Engineering Workflows
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Dev server management, git worktrees, compiler triage, and automated visual QA.
            </p>
          </div>
          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 border border-emerald-500/20">
            Dev Workbench
          </span>
        </div>

        <div className="space-y-8">
          {developerCases.map((useCase) => (
            <article
              key={useCase.id}
              id={useCase.id}
              className="rounded-2xl border border-border bg-card p-6 sm:p-8 scroll-mt-20 hover:border-border-hover transition-colors"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                  {useCase.title}
                </h3>
                <span className="rounded-full bg-surface px-3 py-1 text-xs font-mono text-muted-foreground border border-border">
                  {useCase.targetAudience}
                </span>
              </div>

              {/* Problem Statement */}
              <div className="mt-6 rounded-xl border border-rose-500/20 bg-rose-500/5 p-4 text-xs sm:text-sm">
                <span className="font-semibold text-rose-400 uppercase tracking-wider text-[11px] block mb-1">
                  The Problem
                </span>
                <p className="text-foreground/90 leading-relaxed">{useCase.problem}</p>
              </div>

              {/* Capability */}
              <div className="mt-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-xs sm:text-sm">
                <span className="font-semibold text-emerald-400 uppercase tracking-wider text-[11px] block mb-1">
                  Kyro's Verified Capability
                </span>
                <p className="text-foreground/90 leading-relaxed">{useCase.capability}</p>
              </div>

              {/* Workflow Steps */}
              <div className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Step-by-Step Workflow
                </h4>
                <ol className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                  {useCase.workflow.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-surface border border-border font-mono text-[11px] font-semibold text-emerald-500 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Prerequisites & Feature Link */}
              <div className="mt-6 pt-4 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                <div>
                  <span className="font-semibold text-foreground/80">Important Prerequisites: </span>
                  <span className="text-muted-foreground">{useCase.prerequisites.join(" ")}</span>
                </div>
                <Link
                  href={useCase.docLink}
                  className="inline-flex items-center gap-1.5 font-semibold text-emerald-500 hover:text-emerald-400 shrink-0"
                >
                  <span>Documentation</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
