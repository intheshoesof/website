// File: app/heroes/page.tsx
import Image from "next/image";
import Link from "next/link";
import { site } from "@/site.config";

type HeroCard = {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  heroHref: string;
  productHref: string;
};

// For now we build from your existing product meta.
// Add more heroes here later.
const HEROES: HeroCard[] = [
  {
    slug: "haile-selassie",
    title: "HAILE SELASSIE",
    subtitle: "The King who kept Ethiopia free",
    heroImage: "/products/haile-selassie/hero.png", // fallback handled in <Image>
    heroHref: site.routes?.heroes ?? "/haile-selassie",
    productHref: site.routes?.drop ?? "/drop",
  },
];

export const metadata = {
  title: "Heroes — In The Shoes Of",
  description: "Discover the heroes behind each limited drop.",
};

export default function HeroesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header (same style as other pages) */}
      <header className="border-b bg-white/70 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 md:px-6 py-4">
          <Link href={site.routes?.home ?? "/"} className="flex items-center gap-2 font-extrabold text-lg tracking-tight">
            <Image src="/logo.png" alt="logo" width={40} height={40} />
            <span>{site.brand}</span>
          </Link>
          <nav className="flex gap-6 text-sm font-medium">
            <Link href={site.routes?.home ?? "/"} className="hover:text-gray-900 text-gray-600">Home</Link>
            <Link href={site.routes?.drop ?? "/drop"} className="hover:text-gray-900 text-gray-600">Drop</Link>
            <Link href={site.routes?.heroes ?? "/heroes"} className="text-black font-semibold">Heroes</Link>
          </nav>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 md:px-6 py-10">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Heroes</h1>
        <p className="mt-2 text-gray-600">The people whose stories inspire our limited drops.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {HEROES.map((h) => (
            <article key={h.slug} className="rounded-2xl border overflow-hidden bg-white">
              <div className="relative aspect-[4/5] w-full bg-white">
                <Image
                  src={h.heroImage}
                  alt={`${h.title} — hero`}
                  fill
                  sizes="(max-width:768px)100vw, (max-width:1200px)50vw, 33vw"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-bold tracking-tight">{h.title}</h2>
                <p className="text-sm text-gray-600">{h.subtitle}</p>
                <div className="mt-4 flex gap-2">
                  <Link href={h.heroHref} className="px-4 py-2 rounded-xl bg-black text-white text-sm font-semibold">
                    View Hero
                  </Link>
                  <Link href={h.productHref} className="px-4 py-2 rounded-xl border text-sm font-semibold hover:bg-gray-50">
                    View Product
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
