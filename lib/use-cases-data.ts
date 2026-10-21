export interface UseCaseItem {
  id: string;
  title: string;
  targetAudience: "Everyday Users" | "Software Engineers" | "Technical Teams";
  problem: string;
  capability: string;
  workflow: string[];
  prerequisites: string[];
  docLink: string;
  featureId: string;
}

export const useCasesData: UseCaseItem[] = [
  {
    id: "file-organization-cleanup",
    title: "Safe Local Directory Cleanup & Deduplication",
    targetAudience: "Everyday Users",
    problem:
      "Downloads and project folders quickly accumulate disorganized PDFs, images, archives, and duplicate downloads with duplicate filenames (e.g. 'file(1).pdf'), consuming disk space and creating clutter.",
    capability:
      "Safe Reversible File Organizer with SHA-256 content deduplication, extension-based categorization rules, destination collision handling, and rollback manifests.",
    workflow: [
      "Select a target directory (such as ~/Downloads) in Kyro's Everyday Mode.",
      "Kyro scans the tree, computes SHA-256 hashes to group byte-for-byte identical files, and drafts a proposed reorganization plan.",
      "Review the interactive preview showing exact source and destination paths.",
      "Click Execute to safely relocate files and archive duplicate copies into a dedicated duplicates folder.",
      "If the result is not desired, click 'Rollback' at any time to restore every file back to its original location using the SQLite transaction manifest.",
    ],
    prerequisites: [
      "Standard user filesystem read and write permissions to the targeted directory.",
      "Available disk space to move files within the same filesystem volume.",
    ],
    docLink: "/docs/everyday-workflows",
    featureId: "file-organizer",
  },
  {
    id: "private-document-analysis",
    title: "Confidential Document Extraction & Revision Diffing",
    targetAudience: "Everyday Users",
    problem:
      "Users need to extract critical dates, action items, and contractual commitments from multi-page PDFs or compare two contract revisions, but cannot upload confidential business files to cloud-hosted web AI tools.",
    capability:
      "Local-First Document Assistant with native Rust PDF stream decompression (FlateDecode), Tj/TJ text operator extraction, regex date parsers, and side-by-side diff viewers.",
    workflow: [
      "Drop or browse a local PDF or text document into the Document Assistant modal.",
      "Kyro parses the raw PDF streams locally in Rust without sending document bytes over the network.",
      "Review the structured summary listing extracted dates, milestones, and pending action items.",
      "Select a second revision to view a visual side-by-side diff highlighting all added, deleted, and modified text blocks.",
      "Optionally send specific extracted text fragments to your configured model for tailored summarization.",
    ],
    prerequisites: [
      "Standard unencrypted PDF or plain-text file on local disk.",
      "Configured LLM endpoint if conversational synthesis of the extracted text is requested.",
    ],
    docLink: "/docs/everyday-workflows",
    featureId: "document-assistant",
  },
  {
    id: "web-ui-visual-regression",
    title: "Autonomous Web UI Regression & Responsive Auditing",
    targetAudience: "Software Engineers",
    problem:
      "Refactoring frontend code or updating styling dependencies frequently introduces unintended layout shifts, responsive breakages on mobile screens, or broken image links that are difficult to catch manually.",
    capability:
      "Autonomous UI Audit Workflow with multi-viewport baseline comparisons, pixel diff calculations, and markdown defect reports.",
    workflow: [
      "Open Developer Workbench and point Kyro to your web project directory.",
      "Kyro boots the local development server (e.g. Next.js on port 3000 or Vite on port 5173) and extracts discovered routes.",
      "Kyro launches a browser session via WebDriver BiDi or CDP, capturing full-page renders at Desktop (1920x1080), Tablet (768x1024), and Mobile (375x812) viewports.",
      "The Visual Regression Engine compares renders against saved baselines in ~/.config/kyro/baselines/, flagging layout shifts with exact pixel percentage differences.",
      "Review the aggregated markdown audit report detailing console errors, accessibility warnings, and visual diff screenshots.",
    ],
    prerequisites: [
      "Local Node.js environment with project dependencies installed.",
      "Supported browser (Firefox, Chromium, Chrome, Brave, or Edge) installed locally.",
    ],
    docLink: "/docs/browser",
    featureId: "ui-audit",
  },
  {
    id: "multi-agent-feature-development",
    title: "Parallel Feature Development with Git Worktree Isolation",
    targetAudience: "Software Engineers",
    problem:
      "Autonomous AI coding agents frequently overwrite uncommitted developer edits, corrupt the git index, or conflict with each other when attempting multiple parallel tasks on the same repository.",
    capability:
      "Multi-Agent Workspace with specialist bot roster (Apex, Forge, Scout) executing in isolated Git worktrees with reviewed reconciliation.",
    workflow: [
      "Initiate a complex feature request in the Dev Workbench.",
      "Kyro divides the initiative across specialist agents: Scout explores repository architecture, Forge writes code, and Apex orchestrates integration.",
      "Kyro creates isolated Git worktree checkouts for each agent, allowing Forge to compile and test code without touching your primary working directory.",
      "Each agent completes its subtask and records status updates in the roster timeline.",
      "Review the final unified diff in the reconciliation panel before approving the branch merge into your working tree.",
    ],
    prerequisites: [
      "Git repository on local disk with clean commit history.",
      "Sufficient disk space for secondary worktree clones.",
    ],
    docLink: "/docs/developer-workbench",
    featureId: "multi-agent-workspace",
  },
  {
    id: "compiler-failure-triage",
    title: "Automated Compiler Diagnostic Triage & Repair",
    targetAudience: "Software Engineers",
    problem:
      "Cryptic compiler errors (such as Rust borrow checker errors or TypeScript type mismatches) interrupt development flow, requiring developers to manually parse verbose terminal output.",
    capability:
      "Build Doctor automated diagnostic engine with compiler error parsing and unified diff patch synthesis.",
    workflow: [
      "Run your build or test command from Kyro's integrated terminal or trigger Build Doctor upon task failure.",
      "Build Doctor parses the raw stderr stream, extracting Rust error codes (error[E0382]), TypeScript codes (TS2322), or Vitest failure assertions.",
      "The engine pinpoints the exact offending file, line number, and column.",
      "Build Doctor inspects surrounding code context and synthesizes candidate fix patches formatted as unified diffs.",
      "Review the proposed code change and apply it with one click or pass it to Forge for regression verification.",
    ],
    prerequisites: [
      "Standard compiler or test runner output streams.",
      "Workspace path located within an authorized directory tree.",
    ],
    docLink: "/docs/developer-workbench",
    featureId: "build-doctor",
  },
  {
    id: "routine-scheduling-telegram",
    title: "Automated Desktop Routines with Mobile Telegram Alerts",
    targetAudience: "Technical Teams",
    problem:
      "Teams need recurring desktop maintenance routines (such as nightly build verifications or status checks) to run unattended, with immediate notifications delivered to mobile devices.",
    capability:
      "Teach-a-Task recorder, timezone-aware cron routine scheduler, and Telegram Remote Bridge with fail-closed authentication.",
    workflow: [
      "Record a demonstration sequence in Kyro or construct a prompt workflow with required tools.",
      "Configure a schedule using standard cron expressions with explicit IANA timezone support.",
      "Attach your Telegram Bot token and allowed chat ID in Kyro Settings (stored securely in the OS Keyring Vault).",
      "Kyro executes the routine in the background at the specified interval, respecting concurrency overlap guards.",
      "Receive real-time execution summaries and interactive approval requests directly on your phone via Telegram.",
    ],
    prerequisites: [
      "Computer powered on and active at the scheduled trigger time.",
      "Telegram bot token and personal chat ID for remote bridge functionality.",
    ],
    docLink: "/docs/routines-telegram",
    featureId: "teach-task-scheduler",
  },
  {
    id: "mcp-github-integration",
    title: "Secure GitHub Automation via Model Context Protocol (MCP)",
    targetAudience: "Technical Teams",
    problem:
      "Developers want their local AI assistant to interact with GitHub issues, pull requests, and repository metadata without exposing personal access tokens in plaintext or giving the agent unchecked write permissions.",
    capability:
      "Native GitHub Connector with PKCE OAuth 2.0, single-flight token refresh, and per-action governance policies (Allow, Ask Always, Deny).",
    workflow: [
      "Open Connections in Kyro and click 'Connect GitHub'.",
      "Authenticate via secure browser OAuth 2.0 with Proof Key for Code Exchange (PKCE).",
      "Kyro stores the bearer token inside the OS Keyring Vault, ensuring it is never stored in plaintext or exposed to frontend logs.",
      "Kyro discovers available GitHub MCP tools (list_issues, create_pull_request, get_commit).",
      "Configure per-action governance: set read-only commands to SafeAutoApprove and write commands to AskAlways.",
      "Direct Kyro in chat to inspect an open issue, write a bug reproduction script, and submit a draft PR.",
    ],
    prerequisites: [
      "Active GitHub account.",
      "Configured OAuth application client credentials or Kyro standard GitHub connector.",
    ],
    docLink: "/docs/mcp-connectors",
    featureId: "mcp-connectors",
  },
];
