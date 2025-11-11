﻿// /app/page.tsx
import Link from "next/link";
import Image from "next/image";
import { site } from "@/site.config";

const WA = site.contact?.whatsapp || "254748699460";
const wa = (t?: string) => `https://wa.me/${WA}${t ? `?text=${encodeURIComponent(t)}` : ""}`;

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Top bar */}
      <div className="bg-black text-white/90 text-xs">
        <div className="max-w-5xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex gap-4">
            <a className="hover:underline" href={`tel:${site.contact?.phone || ""}`}>📞 {site.contact?.phone}</a>
            <a className="hover:underline" href={`mailto:${site.contact?.email || ""}`}>✉️ {site.contact?.email}</a>
          </div>
          <Link
            href={wa("Hi! I want to order socks from the current drop.")}
            target="_blank"
            className="px-3 py-1 rounded-full bg-white text-black font-semibold hover:opacity-90"
          >
            WhatsApp Order
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 py-14 text-center">
        <div className="mx-auto mb-6 grid place-items-center">
          {/* Use any square logo you already deployed; 512x512 is ideal */}
          <Image
            src="/favicon/web-app-manifest-512x512.png"
            alt={site.brand}
            width={120}
            height={120}
            className="opacity-90"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          {site.brand}
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          Limited <strong>statement socks</strong>. Small batch. Big voice.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/drop"
            className="h-12 px-6 rounded-xl bg-black text-white font-semibold grid place-items-center hover:brightness-110"
          >
            Shop Drop #1
          </Link>
          <Link
            href={wa("Hi! Notify me about the next drop.")}
            target="_blank"
            className="h-12 px-6 rounded-xl border font-semibold grid place-items-center hover:bg-gray-50"
          >
            Notify Me on WhatsApp
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ["Premium Cotton", "Comfy, breathable, and built to last."],
            ["Bold Statements", "Say it with your socks — start conversations."],
            ["Small Batch", "Drops only. When it’s gone, it’s gone."],
          ].map(([title, desc]) => (
            <article key={title} className="rounded-2xl border p-6">
              <div className="text-sm font-semibold text-gray-900">{title}</div>
              <p className="text-gray-600 mt-2">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 py-12 text-center">
        <div className="rounded-3xl border p-10 bg-gray-50">
          <h2 className="text-2xl font-bold">Get the next drop first</h2>
          <p className="text-gray-600 mt-2">Early access + exclusive designs.</p>
          <Link
            href={wa("Add me to the early access list.")}
            target="_blank"
            className="mt-5 inline-grid place-items-center h-12 px-6 rounded-xl bg-black text-white font-semibold hover:brightness-110"
          >
            Join WhatsApp List
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-5xl mx-auto px-4 py-8 text-sm text-gray-600 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div>© {new Date().getFullYear()} {site.brand}. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
