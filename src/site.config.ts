export const site = {
  brand: "In The Shoes Of",
  baseUrl: "https://intheshoesof.vercel.app",

  metaTitle: "In The Shoes Of — Statement Socks",
  metaDescription:
    "Limited drops of bold, conversation-starting socks. Small batch. Big voice.",

  address: "Limassol, Cyprus",

  contact: {
    // WhatsApp E.164 without plus
    whatsapp: "35799021195",
    // Display format for tel:/UI
    phone: "+357 99 021195",
    email: "hello@intheshoesof.com",
  },

  socials: {
    instagram: "#",
    tiktok: "#",
    facebook: "#",
    x: "#",
  },

  bioLinks: [
    { label: "Chat on WhatsApp", href: "https://wa.me/35799021195", emphasis: true },
    { label: "Instagram", href: "#" },
    { label: "TikTok", href: "#" },
  ],
} as const;

export type SiteConfig = typeof site;
