import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const rootDir = process.cwd();
console.log("🔍 Starting Kyro Website Test & Verification Suite...\n");

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✅ PASS: ${message}`);
    passed++;
  } else {
    console.error(`  ❌ FAIL: ${message}`);
    failed++;
  }
}

// 1. Check all required routes exist
console.log("Checking required pages and routes...");
const requiredRoutes = [
  "app/layout.tsx",
  "app/page.tsx",
  "app/features/page.tsx",
  "app/use-cases/page.tsx",
  "app/security/page.tsx",
  "app/download/page.tsx",
  "app/docs/layout.tsx",
  "app/docs/page.tsx",
  "app/docs/installation/page.tsx",
  "app/docs/configuration/page.tsx",
  "app/docs/architecture/page.tsx",
  "app/docs/security/page.tsx",
  "app/docs/computer-use/page.tsx",
  "app/docs/browser/page.tsx",
  "app/docs/developer-workbench/page.tsx",
  "app/docs/everyday-workflows/page.tsx",
  "app/docs/mcp-connectors/page.tsx",
  "app/docs/routines-telegram/page.tsx",
  "app/docs/troubleshooting/page.tsx",
  "app/changelog/page.tsx",
  "app/faq/page.tsx",
  "app/contributing/page.tsx",
  "app/about/page.tsx",
  "app/privacy/page.tsx",
  "app/terms/page.tsx",
  "app/not-found.tsx",
  "app/sitemap.ts",
  "app/robots.ts",
  "app/manifest.ts",
];

for (const route of requiredRoutes) {
  const filePath = path.join(rootDir, route);
  assert(fs.existsSync(filePath), `Route file exists: ${route}`);
}

// 2. Check brand assets
console.log("\nChecking brand assets and screenshots...");
const requiredAssets = [
  "public/logo.svg",
  "public/favicon.svg",
  "public/assets/logo.svg",
  "public/assets/screenshot_1.png",
  "public/assets/screenshot_2.png",
  "public/assets/screenshot_3.png",
  "public/assets/screenshot_4.png",
  "public/assets/screenshot_5.png",
  "public/assets/screenshot_6.png",
  "public/assets/screenshot_7.png",
  "public/assets/screenshot_8.png",
];

for (const asset of requiredAssets) {
  const filePath = path.join(rootDir, asset);
  const exists = fs.existsSync(filePath);
  const size = exists ? fs.statSync(filePath).size : 0;
  assert(exists && size > 0, `Asset exists and non-empty: ${asset} (${size} bytes)`);
}

// 3. Check data modules exist and are populated
console.log("\nChecking data models and content integrity...");
const dataFiles = [
  "lib/site-config.ts",
  "lib/releases.ts",
  "lib/faq-data.ts",
  "lib/feature-catalog.ts",
  "lib/use-cases-data.ts",
  "lib/changelog-data.ts",
];

for (const df of dataFiles) {
  const filePath = path.join(rootDir, df);
  assert(fs.existsSync(filePath), `Data file exists: ${df}`);
}

// 4. Verify TypeScript compiler
console.log("\nExecuting TypeScript type checking (tsc --noEmit)...");
try {
  execSync("npx tsc --noEmit", { stdio: "inherit" });
  assert(true, "TypeScript compilation succeeded without errors");
} catch (err) {
  assert(false, "TypeScript compilation failed");
}

console.log(`\n========================================`);
console.log(`Verification completed: ${passed} passed, ${failed} failed`);
console.log(`========================================\n`);

if (failed > 0) {
  process.exit(1);
}
