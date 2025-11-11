﻿﻿// /app/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { site } from "@/site.config";

const WA = site.contact?.whatsapp || "254700206642";
const wa = (t?: string) => `https://wa.me/${WA}${t ? `?text=${encodeURIComponent(t)}` : ""}`;

const BRAND = site.brand || "House of Zenfit";
const ADDRESS = site.address || "Nairobi, Kenya";
const PHONE = site.contact?.phone || "+254 700 206 642";
const EMAIL = site.contact?.email || "hello@houseofzenfit.co.ke";
type SocialItem = { name: string; href: string; icon: string };
type SocialMap = Record<string, string>;

const normKey = (key: string) => {
  if (key === "x") return { name: "X", icon: "x" };
  if (key === "googleBusiness") return { name: "Google Business", icon: "google-business" };
  return { name: key.charAt(0).toUpperCase() + key.slice(1), icon: key.toLowerCase() };
};

const socials: SocialItem[] = Array.isArray(site.socials)
  ? (site.socials as Array<{ name: string; href: string }>).map(({ name, href }) => ({
      name,
      href,
      icon: name.toLowerCase().replace(/\s+/g, "-"),
    }))
  : Object.entries((site.socials ?? {}) as SocialMap).map(([key, href]) => {
      const { name, icon } = normKey(key);
      return { name, href, icon };
    });
 
const isMobile =
  typeof navigator !== "undefined" &&
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// hide Facebook on mobile only
const visibleSocials = socials.filter(
  (s) => !(isMobile && s.name.toLowerCase() === "facebook")
);


export default function Page() {
  // ===== HERO ROTATOR =====
  const heroImages = useMemo(
    () => [
      { src: "/templates/House of Zenfit-hero.jpg", alt: "Strength training" },
      { src: "/templates/House of Zenfit-hero2.jpg", alt: "Group class" },
      { src: "/templates/House of Zenfit-hero3.jpg", alt: "Personal coaching" },
    ],
    []
  );
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % heroImages.length), 7000);
    return () => clearInterval(t);
  }, [heroImages.length]);

  // ===== SIMPLE FAQ STATE =====
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* ===== TOP BAR ===== */}
      <div className="bg-[#0B1220] text-white/90 text-xs">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2 flex items-center justify-between flex-wrap gap-2">
          <div className="flex flex-wrap gap-3">
            <a className="hover:underline" href={`tel:${PHONE}`}>📞 {PHONE}</a>
            <a className="hover:underline" target="_blank" href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`}>📍 {ADDRESS}</a>
            <a className="hover:underline" href={`mailto:${EMAIL}`}>✉️ {EMAIL}</a>
          </div>
          <Link
            href={wa("Hi House of Zenfit, I’d like to book a free trial.")}
            target="_blank"
            className="px-3 py-1 rounded-full bg-emerald-500 text-white font-semibold hover:brightness-95"
          >
            Free Trial
          </Link>
        </div>
      </div>

      {/* ===== HEADER ===== */}
      <header className="border-b border-gray-100 bg-white/90 backdrop-blur">
        <div className="max-w-7xl mx-auto h-16 md:h-20 px-3 sm:px-4 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <Image
              src="/House-of-Zenfit-logo@2x.png"
              alt={BRAND}
              width={260}
              height={65}
               className="w-auto h-14 md:h-18 lg:h-22"  
            />

            <span className="sr-only">{BRAND}</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#overview" className="hover:text-emerald-600">Overview</a>
            <a href="#programs" className="hover:text-emerald-600">Programs</a>
            <a href="#zenstrength" className="hover:text-emerald-600">ZenStrength</a>
            <a href="#results" className="hover:text-emerald-600">Results</a>
            <a href="#timetable" className="hover:text-emerald-600">Timetable</a>
            <a href="#coaches" className="hover:text-emerald-600">Coaches</a>
            <a href="#pricing" className="hover:text-emerald-600">Pricing</a>
            <a href="#faq" className="hover:text-emerald-600">FAQ</a>
            <a href="#visit" className="hover:text-emerald-600">Visit</a>
          </nav>
        </div>
      </header>

      {/* ===== MAIN GRID ===== */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 mt-10">
        {/* SIDE RAIL */}
        <aside className="hidden lg:block sticky top-20 h-max">
          <nav className="text-sm space-y-2">
            {[
              ["#overview", "Overview"],
              ["#programs", "Programs"],
              ["#zenstrength", "ZenStrength"],
              ["#results", "Results"],
              ["#timetable", "Timetable"],
              ["#coaches", "Coaches"],
              ["#pricing", "Pricing"],
              ["#faq", "FAQ"],
              ["#visit", "Visit Us"],
            ].map(([href, label]) => (
              <a key={href} href={href} className="block px-3 py-2 rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-200">
                {label}
              </a>
            ))}
          </nav>

          <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
            <div className="text-xs uppercase tracking-wide opacity-90">Quick Action</div>
            <div className="text-lg font-bold leading-tight mt-1">Book a Free Trial</div>
            <Link href={wa("Hi, I want a free trial this week.")} target="_blank" className="mt-3 inline-block bg-white text-emerald-700 font-semibold px-3 py-2 rounded-lg hover:brightness-95">
              WhatsApp Now
            </Link>
          </div>
        </aside>

        {/* CONTENT COLUMN */}
        <div className="space-y-20">
          {/* ===== HERO ===== */}
          <section id="overview" className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center px-3 sm:px-6">
            <div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Train Hard. <span className="text-emerald-600">Breathe Deep</span>. Live Zen.
              </h1>
              <p className="mt-3 sm:mt-4 text-gray-600 text-base sm:text-lg">
                Strength, conditioning, and mobility programs designed for real life.
                Small classes, expert coaches, visible progress.
              </p>

              <div className="mt-5 sm:mt-6 flex flex-wrap gap-3 max-w-[520px]">
                <Link href={wa("Hi, I’d like details on memberships and class times.")} target="_blank" className="h-12 px-6 rounded-xl bg-emerald-600 text-white font-semibold grid place-items-center hover:brightness-95">
                  Join on WhatsApp
                </Link>
                <a href="#pricing" className="h-12 px-6 rounded-xl border font-semibold grid place-items-center hover:bg-gray-50">
                  See Pricing
                </a>
                <a href="#zenstrength" className="h-12 px-6 rounded-xl border font-semibold grid place-items-center hover:bg-gray-50">
                  What is ZenStrength?
                </a>
              </div>

              <ul className="mt-8 grid sm:grid-cols-2 gap-4 text-sm">
                {[
                  ["Coach Ratio", "Small groups, real attention"],
                  ["Programming", "Periodized blocks for results"],
                  ["Recovery", "Mobility & guidance included"],
                  ["Nutrition", "Simple habits that stick"],
                ].map(([k, v]) => (
                  <li key={k} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-600" />
                    <div>
                      <div className="font-semibold">{k}</div>
                      <div className="text-gray-600">{v}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative min-h-[420px] sm:min-h-[520px] rounded-3xl overflow-hidden shadow-lg">
              <Image key={heroImages[i].src} src={heroImages[i].src} alt={heroImages[i].alt} fill sizes="100vw" className="object-cover" priority />
            </div>
          </section>

          {/* ===== PROGRAMS ===== */}
          <section id="programs" className="px-3 sm:px-6">
            <h2 className="text-3xl md:text-4xl font-bold">Programs</h2>
            <p className="text-gray-600 mt-2 max-w-2xl">
              Training tracks designed for different goals. Start where you are — we’ll meet you there.
            </p>

            <div className="mt-8 grid xl:grid-cols-4 md:grid-cols-2 gap-6">
              {[
                ["Strength Foundation", "Master form, build a resilient base.", "Info: Strength Foundation"],
                ["Athlete Engine", "Conditioning for power and endurance.", "Info: Athlete Engine"],
                ["Mobility Reset", "Move freely, reduce pain and stiffness.", "Info: Mobility Reset"],
                ["Body Recomp", "Smart fat loss with muscle retention.", "Info: Body Recomp"],
              ].map(([title, desc, msg]) => (
                <article key={title} className="rounded-3xl p-6 border border-gray-200 bg-white shadow-sm">
                  <div className="text-sm font-semibold text-emerald-700">{title}</div>
                  <p className="text-gray-700 mt-2">{desc}</p>
                  <Link href={wa(String(msg))} target="_blank" className="mt-4 inline-block text-emerald-700 font-semibold hover:underline">
                    Ask on WhatsApp →
                  </Link>
                </article>
              ))}
            </div>
          </section>

          {/* ===== ZENSTRENGTH EXPLAINER ===== */}
          <section id="zenstrength" className="px-3 sm:px-6">
            <div className="rounded-3xl overflow-hidden border border-gray-200 grid md:grid-cols-2">
              <div className="p-6 sm:p-10">
                <h2 className="text-3xl md:text-4xl font-bold">ZenStrength™</h2>
                <p className="text-gray-600 mt-2">
                  Our signature fusion of **weights + breathwork**. Lift with intention, finish with guided breathing to
                  restore your nervous system and accelerate recovery.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-gray-700">
                  {[
                    "Periodized strength blocks",
                    "Breath ladders & box breathing",
                    "HRV-friendly conditioning finishers",
                    "Built-in mobility flow",
                  ].map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" /> {b}
                    </li>
                  ))}
                </ul>
                <Link href={wa("I want to try ZenStrength")} target="_blank" className="mt-6 inline-grid place-items-center px-4 py-2 rounded-xl bg-emerald-600 text-white font-semibold hover:brightness-95">
                  Book a ZenStrength Trial
                </Link>
              </div>
              <div className="relative min-h-[360px]">
                <Image src="/templates/zenstrength.jpg" alt="ZenStrength session" fill className="object-cover" />
              </div>
            </div>
          </section>

          {/* ===== RESULTS GALLERY ===== */}
          <section id="results" className="px-3 sm:px-6">
            <h2 className="text-3xl md:text-4xl font-bold">Real Results</h2>
            <p className="text-gray-600 mt-2">Visible progress — form, strength, confidence.</p>

            <div className="mt-6 grid md:grid-cols-3 gap-6">
              {["result1.jpg", "result2.jpg", "result3.jpg"].map((img) => (
                <figure key={img} className="rounded-2xl overflow-hidden border border-gray-200">
                  <Image src={`/results/${img}`} alt="Client result" width={800} height={600} className="w-full h-auto object-cover" />
                </figure>
              ))}
            </div>

            <div className="mt-4 text-sm text-gray-500">
              *Shared with client consent. Individual results vary with effort and consistency.
            </div>
          </section>

          {/* ===== WEEKLY TIMETABLE ===== */}
          <section id="timetable" className="px-3 sm:px-6">
            <h2 className="text-3xl md:text-4xl font-bold">Weekly Timetable</h2>
            <p className="text-gray-600 mt-2">Book directly on WhatsApp — we’ll confirm your slot.</p>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-2xl overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    {["Time", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((h) => (
                      <th key={h} className="px-4 py-3 text-left font-semibold text-gray-700">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="[&_tr:nth-child(even)]:bg-gray-50/40">
                  {[
                    ["06:30", "Athlete HIIT", "", "Athlete HIIT", "", "Athlete HIIT", "Strength Circuit"],
                    ["10:00", "", "", "Mobility Reset", "", "", "Foundations"],
                    ["18:00", "Strength", "Yoga Flow (19:00)", "Strength", "Spin Power", "ZenStrength", ""],
                  ].map((row, idx) => (
                    <tr key={idx} className="border-t border-gray-200">
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="px-4 py-3">
                          {cIdx === 0 ? (
                            <span className="font-semibold">{cell}</span>
                          ) : cell ? (
                            <Link href={wa(`Booking: ${cell} on ${["","Mon","Tue","Wed","Thu","Fri","Sat"][cIdx]}`)} target="_blank" className="text-emerald-700 font-semibold hover:underline">
                              {cell}
                            </Link>
                          ) : (
                            <span className="text-gray-400">—</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ===== COACHES  TNS===== */}
          <section id="coaches" className="px-3 sm:px-6">
            <h2 className="text-3xl md:text-4xl font-bold">Coaches</h2>
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              {[
                ["Tats Khutu", "Head Coach — Strength & Conditioning", "coach1.jpg", "center 30%"],
                ["Emme", "Mobility & Breathwork Specialist", "coach2.jpg", "center 40%"],
                ["Guest Coach", "Athlete Performance", "coach3.jpg", "center 30%"], // move face higher
              ].map(([name, role, img, pos]) => (
                <article
                  key={name}
                  className="rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={`/coaches/${img}`}
                      alt={name as string}
                      fill
                      sizes="400px"
                      className="object-cover"
                      style={{ objectPosition: pos as string }}   // ← direct CSS, no Tailwind dependency
                    />
                  </div>
                  <div className="p-5">
                    <div className="font-semibold">{name}</div>
                    <div className="text-sm text-gray-600">{role}</div>
                    <Link
                      href={wa(`Coach inquiry: ${name}`)}
                      target="_blank"
                      className="mt-3 inline-block text-emerald-700 font-semibold hover:underline"
                    >
                      Train with {name} →
                    </Link>
                  </div>
                </article>
              ))}


            </div>
          </section>

          {/* ===== TESTIMONIALS ===== */}
          <section className="px-3 sm:px-6">
            <h2 className="text-3xl md:text-4xl font-bold">What Clients Say</h2>

            <div className="mt-6 grid md:grid-cols-3 gap-6">
              {[
                [
                  "“I finally learned proper form and got my first pull-up.”",
                  "S. Wanjiru",
                  "client1.jpg",
                ],
                [
                  "“ZenStrength saved my back and boosted my lifts.”",
                  "M. Otieno",
                  "client2.jpg",
                ],
                [
                  "“Small classes, big results. I feel athletic again.”",
                  "D. Achieng",
                  "client3.jpg",
                ],
              ].map(([quote, name, img]) => (
                <blockquote
                  key={name}
                  className="rounded-3xl p-6 bg-gray-50 border border-gray-200 flex flex-col items-start"
                >
                  <p className="text-gray-800 flex-1">{quote}</p>

                  <footer className="mt-4 flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full overflow-hidden border border-gray-200">
                      <Image
                        src={`/clients/${img}`}
                        alt={`${name} avatar`}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div className="text-sm text-gray-700 font-medium">— {name}</div>
                  </footer>
                </blockquote>
              ))}
            </div>
          </section>


          {/* ===== PRICING ===== */}
          <section id="pricing" className="px-3 sm:px-6">
            <h2 className="text-3xl md:text-4xl font-bold">Pricing</h2>
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Monthly Membership",
                  badge: "Most popular",
                  features: ["Unlimited gym access", "All scheduled classes", "Coach intro session"],
                  cta: "Membership details",
                },
                {
                  title: "PT Pack (5)",
                  badge: "Personal Training",
                  features: ["5 private sessions", "Program + tracking", "Form checks & feedback"],
                  cta: "PT Pack (5) info",
                },
                {
                  title: "Hybrid Coaching",
                  badge: "Online + In-person",
                  features: ["Customized plan", "Weekly check-ins", "Messaging support"],
                  cta: "Hybrid coaching info",
                },
              ].map((p) => (
                <div key={p.title} className="rounded-3xl border border-gray-200 p-6 bg-white shadow-sm">
                  <div className="text-xs uppercase tracking-wider text-emerald-700 font-semibold">{p.badge}</div>
                  <div className="mt-1 text-2xl font-extrabold">{p.title}</div>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700">
                    {p.features.map((t) => (
                      <li key={t} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                        {t}
                      </li>
                    ))}
                  </ul>
                  <Link href={wa(p.cta)} target="_blank" className="mt-5 inline-grid place-items-center px-4 py-2 rounded-xl bg-emerald-600 text-white font-semibold hover:brightness-95">
                    Ask on WhatsApp
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* ===== FAQ ===== */}
          <section id="faq" className="px-3 sm:px-6">
            <h2 className="text-3xl md:text-4xl font-bold">FAQ</h2>
            <div className="mt-6 divide-y border rounded-2xl">
              {[
                ["What should I bring to my first session?", "Comfortable clothes, water, and a towel. We’ll handle the rest."],
                ["Do you offer nutrition guidance?", "Yes — simple, sustainable habits that pair with your training block."],
                ["What are your operating hours?", "4:00 AM – 8:00 PM (by booking/availability)."],
                ["Do you allow content during sessions?", "Moments may be captured for progress and curated content with consent."],
              ].map(([q, a], idx) => (
                <div key={idx} className="p-4">
                  <button
                    className="w-full text-left font-semibold flex items-center justify-between"
                    onClick={() => setOpenFaq((v) => (v === idx ? null : idx))}
                  >
                    {q}
                    <span className="text-gray-400">{openFaq === idx ? "–" : "+"}</span>
                  </button>
                  {openFaq === idx && <p className="mt-2 text-gray-600">{a}</p>}
                </div>
              ))}
            </div>

            {/* Photography policy callout */}
            <div className="mt-6 p-4 rounded-xl bg-gray-50 border text-sm text-gray-700">
              <strong>Photography Policy:</strong> Progress moments may be captured with client consent.
              You are the masterpiece — we simply highlight the art.
            </div>
          </section>

          {/* ===== VISIT / CONTACT ===== */}
          <section id="visit" className="px-3 sm:px-6 mb-20">
            <h2 className="text-3xl md:text-4xl font-bold">Visit Us</h2>
            <p className="text-gray-600 mt-2">{ADDRESS}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href={wa("Hi! Can I visit today?")} target="_blank" className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-semibold hover:brightness-95">
                WhatsApp
              </Link>
              <a href={`tel:${PHONE}`} className="px-4 py-2 rounded-xl border font-semibold hover:bg-gray-50">Call</a>
              <a target="_blank" href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`} className="px-4 py-2 rounded-xl border font-semibold hover:bg-gray-50">
                Directions
              </a>
            </div>
          </section>
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-10 text-sm text-gray-600">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 flex-wrap">
            <div>© {new Date().getFullYear()} {BRAND}. All rights reserved.</div>

        {/* Social Links */}
        <div className="flex gap-4 items-center">
          {visibleSocials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-600 font-medium flex items-center gap-2 whitespace-nowrap"
            >
              <img
                src={`/icons/${s.icon}.svg`}
                alt=""
                width={18}
                height={18}
                aria-hidden="true"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
              />
              <span>{s.name}</span>
            </a>
          ))}
        </div>



            <div className="flex gap-4">
              <a href="https://www.tech24.co.ke/" target="_blank" className="hover:underline">Tech24</a>
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Terms</a>
            </div>
          </div>
        </div>
      </footer>


      {/* ===== FLOATING WHATSAPP ===== */}
      <Link
        href={wa("Hi!")}
        target="_blank"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full grid place-items-center bg-[#25D366] shadow-xl hover:brightness-95"
      >
        <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={26} height={26} />
      </Link>
    </main>
  );
}
