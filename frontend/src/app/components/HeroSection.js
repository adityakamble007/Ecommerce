// components/HeroSection.jsx

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[60vh] sm:min-h-[70vh] lg:min-h-[90vh] py-10 sm:py-16">

      {/* Left */}
      <div>
        <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-md border border-white/50 px-4 py-2 rounded-full shadow-sm">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
          <span className="text-sm font-semibold text-slate-700">
            New Collection 2026
          </span>
        </div>

        <h1 className="mt-6 sm:mt-8 text-4xl sm:text-6xl lg:text-8xl font-black leading-[0.9] tracking-tight text-slate-900">
          Liquid
          <br />
          Luxury
        </h1>

        <p className="mt-6 sm:mt-8 text-base sm:text-lg text-slate-500 max-w-xl leading-relaxed">
          Discover futuristic fashion and premium lifestyle products crafted
          with modern aesthetics and timeless minimalism.
        </p>

        <div className="flex flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-10">
          <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300">
            Shop Now
          </button>

          <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/50 font-semibold hover:bg-white/60 transition-all">
            Explore
          </button>
        </div>
      </div>

      {/* Right */}
      <div className="relative flex items-center justify-center">

        <div className="absolute w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-teal-300/30 rounded-full blur-[120px]" />

        <div className="relative bg-white/30 backdrop-blur-2xl border border-white/50 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 shadow-[0_20px_80px_rgb(0,0,0,0.08)]">

          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/40 backdrop-blur-md border border-white/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl text-xs sm:text-sm font-semibold">
            Trending
          </div>

          <Image
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
            alt="Sneaker"
            width={500}
            height={500}
            priority
            className="object-contain drop-shadow-2xl"
            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 500px"
          />
        </div>
      </div>
    </section>
  );
}