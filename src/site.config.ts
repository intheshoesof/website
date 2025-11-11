// /site.config.ts
export const site = {
  brand: "House of Zenfit",
  baseUrl: "https://houseofzenfit.co.ke",

  metaTitle: "House of Zenfit — Train Hard. Breathe Deep. Live Zen.",
  metaDescription:
    "Elite personal training and small-group classes in Nairobi. Strength, conditioning, mobility, and the ZenStrength fusion of weights + breathwork.",

  address: "Nairobi, Kenya",

  contact: {
    // E.164 (no +) for wa.me links
    whatsapp: "254700020642",
    // Display format for tel: and UI
    phone: "+254 700 020 642",
    // Use branded inbox; you can swap to the Gmail if needed
    email: "hello@houseofzenfit.co.ke",
  },

  socials: {
    facebook: "https://www.facebook.com/houseofzenfit",
    instagram: "https://instagram.com/houseofzenfit",
    tiktok: "https://www.tiktok.com/@houseofzenfit",
    x: "https://x.com/houseofzenfit",
    googleBusiness: "#", // add Maps/Business Profile URL when live
  },

  // Optional: used by any bio/links component if present in your template
  bioLinks: [
    { label: "Chat on WhatsApp", href: "https://wa.me/254700206642", emphasis: true },
    { label: "houseofzenfit.co.ke", href: "https://houseofzenfit.co.ke" },
    { label: "Instagram", href: "https://instagram.com/houseofzenfit" },
    { name: "Facebook", href: "https://www.facebook.com/houseofzenfit" },
    { label: "TikTok", href: "https://www.tiktok.com/@houseofzenfit" },
    { label: "X (Twitter)", href: "https://x.com/houseofzenfit" },
     { name: "Google Business", href: "https://g.page/r/CZhouseofzenfit" },
  ],
} as const;

export type SiteConfig = typeof site;
