// File: app/about/page.tsx
import Image from "next/image";
import Link from "next/link";
import { site } from "@/site.config";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b bg-white/70 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 md:px-6 py-4">
          <Link href={site.routes?.home ?? "/"} className="flex items-center gap-2 font-extrabold text-lg tracking-tight">
            <Image src="/logo.png" alt="logo" width={40} height={40} />
            <span>{site.brand}</span>
          </Link>
          <nav className="flex gap-6 text-sm font-medium">
            <Link href={site.routes?.drop ?? "/drop"} className="hover:text-gray-900 text-gray-600">Drop</Link>
            <Link href={site.routes?.heroes ?? "/heroes"} className="hover:text-gray-900 text-gray-600">Heroes</Link>
          </nav>
        </div>
      </header>

      {/* Title */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">About In The Shoes Of</h1>
        <p className="mt-3 text-lg text-gray-700">
          Fashion that teaches. We’re pioneering socks that carry true stories of heroes of African descent — revealed through a simple QR code.
        </p>
      </section>

      {/* Manifesto */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-10">
        <div className="rounded-3xl border p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Every Step Tells a Story</h2>
          <p className="mt-4 text-gray-800 leading-relaxed">
            Every day, billions of people put on socks without a second thought. We saw an opportunity hidden in that routine — a chance to walk with truth.
            <b> In The Shoes Of</b> is the first educational sock brand, pioneering fashion that teaches.
            Each pair carries a QR-linked story of a <b>hero of African descent</b> — a figure whose name or influence the world too often forgets.
            We exist to fight silence with style, to replace stereotypes with knowledge, and to let every step tell the story schools never did.
            Because history deserves to walk with us — not behind us.
          </p>
        </div>
      </section>

      {/* Why ITSO */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-10">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Why ITSO</h2>
        <p className="mt-3 text-gray-700">
          <b>ITSO</b> means <i>In The Shoes Of</i>. It’s both our name and a call. We walk <i>in the shoes of</i> heroes of African descent whose stories have been
          ignored or simplified. Every pair is a step toward visibility, understanding, and truth. When you wear ITSO, you don’t just wear design — you walk in the
          footsteps of those who walked before you.
        </p>
      </section>

      {/* Four Colours */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-10">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Four Colours. One Truth.</h2>
        <p className="mt-3 text-gray-700">
          Our signature palette symbolizes universal values: <b>White</b> for truth, <b>Yellow</b> for light, <b>Green</b> for growth, <b>Red</b> for courage.
        </p>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {["white", "yellow", "green", "red"].map((c) => (
            <div key={c} className="rounded-2xl border p-6 text-center">
              <div className="text-sm font-semibold uppercase">{c}</div>
              <div className="mt-3 relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-white">
                <Image src={`/products/sample/${c}.png`} alt={`${c} sock`} fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-10">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">How It Works</h2>
        <ol className="mt-4 space-y-3 text-gray-700 list-decimal list-inside">
          <li>Pick a pair from our limited drops in four colours.</li>
          <li>Scan the QR code on the sock to open a short, mobile-friendly hero story.</li>
          <li>Read, share, and collect — every step spreads knowledge.</li>
        </ol>
      </section>

      {/* Who it’s for */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-10">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Who It’s For</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border p-5">
            <h3 className="font-semibold">Parents & Kids</h3>
            <p className="mt-2 text-gray-700">Everyday wear that sparks pride and curiosity at home and at school.</p>
          </div>
          <div className="rounded-2xl border p-5">
            <h3 className="font-semibold">Teachers & Schools</h3>
            <p className="mt-2 text-gray-700">QR-linked mini lessons that fit into assemblies, history, and arts classes.</p>
          </div>
          <div className="rounded-2xl border p-5">
            <h3 className="font-semibold">Collectors & Givers</h3>
            <p className="mt-2 text-gray-700">Four colours, many heroes — meaningful gifts and limited runs.</p>
          </div>
        </div>
      </section>

      {/* FAQ (short) */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-10">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Questions, Answered</h2>
        <div className="mt-6 grid gap-4">
          <div className="rounded-2xl border p-5">
            <h3 className="font-semibold">Are the stories kid-friendly?</h3>
            <p className="mt-2 text-gray-700">Yes. Each story is written to be clear and respectful for families and classrooms.</p>
          </div>
          <div className="rounded-2xl border p-5">
            <h3 className="font-semibold">Will drops be restocked?</h3>
            <p className="mt-2 text-gray-700">No — each batch is small and time-bound. Once a drop sells out, it lives on as a collectible.</p>
          </div>
          <div className="rounded-2xl border p-5">
            <h3 className="font-semibold">Do you verify historical claims?</h3>
            <p className="mt-2 text-gray-700">
              Yes. We focus on well-documented figures of African descent and skip subjects where evidence is unclear.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-16">
        <div className="rounded-3xl border p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Walk in history. Stand in truth.</h3>
          <p className="mt-3 text-gray-700">Explore the latest drop and share the stories you believe in.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href={site.routes?.drop ?? "/drop"} className="bg-black text-white rounded-xl px-6 py-3 font-semibold">Shop Now</Link>
            <Link href={site.routes?.heroes ?? "/heroes"} className="border border-gray-300 rounded-xl px-6 py-3 font-semibold hover:bg-gray-50">Meet the Heroes</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 text-sm text-gray-600">
          © {new Date().getFullYear()} {site.brand}. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
