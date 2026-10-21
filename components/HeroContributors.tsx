"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, GitPullRequest, Users } from "lucide-react";
import {
  Contributor,
  FALLBACK_CONTRIBUTORS,
  GITHUB_CONTRIBUTORS_API,
} from "@/lib/contributors";

interface HeroContributorsProps {
  initialContributors?: Contributor[];
}

const CACHE_KEY = "kyro_contributors_cache_v2";
const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes cache to respect GitHub rate limits while staying fresh

export function HeroContributors({ initialContributors }: HeroContributorsProps) {
  const [contributors, setContributors] = useState<Contributor[]>(
    initialContributors && initialContributors.length > 0
      ? initialContributors
      : FALLBACK_CONTRIBUTORS
  );
  const [failedAvatars, setFailedAvatars] = useState<Record<string, boolean>>({});
  const [isLiveSynced, setIsLiveSynced] = useState<boolean>(false);

  // Dynamic client-side fetch from GitHub API on every browser visit
  useEffect(() => {
    let isMounted = true;

    const syncLiveContributors = async () => {
      // 1. Try reading recent cache from localStorage
      try {
        const cachedStr = localStorage.getItem(CACHE_KEY);
        if (cachedStr) {
          const cached = JSON.parse(cachedStr);
          const isFresh = Date.now() - (cached.timestamp || 0) < CACHE_TTL_MS;
          if (isFresh && Array.isArray(cached.data) && cached.data.length > 0) {
            if (isMounted) {
              setContributors(cached.data);
              setIsLiveSynced(true);
            }
            return;
          }
        }
      } catch {
        // LocalStorage access might be restricted; continue to direct fetch
      }

      // 2. Query GitHub Contributors API dynamically
      try {
        const res = await fetch(GITHUB_CONTRIBUTORS_API, {
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
        });

        if (!res.ok) {
          // If GitHub rate limits, keep initial contributors
          return;
        }

        const data = await res.json();
        if (Array.isArray(data) && data.length > 0 && isMounted) {
          // Filter bots dynamically
          const humanContributors = data.filter(
            (item: any) =>
              item.type !== "Bot" &&
              !String(item.login || "").endsWith("[bot]")
          );

          const list = humanContributors.length > 0 ? humanContributors : data;

          const freshList: Contributor[] = list.map((item: any) => ({
            login: String(item.login || "contributor"),
            id: Number(item.id) || 0,
            avatar_url: String(
              item.avatar_url || "https://avatars.githubusercontent.com/u/148610067?v=4"
            ),
            html_url: String(
              item.html_url || `https://github.com/${item.login || "eshanized"}`
            ),
            contributions: Number(item.contributions) || 1,
            type: String(item.type || "User"),
          }));

          setContributors(freshList);
          setIsLiveSynced(true);

          // Save to localStorage cache with timestamp
          try {
            localStorage.setItem(
              CACHE_KEY,
              JSON.stringify({
                timestamp: Date.now(),
                data: freshList,
              })
            );
          } catch {
            // Ignore quota errors
          }
        }
      } catch {
        // Silently retain fallback on network error
      }
    };

    syncLiveContributors();

    return () => {
      isMounted = false;
    };
  }, []);

  const totalContributions = contributors.reduce(
    (sum, c) => sum + (c.contributions || 0),
    0
  );

  const displayContributors = contributors.slice(0, 8);
  const remainingCount = contributors.length - displayContributors.length;

  return (
    <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-2xl sm:rounded-full border border-border/80 bg-surface/85 px-4 py-2 text-xs backdrop-blur-md shadow-xs hover:border-emerald-500/40 transition-all">
      {/* Dynamic Contributor Avatars Cluster */}
      <div className="flex items-center -space-x-2.5 overflow-visible py-0.5">
        {displayContributors.map((contributor) => {
          const hasImageFailed = failedAvatars[contributor.login];

          return (
            <a
              key={contributor.id || contributor.login}
              href={contributor.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block transition-transform duration-200 hover:scale-115 hover:z-20 focus:outline-hidden"
              title={`@${contributor.login} — ${contributor.contributions} contribution${contributor.contributions === 1 ? "" : "s"} to Kyro`}
              aria-label={`View ${contributor.login}'s profile on GitHub`}
            >
              <div className="relative h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-background border border-emerald-500/40 group-hover:border-emerald-400 group-hover:ring-emerald-500/30 overflow-hidden bg-card transition-all flex items-center justify-center">
                {!hasImageFailed ? (
                  <Image
                    src={contributor.avatar_url}
                    alt={`${contributor.login}'s GitHub avatar`}
                    width={36}
                    height={36}
                    className="h-full w-full object-cover"
                    unoptimized
                    onError={() =>
                      setFailedAvatars((prev) => ({
                        ...prev,
                        [contributor.login]: true,
                      }))
                    }
                  />
                ) : (
                  <span className="text-[11px] font-bold text-emerald-400 font-mono">
                    {contributor.login.slice(0, 2).toUpperCase()}
                  </span>
                )}
              </div>

              {/* Dynamic tooltip */}
              <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/95 px-2 py-0.5 text-[10px] font-medium text-emerald-300 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-30 border border-emerald-500/30">
                @{contributor.login} ({contributor.contributions})
              </span>
            </a>
          );
        })}

        {remainingCount > 0 && (
          <a
            href="https://github.com/eshanized/Kyro/graphs/contributors"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-emerald-500/15 text-[11px] font-bold text-emerald-400 ring-2 ring-background border border-emerald-500/40 hover:bg-emerald-500/25 hover:scale-110 transition-all"
            title={`+${remainingCount} more contributors on GitHub`}
          >
            +{remainingCount}
          </a>
        )}
      </div>

      {/* Dynamic Contributor Names & Live Sync */}
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-center sm:text-left text-muted-foreground">
        <span className="text-foreground font-medium inline-flex items-center gap-1.5">
          {contributors.length === 1 ? (
            <>
              <span>Contributed by</span>
              <a
                href={contributors[0].html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-emerald-400 hover:text-emerald-300 underline underline-offset-2 decoration-emerald-500/40 hover:decoration-emerald-400 transition-colors"
              >
                @{contributors[0].login}
              </a>
            </>
          ) : contributors.length === 2 ? (
            <>
              <span>Contributed by</span>
              <a
                href={contributors[0].html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-emerald-400 hover:text-emerald-300 hover:underline transition-colors"
              >
                @{contributors[0].login}
              </a>
              <span>&</span>
              <a
                href={contributors[1].html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-emerald-400 hover:text-emerald-300 hover:underline transition-colors"
              >
                @{contributors[1].login}
              </a>
            </>
          ) : (
            <>
              <span>Contributed by</span>
              <a
                href={contributors[0].html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-emerald-400 hover:text-emerald-300 hover:underline transition-colors"
              >
                @{contributors[0].login}
              </a>
              <span>and</span>
              <a
                href="https://github.com/eshanized/Kyro/graphs/contributors"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-foreground hover:text-emerald-400 transition-colors"
              >
                {contributors.length - 1} other contributors
              </a>
            </>
          )}
        </span>

        <span className="text-border hidden sm:inline">•</span>

        {/* Live Contribution Count Link */}
        <a
          href="https://github.com/eshanized/Kyro/graphs/contributors"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group"
          title="View full contributor graph on GitHub"
        >
          {isLiveSynced && (
            <span
              className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"
              title="Live dynamic sync with GitHub API"
            />
          )}
          <span>{totalContributions}+ contributions</span>
          <ExternalLink className="h-3 w-3 opacity-70 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>

      {/* Become a Contributor Action Link */}
      <Link
        href="/contributing/"
        className="hidden md:inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 px-2.5 py-1 text-[11px] font-semibold text-emerald-400 hover:text-emerald-300 transition-all"
        title="Become a Kyro contributor"
      >
        <GitPullRequest className="h-3 w-3" />
        <span>Contribute</span>
      </Link>
    </div>
  );
}
