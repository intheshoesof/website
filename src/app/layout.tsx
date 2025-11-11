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
  metadataBase: new URL("https://intheshoesof.com"),
  title: "In The Shoes Of — Statement Socks",
  description: "Limited drops of bold, conversation-starting socks. Small batch. Big voice.",
  
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" }, // preferred
      { url: "/favicon.ico", sizes: "any" }           // fallback
    ],
    apple: "/favicon/apple-touch-icon.png",
    other: [{ rel: "manifest", url: "/favicon/site.webmanifest" }],
  },
 openGraph: {
    images: [
      {
        url: "https://intheshoesof.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "In The Shoes Of — Statement Socks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "In The Shoes Of — Statement Socks",
    description: "Limited drops. Small batch. Big voice.",
    images: ["https://intheshoesof.com/favicon/web-app-manifest-192x192.png"],
  },

};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-900 bg-white">{children}</body>
    </html>
  );
}
