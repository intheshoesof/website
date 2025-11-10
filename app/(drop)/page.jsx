"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { products } from "@/app/lib/products";

export default function Drop() {
  const cap = 150;
  const [count, setCount] = useState(0);
  useEffect(() => {
    const saved = Number(sessionStorage.getItem("mockCount") ?? Math.floor(Math.random() * 25));
    setCount(saved);
  }, []);
  const left = Math.max(cap - count, 0);

  return (
    <main className="max-w-5xl mx-auto p-8 space-y-10">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Drop #1 — Statement Socks</h1>
        <p className="opacity-80">Limited run. Ships in 7–10 days.</p>
        <p className="text-sm">Remaining: <b>{left}</b> / {cap}</p>
      </header>

      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(p => (
          <li key={p.id} className="border rounded-2xl p-4">
            <img src={p.image} alt={p.title} className="mb-3 rounded-xl aspect-square w-full object-cover" />
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="text-sm opacity-70">{p.tagline}</p>
            <p className="mt-2 text-xl">${p.price.toFixed(2)}</p>
            <Link href="mailto:help@intheshoesof.com?subject=Preorder%20socks"
              className="block text-center mt-3 rounded-xl border px-4 py-2 hover:bg-black hover:text-white">
              Pre-order
            </Link>
          </li>
        ))}
      </ul>

      <footer className="text-xs text-center opacity-70">
        Limited drop to control quality. Next drop announced soon.
      </footer>
    </main>
  );
}
