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

  // ---- Added: centralize the paths we’ll use
  routes: {
    home: "/",
    drop: "/drop",
    haileSelassie : "/heroes/haile-selassie",
    qrH1: "/h1", // QR short path -> redirect to haile-selassie in next.config.js
    heroes: "/heroes",
    
  },

  // ---- Added: minimal product meta for the Haile Selassie pages
  products: {
    haileSelassie: {
      slug: "haile-selassie",
      title: "HAILE SELASSIE — In The Shoes Of",
      subtitle: "The King who kept Ethiopia free",
      heroImage: "/heroes/haile-selassie/hero.jpg", // fallback to front.png if missing
    },
    lewisHowardLatimer:{
      slug: "lewis-howard-latimer",
      title: "LEWIS HOWARD LATIMER — In The Shoes Of",
      subtitle: "He brought light — and dignity — to modern life.",
      heroImage: "/heroes/lewis-howard-latimer/hero.jpg",
    }
  },
} as const;

// Optional helper to build WhatsApp links with prefilled text
export const waHref = (text?: string) =>
  `https://wa.me/${site.contact.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export type SiteConfig = typeof site;
