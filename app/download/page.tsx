import { Metadata } from "next";
import Link from "next/link";
import {
  Download,
  Terminal,
  Cpu,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  HardDrive,
  FileCode,
  ShieldCheck,
} from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";
import { siteConfig } from "@/lib/site-config";
import { LatestReleaseVersion } from "@/components/LatestReleaseVersion";
import { getLatestRelease } from "@/lib/releases";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CodeBlock } from "@/components/CodeBlock";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Download Kyro Desktop Client",
  description:
    "Download official Kyro installers for Linux (deb, AppImage), macOS (Apple Silicon, Intel dmg), and Windows (msi, exe), or build from source with Cargo and npm.",
  path: "/download",
});

export default async function DownloadPage() {
  const release = await getLatestRelease();

  const linuxAssets = release.assets.filter((a) => a.platform === "linux");
  const macAssets = release.assets.filter((a) => a.platform === "macos");
  const winAssets = release.assets.filter((a) => a.platform === "windows");
  const sourceAssets = release.assets.filter((a) => a.platform === "source");

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <Breadcrumbs items={[{ label: "Downloads" }]} />

      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 mb-4">
          <Download className="h-3.5 w-3.5" />
          <span>Official Distribution Channels • Tonmoy Infrastructure</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Get Kyro for Your Platform
        </h1>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
          Kyro is an open-source product from{" "}
          <a
            href={siteConfig.organization.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 font-semibold underline hover:text-emerald-300"
          >
            Tonmoy Infrastructure
          </a>
          , owned by{" "}
          <a
            href={siteConfig.owner.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground font-semibold underline hover:text-emerald-400"
          >
            Eshan Roy
          </a>
          . It is currently available for Linux-based distributions (.deb and standalone .AppImage).
          Native pre-built installers for macOS and Windows are in active development and coming soon.
          Developers on any platform can compile from source today using Rust and Node.js.
        </p>

        {/* Platform Status Alert */}
        <div className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4 text-xs text-foreground/90 leading-relaxed flex items-start gap-3">
          <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
          <div>
            <strong className="text-emerald-400">Platform Availability Status:</strong>
            <span className="text-muted-foreground block mt-0.5">
              • <strong>Linux:</strong> Available now via native Debian/Ubuntu <code>.deb</code> package and universal <code>.AppImage</code>.
              <br />
              • <strong>macOS &amp; Windows:</strong> Coming soon! You can compile Kyro from source right now on macOS and Windows via Cargo and npm.
            </span>
          </div>
        </div>

        {/* Release Meta info */}
        <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground border-y border-border py-3">
          <div>
            <span className="text-foreground/80 font-sans font-medium">Current Version: </span>
            <LatestReleaseVersion initialTagName={release.tagName} className="text-emerald-400 font-bold" />
          </div>
          <span className="text-border">•</span>
          <div>
            <span className="text-foreground/80 font-sans font-medium">Release Date: </span>
            <span>{new Date(release.publishedAt).toLocaleDateString()}</span>
          </div>
          <span className="text-border">•</span>
          <div>
            <span className="text-foreground/80 font-sans font-medium">Downloads: </span>
            <span className="text-emerald-400 font-bold">{release.totalDownloads} total downloads</span>
          </div>
          <span className="text-border">•</span>
          <div>
            <span className="text-foreground/80 font-sans font-medium">License: </span>
            <span>MIT Open Source</span>
          </div>
          {release.isFallback && (
            <>
              <span className="text-border">•</span>
              <span className="text-amber-400 font-sans font-medium">
                (Serving Authoritative Snapshot)
              </span>
            </>
          )}
        </div>
      </div>

      {/* Platform Cards Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Linux */}
        <div className="flex flex-col md:col-span-2 lg:col-span-1 rounded-2xl border border-emerald-500/40 bg-card p-6 sm:p-7 shadow-lg shadow-emerald-500/5 transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <HardDrive className="h-5 w-5" />
            </div>
            <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-400 border border-emerald-500/30">
              Available Now
            </span>
          </div>

          <h2 className="text-xl font-bold text-foreground">Linux Distros</h2>
          <p className="mt-1 text-xs text-muted-foreground">
            Native packages for Debian, Ubuntu, Linux Mint, Fedora, Arch &amp; all modern distros.
          </p>

          <div className="mt-6 flex-1 space-y-2.5">
            {linuxAssets.map((asset) => (
              <a
                key={asset.name}
                href={asset.downloadUrl}
                className="flex items-center justify-between p-3 rounded-lg border border-border bg-surface hover:bg-surface-hover hover:border-emerald-500/40 transition-colors group"
              >
                <div>
                  <div className="font-mono text-xs font-semibold text-foreground group-hover:text-emerald-400">
                    {asset.name}
                  </div>
                  <div className="text-[11px] text-muted-foreground">{asset.description}</div>
                </div>
                <div className="flex items-center gap-2 shrink-0 ml-2">
                  {typeof asset.downloadCount === "number" && asset.downloadCount > 0 && (
                    <span className="text-[10px] font-mono font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      {asset.downloadCount} {asset.downloadCount === 1 ? "download" : "downloads"}
                    </span>
                  )}
                  <Download className="h-4 w-4 text-emerald-400" />
                </div>
              </a>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-border text-xs text-muted-foreground">
            <span className="font-semibold text-foreground/80 block mb-1">Runtime Dependencies:</span>
            <span>WebKit2GTK 4.1, libxdo, libssl</span>
          </div>
        </div>

        {/* macOS */}
        <div className="flex flex-col rounded-2xl border border-border bg-card/60 p-6 sm:p-7 transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface border border-border text-foreground">
              <Cpu className="h-5 w-5 text-muted-foreground" />
            </div>
            <span className="rounded-full bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-medium text-amber-400 border border-amber-500/30">
              Coming Soon
            </span>
          </div>

          <h2 className="text-xl font-bold text-foreground">macOS</h2>
          <p className="mt-1 text-xs text-muted-foreground">
            Apple Silicon (M1-M4) &amp; Intel Mac installers in active progress.
          </p>

          <div className="mt-6 flex-1 flex flex-col justify-center rounded-xl border border-dashed border-border bg-surface/50 p-5 text-center">
            <span className="text-xs font-semibold text-foreground">Official .dmg Installers Arriving Soon</span>
            <p className="mt-2 text-[11px] text-muted-foreground leading-relaxed">
              We are finalizing notarization and platform packaging. In the meantime, macOS users can compile and run Kyro directly from source.
            </p>
            <Link
              href="/docs/installation/"
              className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-2 text-xs font-medium text-foreground hover:bg-surface-hover hover:border-emerald-500/40 transition-colors"
            >
              <span>Build from source on macOS</span>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
            </Link>
          </div>

          <div className="mt-6 pt-4 border-t border-border text-xs text-muted-foreground">
            <span className="font-semibold text-foreground/80 block mb-1">Planned Architectures:</span>
            <span>Universal binaries for Apple Silicon (aarch64) and Intel (x86_64).</span>
          </div>
        </div>

        {/* Windows */}
        <div className="flex flex-col rounded-2xl border border-border bg-card/60 p-6 sm:p-7 transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface border border-border text-foreground">
              <Terminal className="h-5 w-5 text-muted-foreground" />
            </div>
            <span className="rounded-full bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-medium text-amber-400 border border-amber-500/30">
              Coming Soon
            </span>
          </div>

          <h2 className="text-xl font-bold text-foreground">Windows</h2>
          <p className="mt-1 text-xs text-muted-foreground">
            Windows 10 / 11 64-bit installer packages in active progress.
          </p>

          <div className="mt-6 flex-1 flex flex-col justify-center rounded-xl border border-dashed border-border bg-surface/50 p-5 text-center">
            <span className="text-xs font-semibold text-foreground">Official .msi &amp; .exe Arriving Soon</span>
            <p className="mt-2 text-[11px] text-muted-foreground leading-relaxed">
              We are finalizing Windows code signing and packaging. In the meantime, Windows users can compile and run Kyro directly from source.
            </p>
            <Link
              href="/docs/installation/"
              className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-2 text-xs font-medium text-foreground hover:bg-surface-hover hover:border-emerald-500/40 transition-colors"
            >
              <span>Build from source on Windows</span>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
            </Link>
          </div>

          <div className="mt-6 pt-4 border-t border-border text-xs text-muted-foreground">
            <span className="font-semibold text-foreground/80 block mb-1">Planned Architectures:</span>
            <span>Standard x64 installer and enterprise MSI deployment package.</span>
          </div>
        </div>
      </div>

      {/* System Requirements */}
      <section id="system-requirements" className="mt-16 scroll-mt-24">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-10">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500">
              Before You Install
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Kyro System Requirements
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              These requirements are based on Kyro's Tauri v2 desktop runtime, computer-use dependencies, and current Linux release packaging. They describe the supported runtime environment—not the larger toolchain needed to compile Kyro from source.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-border bg-surface p-5">
              <h3 className="text-sm font-semibold text-foreground">Operating system</h3>
              <ul className="mt-3 space-y-2 text-xs text-muted-foreground leading-relaxed">
                <li>• Linux x86_64 is the currently published prebuilt target.</li>
                <li>• Debian/Ubuntu-family systems can use the .deb package; other distributions can use the matching release artifact, where available.</li>
                <li>• macOS and Windows native installers are not currently published; see the platform status above.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-surface p-5">
              <h3 className="text-sm font-semibold text-foreground">Linux runtime libraries</h3>
              <ul className="mt-3 space-y-2 text-xs text-muted-foreground leading-relaxed">
                <li>• WebKit2GTK 4.1 — embedded webview runtime.</li>
                <li>• libxdo — desktop input/control support.</li>
                <li>• OpenSSL runtime libraries — secure network connections.</li>
                <li>• AppIndicator support may be needed for the tray integration.</li>
              </ul>
              <p className="mt-3 text-[11px] text-muted-foreground leading-relaxed">
                Package names vary by distribution. The development packages listed in the installation guide are for building from source, not a checklist that every end user must install.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-surface p-5">
              <h3 className="text-sm font-semibold text-foreground">Desktop session & permissions</h3>
              <ul className="mt-3 space-y-2 text-xs text-muted-foreground leading-relaxed">
                <li>• A graphical desktop session is required for screen capture, keyboard/mouse control, overlays, and the main application window.</li>
                <li>• Grant desktop or accessibility permissions when your environment requests them.</li>
                <li>• Browser automation requires a supported browser installed locally (Firefox or a Chromium-family browser).</li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-surface p-5">
              <h3 className="text-sm font-semibold text-foreground">Connectivity & optional features</h3>
              <ul className="mt-3 space-y-2 text-xs text-muted-foreground leading-relaxed">
                <li>• Internet access is needed for remote model providers, OAuth sign-in, and remote connectors.</li>
                <li>• Local storage uses SQLite; Kyro does not require a separate database server.</li>
                <li>• Docker or Podman is only required when you enable a container-backed sandbox policy; in that mode Kyro fails closed if the configured runtime is unavailable.</li>
                <li>• Telegram, GitHub/Google connectors, and external MCP services are optional and need their respective accounts or endpoints.</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
            <h3 className="text-sm font-semibold text-foreground">Hardware guidance</h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              Kyro uses native Rust services, local SQLite storage, screen capture, and image processing. A modern 64-bit computer with a working graphics desktop and enough memory to run your chosen model/browser is recommended. The repository does not define a verified minimum CPU, RAM, GPU, or disk-space specification, so we do not publish unsupported numeric minimums.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/docs/installation/"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 text-xs font-semibold text-foreground hover:border-emerald-500/40 transition-colors"
            >
              <span>Source-build prerequisites</span>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
            </Link>
            <a
              href="https://github.com/eshanized/Kyro/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 text-xs font-semibold text-foreground hover:border-emerald-500/40 transition-colors"
            >
              <span>Check release assets</span>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
            </a>
          </div>
        </div>
      </section>

      {/* Building from Source Section */}
      <section className="mt-16">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-10">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500">
              Developer Source Build
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
              Compile Kyro from Source
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              If you prefer to compile Kyro yourself or contribute to its development, clone the repository
              and run the verified Makefile targets:
            </p>
          </div>

          <div className="mt-6">
            <CodeBlock
              filename="Terminal"
              language="bash"
              code={`# 1. Clone Kyro
git clone https://github.com/eshanized/Kyro.git
cd Kyro

# 2. Install dependencies
npm install

# 3. Build optimized desktop binary
make build

# 4. Build native installer bundles (.deb, .AppImage, .dmg, .msi)
make tauri-build`}
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span>Installers output to: <code className="text-foreground">libkyro/target/release/bundle/</code></span>
            </div>
            <Link
              href="/docs/installation/"
              className="inline-flex items-center gap-1.5 font-semibold text-emerald-500 hover:text-emerald-400"
            >
              <span>View OS-specific prerequisites</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Release Notes */}
      <section className="mt-16 border-t border-border pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              Release Notes for {release.tagName}
            </h2>
            <p className="text-xs text-muted-foreground mt-1">
              Official release notes published on{" "}
              <time dateTime={release.publishedAt}>
                {new Date(release.publishedAt).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </p>
          </div>
          <a
            href="https://github.com/eshanized/Kyro/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 underline underline-offset-2 transition-colors"
          >
            <span>View release on GitHub</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
        <div className="rounded-2xl border border-border bg-surface/80 p-6 sm:p-8 backdrop-blur-xs shadow-xs">
          <MarkdownRenderer content={release.notes} />
        </div>
      </section>
    </div>
  );
}
