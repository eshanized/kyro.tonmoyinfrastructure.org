import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Terminal,
  FolderSync,
  FileText,
  ScanEye,
  GitBranch,
  Bot,
  Globe,
  Radio,
  Clock,
  Key,
  Box,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { featureCatalog } from "@/lib/feature-catalog";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Features & Verified Capabilities",
  description:
    "Explore the complete verified capabilities of Kyro, from dual experience modes and reversible file organization to developer workbenches, visual regression audits, and fail-closed security.",
};

export default function FeaturesPage() {
  const categories = Array.from(new Set(featureCatalog.map((f) => f.category)));

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <Breadcrumbs items={[{ label: "Features" }]} />

      {/* Header */}
      <div className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500">
          Subsystem Inventory
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Verified Kyro Capabilities
        </h1>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
          Every capability below is verified in the Kyro source code and backed by automated unit, integration,
          and security regression tests. We distinguish between general availability, external dependencies,
          and architectural boundaries.
        </p>
      </div>

      {/* Category Navigation Bar */}
      <div className="mt-8 flex flex-wrap gap-2 border-b border-border pb-4">
        {categories.map((category) => (
          <a
            key={category}
            href={`#${category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
            className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-emerald-500/40 hover:bg-surface-hover transition-colors"
          >
            {category}
          </a>
        ))}
      </div>

      {/* Grouped Features */}
      <div className="mt-12 space-y-16">
        {categories.map((category) => {
          const items = featureCatalog.filter((f) => f.category === category);
          const categorySlug = category.toLowerCase().replace(/[^a-z0-9]+/g, "-");

          return (
            <section key={category} id={categorySlug} className="scroll-mt-20">
              <div className="border-b border-border/80 pb-3 mb-8">
                <h2 className="text-2xl font-bold tracking-tight text-foreground">
                  {category}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {items.map((feature) => (
                  <article
                    key={feature.id}
                    className="flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:border-border-hover transition-all"
                  >
                    {feature.screenshot && (
                      <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/60 border-b border-border">
                        <Image
                          src={feature.screenshot}
                          alt={feature.screenshotAlt || feature.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover object-top"
                        />
                        {feature.badge && (
                          <span className="absolute top-3 left-3 rounded-full bg-black/75 px-2.5 py-0.5 text-[11px] font-medium text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                            {feature.badge}
                          </span>
                        )}
                      </div>
                    )}

                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-xl font-bold tracking-tight text-foreground">
                          {feature.title}
                        </h3>
                      </div>

                      <p className="mt-2 text-sm text-foreground/90 font-medium">
                        {feature.summary}
                      </p>

                      <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>

                      {/* Technical Details */}
                      <div className="mt-5 rounded-xl border border-border/60 bg-surface/60 p-4">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2.5">
                          How It Works
                        </h4>
                        <ul className="space-y-1.5 text-xs text-muted-foreground">
                          {feature.technicalDetails.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-emerald-500 font-bold shrink-0">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Prerequisites & Limitations */}
                      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-border/60 text-xs">
                        {feature.prerequisites && (
                          <div>
                            <span className="font-semibold text-foreground/80 flex items-center gap-1">
                              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                              Prerequisites:
                            </span>
                            <p className="text-muted-foreground mt-0.5 leading-snug">
                              {feature.prerequisites.join(" ")}
                            </p>
                          </div>
                        )}
                        {feature.limitations && (
                          <div>
                            <span className="font-semibold text-foreground/80 flex items-center gap-1">
                              <AlertCircle className="h-3.5 w-3.5 text-amber-500" />
                              Known Constraints:
                            </span>
                            <p className="text-muted-foreground mt-0.5 leading-snug">
                              {feature.limitations.join(" ")}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Doc Link */}
                      {feature.docLink && (
                        <div className="mt-6 pt-3 border-t border-border/60 flex items-center justify-between">
                          <Link
                            href={feature.docLink}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-500 hover:text-emerald-400 transition-colors"
                          >
                            <span>Read detailed documentation</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                          <span className="text-[11px] font-mono text-muted-foreground/60">
                            status: verified
                          </span>
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Call to action */}
      <div className="mt-16 rounded-2xl border border-border bg-surface p-8 text-center sm:p-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Ready to try Kyro on your desktop?
        </h2>
        <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
          Get started with free pre-built installers for Linux, macOS, and Windows.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/download"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-black hover:bg-emerald-400 transition-colors shadow-sm"
          >
            <span>View Downloads</span>
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground hover:bg-surface-hover transition-colors"
          >
            <span>Documentation</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
