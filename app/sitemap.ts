import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const now = new Date();

  const routes = [
    "",
    "/features",
    "/use-cases",
    "/security",
    "/download",
    "/docs",
    "/docs/installation",
    "/docs/configuration",
    "/docs/architecture",
    "/docs/security",
    "/docs/computer-use",
    "/docs/browser",
    "/docs/developer-workbench",
    "/docs/everyday-workflows",
    "/docs/mcp-connectors",
    "/docs/routines-telegram",
    "/docs/troubleshooting",
    "/changelog",
    "/faq",
    "/contributing",
    "/about",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: route === "" ? `${baseUrl}/` : `${baseUrl}${route}/`,
    lastModified: now,
    changeFrequency: route === "" ? "daily" : route.startsWith("/docs") ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/download" || route === "/features" ? 0.9 : 0.8,
  }));
}
