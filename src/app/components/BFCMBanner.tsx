// File: components/BFCMBanner.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function BFCMBanner() {
  const [hidden, setHidden] = useState(false);
  if (hidden) return null;

  return (
    <div className="relative isolate">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mt-4 rounded-2xl border bg-black text-white p-4 md:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <div className="text-sm uppercase tracking-widest text-yellow-300 font-semibold">BFCM</div>
            <div className="text-lg md:text-xl font-extrabold">
              Walk In. Stand Out. — Site-wide up to <span className="text-yellow-300">30% off</span>
            </div>
            <div className="text-sm opacity-90">
              Fri Nov 28 → Mon Dec 1. Four-colour sets, limited batch. No restock after Cyber Monday.
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/drop"
              className="rounded-xl bg-white text-black px-4 py-2 font-semibold hover:opacity-90"
            >
              Shop BFCM
            </Link>
            <button
              onClick={() => setHidden(true)}
              className="rounded-xl border border-white/30 px-3 py-2 text-sm hover:bg-white/10"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
