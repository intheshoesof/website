import { NextResponse } from "next/server";

let hits = 0;
let windowStart = Date.now();

export function middleware() {
  if (process.env.MAINTENANCE_MODE === "true") {
    return new NextResponse("Temporarily offline", { status: 503 });
  }
  const now = Date.now();
  if (now - windowStart > 60_000) { windowStart = now; hits = 0; }
  hits++;
  if (hits > 100) return new NextResponse("Slow down", { status: 429 });
  return NextResponse.next();
}
