"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, ChevronRight, Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Close mobile sidebar on route change
  useEffect(() => {
    setMobileSidebarOpen(false);
  }, [pathname]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileSidebarOpen) {
        setMobileSidebarOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileSidebarOpen]);

  // Prevent background scrolling when mobile sidebar is open
  useEffect(() => {
    if (mobileSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileSidebarOpen]);

  const renderNavLinks = (onItemClick?: () => void) => (
    <div className="space-y-7 pr-2">
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
                    onClick={onItemClick}
                    className={`flex items-center justify-between px-3 py-1.5 rounded-lg transition-colors ${
                      isActive
                        ? "bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20"
                        : "text-muted-foreground hover:text-foreground hover:bg-surface-hover"
                    }`}
                  >
                    <span>{item.title}</span>
                    {isActive && <ChevronRight className="h-3.5 w-3.5 text-emerald-400" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}

      <div className="pt-4 border-t border-border space-y-1">
        <Link
          href="/contributing/"
          onClick={onItemClick}
          className="flex items-center justify-between text-xs font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-lg hover:bg-surface-hover"
        >
          <span>Contribution Guide</span>
          <ChevronRight className="h-3.5 w-3.5 opacity-60" />
        </Link>
        <Link
          href={siteConfig.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between text-xs font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-lg hover:bg-surface-hover"
        >
          <span>Source Repository</span>
          <ChevronRight className="h-3.5 w-3.5 opacity-60" />
        </Link>
      </div>
    </div>
  );

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Mobile docs navigation toggle bar */}
      <div className="lg:hidden mb-6 flex items-center justify-between rounded-xl border border-border bg-surface p-3 shadow-xs">
        <button
          type="button"
          onClick={() => setMobileSidebarOpen(true)}
          className="flex items-center gap-2 text-xs font-semibold text-foreground focus-visible:outline-none"
          aria-expanded={mobileSidebarOpen}
          aria-label="Open documentation navigation menu"
        >
          <Menu className="h-4 w-4 text-emerald-400" />
          <span>Documentation Menu</span>
        </button>
        <span className="text-xs text-muted-foreground font-mono">Kyro Docs</span>
      </div>

      {/* Mobile Docs Drawer Overlay */}
      {mobileSidebarOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Documentation Navigation"
          className="fixed inset-0 z-50 flex flex-col bg-background/98 backdrop-blur-2xl animate-fade-in lg:hidden overflow-hidden"
        >
          <div className="flex h-16 items-center justify-between px-4 sm:px-6 border-b border-border bg-surface/50 shrink-0">
            <div className="flex items-center gap-2 text-foreground font-bold text-sm">
              <BookOpen className="h-4 w-4 text-emerald-400" />
              <span>Docs Navigation</span>
            </div>
            <button
              type="button"
              onClick={() => setMobileSidebarOpen(false)}
              className="p-2 rounded-lg border border-border bg-surface text-foreground hover:bg-surface-hover transition-colors"
              aria-label="Close docs menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-5 sm:p-6">
            {renderNavLinks(() => setMobileSidebarOpen(false))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 items-start">
        {/* Desktop Sticky Sidebar */}
        <aside className="hidden lg:block lg:col-span-1 sticky top-28 overflow-y-auto max-h-[calc(100vh-8rem)]">
          {renderNavLinks()}
        </aside>

        {/* Main Content Area */}
        <article className="lg:col-span-3 min-w-0">{children}</article>
      </div>
    </div>
  );
}
