"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { products } from "@/app/lib/products";

export default function Drop() {
  const cap = Number(process.env.NEXT_PUBLIC_DROP_CAP ?? 150);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const n = Number(sessionStorage.getItem("mockCount") ?? Math.floor(Math.random() * 20));
    setCount(n);
  }, []);
  const left = Math.max(cap - count, 0);

  if (process.env.NEXT_PUBLIC_DROP_ENABLED !== "true") {
    return <p className="p-10">Drop closed. Join the next one soon.</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <header className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Drop #1 — Statement Socks</h1>
        <p className="opacity-80">Small batch. Ships in 7–10 days.</p>
        <p className="text-sm">Left in this drop: <b>{left}</b> / {cap}</p>
      </header>

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {products.filter(p => p.active).map(p => (
          <li key={p.id} className="rounded-2xl border p-4">
            <img src={p.image} alt={p.title} className="mb-3 aspect-square w-full rounded-xl object-cover" />
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="text-sm opacity-75">{p.tagline}</p>
            <p className="mt-2 text-xl">${p.price.toFixed(2)}</p>
            <Link href="mailto:help@intheshoesof.com?subject=Preorder%20socks"
                  className="mt-3 block text-center rounded-2xl border px-4 py-2 hover:bg-black hover:text-white">
              Pre-order request
            </Link>
          </li>
        ))}
      </ul>

      <footer className="text-xs opacity-70 text-center">
        Pre-orders are reviewed manually for Drop #1. Limited quantities to control quality.
      </footer>
    </div>
  );
}
