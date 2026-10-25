import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqAccordion } from "@/components/FaqAccordion";
import { faqItems } from "@/lib/faq-data";
import { HelpCircle, Mail, MessageSquare } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Frequently Asked Questions (FAQ)",
  description:
    "Verified answers about Kyro: local-first privacy, model endpoints, browser automation, Docker sandboxing, and desktop operating system support.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <Breadcrumbs items={[{ label: "FAQ" }]} />

      <div className="max-w-3xl mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500">
          Knowledge Base
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
          Accurate, implementation-aware answers regarding Kyro&apos;s architecture, security boundaries, model endpoints,
          and desktop operating system support.
        </p>
      </div>

      {/* Accordion Component */}
      <FaqAccordion items={faqItems} showCategoryFilter={true} />

      {/* Still have questions */}
      <div className="mt-16 rounded-2xl border border-border bg-card p-8 text-center sm:p-10">
        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 mb-3">
          <HelpCircle className="h-5 w-5" />
        </div>
        <h2 className="text-xl font-bold text-foreground">Still have questions?</h2>
        <p className="mt-2 text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
          Can&apos;t find what you&apos;re looking for? Reach out through our community discussions or report an issue.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={siteConfig.discussionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs sm:text-sm font-semibold text-black hover:bg-emerald-400 transition-colors shadow-sm"
          >
            <MessageSquare className="h-4 w-4" />
            <span>GitHub Discussions</span>
          </Link>
          <a
            href={`mailto:${siteConfig.author.email}`}
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-xs sm:text-sm font-medium text-foreground hover:bg-surface-hover transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span>Email Creator</span>
          </a>
        </div>
      </div>
    </div>
  );
}
