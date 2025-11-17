// File: app/heroes/lewis-howard-latimer/page.tsx
import Image from "next/image";
import Link from "next/link";
import { site, waHref } from "@/site.config";

export const metadata = {
  title: "Lewis Howard Latimer — In The Shoes Of",
  description:
    "Walk in the shoes of Lewis Howard Latimer. Limited drop statement socks — small batch, big voice.",
};

export default function LewisHowardLatimerHeroPage() {
  const hero = site.products.lewisHowardLatimer;
  const wa = waHref("Hi! I’m interested in the Lewis Howard Latimer socks.");

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b bg-white/70 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 md:px-6 py-4">
          <Link
            href={site.routes.home}
            className="flex items-center gap-2 font-extrabold text-lg tracking-tight"
          >
            <Image src="/logo.png" alt="logo" width={40} height={40} />
            <span>{site.brand}</span>
          </Link>
          <nav className="flex gap-6 text-sm font-medium">
            <Link
              href={site.routes.home}
              className="hover:text-gray-900 text-gray-600"
            >
              Home
            </Link>
            <Link
              href={site.routes.drop}
              className="hover:text-gray-900 text-gray-600"
            >
              Drop
            </Link>
            <Link
              href={site.routes.haileSelassie}
              className="text-black font-semibold"
            >
              Heroes
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm text-gray-500 mb-2">Drop #3</p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            {hero.name}
          </h1>
          <p className="mt-3 text-gray-600 text-lg">{hero.subtitle}</p>

          <p className="mt-6 text-gray-700">
            Born to parents who had escaped slavery, Lewis Howard Latimer drew,
            drafted, and engineered his way into the heart of modern life. He
            improved the carbon filament that made electric light practical and
            co-designed cleaner water closets for trains — bringing both light
            and dignity to everyday people. This drop honours the mind that
            helped the world switch on.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href={site.routes.drop}
              className="bg-black text-white rounded-xl px-6 py-3 font-semibold text-center"
            >
              View the Socks
            </Link>
            <a
              href={wa}
              target="_blank"
              className="border border-gray-300 rounded-xl px-6 py-3 font-semibold text-center hover:bg-gray-50"
            >
              Order via WhatsApp
            </a>
          </div>
        </div>

        <div>
          <div className="aspect-[4/5] relative w-full overflow-hidden rounded-2xl border">
            <Image
              src={
                hero.heroImage ||
                "/heroes/lewis-howard-latimer/hero.jpg"
              }
               width={768}
              height={1024}
              alt="Lewis Howard Latimer hero"
              sizes="(max-width:768px)100vw,50vw"
              className="object-contain bg-white"
            />
          </div>
          <p className="mt-3 text-xs text-gray-500">
            Hero image path:{" "}
            <code>/heroes/lewis-howard-latimer/hero.jpg</code>
          </p>
        </div>
      </section>
    </main>
  );
}
