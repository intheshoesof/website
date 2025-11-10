export const metadata = {
  title: "Drop #1 — InTheShoesOf",
  description: "Limited run of statement socks."
};

type Product = { id:string; title:string; tagline:string; price:number; image:string };

const products: Product[] = [
  { id: "sock-strong",    title: "I Am Strong",        tagline: "hold the line",  price: 12.99, image: "/og.jpg" },
  { id: "sock-proud",     title: "Proud Black Woman",  tagline: "walk loud",      price: 12.99, image: "/og.jpg" },
  { id: "sock-blackndad", title: "Black n Dad",        tagline: "legacy steps",   price: 12.99, image: "/og.jpg" }
];

export default function Drop() {
  const cap = 150;
  const left = cap;

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
            <a href={`mailto:help@intheshoesof.com?subject=Preorder%20${encodeURIComponent(p.title)}`}
               className="block text-center mt-3 rounded-xl border px-4 py-2 hover:bg-black hover:text-white">
              Pre-order
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
