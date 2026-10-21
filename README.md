# Kyro Product Website (`kyro.tonmoyinfrastructure.org`)

<p align="left">
  <a href="https://github.com/eshanized/kyro.tonmoyinfrastructure.org/actions/workflows/deploy.yml"><img src="https://github.com/eshanized/kyro.tonmoyinfrastructure.org/actions/workflows/deploy.yml/badge.svg" alt="Deploy to GitHub Pages" /></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-00dd7b.svg" alt="MIT License" /></a>
  <img src="https://img.shields.io/badge/Next.js-16-black?logo=next.js" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <a href="https://kyro.tonmoyinfrastructure.org"><img src="https://img.shields.io/badge/Live-kyro.tonmoyinfrastructure.org-00dd7b?logo=googlechrome&logoColor=white" alt="Live Website" /></a>
</p>

The official marketing and technical documentation website for **Kyro**, a local-first autonomous desktop AI agent built with Tauri v2, Rust native core, and React 19.

- **Production Domain:** [kyro.tonmoyinfrastructure.org](https://kyro.tonmoyinfrastructure.org)
- **Kyro Product Repository:** [eshanized/Kyro](https://github.com/eshanized/Kyro)
- **License:** [MIT License](LICENSE)

---

## 🚀 Overview

This website explains Kyro's architecture, verified capabilities, security model, and workflows to both ordinary users and software engineers. Every feature claim, screenshot, and command on this site is verified directly against the Kyro source code and automated test suites.

### Key Pages & Features

- **`/` (Home):** Conversion-focused landing page explaining local-first architecture, dual experience modes, verified capabilities, 4-step execution flow, security previews, and a responsive screenshot gallery.
- **`/features`:** Subsystem inventory organized into Dual Experience, Everyday Tools, Developer Tools, Security & Governance, Computer Use, and Ecosystem with technical explanations and constraints.
- **`/use-cases`:** Concrete, structured workflows: Problem &rarr; Kyro's Capability &rarr; Step-by-Step Workflow &rarr; Prerequisites &rarr; Documentation links.
- **`/security`:** Technical specification of Kyro's zero-trust model: centralized Rust authorization engine, argument-aware shell lexing, fail-closed container sandboxing, workspace path confinement, and OS Keyring vault.
- **`/download`:** Distribution center with live GitHub release fetching and authoritative snapshots for Linux (`.deb`, `.AppImage`), macOS (`.dmg` for Apple Silicon & Intel), and Windows (`.msi`, `.exe`), plus source build instructions.
- **`/docs`:** Full 12-page technical documentation suite covering Installation, Configuration, Runtime Architecture, Security, Computer Use, Browser Automation, Developer Workbench, Everyday Workflows, MCP Connectors, Routines & Telegram, and Troubleshooting.
- **`/changelog`:** Authoritative release history and verified milestone commits linked directly to GitHub commits.
- **`/faq`:** Accessible interactive accordion FAQ with live search, category filtering, and Schema.org `FAQPage` JSON-LD structured data.
- **`/contributing`:** Developer contribution guide covering repository setup, Makefile targets, verification pipeline, commit conventions, and pull request checklist.
- **`/about`, `/privacy`, `/terms`:** Transparent project origins, privacy disclosures (100% local-first data storage, zero tracking cookies, zero telemetry), and MIT open-source terms.

---

## 🛠️ Technology Stack

- **Framework:** Next.js (App Router, Server Components by default)
- **Language:** TypeScript with strict type checking
- **Styling:** Tailwind CSS with custom Kyro design tokens (dark theme foundation `#0a0a0a` with emerald `#00dd7b` accents, plus light mode support)
- **Icons:** Lucide React & custom SVG Brand Icons matching Kyro desktop
- **Theme:** `next-themes` (Dark / Light mode support)
- **SEO & Structured Data:** `SoftwareApplication`, `Organization`, `WebSite`, `BreadcrumbList`, and `FAQPage` JSON-LD microdata, dynamic sitemap, and robots.txt.

---

## 💻 Local Development

### 1. Prerequisites

- **Node.js**: &ge; 20.x (Node 22 / 26 recommended)
- **npm** or **pnpm**

### 2. Installation

```bash
git clone https://github.com/eshanized/Kyro.git # Or your website repo fork
cd kyro.tonmoyinfrastructure.org
npm install
```

### 3. Development Server

```bash
npm run dev
# Open http://localhost:3000
```

### 4. Running Verification & Typechecks

```bash
# Run complete test verification suite:
npm test

# Run TypeScript type check alone:
npm run typecheck
```

### 5. Production Build

```bash
npm run build
npm run start
```

---

## 📦 Deployment Guide

This website is designed for zero-config deployment to standard hosting platforms:

### Deploying to Vercel

1. Push your repository to GitHub.
2. Import the project into Vercel.
3. Framework Preset: **Next.js**.
4. Root Directory: `./` (or repository root).
5. Build Command: `npm run build` (or `next build`).
6. Output Directory: `.next`.
7. Environment Variables: Optional (see below).

### Environment Variables

All features operate out of the box with zero required environment variables. Optional overrides:

| Variable | Description | Default |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Canonical production domain | `https://kyro.tonmoyinfrastructure.org` |
| `GITHUB_TOKEN` | Optional GitHub Personal Access Token to increase GitHub API rate limits when querying releases | None (unauthenticated public requests used) |

---

## 🧪 Verification Summary

- **Routes Tested:** 29 routes (all indexable pages, docs guides, legal, sitemap, robots, manifest).
- **TypeScript:** Strict type checking with 0 compilation errors (`tsc --noEmit`).
- **Assets:** Genuine screenshots (`screenshot_1.png` through `screenshot_8.png`) and SVG logo verified present and non-empty.
- **SEO:** Metadata, open graph tags, twitter cards, dynamic XML sitemaps, robots.txt, and valid JSON-LD schemas on all relevant pages.
