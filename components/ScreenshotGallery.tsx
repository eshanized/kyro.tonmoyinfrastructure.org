"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2, ShieldCheck } from "lucide-react";

export interface ScreenshotItem {
  id: string;
  src: string;
  title: string;
  category: "everyday" | "developer" | "system";
  categoryLabel: string;
  caption: string;
  description: string;
}

export const screenshotsList: ScreenshotItem[] = [
  {
    id: "screenshot-1",
    src: "/assets/screenshot_1.webp",
    title: "Everyday Mode & Interactive Assistant",
    category: "everyday",
    categoryLabel: "Everyday Mode",
    caption: "Dual-experience application shell with step timeline and natural language assistance.",
    description:
      "Everyday Mode provides friendly, natural language access to desktop automation. The live step timeline shows grounded tool invocations, coordinates, and pixel differences in real time.",
  },
  {
    id: "screenshot-2",
    src: "/assets/screenshot_2.webp",
    title: "Developer Workbench & Process Lifecycle",
    category: "developer",
    categoryLabel: "Developer Workbench",
    caption: "Dynamic project discovery, background dev server processes, and live port detection.",
    description:
      "Inspect local development workspaces, launch Next.js, Vite, or Rust servers in the background, monitor health checks, and review compiler triage diagnostics directly from Kyro.",
  },
  {
    id: "screenshot-3",
    src: "/assets/screenshot_3.webp",
    title: "Safe Reversible File Organizer",
    category: "everyday",
    categoryLabel: "Everyday Mode",
    caption: "Categorization rules, SHA-256 duplicate detection, and 1-click rollback manifest.",
    description:
      "Tidy up cluttered directories with zero risk. Preview planned moves, deduplicate identical files by content hash, and rollback any operation instantly with the SQLite transaction log.",
  },
  {
    id: "screenshot-4",
    src: "/assets/screenshot_4.webp",
    title: "Local-First Document Assistant",
    category: "everyday",
    categoryLabel: "Everyday Mode",
    caption: "Pure Rust PDF parsing, date and action item extraction, and side-by-side revision diffs.",
    description:
      "Process contracts and sensitive documents entirely on your local machine. Decompresses raw PDF streams, extracts milestones, and displays visual diffs without cloud leakage.",
  },
  {
    id: "screenshot-5",
    src: "/assets/screenshot_5.webp",
    title: "Multimodal Screen Explainer",
    category: "everyday",
    categoryLabel: "Everyday Mode",
    caption: "Screen capture fact extraction, inferred cause analysis, and grounded action triggers.",
    description:
      "Capture the full screen or snip any region with Ctrl+K. Kyro separates observable visual facts from inferred root causes, letting you trigger instant remediation workflows.",
  },
  {
    id: "screenshot-6",
    src: "/assets/screenshot_6.webp",
    title: "Teach-a-Task & Routine Scheduler",
    category: "system",
    categoryLabel: "System & Routines",
    caption: "User demonstration recorder with credential sanitization and cron/interval scheduling.",
    description:
      "Record desktop actions into reusable, parameterized skills. Schedule recurring tasks using IANA timezone cron expressions and connect to the Telegram remote notification bridge.",
  },
  {
    id: "screenshot-7",
    src: "/assets/screenshot_7.webp",
    title: "Connections & MCP Integration Center",
    category: "system",
    categoryLabel: "System & Routines",
    caption: "Model Context Protocol client, GitHub OAuth PKCE, and per-action governance policies.",
    description:
      "Attach custom local stdio tools or remote SSE MCP endpoints. Connect external services with PKCE OAuth 2.0 and enforce granular Allow, Ask Always, or Deny policies on every tool.",
  },
  {
    id: "screenshot-8",
    src: "/assets/screenshot_8.webp",
    title: "Multi-Agent Git Worktree Workspace",
    category: "developer",
    categoryLabel: "Developer Workbench",
    caption: "Autonomous teammate roster (Apex, Forge, Scout) executing in isolated Git worktrees.",
    description:
      "Specialist coding agents tackle architecture, implementation, and regression testing simultaneously in separate Git worktrees, followed by a human-reviewed branch reconciliation.",
  },
];

export function ScreenshotGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const filteredScreenshots =
    activeCategory === "all"
      ? screenshotsList
      : screenshotsList.filter((s) => s.category === activeCategory);

  const handleOpen = (id: string) => {
    const idx = screenshotsList.findIndex((s) => s.id === id);
    if (idx !== -1) {
      setSelectedIdx(idx);
    }
  };

  const handleClose = useCallback(() => {
    setSelectedIdx(null);
  }, []);

  const handlePrev = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev! > 0 ? prev! - 1 : screenshotsList.length - 1));
  }, [selectedIdx]);

  const handleNext = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev! < screenshotsList.length - 1 ? prev! + 1 : 0));
  }, [selectedIdx]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx, handleClose, handlePrev, handleNext]);

  return (
    <section className="w-full">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8" role="tablist" aria-label="Screenshot Categories">
        {[
          { key: "all", label: "All Screenshots (8)" },
          { key: "everyday", label: "Everyday Mode" },
          { key: "developer", label: "Developer Workbench" },
          { key: "system", label: "System & Integrations" },
        ].map((tab) => {
          const isActive = activeCategory === tab.key;
          return (
            <button
              key={tab.key}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveCategory(tab.key)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                isActive
                  ? "bg-emerald-500 text-black font-semibold shadow-sm"
                  : "bg-surface border border-border text-muted-foreground hover:text-foreground hover:bg-surface-hover"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {filteredScreenshots.map((item) => (
          <div
            key={item.id}
            className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-emerald-500/40 hover:shadow-lg"
          >
            {/* Image Preview */}
            <div
              className="relative aspect-[16/9] w-full overflow-hidden bg-black/60 cursor-pointer"
              onClick={() => handleOpen(item.id)}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-black/70 px-2.5 py-1 text-xs text-white backdrop-blur-md">
                  <Maximize2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Click to expand</span>
                </span>
              </div>
              <span className="absolute top-3 left-3 rounded-full bg-black/75 px-2.5 py-0.5 text-[11px] font-medium text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                {item.categoryLabel}
              </span>
            </div>

            {/* Content Details */}
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-semibold text-foreground text-base tracking-tight">
                {item.title}
              </h3>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                {item.caption}
              </p>
              <p className="mt-3 text-xs text-foreground/80 leading-relaxed border-t border-border/60 pt-3">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={screenshotsList[selectedIdx].title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 animate-fade-in"
        >
          {/* Controls */}
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-surface-elevated/80 border border-border text-foreground hover:bg-surface-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            aria-label="Close image preview"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-surface-elevated/80 border border-border text-foreground hover:bg-surface-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-surface-elevated/80 border border-border text-foreground hover:bg-surface-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            aria-label="Next screenshot"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Modal Container */}
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
            <div className="relative w-full aspect-[16/9] max-h-[72vh] rounded-lg overflow-hidden border border-border bg-black">
              <Image
                src={screenshotsList[selectedIdx].src}
                alt={screenshotsList[selectedIdx].title}
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Caption & Counter */}
            <div className="mt-4 w-full text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-3 px-2">
              <div>
                <h4 className="font-semibold text-white text-base">
                  {screenshotsList[selectedIdx].title}
                </h4>
                <p className="text-xs text-gray-300 mt-0.5">
                  {screenshotsList[selectedIdx].caption}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-400 font-mono">
                  {selectedIdx + 1} of {screenshotsList.length}
                </span>
                <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[11px] font-medium text-emerald-400 border border-emerald-500/30">
                  {screenshotsList[selectedIdx].categoryLabel}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
