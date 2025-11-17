"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { site, waHref } from "@/site.config";

// Single source of truth: product comes from site.config
const PRODUCT = site.products.lewisHowardLatimer;

// --- Generic sock config (shared across heroes) ---
const BADGES = ["Small Batch", "Limited Drop", "Premium Cotton"] as const;

const SIZES = [
  { code: "S", hint: { US: "Women 6–8 · Men 5–6.5", EU: "EU 36–39" } },
  { code: "M", hint: { US: "Women 8.5–11 · Men 7–9.5", EU: "EU 40–44" } },
  { code: "L", hint: { US: "Women 11.5–13 · Men 10–13", EU: "EU 45–48" } },
] as const;

const CARE = [
  "Machine wash cold",
  "Do not bleach",
  "Tumble dry low",
  "Note: Dark color prints can make side seams more noticeable",
];

const COMPOSITION = "95% polyester, 5% spandex";

// --- Colour selector setup (4 images per colour — order enforced in site.config) ---
const COLOUR_OPTIONS = [
  { id: "white", label: "White" },
  { id: "red", label: "Red" },
  { id: "green", label: "Green" },
  { id: "yellow", label: "Yellow" },
] as const;

type ColourId = (typeof COLOUR_OPTIONS)[number]["id"];

const IMAGES_PER_COLOUR = 4;

function getImagesForColour(colour: ColourId) {
  const colourIndex = COLOUR_OPTIONS.findIndex((c) => c.id === colour);
  const start = colourIndex * IMAGES_PER_COLOUR;
  return PRODUCT.images.slice(start, start + IMAGES_PER_COLOUR);
}

function formatEUR(n: number) {
  return new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
  }).format(n);
}

// --- Size Guide toggle (in / cm) ---
function SizeGuide() {
  const [unit, setUnit] = useState<"in" | "cm">("in");

  const data =
    unit === "in"
      ? [
          {
            label: "Total Length",
            S: "12.99",
            M: "15.35",
            L: "16.14",
            unit: "in",
          },
          { label: "Width", S: "3.94", M: "3.94", L: "3.94", unit: "in" },
        ]
      : [
          {
            label: "Total Length",
            S: "33.00",
            M: "39.00",
            L: "41.00",
            unit: "cm",
          },
          { label: "Width", S: "10.00", M: "10.00", L: "10.00", unit: "cm" },
        ];

  return (
    <div className="mt-2 border rounded-xl p-4 bg-gray-50/50">
      <div className="flex items-center justify-between">
        <div className="font-medium">Size guide</div>
        <div className="inline-flex rounded-lg border overflow-hidden text-xs">
          <button
            className={`px-3 py-1 cursor-pointer hover:bg-gray-200 transition-colors ${
              unit === "in" ? "bg-white font-semibold" : "bg-gray-100"
            }`}
            onClick={() => setUnit("in")}
          >
            in
          </button>
          <button
            className={`px-3 py-1 cursor-pointer hover:bg-gray-200 transition-colors ${
              unit === "cm" ? "bg-white font-semibold" : "bg-gray-100"
            }`}
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
                <td className="py-2 pr-3">
                  {row.label}, {row.unit}
                </td>
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
  // gallery
  const [colour, setColour] = useState<ColourId>("white");
  const [activeWithinColour, setActiveWithinColour] = useState(0);

  const imagesForColour = useMemo(
    () => getImagesForColour(colour),
    [colour]
  );

  const mainImage =
    imagesForColour[activeWithinColour] ??
    PRODUCT.heroImage ??
    "/favicon/web-app-manifest-512x512.png";

  // size / qty
  const [size, setSize] = useState<string | null>(SIZES[0]?.code ?? null);
  const [qty, setQty] = useState(1);
  const [region, setRegion] = useState<"US" | "EU">("US");

  const priceText = useMemo(() => formatEUR(PRODUCT.priceEUR), []);
  const waLink = useMemo(
    () =>
      waHref(
        `Hi! I'd like to order ${qty} × ${PRODUCT.name} (${
          size ?? "no size selected"
        }).`
      ),
    [qty, size]
  );

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
              className="text-black font-semibold"
            >
              Drop
            </Link>
            <a
              href={waHref()}
              target="_blank"
              className="hover:text-gray-900 text-gray-600"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm mb-6">
          <Link
            href={site.routes.home}
            className="text-gray-600 hover:text-gray-900"
          >
            Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900 font-medium">Drop #2</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Gallery */}
          <section>
            {/* Colour selector */}
            <div className="mb-3 flex flex-wrap gap-2">
              {COLOUR_OPTIONS.map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    setColour(c.id);
                    setActiveWithinColour(0);
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-medium border cursor-pointer transition-colors ${
                    colour === c.id
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            <div className="aspect-[4/5] relative w-full overflow-hidden rounded-2xl border">
              <Image
                src={mainImage}
                alt={PRODUCT.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain bg-white"
                priority
                unoptimized
              />
            </div>

            <div className="mt-4 grid grid-cols-4 gap-3">
              {imagesForColour.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setActiveWithinColour(i)}
                  className={`relative aspect-square rounded-xl border overflow-hidden cursor-pointer ${
                    i === activeWithinColour
                      ? "ring-2 ring-black"
                      : "hover:border-gray-400"
                  }`}
                >
                  <Image
                    src={src}
                    alt="thumb"
                    fill
                    className="object-contain bg-white"
                    unoptimized
                  />
                </button>
              ))}
            </div>
          </section>

          {/* Details */}
          <section>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              {PRODUCT.name}
            </h1>
            <p className="mt-1 text-gray-600">{PRODUCT.subtitle}</p>

            <div className="mt-4 flex items-center gap-3">
              <div className="text-2xl font-semibold">{priceText}</div>
              <div className="flex gap-2">
                {BADGES.map((b) => (
                  <span
                    key={b}
                    className="text-xs border rounded-full px-2 py-1 text-gray-700"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mt-6">
              <div className="flex items-baseline justify-between">
                <label className="block text-sm font-medium">Size</label>
                <div className="inline-flex rounded-lg border overflow-hidden text-xs">
                  <button
                    className={`px-3 py-1 cursor-pointer hover:bg-gray-200 transition-colors ${
                      region === "US"
                        ? "bg-white font-semibold"
                        : "bg-gray-100"
                    }`}
                    onClick={() => setRegion("US")}
                  >
                    US
                  </button>
                  <button
                    className={`px-3 py-1 cursor-pointer hover:bg-gray-200 transition-colors ${
                      region === "EU"
                        ? "bg-white font-semibold"
                        : "bg-gray-100"
                    }`}
                    onClick={() => setRegion("EU")}
                  >
                    EU
                  </button>
                </div>
              </div>

              <div className="mt-2 grid grid-cols-3 gap-2">
                {SIZES.map((s) => (
                  <button
                    key={s.code}
                    onClick={() => setSize(s.code)}
                    className={`rounded-xl border px-3 py-3 text-sm text-left hover:shadow-sm cursor-pointer ${
                      size === s.code ? "border-black" : "border-gray-300"
                    }`}
                  >
                    <div className="font-medium">{s.code}</div>
                    <div className="text-gray-500">
                      {typeof s.hint === "string"
                        ? s.hint
                        : s.hint[region]}
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
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Buy Now (Stripe soon)
              </button>

              <a
                href={waLink}
                target="_blank"
                className="border border-gray-300 rounded-xl px-6 py-3 font-semibold text-center hover:bg-gray-50"
              >
                Order via WhatsApp
              </a>
            </div>

            {/* Meta */}
            <div className="mt-8 grid gap-4 text-sm text-gray-700">
              <p>{PRODUCT.description}</p>
              <p>
                <span className="font-medium">Composition:</span>{" "}
                {COMPOSITION}
              </p>
              <p>
                <span className="font-medium">Care:</span>{" "}
                {CARE.join(" • ")}
              </p>
              <SizeGuide />
            </div>

            {/* Trust badges */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              <div className="rounded-xl border border-blue-500 bg-blue-50 text-blue-900 p-4">
                <div className="font-semibold">Secure payment</div>
                <p className="mt-1 text-xs md:text-sm">
                  Card details encrypted and processed via Stripe once enabled.
                </p>
              </div>
              <div className="rounded-xl border p-4 text-gray-700 bg-white">
                <div className="font-semibold">Quick support</div>
                <p className="mt-1 text-xs md:text-sm">
                  Message us on WhatsApp for sizing, delivery, or order help.
                </p>
              </div>
              <div className="rounded-xl border p-4 text-gray-700 bg-white">
                <div className="font-semibold">Limited small-batch run</div>
                <p className="mt-1 text-xs md:text-sm">
                  Produced in small batches. Once a drop sells out, it is not
                  restocked.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href={site.routes.home}
                className="text-gray-600 hover:text-gray-900"
              >
                ← Back to home
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
