﻿// /app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { site } from "@/site.config";

// Use a hero or dedicated OG (1200x630 recommended)
const ogImage = "/templates/House of Zenfit-hero.jpg";

// Theme color (emerald accent used in UI)
export const viewport = { themeColor: "#10B981" };

export const metadata: Metadata = {
  title: site.metaTitle,
  description: site.metaDescription,
  openGraph: {
    title: site.metaTitle,
    description: site.metaDescription,
    url: site.baseUrl,
    siteName: site.brand,
    images: [{ url: ogImage, width: 1200, height: 630, alt: `${site.brand} — Nairobi Gym & Training` }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.metaTitle,
    description: site.metaDescription,
    images: [ogImage],
  },
  metadataBase: new URL(site.baseUrl),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon: .ico primary for broad support + SVG alternate */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="alternate icon" href="/House of Zenfit-logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#10B981" />
      </head>
      <body>{children}</body>
    </html>
  );
}
