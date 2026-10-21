"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon, Download, ChevronRight } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";
import { siteConfig } from "@/lib/site-config";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
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
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-foreground hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-md"
            aria-label="Kyro Home"
          >
            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500">
              <svg
                viewBox="0 0 512.446 512.446"
                className="h-5 w-5 fill-current"
                aria-hidden="true"
              >
                <path d="m91.149 214.979c-4.437 0-8.83-1.96-11.79-5.715l-76.139-96.584c-5.128-6.506-4.012-15.938 2.494-21.066 6.505-5.127 15.938-4.013 21.066 2.494l76.139 96.584c5.128 6.506 4.012 15.938-2.494 21.066-2.751 2.168-6.025 3.221-9.276 3.221z" fill="#00dd7b" />
                <path d="m418.547 213.461c-3.252 0-6.525-1.052-9.276-3.221-6.506-5.129-7.622-14.561-2.494-21.066l78.872-100.052c5.13-6.508 14.563-7.622 21.066-2.494 6.506 5.129 7.622 14.561 2.494 21.066l-78.872 100.052c-2.96 3.755-7.353 5.715-11.79 5.715z" fill="#00884a" />
                <path d="m488.913 429.039h-464.715c-12.997 0-23.533-10.536-23.533-23.533v-37.837c0-132.945 107.773-240.718 240.718-240.718h14.771c141.546 0 256.292 114.746 256.292 256.292v22.264c0 12.996-10.536 23.532-23.533 23.532z" fill="#00ff8d" />
                <circle cx="166.417" cy="271.878" fill="#fff5f5" r="28.345" />
                <circle cx="347.292" cy="271.878" fill="#dfebf1" r="28.345" />
              </svg>
            </div>
            <span className="font-bold tracking-tight text-lg">Kyro</span>
            <span className="hidden sm:inline-block rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-500 border border-emerald-500/20">
              v{siteConfig.currentVersion}
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
          {siteConfig.navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  isActive
                    ? "text-emerald-500 bg-emerald-500/10 font-semibold"
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
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-border bg-surface hover:bg-surface-hover text-foreground transition-colors"
            aria-label="GitHub Repository"
          >
            <GithubIcon className="h-4 w-4" />
            <span>GitHub</span>
          </Link>

          <Link
            href="/download"
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-md bg-emerald-500 text-black hover:bg-emerald-400 font-semibold shadow-sm transition-colors"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Get Kyro</span>
          </Link>

          {/* Theme Toggle */}
          {mounted && (
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-surface-hover transition-colors"
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
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-surface-hover transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 bottom-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border overflow-y-auto p-4 animate-fade-in">
          <div className="flex flex-col gap-1 pb-6">
            {siteConfig.navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "bg-emerald-500/10 text-emerald-500 font-semibold border border-emerald-500/20"
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
                href="/download"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-emerald-500 text-black font-semibold text-center hover:bg-emerald-400 transition-colors"
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
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
