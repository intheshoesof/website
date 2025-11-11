// File: app/drop/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { site } from "@/site.config";

// --- Product info (Printify specs) ---
const PRODUCT = {
  slug: "haile-selassie",
  name: "HAILE SELASSIE — In The Shoes Of",
  subtitle: "The King who kept Ethiopia free",
  priceEUR: 14.9,
  images: [
    "/products/haile-selassie/front.png",
    "/products/haile-selassie/side-left.png",
    "/products/haile-selassie/side-right.png",
    "/products/haile-selassie/back.png",
  ],
  badges: ["Small Batch", "Limited Drop", "Premium Cotton"],
  sizes: [
    { code: "S", hint: { US: "Women 6–8 · Men 5–6.5", EU: "EU 36–39" } },
    { code: "M", hint: { US: "Women 8.5–11 · Men 7–9.5", EU: "EU 40–44" } },
    { code: "L", hint: { US: "Women 11.5–13 · Men 10–13", EU: "EU 45–48" } },
  ],
  description:
    "These high-quality socks with sublimated print provide optimum comfort with style wherever one might go — a subtle accent to complement an office look or an eye-catching statement for an extravagant outfit.",
  care: [
    "Machine wash cold",
    "Do not bleach",
    "Tumble dry low",
    "Note: Dark color prints can make side seams more noticeable",
  ],
  composition: "95% polyester, 5% spandex",
};

function formatEUR(n: number) {
  return new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
  }).format(n);
}

// --- Size Guide toggle (in / cm) ---
function SizeGuide() {
  const [unit, setUnit] = useState<"in" | "cm">("in");

  const data = unit === "in"
    ? [
        { label: "Total Length", S: "12.99", M: "15.35", L: "16.14", unit: "in" },
        { label: "Width", S: "3.94", M: "3.94", L: "3.94", unit: "in" },
      ]
    : [
        { label: "Total Length", S: "33.00", M: "39.00", L: "41.00", unit: "cm" },
        { label: "Width", S: "10.00", M: "10.00", L: "10.00", unit: "cm" },
      ];

  return (
    <div className="mt-2 border rounded-xl p-4 bg-gray-50/50">
      <div className="flex items-center justify-between">
        <div className="font-medium">Size guide</div>
        <div className="inline-flex rounded-lg border overflow-hidden">
          <button
            className={`px-3 py-1 text-sm ${unit === "in" ? "bg-white font-semibold" : "bg-gray-100"}`}
            onClick={() => setUnit("in")}
          >
            in
          </button>
          <button
            className={`px-3 py-1 text-sm ${unit === "cm" ? "bg-white font-semibold" : "bg-gray-100"}`}
            onClick={() => setUnit("cm")}
          >
            cm
          </button>
        </div>
      </div>

      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-xs md:text-sm">
          <thead>
            <tr className="text-left text-gray-600">
              <th className="py-2 pr-3"></th>
              <th className="py-2 pr-3">S</th>
              <th className="py-2 pr-3">M</th>
              <th className="py-2 pr-0">L</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.label} className="border-t">
                <td className="py-2 pr-3">{row.label}, {row.unit}</td>
                <td className="py-2 pr-3">{row.S}</td>
                <td className="py-2 pr-3">{row.M}</td>
                <td className="py-2 pr-0">{row.L}</td>
              </tr>
            ))}
            <tr className="border-t">
              <td className="py-2 pr-3">Women’s US size</td>
              <td className="py-2 pr-3">6 – 8</td>
              <td className="py-2 pr-3">8.5 – 11</td>
              <td className="py-2 pr-0">11.5 – 13</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 pr-3">Men’s US size</td>
              <td className="py-2 pr-3">5 – 6.5</td>
              <td className="py-2 pr-3">7 – 9.5</td>
              <td className="py-2 pr-0">10 – 13</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

// --- Main Page ---
export default function DropPage() {
  const [active, setActive] = useState(0);
  const [size, setSize] = useState<string | null>(PRODUCT.sizes[0]?.code ?? null);
  const [qty, setQty] = useState(1);
  const [region, setRegion] = useState<"US" | "EU">("US");

  const priceText = useMemo(() => formatEUR(PRODUCT.priceEUR), []);
  const waHref = useMemo(() => {
    const msg = `Hi! I'd like to order ${qty} × ${PRODUCT.name} (${size ?? "no size selected"}).`;
    return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(msg)}`;
  }, [qty, size]);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b bg-white/70 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 md:px-6 py-4">
          <Link href="/" className="flex items-center gap-2 font-extrabold text-lg tracking-tight">
            <Image src="/logo.png" alt="logo" width={40} height={40} />
            <span>In The Shoes Of</span>
          </Link>
          <nav className="flex gap-6 text-sm font-medium">
            <Link href="/" className="hover:text-gray-900 text-gray-600">Home</Link>
            <Link href="/drop" className="text-black font-semibold">Drop</Link>
            <a href={`https://wa.me/${site.contact.whatsapp}`} target="_blank" className="hover:text-gray-900 text-gray-600">Contact</a>
          </nav>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm mb-6">
          <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900 font-medium">Drop #1</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Gallery */}
          <section>
            <div className="aspect-[4/5] relative w-full overflow-hidden rounded-2xl border">
              <Image
                src={PRODUCT.images[active] ?? "/favicon/web-app-manifest-512x512.png"}
                alt={PRODUCT.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain bg-white"
                priority
                unoptimized
              />
            </div>

            <div className="mt-4 grid grid-cols-4 gap-3">
              {PRODUCT.images.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setActive(i)}
                  className={`relative aspect-square rounded-xl border overflow-hidden ${
                    i === active ? "ring-2 ring-black" : "hover:border-gray-400"
                  }`}
                >
                  <Image src={src} alt="thumb" fill className="object-contain bg-white" unoptimized />
                </button>
              ))}
            </div>
          </section>

          {/* Details */}
          <section>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">{PRODUCT.name}</h1>
            <p className="mt-1 text-gray-600">{PRODUCT.subtitle}</p>

            <div className="mt-4 flex items-center gap-3">
              <div className="text-2xl font-semibold">{priceText}</div>
              <div className="flex gap-2">
                {PRODUCT.badges.map((b) => (
                  <span key={b} className="text-xs border rounded-full px-2 py-1 text-gray-700">{b}</span>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mt-6">
              <div className="flex items-baseline justify-between">
                <label className="block text-sm font-medium">Size</label>
                <div className="inline-flex rounded-lg border overflow-hidden text-xs">
                  <button
                    className={`px-3 py-1 ${region === "US" ? "bg-white font-semibold" : "bg-gray-100"}`}
                    onClick={() => setRegion("US")}
                  >
                    US
                  </button>
                  <button
                    className={`px-3 py-1 ${region === "EU" ? "bg-white font-semibold" : "bg-gray-100"}`}
                    onClick={() => setRegion("EU")}
                  >
                    EU
                  </button>
                </div>
              </div>

              <div className="mt-2 grid grid-cols-3 gap-2">
                {PRODUCT.sizes.map((s) => (
                  <button
                    key={s.code}
                    onClick={() => setSize(s.code)}
                    className={`rounded-xl border px-3 py-3 text-sm text-left hover:shadow-sm ${
                      size === s.code ? "border-black" : "border-gray-300"
                    }`}
                  >
                    <div className="font-medium">{s.code}</div>
                    <div className="text-gray-500">
                      {typeof s.hint === "string" ? s.hint : s.hint[region]}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-4">
              <label className="block text-sm font-medium">Quantity</label>
              <div className="mt-2 inline-flex items-center rounded-xl border">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-3 py-2 text-lg"
                >
                  −
                </button>
                <span className="px-4 font-medium select-none">{qty}</span>
                <button
                  onClick={() => setQty((q) => Math.min(10, q + 1))}
                  className="px-3 py-2 text-lg"
                >
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                disabled
                className="bg-black text-white rounded-xl px-6 py-3 font-semibold opacity-60 cursor-not-allowed"
              >
                Buy Now (Stripe soon)
              </button>
              <a
                href={waHref}
                target="_blank"
                className="border border-gray-300 rounded-xl px-6 py-3 font-semibold text-center hover:bg-gray-50"
              >
                Order via WhatsApp
              </a>
            </div>

            {/* Meta */}
            <div className="mt-8 grid gap-4 text-sm text-gray-700">
              <p>{PRODUCT.description}</p>
              <p><span className="font-medium">Composition:</span> {PRODUCT.composition}</p>
              <p><span className="font-medium">Care:</span> {PRODUCT.care.join(" • ")}</p>
              <SizeGuide />
            </div>

            {/* Trust */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              {["Secure Payment", "Quick Support", "Small-Batch Quality"].map((t) => (
                <div key={t} className="rounded-xl border p-4 text-center text-gray-700">{t}</div>
              ))}
            </div>

            <div className="mt-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900">← Back to home</Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
