import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CodeBlock } from "@/components/CodeBlock";
import { CheckCircle2, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Installation & System Prerequisites",
  description:
    "System dependencies and compilation instructions for setting up Kyro on Linux, macOS, and Windows.",
};

export default function InstallationDocPage() {
  return (
    <div className="space-y-10">
      <Breadcrumbs
        items={[
          { label: "Docs", href: "/docs" },
          { label: "Installation & Prerequisites" },
        ]}
      />

      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500">
          Setup Guide
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Installation & Prerequisites
        </h1>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
          Follow these instructions to configure system dependencies and compile the Kyro desktop application.
        </p>
      </div>

      {/* Minimum Requirements */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Core Toolchain Requirements</h2>
        <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <span><strong>Node.js:</strong> &ge; 20.x (Node 22 recommended) with npm</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <span><strong>Rust:</strong> &ge; 1.75.0 (stable toolchain: rustc, cargo)</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <span><strong>Git:</strong> Standard git command-line tool</span>
          </li>
        </ul>
      </section>

      {/* OS-Specific System Dependencies */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-foreground">OS-Specific System Packages</h2>

        <div>
          <h3 className="text-base font-semibold text-foreground mb-2">Ubuntu / Debian</h3>
          <p className="text-xs text-muted-foreground mb-3">
            Tauri v2 and the native computer-use subsystem require WebKit2GTK 4.1, XDO mouse emulation, and SSL headers:
          </p>
          <CodeBlock
            filename="Terminal (Ubuntu/Debian)"
            language="bash"
            code={`sudo apt-get update && sudo apt-get install -y \\
  libwebkit2gtk-4.1-dev \\
  build-essential \\
  curl \\
  wget \\
  file \\
  libxdo-dev \\
  libssl-dev \\
  libayatana-appindicator3-dev \\
  librsvg2-dev \\
  xvfb`}
          />
        </div>

        <div>
          <h3 className="text-base font-semibold text-foreground mb-2">macOS</h3>
          <p className="text-xs text-muted-foreground mb-3">
            Install the standard Xcode command line developer tools:
          </p>
          <CodeBlock
            filename="Terminal (macOS)"
            language="bash"
            code={`xcode-select --install`}
          />
        </div>

        <div>
          <h3 className="text-base font-semibold text-foreground mb-2">Windows</h3>
          <p className="text-xs text-muted-foreground mb-3">
            Windows requires the Microsoft C++ Build Tools and the Edge WebView2 runtime:
          </p>
          <ul className="space-y-1.5 text-xs text-muted-foreground">
            <li>• <a href="https://visualstudio.microsoft.com/visual-cpp-build-tools/" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:underline">Microsoft C++ Build Tools (MSVC v143+)</a></li>
            <li>• <a href="https://developer.microsoft.com/en-us/microsoft-edge/webview2/" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:underline">Microsoft Edge WebView2 Runtime</a> (standard on Windows 11)</li>
          </ul>
        </div>
      </section>

      {/* Build Steps */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Building from Repository</h2>

        <CodeBlock
          filename="Terminal"
          language="bash"
          code={`# 1. Clone the repository
git clone https://github.com/eshanized/Kyro.git
cd Kyro

# 2. Install Node dependencies
npm install

# 3. Launch the full desktop application in development
make dev

# Or run the Vite frontend standalone in browser
make dev-ui`}
        />
      </section>

      {/* Verification */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Verification Pipeline</h2>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Before submitting pull requests or packaging releases, execute Kyro's unified verification target:
        </p>
        <CodeBlock
          filename="Terminal"
          language="bash"
          code={`make verify`}
        />
        <p className="text-xs text-muted-foreground">
          This runs: formatting check (<code className="text-foreground">rustfmt</code>), strict Clippy linting (<code className="text-foreground">-D warnings</code>), 230+ Rust unit and integration tests, frontend Vitest tests, and production build checks.
        </p>
      </section>
    </div>
  );
}
