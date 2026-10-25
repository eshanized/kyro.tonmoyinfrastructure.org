"use client";

import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { FaqItem } from "@/lib/faq-data";

interface FaqAccordionProps {
  items: FaqItem[];
  showCategoryFilter?: boolean;
}

export function FaqAccordion({ items, showCategoryFilter = true }: FaqAccordionProps) {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    [items[0]?.id || ""]: true,
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = ["all", ...Array.from(new Set(items.map((i) => i.category)))];

  const filteredItems = items.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesQuery =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const toggle = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Search and filters */}
      <div className="mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions or keywords..."
            className="w-full rounded-lg border border-border bg-surface pl-10 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          />
        </div>

        {/* Category Pills */}
        {showCategoryFilter && (
          <div className="flex flex-wrap items-center gap-1.5" role="tablist">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors capitalize ${
                    isActive
                      ? "bg-emerald-500 text-black font-semibold shadow-sm"
                      : "bg-surface border border-border text-muted-foreground hover:text-foreground hover:bg-surface-hover"
                  }`}
                >
                  {cat === "all" ? "All Categories" : cat}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Accordion List */}
      {filteredItems.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border p-8 text-center">
          <p className="text-sm text-muted-foreground">
            No questions matched your search query. Try broadening your terms or clear the filter.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredItems.map((item) => {
            const isOpen = !!openIds[item.id];
            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-border/80"
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-xl"
                >
                  <span className="pr-4 leading-snug">{item.question}</span>
                  <div
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface border border-border text-muted-foreground transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-emerald-500 border-emerald-500/30" : ""
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                <div
                  id={`faq-answer-${item.id}`}
                  role="region"
                  className={`border-t border-border/60 bg-surface/40 px-5 py-4 text-xs sm:text-sm text-muted-foreground leading-relaxed ${
                    isOpen ? "block animate-fade-in" : "hidden"
                  }`}
                >
                  <p>{item.answer}</p>
                  <div className="mt-3 flex items-center justify-between text-[11px] text-muted-foreground/80">
                    <span className="font-mono text-emerald-500/90 font-medium">
                      Category: {item.category}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
