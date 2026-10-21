"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, ChevronRight, Menu, X, ArrowLeft } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Mobile docs navigation toggle */}
      <div className="lg:hidden mb-6 flex items-center justify-between rounded-xl border border-border bg-surface p-3">
        <button
          type="button"
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          className="flex items-center gap-2 text-xs font-semibold text-foreground focus-visible:outline-none"
        >
          {mobileSidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          <span>Documentation Menu</span>
        </button>
        <span className="text-xs text-muted-foreground font-mono">Kyro Docs</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 items-start">
        {/* Sidebar */}
        <aside
          className={`lg:col-span-1 fixed lg:sticky top-20 inset-x-0 bottom-0 z-30 lg:z-0 bg-background lg:bg-transparent p-6 lg:p-0 border-r border-border/80 lg:border-none overflow-y-auto max-h-[calc(100vh-5rem)] ${
            mobileSidebarOpen ? "block" : "hidden lg:block"
          }`}
        >
          <div className="flex items-center justify-between lg:hidden mb-4 pb-2 border-b border-border">
            <span className="font-bold text-sm text-foreground">Docs Navigation</span>
            <button
              type="button"
              onClick={() => setMobileSidebarOpen(false)}
              className="p-1 rounded text-muted-foreground hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="space-y-8 pr-2">
            {siteConfig.docSections.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground/80 mb-2.5">
                  {section.title}
                </h3>
                <ul className="space-y-1 text-xs sm:text-sm">
                  {section.items.map((item) => {
                    const normalizedPath = pathname.replace(/\/$/, "");
                    const normalizedHref = item.href.replace(/\/$/, "");
                    const isActive = normalizedPath === normalizedHref;
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setMobileSidebarOpen(false)}
                          className={`flex items-center justify-between px-3 py-1.5 rounded-lg transition-colors ${
                            isActive
                              ? "bg-emerald-500/10 text-emerald-500 font-semibold border border-emerald-500/20"
                              : "text-muted-foreground hover:text-foreground hover:bg-surface-hover"
                          }`}
                        >
                          <span>{item.title}</span>
                          {isActive && <ChevronRight className="h-3.5 w-3.5 text-emerald-500" />}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}

            <div className="pt-4 border-t border-border">
              <Link
                href="/contributing/"
                className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-lg hover:bg-surface-hover"
              >
                <span>Contribution Guide</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href={siteConfig.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-lg hover:bg-surface-hover"
              >
                <span>Source Repository</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <article className="lg:col-span-3 min-w-0">{children}</article>
      </div>
    </div>
  );
}
