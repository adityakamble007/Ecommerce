// components/Footer.jsx

export default function Footer() {
  return (
    <footer className="py-16">

      <div className="border-t border-white/40 pt-10 flex flex-col md:flex-row justify-between gap-8">

        <div>
          <h3 className="text-3xl font-black bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">
            AK
          </h3>

          <p className="mt-4 text-slate-500 max-w-sm">
            Premium futuristic ecommerce experience crafted with modern design principles.
          </p>
        </div>

        <div className="flex gap-16">
          <div>
            <h4 className="font-bold mb-4">Shop</h4>

            <ul className="space-y-3 text-slate-500">
              <li>Men</li>
              <li>Women</li>
              <li>Accessories</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>

            <ul className="space-y-3 text-slate-500">
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