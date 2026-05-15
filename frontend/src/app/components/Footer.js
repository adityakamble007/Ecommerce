// components/Footer.jsx

export default function Footer() {
  return (
    <footer className="py-10 sm:py-12 lg:py-16">

      <div className="border-t border-white/40 pt-8 sm:pt-10 flex flex-col md:flex-row justify-between gap-6 sm:gap-8">

        <div>
          <h3 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">
            AK
          </h3>

          <p className="mt-3 sm:mt-4 text-slate-500 max-w-sm text-sm sm:text-base">
            Premium futuristic ecommerce experience crafted with modern design principles.
          </p>
        </div>

        <div className="flex gap-10 sm:gap-12 lg:gap-16">
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Shop</h4>

            <ul className="space-y-2 sm:space-y-3 text-slate-500 text-sm sm:text-base">
              <li>Men</li>
              <li>Women</li>
              <li>Accessories</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>

            <ul className="space-y-2 sm:space-y-3 text-slate-500 text-sm sm:text-base">
              <li>About</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}