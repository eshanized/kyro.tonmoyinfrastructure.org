import type { Metadata, Viewport } from "next";
import { Fira_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site-config";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  preload: true,
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
  preload: false,
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#090a0f" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "./",
  },
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Kyro",
    "Tonmoy Infrastructure",
    "Eshan Roy",
    "desktop AI agent",
    "autonomous desktop agent",
    "local-first AI",
    "open-source AI agent",
    "Tauri v2",
    "computer use agent",
    "browser automation",
    "Model Context Protocol",
    "MCP agent",
    "developer workbench",
    "zero-trust security",
  ],
  authors: [
    { name: siteConfig.owner.name, url: siteConfig.owner.github },
    { name: siteConfig.organization.name, url: siteConfig.organization.url },
  ],
  creator: siteConfig.owner.name,
  publisher: siteConfig.organization.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/assets/screenshot_1.png",
        width: 1886,
        height: 1016,
        alt: "Kyro Desktop AI Agent Application Interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/assets/screenshot_1.png"],
    creator: "@eshanized",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/logo.svg",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Kyro",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Linux, macOS, Windows",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      description: siteConfig.description,
      author: {
        "@type": "Person",
        name: siteConfig.owner.name,
        url: siteConfig.owner.github,
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.organization.name,
        url: siteConfig.organization.url,
      },
      downloadUrl: `${siteConfig.url}/download/`,
      codeRepository: siteConfig.repoUrl,
      license: "https://opensource.org/licenses/MIT",
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.organization.name,
      url: siteConfig.organization.url,
      logo: `${siteConfig.url}/logo.svg`,
      description: siteConfig.organization.description,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      publisher: {
        "@type": "Organization",
        name: siteConfig.organization.name,
        url: siteConfig.organization.url,
      },
    },
  ];

  return (
    <html
      lang="en"
      className={`${firaSans.variable} ${monoFont.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://avatars.githubusercontent.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://avatars.githubusercontent.com" />
        <link
          rel="preload"
          as="image"
          href="/assets/screenshot_1-mobile.webp"
          type="image/webp"
          media="(max-width: 640px)"
        />
        <link
          rel="preload"
          as="image"
          href="/assets/screenshot_1.webp"
          type="image/webp"
          media="(min-width: 641px)"
        />
        <link rel="alternate" type="text/markdown" href="/llms.txt" title="Kyro LLM Documentation" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-emerald-500 selection:text-black">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 rounded-md bg-emerald-500 px-4 py-2 font-semibold text-black shadow-lg"
        >
          Skip to main content
        </a>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
