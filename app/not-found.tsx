import Link from "next/link";
import { ArrowLeft, Home, BookOpen, Download, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 mb-6">
        <span className="font-mono text-2xl font-bold">404</span>
      </div>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Page Not Found
      </h1>

      <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
        The documentation page, feature link, or resource you requested could not be located in Kyro's directory.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-black hover:bg-emerald-400 transition-colors shadow-sm"
        >
          <Home className="h-4 w-4" />
          <span>Return Home</span>
        </Link>
        <Link
          href="/docs/"
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-medium text-foreground hover:bg-surface-hover transition-colors"
        >
          <BookOpen className="h-4 w-4 text-emerald-500" />
          <span>Browse Docs</span>
        </Link>
        <Link
          href="/download/"
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-medium text-foreground hover:bg-surface-hover transition-colors"
        >
          <Download className="h-4 w-4" />
          <span>Downloads</span>
        </Link>
      </div>

      <div className="mt-12 rounded-xl border border-border bg-card/60 p-6 max-w-md w-full text-left">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
          Popular Destinations
        </h2>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="/features/" className="text-emerald-500 hover:underline">
              → Features & Subsystem Overview
            </Link>
          </li>
          <li>
            <Link href="/security/" className="text-emerald-500 hover:underline">
              → Zero-Trust Security & Policy Matrix
            </Link>
          </li>
          <li>
            <Link href="/use-cases/" className="text-emerald-500 hover:underline">
              → Everyday & Developer Workflows
            </Link>
          </li>
          <li>
            <Link href="/faq/" className="text-emerald-500 hover:underline">
              → Frequently Asked Questions
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
