import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
}

export function createPageMetadata({
  title,
  description,
  path,
  image,
}: PageMetadataOptions): Metadata {
  const canonicalPath = path.endsWith("/") ? path : `${path}/`;
  const canonicalUrl = `${siteConfig.url}${canonicalPath}`;
  const ogImageUrl = image || siteConfig.ogImage;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1886,
          height: 1016,
          alt: `${title} — ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [ogImageUrl],
      creator: "@eshanized",
    },
  };
}
