import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "facebookexternalhit",
        allow: "/",
      },
    ],
    sitemap: "https://intheshoesof.com/sitemap.xml",
    host: "https://intheshoesof.com",
  };
}
