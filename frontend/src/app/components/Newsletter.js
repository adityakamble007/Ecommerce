// components/Newsletter.jsx

export default function Newsletter() {
  return (
    <section className="py-12 sm:py-16 lg:py-24">

      <div className="bg-white/30 backdrop-blur-2xl border border-white/50 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-8 lg:p-12 text-center">

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
          Stay Updated
        </h2>

        <p className="mt-3 sm:mt-4 text-slate-500 max-w-2xl mx-auto text-sm sm:text-base">
          Get notified about new collections, exclusive drops, and special offers.
        </p>

        <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-2xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-white/50 backdrop-blur-md border border-white/50 rounded-2xl px-5 sm:px-6 py-3 sm:py-4 outline-none placeholder:text-slate-400 text-sm sm:text-base"
          />

          <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold hover:scale-105 transition-all text-sm sm:text-base">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}