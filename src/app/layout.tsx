﻿import "../styles/globals.css";
import type { ReactNode } from "react";

export const metadata = {
  metadataBase: new URL("https://intheshoesof.vercel.app"),
  title: "In The Shoes Of — Statement Socks",
  description: "Limited drops of bold, conversation-starting socks. Small batch. Big voice.",
  themeColor: "#000000",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },          // root for widest support
      { url: "/favicon.ico", sizes: "any" },                    // root fallback
      { url: "/favicon/favicon-96x96.png", sizes: "96x96" },    // explicit PNG
    ],
    apple: "/favicon/apple-touch-icon.png",
    other: [{ rel: "manifest", url: "/favicon/site.webmanifest" }],
  },
  openGraph: {
    title: "In The Shoes Of — Statement Socks",
    description: "Limited drops. Small batch. Big voice.",
    url: "/",
    siteName: "In The Shoes Of",
    images: [{ url: "/favicon/web-app-manifest-512x512.png", width: 512, height: 512 }],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "In The Shoes Of — Statement Socks",
    description: "Limited drops. Small batch. Big voice.",
    images: ["/favicon/web-app-manifest-192x192.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-900 bg-white">{children}</body>
    </html>
  );
}
