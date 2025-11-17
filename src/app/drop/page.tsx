// File: app/drop/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { site } from "@/site.config";

type ProductConfig = {
  slug: string;
  name: string;
  subtitle: string;
  heroImage: string;
  priceEUR?: number;
};

const products: ProductConfig[] = [
  site.products.haileSelassie,
  site.products.lewisHowardLatimer,
];

function formatEUR(n?: number) {
  if (!n && n !== 0) return "";
  return new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
  }).format(n);
}

export default function DropIndexPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b bg-white/70 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 md:px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 font-extrabold text-lg tracking-tight"
          >
            <Image src="/logo.png" alt="In The Shoes Of" width={40} height={40} />
            <span>In The Shoes Of</span>
          </Link>
          <nav className="flex gap-6 text-sm font-medium">
            <Link href="/" className="hover:text-gray-900 text-gray-600">
              Home
            </Link>
            <span className="text-black font-semibold">Drop</span>
            <Link href="/heroes" className="hover:text-gray-900 text-gray-600">
              Heroes
            </Link>
          </nav>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10">
        {/* Intro */}
        <section className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Current Drops
          </h1>
          <p className="mt-3 max-w-2xl text-gray-600 text-sm md:text-base">
            Each pair of ITSO socks celebrates a hero of African descent – with a
            simple QR code leading to their story. Drops are produced in small
            batches. Once a drop sells out, it lives on as a collectible.
          </p>
        </section>

        {/* Product grid */}
        <section className="grid gap-8 md:grid-cols-2">
          {products.map((p) => (
            <article
              key={p.slug}
              className="flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm/50 hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-[4/5] w-full bg-gray-50">
                <Image
                  src={p.heroImage}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority={p.slug === "haile-selassie"}
                />
              </div>

              <div className="p-5 flex flex-col gap-3">
                <div>
                  <h2 className="text-lg font-bold leading-tight">{p.name}</h2>
                  <p className="mt-1 text-sm text-gray-600">{p.subtitle}</p>
                </div>

                {p.priceEUR !== undefined && (
                  <div className="text-sm font-semibold text-gray-900">
                    {formatEUR(p.priceEUR)}
                  </div>
                )}

                <div className="mt-2 flex flex-wrap gap-2 text-xs text-gray-600">
                  <span className="rounded-full border px-2 py-1">
                    Limited small-batch run
                  </span>
                  <span className="rounded-full border px-2 py-1">
                    QR code to hero story
                  </span>
                </div>

                <div className="mt-4 flex gap-3">
                  <Link
                    href={`/drop/${p.slug}`}
                    className="inline-flex flex-1 items-center justify-center rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-900"
                  >
                    View this drop
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Back link */}
        <div className="mt-10">
          <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
