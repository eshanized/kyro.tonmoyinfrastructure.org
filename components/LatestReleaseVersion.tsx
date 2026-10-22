"use client";

import { useEffect, useState } from "react";

interface LatestReleaseVersionProps {
  initialTagName?: string;
  className?: string;
}

interface GitHubLatestRelease {
  tag_name?: unknown;
}

const LATEST_RELEASE_API =
  "https://api.github.com/repos/eshanized/Kyro/releases/latest";
const CACHE_DURATION_MS = 5 * 60 * 1000;

let cachedTagName: string | null = null;
let cacheExpiresAt = 0;
let inFlightRequest: Promise<string> | null = null;

async function fetchLatestReleaseTag(): Promise<string> {
  if (cachedTagName && cacheExpiresAt > Date.now()) {
    return cachedTagName;
  }

  if (inFlightRequest) {
    return inFlightRequest;
  }

  const request = (async () => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    try {
      const response = await fetch(LATEST_RELEASE_API, {
        headers: { Accept: "application/vnd.github+json" },
        cache: "no-store",
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error("GitHub Releases API returned " + response.status);
      }

      const release = (await response.json()) as GitHubLatestRelease;
      if (typeof release.tag_name !== "string" || !release.tag_name.trim()) {
        throw new Error("GitHub response did not include a release tag");
      }

      cachedTagName = release.tag_name.trim();
      cacheExpiresAt = Date.now() + CACHE_DURATION_MS;
      return cachedTagName;
    } finally {
      clearTimeout(timeoutId);
    }
  })();
  inFlightRequest = request;

  try {
    return await request;
  } finally {
    if (inFlightRequest === request) {
      inFlightRequest = null;
    }
  }
}

export function LatestReleaseVersion({
  initialTagName,
  className,
}: LatestReleaseVersionProps) {
  const [tagName, setTagName] = useState(initialTagName || "latest");

  useEffect(() => {
    let active = true;

    fetchLatestReleaseTag()
      .then((latestTagName) => {
        if (active) {
          setTagName(latestTagName);
        }
      })
      .catch(() => {
        // keep the build-time tag when the live GitHub API is unavailable
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <span className={className} aria-label={"Latest Kyro release " + tagName}>
      {tagName}
    </span>
  );
}
