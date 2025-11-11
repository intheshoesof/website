import Image from "next/image";
import Link from "next/link";
import { site, waHref } from "@/site.config";

export const metadata = {
  title: "Haile Selassie — In The Shoes Of",
  description:
    "Walk in the shoes of Haile Selassie. Limited drop statement socks — small batch, big voice.",
};

export default function HaileSelassieHeroPage() {
  const hero = site.products.haileSelassie;
  const wa = waHref("Hi! I’m interested in the Haile Selassie socks.");

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b bg-white/70 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 md:px-6 py-4">
          <Link href={site.routes.home} className="flex items-center gap-2 font-extrabold text-lg tracking-tight">
            <Image src="/logo.png" alt="logo" width={40} height={40} />
            <span>{site.brand}</span>
          </Link>
          <nav className="flex gap-6 text-sm font-medium">
            <Link href={site.routes.home} className="hover:text-gray-900 text-gray-600">Home</Link>
            <Link href={site.routes.drop} className="hover:text-gray-900 text-gray-600">Drop</Link>
            <Link href={site.routes.haileSelassie} className="text-black font-semibold">Heroes</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm text-gray-500 mb-2">Drop #1</p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">{hero.title}</h1>
          <p className="mt-3 text-gray-600 text-lg">{hero.subtitle}</p>

          <p className="mt-6 text-gray-700">
            A symbol of African independence and resilience, Haile Selassie led Ethiopia through one
            of its most defining eras. His courage and dignity continue to inspire generations across
            the globe. Our first design celebrates his enduring legacy — and invites you to walk in
            his shoes.
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
            <img
              src={hero.heroImage || "haile-selassie.jpg"}
              alt="Haile Selassie hero"
              
              sizes="(max-width:768px)100vw,50vw"
              className="object-contain bg-white"
              
            />
          </div>
          <p className="mt-3 text-xs text-gray-500">
            Hero image path: <code>haile-selassie.jpg</code>
          </p>
        </div>
      </section>
    </main>
  );
}
