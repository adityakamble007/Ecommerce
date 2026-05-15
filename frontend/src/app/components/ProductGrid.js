// components/ProductGrid.jsx

import Image from "next/image";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products?limit=5", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default async function ProductGrid() {
  const products = await getProducts();

  return (
    <section className="py-12 sm:py-16 lg:py-24">

      <div className="flex flex-wrap justify-between items-center mb-8 sm:mb-12 gap-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
          Trending Products
        </h2>

        <button className="text-teal-600 font-semibold">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white/30 backdrop-blur-xl border border-white/50 rounded-[2rem] p-4 hover:-translate-y-2 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            <div className="relative aspect-square bg-white/40 rounded-2xl overflow-hidden mb-5">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain p-6 group-hover:scale-110 transition-all duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
              />
            </div>

            <span className="text-xs uppercase tracking-widest text-slate-400">
              {product.category}
            </span>

            <h3 className="mt-2 font-bold text-sm line-clamp-2">
              {product.title}
            </h3>

            <div className="mt-4 flex justify-between items-center">
              <span className="text-xl font-black text-teal-600">
                ${product.price}
              </span>

              <button className="bg-white/50 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-white/80 transition-all">
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}