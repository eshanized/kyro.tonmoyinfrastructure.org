export const siteConfig = {
  name: "Kyro",
  tagline: "Local-First Autonomous Desktop AI Agent",
  description:
    "Kyro is an open-source, local-first autonomous desktop AI agent built with Tauri v2, Rust native core, and React 19. A product from Tonmoy Infrastructure, owned and architected by Eshan Roy.",
  url: "https://kyro.tonmoyinfrastructure.org",
  ogImage: "https://kyro.tonmoyinfrastructure.org/assets/screenshot_1.png",
  repoUrl: "https://github.com/eshanized/Kyro",
  releasesUrl: "https://github.com/eshanized/Kyro/releases",
  issuesUrl: "https://github.com/eshanized/Kyro/issues",
  discussionsUrl: "https://github.com/eshanized/Kyro/discussions",
  organization: {
    name: "Tonmoy Infrastructure",
    url: "https://tonmoyinfrastructure.org/",
    domain: "tonmoyinfrastructure.org",
    tagline: "Systems, Infrastructure & Sovereign Computing Lab",
    description:
      "Tonmoy Infrastructure develops sovereign, privacy-preserving infrastructure, distributed systems, and local-first computing tools.",
  },
  owner: {
    name: "Eshan Roy",
    role: "Owner & Lead Architect",
    email: "m.eshanized@gmail.com",
    github: "https://github.com/eshanized",
    organization: "Tonmoy Infrastructure",
    orgUrl: "https://tonmoyinfrastructure.org/",
  },
  author: {
    name: "Eshan Roy",
    email: "m.eshanized@gmail.com",
    github: "https://github.com/eshanized",
    orgName: "Tonmoy Infrastructure",
    orgUrl: "https://tonmoyinfrastructure.org/",
  },
  currentVersion: "0.1.0",
  license: "MIT",
  navItems: [
    { label: "Features", href: "/features/" },
    { label: "Use Cases", href: "/use-cases/" },
    { label: "Security", href: "/security/" },
    { label: "Downloads", href: "/download/" },
    { label: "Documentation", href: "/docs/" },
    { label: "Changelog", href: "/changelog/" },
    { label: "FAQ", href: "/faq/" },
    { label: "About", href: "/about/" },
  ],
  docSections: [
    {
      title: "Getting Started",
      items: [
        { title: "Introduction & Overview", href: "/docs/" },
        { title: "Installation & Prerequisites", href: "/docs/installation/" },
        { title: "Configuration & Models", href: "/docs/configuration/" },
        { title: "Runtime Architecture", href: "/docs/architecture/" },
      ],
    },
    {
      title: "Core Capabilities",
      items: [
        { title: "Zero-Trust Security & Governance", href: "/docs/security/" },
        { title: "Computer Use & Visual Grounding", href: "/docs/computer-use/" },
        { title: "Browser Automation & Web Audit", href: "/docs/browser/" },
        { title: "Developer Workbench & Checkpoints", href: "/docs/developer-workbench/" },
        { title: "Everyday Workflows & Tools", href: "/docs/everyday-workflows/" },
      ],
    },
    {
      title: "Ecosystem & Advanced",
      items: [
        { title: "MCP & App Connectors", href: "/docs/mcp-connectors/" },
        { title: "Teach-a-Task & Telegram Bridge", href: "/docs/routines-telegram/" },
        { title: "System Health & Troubleshooting", href: "/docs/troubleshooting/" },
      ],
    },
  ],
};
