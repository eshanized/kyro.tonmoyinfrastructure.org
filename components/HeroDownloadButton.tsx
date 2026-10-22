"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Download } from "lucide-react";
import { GITHUB_RELEASES_API } from "@/lib/releases";
import { LatestReleaseVersion } from "@/components/LatestReleaseVersion";

interface HeroDownloadButtonProps {
  initialDownloads?: number;
  className?: string;
  label?: string;
  href?: string;
  showVersion?: boolean;
  initialTagName?: string;
}

const CACHE_KEY = "kyro_downloads_cache_v2";
const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes cache

export function HeroDownloadButton({
  initialDownloads = 2,
  className,
  label = "Download for Free",
  href = "/download/",
  showVersion = false,
  initialTagName,
}: HeroDownloadButtonProps) {
  const [downloads, setDownloads] = useState<number>(initialDownloads);

  // Dynamic client-side synchronization with GitHub Releases API
  useEffect(() => {
    let isMounted = true;

    const syncLiveDownloads = async () => {
      // 1. Check local cache
      try {
        const cachedStr = localStorage.getItem(CACHE_KEY);
        if (cachedStr) {
          const cached = JSON.parse(cachedStr);
          const isFresh = Date.now() - (cached.timestamp || 0) < CACHE_TTL_MS;
          if (isFresh && typeof cached.count === "number" && cached.count > 0) {
            if (isMounted) {
              setDownloads(cached.count);
            }
            return;
          }
        }
      } catch {
        // Continue to direct fetch
      }

      // 2. Fetch releases from GitHub
      try {
        const res = await fetch(GITHUB_RELEASES_API, {
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
        });

        if (!res.ok) return;

        const releases = await res.json();
        if (Array.isArray(releases) && isMounted) {
          let totalCount = 0;
          for (const rel of releases) {
            if (Array.isArray(rel.assets)) {
              for (const asset of rel.assets) {
                totalCount += Number(asset.download_count) || 0;
              }
            }
          }

          if (totalCount > 0) {
            setDownloads(totalCount);

            try {
              localStorage.setItem(
                CACHE_KEY,
                JSON.stringify({
                  timestamp: Date.now(),
                  count: totalCount,
                })
              );
            } catch {
              // Ignore cache write error
            }
          }
        }
      } catch {
        // Silently retain fallback count
      }
    };

    syncLiveDownloads();

    return () => {
      isMounted = false;
    };
  }, []);

  const formattedCount = downloads.toLocaleString();

  return (
    <Link
      href={href}
      className={
        className ||
        "inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400 px-5 py-3.5 text-sm font-bold text-black hover:brightness-110 transition-all shadow-md shadow-emerald-500/25 active:scale-[0.98] group"
      }
      title={`Download Kyro — ${formattedCount} total downloads from GitHub Releases`}
    >
      <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
      <span>{label}</span>
      {showVersion && (
        <span className="font-mono text-xs font-bold">
          <LatestReleaseVersion initialTagName={initialTagName} />
        </span>
      )}
      <span
        className="inline-flex items-center rounded-full bg-black/15 px-2 py-0.5 text-[11px] font-bold text-black/95 tracking-tight group-hover:bg-black/20 transition-colors"
        aria-label={`${formattedCount} total downloads`}
      >
        <span className="hidden sm:inline">
          {formattedCount} {downloads === 1 ? "download" : "downloads"}
        </span>
        <span className="sm:hidden">{formattedCount} dls</span>
      </span>
    </Link>
  );
}
