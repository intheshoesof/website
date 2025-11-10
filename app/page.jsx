import Link from "next/link";
export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-10 text-center space-y-6">
      <h1 className="text-4xl font-bold">InTheShoesOf</h1>
      <p className="opacity-80">Statement socks for bold humans.</p>
      <Link href="/(drop)" className="inline-block rounded-2xl border px-6 py-3 hover:bg-black hover:text-white">
        Shop Drop #1
      </Link>
    </main>
  );
}
