// components/CategorySection.jsx

export default function CategorySection() {
  const categories = [
    "Men",
    "Women",
    "Sneakers",
    "Accessories",
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24">

      <div className="flex flex-wrap justify-between items-center mb-8 sm:mb-12 gap-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
          Categories
        </h2>

        <button className="text-teal-600 font-semibold">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {categories.map((item) => (
          <div
            key={item}
            className="group relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-white/30 backdrop-blur-xl border border-white/50 p-6 sm:p-8 lg:p-10 min-h-[200px] sm:min-h-[250px] lg:min-h-[300px] hover:-translate-y-2 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />

            <div className="relative z-10 flex flex-col justify-between h-full">
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                {item}
              </h3>

              <button className="w-fit mt-6 sm:mt-10 bg-white/50 backdrop-blur-md px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl font-semibold hover:bg-white/80 transition-all text-sm sm:text-base">
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