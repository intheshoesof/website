﻿// File: app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { site } from "@/site.config";

export default function HomePage() {
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
            <Link href={site.routes.drop} className="hover:text-gray-900 text-gray-600">Drop</Link>
            <Link href={site.routes.heroes ?? "/heroes"} className="hover:text-gray-900 text-gray-600">Heroes</Link>
          </nav>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Every Step Tells a Story
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Fashion that teaches. Each pair reveals the story of a{" "}
            <span className="font-semibold">hero of African descent</span> —
            through a simple QR code and bold design.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href={site.routes.drop} className="bg-black text-white rounded-xl px-6 py-3 font-semibold text-center">
              Explore the Drop
            </Link>
            <Link href={site.routes.heroes ?? "/heroes"} className="border border-gray-300 rounded-xl px-6 py-3 font-semibold text-center hover:bg-gray-50">
              Meet the Heroes
            </Link>
          </div>
        </div>

        {/* Optional promo image / video placeholder */}
        <div>
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl border bg-white">
            <Image
              src="/promo/four-colours.png"
              alt="ITSO four-colour signature"
              fill
              className="object-contain object-center bg-white"
            />
          </div>
          <p className="mt-3 text-xs text-gray-500">Signature colours: White · Yellow · Green · Red</p>
        </div>
      </section>

      {/* Learn • Wear • Remember */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-10">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">A Lesson Hidden in Your Socks</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="p-5 border rounded-2xl">
            <h3 className="font-semibold">Learn</h3>
            <p className="mt-2 text-gray-700">
              Each pair connects to a true story—scientists, writers, inventors and leaders of African descent who shaped the world.
            </p>
          </div>
          <div className="p-5 border rounded-2xl">
            <h3 className="font-semibold">Wear</h3>
            <p className="mt-2 text-gray-700">
              Statement socks in four symbolic colours: white, yellow, green, red. Daily expression of identity, unity, and pride.
            </p>
          </div>
          <div className="p-5 border rounded-2xl">
            <h3 className="font-semibold">Remember</h3>
            <p className="mt-2 text-gray-700">
              History has too often been edited. We walk to correct that—one step, one story, one pair at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Four Colours */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-10">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Four Colours. One Truth.</h2>
        <p className="mt-3 text-gray-700">
          Our signature palette represents the values carried by our heroes: <b>White</b> for truth, <b>Yellow</b> for light,
          <b> Green</b> for growth, <b>Red</b> for courage.
        </p>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {["white", "yellow", "green", "red"].map((c) => (
            <div key={c} className="rounded-2xl border p-6 text-center">
              <div className="text-sm font-semibold uppercase">{c}</div>
              <div className="mt-3 relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-white">
                <Image
                  src={`/products/sample/${c}.jpg `}
                  alt={`${c} sock`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-10">
        <blockquote className="text-xl md:text-2xl font-bold">
          “Because history deserves to walk with us — not behind us.”
        </blockquote>
        <p className="mt-4 text-gray-700">
          We exist to challenge silence, reclaim stories, and pass knowledge to the next generation through everyday wear.
          ITSO stands for education through design, visibility through fashion, and pride through truth.
        </p>
      </section>

      {/* Why ITSO — name & call */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-10">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Why ITSO</h2>
        <p className="mt-3 text-gray-700">
          <b>ITSO</b> means <i>In The Shoes Of</i>. It’s not just our name—it’s an invitation.
          We walk <i>in the shoes of</i> heroes of African descent whose stories have been ignored or simplified.
          Every pair is a step toward visibility, understanding, and truth. When you wear ITSO, you don’t just wear design—
          you walk in the footsteps of those who walked before you.
        </p>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-16">
        <div className="rounded-3xl border p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Walk in history. Stand in truth.</h3>
          <p className="mt-3 text-gray-700">Join the movement. Collect the socks. Share the stories.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href={site.routes.drop} className="bg-black text-white rounded-xl px-6 py-3 font-semibold">Shop Now</Link>
            <Link href="/about" className="border border-gray-300 rounded-xl px-6 py-3 font-semibold hover:bg-gray-50">Learn More</Link>
          </div>
        </div>
      </section>

     {/* SOCIAL LINKS */}
      <section className="flex justify-center gap-6 pb-8">
        <Link
          href="https://www.instagram.com/intheshoesof.world"
          target="_blank"
          className="text-gray-700 hover:text-black font-medium"
        >
          Instagram
        </Link>
        <Link
          href="https://www.tiktok.com/@intheshoesof.world"
          target="_blank"
          className="text-gray-700 hover:text-black font-medium"
        >
          TikTok
        </Link>
      </section>

      {/* Footer (minimal) */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 text-sm text-gray-600">
          © {new Date().getFullYear()} {site.brand}. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
