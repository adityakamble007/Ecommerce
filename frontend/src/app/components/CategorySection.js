// components/CategorySection.jsx

export default function CategorySection() {
  const categories = [
    "Men",
    "Women",
    "Sneakers",
    "Accessories",
  ];

  return (
    <section className="py-24">

      <div className="flex justify-between items-center mb-12">
        <h2 className="text-5xl font-black tracking-tight">
          Categories
        </h2>

        <button className="text-teal-600 font-semibold">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {categories.map((item) => (
          <div
            key={item}
            className="group relative overflow-hidden rounded-[2.5rem] bg-white/30 backdrop-blur-xl border border-white/50 p-10 min-h-[300px] hover:-translate-y-2 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />

            <div className="relative z-10 flex flex-col justify-between h-full">
              <h3 className="text-3xl font-black text-slate-900">
                {item}
              </h3>

              <button className="w-fit mt-10 bg-white/50 backdrop-blur-md px-5 py-3 rounded-2xl font-semibold hover:bg-white/80 transition-all">
                Explore
              </button>
            </div>

            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-300/20 rounded-full blur-3xl group-hover:scale-150 transition-all duration-700" />
          </div>
        ))}
      </div>
    </section>
  );
}