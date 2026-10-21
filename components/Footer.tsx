import Link from "next/link";
import { Shield, Terminal, BookOpen, Download, Cpu } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface text-sm transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand info */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 font-bold text-lg text-foreground">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500">
                <svg viewBox="0 0 512.446 512.446" className="h-4 w-4 fill-current" aria-hidden="true">
                  <path d="m91.149 214.979c-4.437 0-8.83-1.96-11.79-5.715l-76.139-96.584c-5.128-6.506-4.012-15.938 2.494-21.066 6.505-5.127 15.938-4.013 21.066 2.494l76.139 96.584c5.128 6.506 4.012 15.938-2.494 21.066-2.751 2.168-6.025 3.221-9.276 3.221z" fill="#00dd7b" />
                  <path d="m418.547 213.461c-3.252 0-6.525-1.052-9.276-3.221-6.506-5.129-7.622-14.561-2.494-21.066l78.872-100.052c5.13-6.508 14.563-7.622 21.066-2.494 6.506 5.129 7.622 14.561 2.494 21.066l-78.872 100.052c-2.96 3.755-7.353 5.715-11.79 5.715z" fill="#00884a" />
                  <path d="m488.913 429.039h-464.715c-12.997 0-23.533-10.536-23.533-23.533v-37.837c0-132.945 107.773-240.718 240.718-240.718h14.771c141.546 0 256.292 114.746 256.292 256.292v22.264c0 12.996-10.536 23.532-23.533 23.532z" fill="#00ff8d" />
                  <circle cx="166.417" cy="271.878" fill="#fff5f5" r="28.345" />
                  <circle cx="347.292" cy="271.878" fill="#dfebf1" r="28.345" />
                </svg>
              </div>
              <span>Kyro</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-sm leading-relaxed">
              Open-source, local-first autonomous desktop AI agent built with Tauri v2, Rust native core, and React 19. Designed for privacy, reliability, and precision.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <Link
                href={siteConfig.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub Repository"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GitHub Repository</span>
              </Link>
              <span className="text-border">•</span>
              <span className="inline-flex items-center text-xs text-emerald-500 font-mono">
                MIT License
              </span>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Product
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/features" className="hover:text-foreground transition-colors">
                  Features Overview
                </Link>
              </li>
              <li>
                <Link href="/use-cases" className="hover:text-foreground transition-colors">
                  Workflows & Use Cases
                </Link>
              </li>
              <li>
                <Link href="/download" className="hover:text-foreground transition-colors">
                  Downloads & Platforms
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="hover:text-foreground transition-colors">
                  Changelog & Releases
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-foreground transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Architecture & Security */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Trust & Tech
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/security" className="hover:text-foreground transition-colors">
                  Security Boundaries
                </Link>
              </li>
              <li>
                <Link href="/docs/architecture" className="hover:text-foreground transition-colors">
                  Runtime Architecture
                </Link>
              </li>
              <li>
                <Link href="/docs/security" className="hover:text-foreground transition-colors">
                  Authorization Engine
                </Link>
              </li>
              <li>
                <Link href="/docs/mcp-connectors" className="hover:text-foreground transition-colors">
                  MCP & Connectors
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Community & Open Source */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Open Source
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/docs" className="hover:text-foreground transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/contributing" className="hover:text-foreground transition-colors">
                  Contribution Guide
                </Link>
              </li>
              <li>
                <Link href={siteConfig.discussionsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  GitHub Discussions
                </Link>
              </li>
              <li>
                <Link href={siteConfig.issuesUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  Issue Tracker
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-foreground transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Eshan Roy & Kyro Contributors. Released under the MIT License.</p>
          <div className="flex items-center gap-4">
            <Link href="/about" className="hover:text-foreground transition-colors">
              About Kyro
            </Link>
            <Link href="/security" className="hover:text-foreground transition-colors">
              Security
            </Link>
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
