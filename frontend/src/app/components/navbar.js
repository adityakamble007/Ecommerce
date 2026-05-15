"use client";

import Link from "next/link";
import {
  Search,
  ShoppingBag,
  Heart,
  User,
  Menu,
} from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <nav className="max-w-[1600px] mx-auto">
        
        {/* Glass Container */}
        <div className="
          flex items-center justify-between
          bg-white/30
          backdrop-blur-2xl
          border border-white/40
          shadow-[0_8px_30px_rgb(0,0,0,0.05)]
          rounded-[2rem]
          px-6 py-4
        ">
          
          {/* Left */}
          <div className="flex items-center gap-10">
            
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-black tracking-tight"
            >
              <span className="
                bg-gradient-to-r
                from-teal-600
                to-emerald-500
                bg-clip-text
                text-transparent
              ">
                AK
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {["Shop", "Men", "Women", "New", "Brands"].map((item) => (
                <Link
                  key={item}
                  href="/"
                  className="
                    text-sm font-semibold text-slate-600
                    hover:text-slate-900
                    transition-all duration-300
                    relative
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-[2px]
                    after:w-0
                    after:bg-teal-500
                    after:transition-all
                    hover:after:w-full
                  "
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            
            {/* Search */}
            <div className="
              hidden lg:flex items-center gap-2
              bg-white/40
              border border-white/50
              rounded-full
              px-4 py-2.5
              min-w-[240px]
            ">
              <Search size={16} className="text-slate-400" />
              
              <input
                type="text"
                placeholder="Search products..."
                className="
                  bg-transparent
                  outline-none
                  text-sm
                  placeholder:text-slate-400
                  w-full
                "
              />
            </div>

            {/* Action Buttons */}
            {[
              { icon: Heart },
              { icon: ShoppingBag },
              { icon: User },
            ].map((item, i) => (
              <button
                key={i}
                className="
                  relative
                  p-3
                  rounded-2xl
                  bg-white/40
                  backdrop-blur-xl
                  border border-white/50
                  text-slate-600
                  hover:text-teal-600
                  hover:bg-white/70
                  hover:-translate-y-1
                  transition-all duration-300
                  shadow-sm
                "
              >
                <item.icon size={18} />
              </button>
            ))}

            {/* Mobile Menu */}
            <button
              className="
                md:hidden
                p-3
                rounded-2xl
                bg-white/40
                border border-white/50
                text-slate-700
              "
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}