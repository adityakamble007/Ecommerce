// components/Newsletter.jsx

export default function Newsletter() {
  return (
    <section className="py-24">

      <div className="bg-white/30 backdrop-blur-2xl border border-white/50 rounded-[3rem] p-12 text-center">

        <h2 className="text-5xl font-black tracking-tight">
          Stay Updated
        </h2>

        <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
          Get notified about new collections, exclusive drops, and special offers.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-white/50 backdrop-blur-md border border-white/50 rounded-2xl px-6 py-4 outline-none placeholder:text-slate-400"
          />

          <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold hover:scale-105 transition-all">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}