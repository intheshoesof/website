﻿import Image from "next/image";
import Link from "next/link";
import { site } from "@/site.config";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        {/* LOGO */}
        <div className="mb-8">
          <Image
            src="/favicon/web-app-manifest-512x512.png?v=3"
            alt={site.brand}
            width={280}
            height={280}
            priority
            unoptimized   // <- bypass optimizer; avoids transient disappearances
            style={{ display: "block", margin: "0 auto", maxWidth: "100%", height: "auto", opacity: 0.9 }}
          />

        </div>

        {/* BRAND TITLE */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          {site.brand}
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          Limited <strong>statement socks</strong>. Small batch. Big voice.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/drop"
            className="bg-black text-white rounded-xl px-6 py-3 font-semibold hover:brightness-110"
          >
            Shop Drop #1
          </Link>
          <Link
            href={`https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
              "Hi! Notify me when the next drop launches."
            )}`}
            target="_blank"
            className="border border-gray-300 rounded-xl px-6 py-3 font-semibold hover:bg-gray-50"
          >
            Join WhatsApp List
          </Link>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-6 pb-20">
        {[
          ["Premium Cotton", "Comfy, breathable, and built to last."],
          ["Bold Statements", "Say it with your socks — start conversations."],
          ["Small Batch", "Drops only. When it’s gone, it’s gone."],
        ].map(([title, desc]) => (
          <article
            key={title}
            className="rounded-2xl border p-6 text-center hover:shadow-sm transition"
          >
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-gray-600">{desc}</p>
          </article>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="border-t py-8 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} {site.brand}. All rights reserved.
      </footer>
    </main>
  );
}
