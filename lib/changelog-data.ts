export interface ChangelogEntry {
  version: string;
  date: string;
  title: string;
  type: "release" | "commit-milestone";
  commitHash?: string;
  summary: string;
  changes: {
    category: "Features" | "Security" | "Architecture" | "CI/CD" | "Testing" | "Fixes";
    items: string[];
  }[];
}

export const changelogEntries: ChangelogEntry[] = [
  {
    version: "v0.1.0",
    date: "2026-10-21",
    title: "Kyro Desktop Initial Release (v0.1.0)",
    type: "release",
    commitHash: "1d31a7f",
    summary:
      "First public release of the Kyro local-first autonomous desktop AI agent, featuring dual experience modes, zero-trust security governance, browser automation, and MCP client.",
    changes: [
      {
        category: "Features",
        items: [
          "Dual Experience Modes: Everyday Mode (File Organizer, Document Assistant, Screen Explainer) and Dev Workbench (Dev Servers, Code Checkpoints, Build Doctor, UI Audit, Multi-Agent Worktrees).",
          "Visual Grounding: Set-of-Marks (SoM) visual marker system with native mouse & keyboard input synthesis.",
          "Browser Automation: Provider-neutral WebSocket bridge supporting Firefox WebDriver BiDi and Chromium CDP with origin security.",
          "Model Context Protocol (MCP): Complete client manager supporting local stdio tools, remote endpoints, and GitHub OAuth PKCE.",
          "Teach-a-Task & Scheduler: User demonstration recorder with credential sanitization, cron & interval scheduler, and Telegram remote bridge.",
        ],
      },
      {
        category: "Security",
        items: [
          "Centralized Authorization Engine with argument-aware shell tokenization.",
          "100% Local-First Storage with SQLite WAL mode and versioned migrations.",
          "OS Keyring Vault for API keys with AES-256-GCM authenticated fallback.",
          "Fail-closed container sandbox fallback (never falls back to host if container engine is missing when SandboxOnly is requested).",
          "Sensitive checkpoint detection (2FA, CAPTCHAs, passwords) triggering automatic human takeover.",
        ],
      },
      {
        category: "CI/CD",
        items: [
          "Multi-platform Tauri build pipeline targeting Linux (deb, AppImage), macOS (Apple Silicon, Intel x86_64), and Windows (msi, exe).",
          "Automated verification suite with over 230 backend Rust tests and 60+ frontend Vitest tests.",
        ],
      },
    ],
  },
  {
    version: "commit-a29563f",
    date: "2026-10-21",
    title: "Robust Node.js runtime resolution in test environments",
    type: "commit-milestone",
    commitHash: "a29563f",
    summary:
      "Added PATH fallback resolution and symlink handling for /usr/local/bin to guarantee browser automation worker tests pass across diverse CI environments.",
    changes: [
      {
        category: "Testing",
        items: [
          "Ensure worker.mjs subprocess executes reliably in containerized or headless environments.",
          "Provision Node.js v22 in backend test execution scripts.",
        ],
      },
    ],
  },
  {
    version: "commit-761a272",
    date: "2026-10-21",
    title: "Typography refinement & UI polish",
    type: "commit-milestone",
    commitHash: "761a272",
    summary:
      "Refined desktop application typography to Roboto with Geist Mono for code blocks, harmonizing dark mode surfaces and high-contrast labels.",
    changes: [
      {
        category: "Features",
        items: [
          "Standardized font tokens across desktop shell, modal dialogs, and HUD panels.",
          "Enhanced contrast on secondary labels, step timeline badges, and code diff views.",
        ],
      },
    ],
  },
  {
    version: "commit-896a9f7",
    date: "2026-10-21",
    title: "Dual experience modes in application shell",
    type: "commit-milestone",
    commitHash: "896a9f7",
    summary:
      "Integrated mode selector in main header allowing non-developers to focus on everyday file and document workflows while engineers access dev servers, checkpoints, and multi-agent worktrees.",
    changes: [
      {
        category: "Features",
        items: [
          "Integrated FileOrganizerModal, DocumentAssistantModal, and ScreenExplainerModal into everyday workflow menu.",
          "Integrated DevWorkbenchModal with tabs for Dev Servers, Checkpoints, Build Doctor, UI Audit, and Multi-Agent Workspace.",
          "Added IPC command handlers and frontend types across all 75 registered endpoints.",
        ],
      },
    ],
  },
  {
    version: "commit-b779ed3",
    date: "2026-10-20",
    title: "Multi-agent workspace with Git worktree isolation",
    type: "commit-milestone",
    commitHash: "b779ed3",
    summary:
      "Implemented multi-agent roster (Apex, Forge, Scout) executing specialized subtasks in isolated Git worktrees with reviewed reconciliation.",
    changes: [
      {
        category: "Architecture",
        items: [
          "Added MultiAgentWorkspace engine with 5 specialist roles and dependency graphs.",
          "Implemented git worktree isolation to prevent parallel agents from colliding on working copies.",
          "Provided reviewed reconciliation step before changes merge back to parent branch.",
        ],
      },
    ],
  },
  {
    version: "commit-0ce0334",
    date: "2026-10-20",
    title: "Visual regression baseline engine and UI audit workflow",
    type: "commit-milestone",
    commitHash: "0ce0334",
    summary:
      "Added autonomous UI audit engine that discovers routes, tests multi-viewport responsive baselines, and generates reproducible markdown defect reports.",
    changes: [
      {
        category: "Features",
        items: [
          "Visual regression baseline engine in ~/.config/kyro/baselines/.",
          "Automated pixel diff percentage computation.",
          "Multi-viewport auditing across Desktop (1920x1080), Tablet (768x1024), and Mobile (375x812).",
        ],
      },
    ],
  },
];
