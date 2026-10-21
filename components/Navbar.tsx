"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon, Download, ChevronRight, ExternalLink, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";
import { siteConfig } from "@/lib/site-config";

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

  return (
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
          <span className="text-border mx-0.5 hidden xs:inline">•</span>
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
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand */}
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="group flex items-center gap-3 text-foreground hover:opacity-95 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-md"
              aria-label="Kyro Home"
            >
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 via-emerald-500/10 to-transparent border border-emerald-500/30 text-emerald-400 shadow-sm group-hover:border-emerald-500/50 group-hover:scale-105 transition-all">
                <svg
                  viewBox="0 0 512.446 512.446"
                  className="h-5 w-5 fill-current drop-shadow-sm"
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
                <div className="flex items-center gap-2">
                  <span className="font-extrabold tracking-tight text-lg group-hover:text-emerald-400 transition-colors">
                    Kyro
                  </span>
                  <span className="hidden sm:inline-block rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-mono font-medium text-emerald-400 border border-emerald-500/20">
                    v{siteConfig.currentVersion}
                  </span>
                </div>
                <span className="hidden md:inline-block text-[10px] text-muted-foreground font-medium -mt-1 tracking-tight">
                  tonmoyinfrastructure.org
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
            {siteConfig.navItems.map((item) => {
              const normalizedPath = pathname.replace(/\/$/, "");
              const normalizedHref = item.href.replace(/\/$/, "");
              const isActive =
                normalizedHref === ""
                  ? normalizedPath === ""
                  : normalizedPath === normalizedHref || normalizedPath.startsWith(`${normalizedHref}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 shadow-xs"
                      : "text-muted-foreground hover:text-foreground hover:bg-surface-hover"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2.5">
            <Link
              href={siteConfig.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-border bg-surface hover:bg-surface-hover text-foreground hover:border-border-hover transition-colors shadow-2xs"
              aria-label="GitHub Repository"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              <span>GitHub</span>
            </Link>

            <Link
              href="/download/"
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-400 text-black hover:brightness-110 shadow-sm shadow-emerald-500/20 transition-all active:scale-[0.98]"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Get Kyro</span>
            </Link>

            {/* Theme Toggle */}
            {mounted && (
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-surface-hover transition-colors"
                aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} theme`}
              >
                {resolvedTheme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>
            )}

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-surface-hover transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[88px] bottom-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border overflow-y-auto p-4 animate-fade-in">
            {/* Mobile Origin Card */}
            <div className="mb-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3.5 text-xs">
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
                  className="text-emerald-400 underline"
                >
                  Tonmoy Infrastructure
                </a>
                .
              </p>
            </div>

            <div className="flex flex-col gap-1 pb-6">
              {siteConfig.navItems.map((item) => {
                const normalizedPath = pathname.replace(/\/$/, "");
                const normalizedHref = item.href.replace(/\/$/, "");
                const isActive =
                  normalizedHref === ""
                    ? normalizedPath === ""
                    : normalizedPath === normalizedHref || normalizedPath.startsWith(`${normalizedHref}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20"
                        : "text-foreground hover:bg-surface-hover"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                );
              })}

              <div className="mt-4 pt-4 border-t border-border flex flex-col gap-2.5">
                <Link
                  href="/download/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-emerald-500 text-black font-semibold text-center hover:bg-emerald-400 transition-colors shadow-sm"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Kyro v{siteConfig.currentVersion}</span>
                </Link>
                <Link
                  href={siteConfig.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg border border-border bg-surface text-foreground font-medium text-center hover:bg-surface-hover transition-colors"
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
      </header>
    </div>
  );
}
