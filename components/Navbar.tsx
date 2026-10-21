"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon, Download, ChevronRight, ExternalLink, Sparkles, BookOpen } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";
import { siteConfig } from "@/lib/site-config";

// Primary links displayed directly on tablet viewports (768px - 1023px)
const primaryTabletNav = [
  { label: "Features", href: "/features/" },
  { label: "Docs", href: "/docs/" },
  { label: "Downloads", href: "/download/" },
  { label: "Changelog", href: "/changelog/" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const toggleTheme = () => {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const isLinkActive = (href: string) => {
    const normalizedPath = pathname.replace(/\/$/, "");
    const normalizedHref = href.replace(/\/$/, "");
    return normalizedHref === ""
      ? normalizedPath === ""
      : normalizedPath === normalizedHref || normalizedPath.startsWith(`${normalizedHref}/`);
  };

  return (
    <>
      <div className="sticky top-0 z-40 w-full">
        {/* Top Origin & Ownership Announcement Bar */}
        <div className="relative border-b border-emerald-500/15 bg-gradient-to-r from-emerald-950/40 via-surface-elevated/90 to-emerald-950/40 backdrop-blur-md px-3 sm:px-4 py-1.5 text-center text-[11px] sm:text-xs">
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-1.5 sm:gap-2 text-muted-foreground flex-wrap">
            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-foreground/90 font-medium">Kyro is an open-source product from</span>
            <a
              href="https://tonmoyinfrastructure.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-400 hover:text-emerald-300 underline underline-offset-2 decoration-emerald-500/40 inline-flex items-center gap-0.5 transition-colors"
            >
              Tonmoy Infrastructure
              <ExternalLink className="h-2.5 w-2.5 opacity-70" />
            </a>
            <span className="text-border mx-0.5 hidden sm:inline">•</span>
            <span className="text-foreground/90 font-medium">Owned by</span>
            <a
              href="https://github.com/eshanized"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-foreground hover:text-emerald-400 transition-colors"
            >
              Eshan Roy
            </a>
          </div>
        </div>

        {/* Main Navigation Header */}
        <header className="w-full border-b border-border/70 bg-background/85 backdrop-blur-xl transition-colors shadow-sm">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8">
            {/* Brand */}
            <div className="flex items-center gap-4 sm:gap-6 shrink-0">
              <Link
                href="/"
                className="group flex items-center gap-2.5 sm:gap-3 text-foreground hover:opacity-95 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-md"
                aria-label="Kyro Home"
              >
                <div className="relative flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 via-emerald-500/10 to-transparent border border-emerald-500/30 text-emerald-400 shadow-sm group-hover:border-emerald-500/50 group-hover:scale-105 transition-all">
                  <svg
                    viewBox="0 0 512.446 512.446"
                    className="h-4 w-4 sm:h-5 sm:w-5 fill-current drop-shadow-sm"
                    aria-hidden="true"
                  >
                    <path d="m91.149 214.979c-4.437 0-8.83-1.96-11.79-5.715l-76.139-96.584c-5.128-6.506-4.012-15.938 2.494-21.066 6.505-5.127 15.938-4.013 21.066 2.494l76.139 96.584c5.128 6.506 4.012 15.938-2.494 21.066-2.751 2.168-6.025 3.221-9.276 3.221z" fill="#00dd7b" />
                    <path d="m418.547 213.461c-3.252 0-6.525-1.052-9.276-3.221-6.506-5.129-7.622-14.561-2.494-21.066l78.872-100.052c5.13-6.508 14.563-7.622 21.066-2.494 6.506 5.129 7.622 14.561 2.494 21.066l-78.872 100.052c-2.96 3.755-7.353 5.715-11.79 5.715z" fill="#00884a" />
                    <path d="m488.913 429.039h-464.715c-12.997 0-23.533-10.536-23.533-23.533v-37.837c0-132.945 107.773-240.718 240.718-240.718h14.771c141.546 0 256.292 114.746 256.292 256.292v22.264c0 12.996-10.536 23.532-23.533 23.532z" fill="#00ff8d" />
                    <circle cx="166.417" cy="271.878" fill="#fff5f5" r="28.345" />
                    <circle cx="347.292" cy="271.878" fill="#dfebf1" r="28.345" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="font-extrabold tracking-tight text-base sm:text-lg group-hover:text-emerald-400 transition-colors">
                      Kyro
                    </span>
                    <span className="inline-block rounded-full bg-emerald-500/10 px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-mono font-medium text-emerald-400 border border-emerald-500/20">
                      v{siteConfig.currentVersion}
                    </span>
                  </div>
                  <span className="hidden xl:inline-block text-[10px] text-muted-foreground font-medium -mt-1 tracking-tight">
                    tonmoyinfrastructure.org
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation (Full link list on >= 1024px) */}
            <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
              {siteConfig.navItems.map((item) => {
                const active = isLinkActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-2.5 xl:px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      active
                        ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 shadow-xs"
                        : "text-muted-foreground hover:text-foreground hover:bg-surface-hover"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Tablet Navigation (Primary links on 768px - 1023px) */}
            <nav className="hidden md:flex lg:hidden items-center gap-1 text-xs font-semibold">
              {primaryTabletNav.map((item) => {
                const active = isLinkActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-2.5 py-1.5 rounded-lg transition-all ${
                      active
                        ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/20"
                        : "text-muted-foreground hover:text-foreground hover:bg-surface-hover"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-1.5 sm:gap-2.5">
              <Link
                href={siteConfig.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-medium rounded-lg border border-border bg-surface hover:bg-surface-hover text-foreground hover:border-border-hover transition-colors shadow-2xs"
                aria-label="GitHub Repository"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                <span className="hidden md:inline">GitHub</span>
              </Link>

              <Link
                href="/download/"
                className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 text-xs font-bold rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-400 text-black hover:brightness-110 shadow-sm shadow-emerald-500/20 transition-all active:scale-[0.98] shrink-0"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Get Kyro</span>
              </Link>

              {/* Theme Toggle */}
              {mounted && (
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="p-1.5 sm:p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-surface-hover transition-colors"
                  aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} theme`}
                >
                  {resolvedTheme === "dark" ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )}
                </button>
              )}

              {/* Tablet & Mobile Menu Trigger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden flex items-center gap-1.5 p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg border border-border bg-surface hover:bg-surface-hover text-foreground transition-colors"
                aria-expanded={mobileMenuOpen}
                aria-label="Open navigation menu"
              >
                <Menu className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400" />
                <span className="text-xs font-semibold hidden sm:inline">Menu</span>
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile & Tablet Full-Featured Navigation Drawer (Rendered outside header to avoid backdrop-filter containing block issues) */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site Navigation"
          className="fixed inset-0 z-50 flex flex-col bg-background/98 backdrop-blur-2xl animate-fade-in lg:hidden overflow-hidden"
        >
          {/* Drawer Top Bar */}
          <div className="flex h-16 items-center justify-between px-4 sm:px-6 border-b border-border/80 bg-surface/40 shrink-0">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 text-foreground"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border border-emerald-500/30 text-emerald-400">
                <svg viewBox="0 0 512.446 512.446" className="h-4 w-4 fill-current" aria-hidden="true">
                  <path d="m91.149 214.979c-4.437 0-8.83-1.96-11.79-5.715l-76.139-96.584c-5.128-6.506-4.012-15.938 2.494-21.066 6.505-5.127 15.938-4.013 21.066 2.494l76.139 96.584c5.128 6.506 4.012 15.938-2.494 21.066-2.751 2.168-6.025 3.221-9.276 3.221z" fill="#00dd7b" />
                  <path d="m418.547 213.461c-3.252 0-6.525-1.052-9.276-3.221-6.506-5.129-7.622-14.561-2.494-21.066l78.872-100.052c5.13-6.508 14.563-7.622 21.066-2.494 6.506 5.129 7.622 14.561 2.494 21.066l-78.872 100.052c-2.96 3.755-7.353 5.715-11.79 5.715z" fill="#00884a" />
                  <path d="m488.913 429.039h-464.715c-12.997 0-23.533-10.536-23.533-23.533v-37.837c0-132.945 107.773-240.718 240.718-240.718h14.771c141.546 0 256.292 114.746 256.292 256.292v22.264c0 12.996-10.536 23.532-23.533 23.532z" fill="#00ff8d" />
                  <circle cx="166.417" cy="271.878" fill="#fff5f5" r="28.345" />
                  <circle cx="347.292" cy="271.878" fill="#dfebf1" r="28.345" />
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold tracking-tight text-base text-foreground">Kyro</span>
                  <span className="rounded-full bg-emerald-500/10 px-1.5 py-0.2 text-[9px] font-mono font-medium text-emerald-400 border border-emerald-500/20">
                    v{siteConfig.currentVersion}
                  </span>
                </div>
                <span className="text-[10px] text-muted-foreground font-medium -mt-0.5">
                  Navigation Menu
                </span>
              </div>
            </Link>

            <div className="flex items-center gap-2">
              {mounted && (
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-border bg-surface text-xs text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Toggle theme"
                >
                  {resolvedTheme === "dark" ? (
                    <>
                      <Sun className="h-3.5 w-3.5 text-amber-400" />
                      <span className="text-[11px]">Light</span>
                    </>
                  ) : (
                    <>
                      <Moon className="h-3.5 w-3.5 text-cyan-400" />
                      <span className="text-[11px]">Dark</span>
                    </>
                  )}
                </button>
              )}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg border border-border bg-surface text-foreground hover:bg-surface-hover hover:border-emerald-500/40 transition-colors"
                aria-label="Close navigation menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Navigation Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
            {/* Mobile Origin Card */}
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3.5 text-xs">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold mb-1">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Tonmoy Infrastructure Product</span>
              </div>
              <p className="text-muted-foreground text-[11px] leading-relaxed">
                Kyro is engineered & owned by <strong>Eshan Roy</strong> at{" "}
                <a
                  href="https://tonmoyinfrastructure.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 underline font-medium"
                >
                  Tonmoy Infrastructure
                </a>
                .
              </p>
            </div>

            {/* Navigation items list */}
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground px-2 mb-2">
                Navigation
              </div>
              <div className="flex flex-col gap-1">
                {siteConfig.navItems.map((item) => {
                  const active = isLinkActive(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        active
                          ? "bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20"
                          : "text-foreground hover:bg-surface-hover"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Documentation Quick Links */}
            <div className="rounded-xl border border-border/70 bg-surface/40 p-3.5">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground/90 mb-2.5">
                <BookOpen className="h-3.5 w-3.5 text-emerald-400" />
                <span>Documentation Guides</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs">
                <Link
                  href="/docs/installation/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-md hover:bg-surface-hover text-muted-foreground hover:text-foreground flex items-center justify-between"
                >
                  <span>Installation</span>
                  <ChevronRight className="h-3 w-3 opacity-60" />
                </Link>
                <Link
                  href="/docs/configuration/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-md hover:bg-surface-hover text-muted-foreground hover:text-foreground flex items-center justify-between"
                >
                  <span>Configuration</span>
                  <ChevronRight className="h-3 w-3 opacity-60" />
                </Link>
                <Link
                  href="/docs/security/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-md hover:bg-surface-hover text-muted-foreground hover:text-foreground flex items-center justify-between"
                >
                  <span>Security & Zero-Trust</span>
                  <ChevronRight className="h-3 w-3 opacity-60" />
                </Link>
                <Link
                  href="/docs/architecture/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-md hover:bg-surface-hover text-muted-foreground hover:text-foreground flex items-center justify-between"
                >
                  <span>Architecture</span>
                  <ChevronRight className="h-3 w-3 opacity-60" />
                </Link>
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="pt-2 border-t border-border flex flex-col gap-2.5">
              <Link
                href="/download/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-400 text-black font-bold text-center hover:brightness-110 transition-all shadow-sm shadow-emerald-500/20 text-xs sm:text-sm"
              >
                <Download className="h-4 w-4" />
                <span>Get Kyro v{siteConfig.currentVersion}</span>
              </Link>
              <Link
                href={siteConfig.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg border border-border bg-surface text-foreground text-xs sm:text-sm font-medium text-center hover:bg-surface-hover transition-colors"
              >
                <GithubIcon className="h-4 w-4" />
                <span>View on GitHub</span>
              </Link>
              <a
                href="https://tonmoyinfrastructure.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 w-full py-2 px-4 rounded-lg border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-medium text-center hover:bg-emerald-500/10 transition-colors"
              >
                <span>Visit Tonmoy Infrastructure</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
