// components/PromoBanner.jsx

export default function PromoBanner() {
  return (
    <section className="py-24">

      <div className="relative overflow-hidden rounded-[3rem] bg-white/30 backdrop-blur-2xl border border-white/50 p-16 shadow-[0_20px_80px_rgb(0,0,0,0.08)]">

        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-300/20 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-3xl">
          <span className="bg-white/50 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold">
            Limited Offer
          </span>

          <h2 className="mt-8 text-5xl lg:text-7xl font-black leading-[0.95] tracking-tight">
            Summer Sale
            <br />
            Up To 50% Off
          </h2>

          <p className="mt-6 text-slate-500 text-lg max-w-2xl">
            Upgrade your style with exclusive premium collections and futuristic designs.
          </p>

          <button className="mt-10 px-8 py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300">
            Shop Deals
          </button>
        </div>
      </div>
    </section>
  );
}