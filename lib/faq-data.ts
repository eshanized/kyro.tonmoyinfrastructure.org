export interface FaqItem {
  id: string;
  category: "General" | "Security & Privacy" | "Models & AI" | "Automation & Workflows" | "Platforms & Technical";
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    id: "what-is-kyro",
    category: "General",
    question: "What is Kyro?",
    answer:
      "Kyro is a local-first autonomous desktop AI agent built with a multi-threaded Rust native core (Tauri v2) and React 19. It runs directly on your personal computer, combining screen understanding, browser automation, terminal execution, and Model Context Protocol (MCP) integrations with strict, centralized governance.",
  },
  {
    id: "who-is-it-for",
    category: "General",
    question: "Who is Kyro designed for?",
    answer:
      "Kyro is engineered with two dedicated experience modes: Everyday Mode for knowledge workers and non-developers (providing safe reversible file organization, local PDF/document parsing, and multimodal screen explanations), and Developer Workbench for software engineers (offering project discovery, managed dev servers, git-aware code checkpoints, automated compiler build triage, visual regression auditing, and multi-agent git worktrees).",
  },
  {
    id: "is-it-open-source",
    category: "General",
    question: "Is Kyro open source?",
    answer:
      "Yes. Kyro is 100% open source under the permissive MIT License. You can inspect the entire Rust backend, React frontend, and build workflows in the official GitHub repository at https://github.com/eshanized/Kyro.",
  },
  {
    id: "what-does-local-first-mean",
    category: "Security & Privacy",
    question: "What does 'local-first' mean in Kyro?",
    answer:
      "In Kyro, 'local-first' means that your data, execution engine, task histories, conversation logs, memories, artifacts, and configuration never leave your computer unless you explicitly send a prompt to a configured model provider. All database storage uses local SQLite with Write-Ahead Logging (WAL mode), credentials reside in your OS Keyring, and file operations execute directly on your local filesystem without cloud telemetry or intermediaries.",
  },
  {
    id: "does-kyro-work-offline",
    category: "Security & Privacy",
    question: "Does Kyro work completely offline?",
    answer:
      "Kyro's core application, database, file organizer, document parser, local diff engine, and desktop input engine operate entirely offline without network access. However, autonomous reasoning requires an LLM. If you configure a cloud model endpoint (like NVIDIA NIM or OpenAI), internet connectivity is required for inference calls. If you configure an OpenAI-compatible local model server (such as Ollama or vLLM), Kyro can operate fully offline.",
  },
  {
    id: "does-kyro-require-an-api-key",
    category: "Models & AI",
    question: "Does Kyro require an API key to function?",
    answer:
      "Yes, for autonomous agent reasoning tasks that call an LLM. Kyro comes pre-configured to use NVIDIA NIM endpoints (with default models nvidia/nemotron-3-ultra-550b-a55b and meta/llama-3.2-11b-vision-instruct) or any custom OpenAI-compatible endpoint. You supply your API key in Settings, where it is securely encrypted in your operating system keyring (Vault).",
  },
  {
    id: "which-models-are-supported",
    category: "Models & AI",
    question: "Which models and providers are supported?",
    answer:
      "Kyro includes a built-in ModelRouter with a capability registry. Verified models include NVIDIA Nemotron (nemotron-3-ultra-550b), Llama 3.2 Vision (11B and 90B vision instruct), OpenAI GPT-4o / GPT-4o-mini, Anthropic Claude 3.5 Sonnet, Google Gemini 1.5 Pro / Flash, DeepSeek Coder 33B, and Mistral Large. Any OpenAI-compatible inference endpoint (including local self-hosted endpoints) can be specified via custom Base URL.",
  },
  {
    id: "how-does-screen-and-browser-work",
    category: "Automation & Workflows",
    question: "How does desktop screen and browser interaction work?",
    answer:
      "For desktop computer use, Kyro captures screens via the native xcap library, overlays Set-of-Marks (SoM) visual coordinates, and synthesizes mouse/keyboard input via enigo. For browser automation, Kyro runs an isolated worker process supporting native WebDriver BiDi (Firefox) and Chrome DevTools Protocol / CDP (Chromium, Chrome, Brave, Edge, Opera) over WebSockets, strictly confined to origin-safe navigation rules.",
  },
  {
    id: "does-kyro-require-user-approval",
    category: "Security & Privacy",
    question: "Does Kyro require human approval before taking actions?",
    answer:
      "Yes. Kyro enforces a Zero-Trust Centralized Authorization Engine in Rust. In SafeAutoApprove mode, only verified read-only shell commands (lexed into exact argv tokens) are executed automatically. File writes, system changes, ambiguous shell commands, and external MCP tools require interactive approval. Furthermore, when sensitive checkpoints (2FA, CAPTCHAs, password inputs, banking domains) are encountered, Kyro halts and requests a human takeover.",
  },
  {
    id: "is-a-docker-sandbox-required",
    category: "Security & Privacy",
    question: "Is Docker or Podman required to run Kyro?",
    answer:
      "No, container sandboxing is optional for standard usage. However, if you configure the shell execution policy to SandboxOnly, Kyro strictly enforces container isolation. If Docker or Podman is not running, Kyro fails closed—it will deny the action rather than silently falling back to the host system.",
  },
  {
    id: "which-operating-systems-are-supported",
    category: "Platforms & Technical",
    question: "Which operating systems and architectures are supported?",
    answer:
      "Kyro provides official builds for Linux (x86_64 Debian/Ubuntu .deb and universal .AppImage), macOS (Apple Silicon aarch64 M1-M4 and Intel x86_64 .dmg), and Windows 10/11 (64-bit .msi and .exe). Linux installations require standard desktop runtime libraries (webkit2gtk-4.1, libxdo, libssl). Full build-from-source instructions using Cargo and npm are also provided.",
  },
  {
    id: "how-to-contribute",
    category: "Platforms & Technical",
    question: "How can I report bugs or contribute to Kyro?",
    answer:
      "You can open bug reports, submit feature requests, or participate in discussions on the GitHub repository at https://github.com/eshanized/Kyro. For code contributions, clone the repo, run 'npm install', and use the unified Makefile ('make dev', 'make verify', 'make test'). Security vulnerabilities should be reported privately to m.eshanized@gmail.com.",
  },
];
