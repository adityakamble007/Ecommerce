import Image from "next/image";
import { Heart, LayoutGrid, List, SlidersHorizontal } from "lucide-react";
import Navbar from "../components/Bar";

// --- Data Fetching ---
async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

// --- Main Page Component ---
export default async function ProductsPage() {
  const products = await getProducts();

  return (
    // Liquid Retina Background - Soft mesh gradient
    <div className="relative min-h-screen bg-slate-50 text-slate-800 font-sans overflow-hidden selection:bg-teal-300 selection:text-white">
      
      {/* Liquid Background Blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-300/30 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-teal-300/30 blur-[120px] pointer-events-none" />
      <div className="fixed top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-blue-300/20 blur-[100px] pointer-events-none" />
      <Navbar/>
      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
        

        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 sm:mb-10 gap-4">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-500">
            {products.length} Results
          </h1>
          
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex bg-white/40 backdrop-blur-md border border-white/60 shadow-sm rounded-xl p-1">
              <button className="p-2 bg-white/80 shadow-sm rounded-lg text-slate-800 transition-all"><LayoutGrid size={18} /></button>
              <button className="p-2 text-slate-500 hover:text-slate-800 transition-all"><List size={18} /></button>
            </div>
            <button className="flex items-center gap-2 bg-white/40 backdrop-blur-md border border-white/60 shadow-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold hover:bg-white/60 transition-all">
              <SlidersHorizontal size={16} />
              <span className="hidden xs:inline">Sort by:</span> Popular
            </button>
          </div>
        </div>

        {/* Product Grid - Expanded for full width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </div>
  );
}

// --- Floating Glassmorphism Product Card ---
function ProductCard({ product }) {
  return (
    <div className="group flex flex-col relative bg-white/30 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-500 ease-out rounded-[2rem] p-3 sm:p-4">
      
      {/* Image Container */}
      <div className="relative aspect-square w-full bg-white/40 rounded-2xl overflow-hidden mb-4 sm:mb-5 flex items-center justify-center">
        {/* New Arrival Tag */}
        <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-teal-400 to-emerald-400 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span> New
        </div>
        
        {/* Wishlist Button inside image container */}
        <button className="absolute top-3 right-3 z-10 bg-white/50 backdrop-blur-md hover:bg-white p-2 rounded-full text-slate-400 hover:text-rose-500 transition-all duration-300 shadow-sm">
          <Heart size={16} />
        </button>
        
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain p-4 sm:p-6 mix-blend-multiply transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
        />
      </div>

      {/* Card Details */}
      <div className="flex flex-col flex-1 px-1 sm:px-2 pb-1 sm:pb-2">
        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">
          {product.category}
        </span>
        
        <h3 className="font-bold text-slate-800 text-sm mb-2 sm:mb-3 line-clamp-2 leading-relaxed" title={product.title}>
          {product.title}
        </h3>
        
        <div className="mt-auto flex justify-between items-center">
          <span className="text-base sm:text-lg font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-600">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-[11px] sm:text-xs font-semibold text-rose-400 bg-rose-50 px-2 py-1 rounded-md">
            {product.rating.count} left
          </span>
        </div>
      </div>
    </div>
  );
}