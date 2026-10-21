export interface Contributor {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  contributions: number;
  type?: string;
}

/**
 * Fallback contributor list strictly used as an emergency offline / rate-limit safeguard.
 * You do NOT need to manually update this when new contributors join the repository.
 * The system automatically queries the GitHub REST API at runtime and build time
 * to discover and render all contributors dynamically.
 */
export const FALLBACK_CONTRIBUTORS: Contributor[] = [
  {
    login: "eshanized",
    id: 148610067,
    avatar_url: "https://avatars.githubusercontent.com/u/148610067?v=4",
    html_url: "https://github.com/eshanized",
    contributions: 167,
    type: "User",
  },
];

export const GITHUB_CONTRIBUTORS_API =
  "https://api.github.com/repos/eshanized/Kyro/contributors?per_page=100";

/**
 * Fetch contributors dynamically from the GitHub repository API.
 * Automatically filters out automated bots and returns sorted contributors.
 */
export async function getContributors(): Promise<Contributor[]> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const res = await fetch(GITHUB_CONTRIBUTORS_API, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "Kyro-Website-Client",
      },
      next: { revalidate: 3600 },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      return FALLBACK_CONTRIBUTORS;
    }

    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) {
      return FALLBACK_CONTRIBUTORS;
    }

    // Filter out bots to prioritize human contributors
    const humanContributors = data.filter(
      (item: any) =>
        item.type !== "Bot" &&
        !String(item.login || "").endsWith("[bot]")
    );

    const source = humanContributors.length > 0 ? humanContributors : data;

    return source.map((item: any) => ({
      login: String(item.login || "contributor"),
      id: Number(item.id) || 0,
      avatar_url: String(
        item.avatar_url || "https://avatars.githubusercontent.com/u/148610067?v=4"
      ),
      html_url: String(item.html_url || `https://github.com/${item.login || "eshanized"}`),
      contributions: Number(item.contributions) || 1,
      type: String(item.type || "User"),
    }));
  } catch {
    return FALLBACK_CONTRIBUTORS;
  }
}
