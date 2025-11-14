// File: app/about/press-kit/page.tsx
import Image from "next/image";
import Link from "next/link";
import { site } from "@/site.config";

export default function PressKitPage() {
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
            <Link href="/about" className="hover:text-gray-900 text-gray-600">About</Link>
          </nav>
        </div>
      </header>

      {/* Title */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Press Kit</h1>
        <p className="mt-3 text-lg text-gray-700">
          Facts, assets, and brand story for media, collaborators, and partners.
        </p>
      </section>

      {/* Brand Definition */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-8 grid gap-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Brand Definition</h2>
        <p className="text-gray-800 leading-relaxed">
          <b>{site.brand}</b> is the <b>first educational sock brand</b> — pioneering fashion that teaches.
          Each pair carries a QR-linked story of a <b>hero of African descent</b>, turning everyday wear into discovery.
        </p>
      </section>

      {/* One-Paragraph Boilerplate */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-8 grid gap-4">
        <h2 className="text-xl md:text-2xl font-extrabold tracking-tight">Boilerplate (copy/paste)</h2>
        <p className="text-gray-800 leading-relaxed border rounded-2xl p-5">
          {site.brand} blends style, heritage, and learning. Each pair of socks includes a QR code
          that opens a short, mobile story about a hero of African descent — scientists, authors, innovators,
          leaders. With four signature colours (White, Yellow, Green, Red), {site.brand} invites parents,
          students, and collectors to wear history with pride. Learn more at {site.baseUrl}.
        </p>
      </section>

      {/* Manifesto */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-8">
        <div className="rounded-3xl border p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Manifesto</h2>
          <p className="mt-4 text-gray-800 leading-relaxed">
            Every day, billions of people put on socks without a second thought. We saw an opportunity hidden in that routine — a chance to walk with truth.
            <b> {site.brand}</b> is the first educational sock brand, pioneering fashion that teaches. Each pair carries a QR-linked story of a <b>hero of African descent</b> —
            a figure whose name or influence the world too often forgets. We exist to fight silence with style, to replace stereotypes with knowledge, and to let every
            step tell the story schools never did. Because history deserves to walk with us — not behind us.
          </p>
        </div>
      </section>

      {/* Colours & Logos */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-8">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Signature Colours & Logos</h2>
        <p className="mt-3 text-gray-700">White · Yellow · Green · Red. Use on clean backgrounds; avoid busy textures behind QR codes.</p>
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

        <div className="mt-8 grid gap-3">
          <div className="rounded-2xl border p-5">
            <h3 className="font-semibold">Logo Pack</h3>
            <p className="mt-2 text-gray-700">
              Download PNG/SVG logos in black, white, and gold. (Place your files at <code>/public/brand/</code>.)
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <Link href="/brand/itso-logo-black.png" className="px-3 py-2 border rounded-xl text-sm hover:bg-gray-50">Logo — Black</Link>
              <Link href="/brand/itso-logo-white.png" className="px-3 py-2 border rounded-xl text-sm hover:bg-gray-50">Logo — White</Link>
              <Link href="/brand/itso-logo-gold.png"  className="px-3 py-2 border rounded-xl text-sm hover:bg-gray-50">Logo — Gold</Link>
              <Link href="/brand/itso-logo.svg"       className="px-3 py-2 border rounded-xl text-sm hover:bg-gray-50">Logo — SVG</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Social */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-8 grid gap-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Media Contact</h2>
        <div className="rounded-2xl border p-5">
          <p className="text-gray-800">
            Email: <a className="underline" href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
          </p>
          <div className="mt-2 text-gray-700">
            <div>Instagram: <Link className="underline" href={site.socials?.instagram ?? "#"}>@ITSO</Link></div>
            <div>TikTok: <Link className="underline" href={site.socials?.tiktok ?? "#"}>@ITSO</Link></div>
            <div>X/Twitter: <Link className="underline" href={site.socials?.x ?? "#"}>@ITSO</Link></div>
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
