﻿import { Viewport } from "next";
import "./globals.css";
import type { ReactNode } from "react";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export const metadata = {
  metadataBase: new URL("https://www.intheshoesof.com"),
  title: "In The Shoes Of — Statement Socks",
  description: "Limited drops of bold, conversation-starting socks. Small batch. Big voice.",
  openGraph: {
    url: "https://www.intheshoesof.com", // ← og:url
    type: "website",                      // ← og:type
    siteName: "In The Shoes Of",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" }, // preferred
      { url: "/favicon.ico", sizes: "any" }           // fallback
    ],
    apple: "/favicon/apple-touch-icon.png",
    other: [{ rel: "manifest", url: "/favicon/site.webmanifest" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "In The Shoes Of — Statement Socks",
    description: "Limited drops. Small batch. Big voice. Celebration.",
    images: ["/opengraph-image.jpg"],
  },
 other: {
    "fb:app_id": "61582166974655", // or use: "fb:admins": "YOUR_NUMERIC_FB_ID"
  },

};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-900 bg-white">{children}</body>
    </html>
  );
}
