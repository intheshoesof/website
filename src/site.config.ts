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
      name: "HAILE SELASSIE — In The Shoes Of",
      subtitle: "The King who kept Ethiopia free",
      description:
        "These high-quality socks with sublimated print provide optimum comfort with style wherever one might go — a subtle accent to complement an office look or an eye-catching statement for an extravagant outfit.",
      priceEUR: 14.9,
      heroImage: "/products/haile-selassie/front.png",
      images: [
        "/products/haile-selassie/front.png",
        "/products/haile-selassie/side-left.png",
        "/products/haile-selassie/side-right.png",
        "/products/haile-selassie/back.png",
      ],
    },
    lewisHowardLatimer: {
      slug: "lewis-howard-latimer",
      name: "LEWIS HOWARD LATIMER — In The Shoes Of",
      subtitle: "He brought light — and dignity — to modern life",
      description:
        "These high-quality statement socks honour Lewis Howard Latimer — the draftsman, inventor, and engineer whose carbon filament helped bring electric light into everyday life.",
      priceEUR: 14.9,
      heroImage: "/products/lewis-howard-latimer/front.png",
      // 👇 main 'white' set first
      images: [
        "/products/lewis-howard-latimer/front.png",
        "/products/lewis-howard-latimer/side-left.png",
        "/products/lewis-howard-latimer/side-right.png",
        "/products/lewis-howard-latimer/back.png",

        // 👇 extra variants – red
        "/products/lewis-howard-latimer/red/front.jpg",
        "/products/lewis-howard-latimer/red/side-left.jpg",
        "/products/lewis-howard-latimer/red/side-right.jpg",
        "/products/lewis-howard-latimer/red/back.jpg",

        // 👇 green
        "/products/lewis-howard-latimer/green/front.jpg",
        "/products/lewis-howard-latimer/green/side-left.jpg",
        "/products/lewis-howard-latimer/green/side-right.jpg",
        "/products/lewis-howard-latimer/green/back.jpg",

        // 👇 yellow
        "/products/lewis-howard-latimer/yellow/front.jpg",
        "/products/lewis-howard-latimer/yellow/side-left.jpg",
        "/products/lewis-howard-latimer/yellow/side-right.jpg",
        "/products/lewis-howard-latimer/yellow/back.jpg",
      ],
    },
  },
} as const;

// Optional helper to build WhatsApp links with prefilled text
export const waHref = (text?: string) =>
  `https://wa.me/${site.contact.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export type SiteConfig = typeof site;
