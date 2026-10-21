export interface ReleaseAsset {
  name: string;
  platform: "linux" | "macos" | "windows" | "source";
  arch: "x86_64" | "arm64" | "universal" | "all";
  format: "deb" | "appimage" | "dmg" | "msi" | "exe" | "tar.gz" | "zip";
  downloadUrl: string;
  sizeBytes?: number;
  description: string;
}

export interface ReleaseInfo {
  version: string;
  tagName: string;
  releaseName: string;
  publishedAt: string;
  isDraft: boolean;
  isPrerelease: boolean;
  htmlUrl: string;
  notes: string;
  assets: ReleaseAsset[];
  isFallback?: boolean;
}

const DEFAULT_FALLBACK_RELEASE: ReleaseInfo = {
  version: "0.1.0",
  tagName: "v0.1.0",
  releaseName: "Kyro v0.1.0 (Initial Desktop Release)",
  publishedAt: "2026-10-21T18:00:00Z",
  isDraft: false,
  isPrerelease: false,
  htmlUrl: "https://github.com/eshanized/Kyro/releases/tag/v0.1.0",
  notes: `### Kyro v0.1.0 — Local-First Autonomous Desktop AI Agent

This initial release introduces the core Kyro desktop client with multi-threaded Rust native core, Tauri v2, and React 19.

#### Key Highlights
- **Dual Experience Modes**: Seamlessly switch between Everyday Mode (File Organizer, Document Assistant, Screen Explainer) and Developer Workbench (Dev Servers, Code Checkpoints, Build Doctor, UI Audit, Multi-Agent Git Worktrees).
- **Zero-Trust Security**: Centralized Rust authorization engine, lexed shell command verification, workspace path confinement, fail-closed container sandbox fallback, and OS Keyring vault.
- **Computer-Use & Visual Grounding**: Set-of-Marks (SoM) visual coordinates, native input synthesis via \`enigo\`, and isolated virtual X11 display (Ghost Mode).
- **Browser Automation**: High-fidelity Firefox WebDriver BiDi and Chromium CDP automation with origin-scoped safety.
- **Model Context Protocol (MCP)**: Native client supporting local stdio tools, remote endpoints, and GitHub OAuth PKCE connector.
- **Teach-a-Task & Scheduler**: Demonstration recorder with credential sanitization, cron & interval scheduler, and Telegram remote bridge.`,
  assets: [
    {
      name: "kyro_0.1.0_amd64.deb",
      platform: "linux",
      arch: "x86_64",
      format: "deb",
      downloadUrl: "https://github.com/eshanized/Kyro/releases/download/v0.1.0/kyro_0.1.0_amd64.deb",
      description: "Debian, Ubuntu, Linux Mint & derivatives (64-bit)",
    },
    {
      name: "kyro_0.1.0_amd64.AppImage",
      platform: "linux",
      arch: "x86_64",
      format: "appimage",
      downloadUrl: "https://github.com/eshanized/Kyro/releases/download/v0.1.0/kyro_0.1.0_amd64.AppImage",
      description: "Universal standalone Linux executable (Arch, Fedora, openSUSE, etc.)",
    },
    {
      name: "Kyro_0.1.0_aarch64.dmg",
      platform: "macos",
      arch: "arm64",
      format: "dmg",
      downloadUrl: "https://github.com/eshanized/Kyro/releases/download/v0.1.0/Kyro_0.1.0_aarch64.dmg",
      description: "Apple Silicon Macs (M1 / M2 / M3 / M4)",
    },
    {
      name: "Kyro_0.1.0_x64.dmg",
      platform: "macos",
      arch: "x86_64",
      format: "dmg",
      downloadUrl: "https://github.com/eshanized/Kyro/releases/download/v0.1.0/Kyro_0.1.0_x64.dmg",
      description: "Intel-based Mac computers",
    },
    {
      name: "Kyro_0.1.0_x64-setup.exe",
      platform: "windows",
      arch: "x86_64",
      format: "exe",
      downloadUrl: "https://github.com/eshanized/Kyro/releases/download/v0.1.0/Kyro_0.1.0_x64-setup.exe",
      description: "Windows 10 / 11 64-bit installer",
    },
    {
      name: "Kyro_0.1.0_x64_en-US.msi",
      platform: "windows",
      arch: "x86_64",
      format: "msi",
      downloadUrl: "https://github.com/eshanized/Kyro/releases/download/v0.1.0/Kyro_0.1.0_x64_en-US.msi",
      description: "Windows MSI enterprise deployment package",
    },
    {
      name: "kyro-v0.1.0-source.tar.gz",
      platform: "source",
      arch: "all",
      format: "tar.gz",
      downloadUrl: "https://github.com/eshanized/Kyro/archive/refs/tags/v0.1.0.tar.gz",
      description: "Full repository source code archive",
    },
  ],
  isFallback: true,
};

export async function getLatestRelease(): Promise<ReleaseInfo> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    const res = await fetch("https://api.github.com/repos/eshanized/Kyro/releases/latest", {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "Kyro-Website-Client",
      },
      next: { revalidate: 3600 },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      return DEFAULT_FALLBACK_RELEASE;
    }

    const data = await res.json();
    if (!data.tag_name) {
      return DEFAULT_FALLBACK_RELEASE;
    }

    const assets: ReleaseAsset[] = (data.assets || []).map((asset: any) => {
      const name: string = asset.name || "";
      const lower = name.toLowerCase();

      let platform: ReleaseAsset["platform"] = "source";
      let arch: ReleaseAsset["arch"] = "all";
      let format: ReleaseAsset["format"] = "tar.gz";

      if (lower.endsWith(".deb")) {
        platform = "linux";
        format = "deb";
        arch = lower.includes("arm64") ? "arm64" : "x86_64";
      } else if (lower.endsWith(".appimage")) {
        platform = "linux";
        format = "appimage";
        arch = lower.includes("arm64") ? "arm64" : "x86_64";
      } else if (lower.endsWith(".dmg")) {
        platform = "macos";
        format = "dmg";
        arch = lower.includes("aarch64") || lower.includes("arm64") ? "arm64" : "x86_64";
      } else if (lower.endsWith(".msi")) {
        platform = "windows";
        format = "msi";
        arch = "x86_64";
      } else if (lower.endsWith(".exe")) {
        platform = "windows";
        format = "exe";
        arch = "x86_64";
      }

      return {
        name,
        platform,
        arch,
        format,
        downloadUrl: asset.browser_download_url,
        sizeBytes: asset.size,
        description: `Release artifact for ${platform} (${arch})`,
      };
    });

    // If GitHub release exists but has no binary assets yet, attach the fallback assets for complete UX
    const mergedAssets = assets.length > 0 ? assets : DEFAULT_FALLBACK_RELEASE.assets;

    return {
      version: data.tag_name.replace(/^v/, ""),
      tagName: data.tag_name,
      releaseName: data.name || `Kyro ${data.tag_name}`,
      publishedAt: data.published_at || new Date().toISOString(),
      isDraft: Boolean(data.draft),
      isPrerelease: Boolean(data.prerelease),
      htmlUrl: data.html_url || "https://github.com/eshanized/Kyro/releases",
      notes: data.body || DEFAULT_FALLBACK_RELEASE.notes,
      assets: mergedAssets,
      isFallback: false,
    };
  } catch (_err) {
    return DEFAULT_FALLBACK_RELEASE;
  }
}
