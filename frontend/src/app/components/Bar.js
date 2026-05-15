"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  ShoppingBag,
  Heart,
  User,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  { label: "Shop", href: "/products" },
  { label: "Men", href: "/" },
  { label: "Women", href: "/" },
  { label: "New", href: "/" },
  { label: "Brands", href: "/" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-3 sm:px-4 pt-3 sm:pt-4">
      <nav className="max-w-[1600px] mx-auto">
        
        {/* Glass Container */}
        <div className="
          flex items-center justify-between
          bg-white/30
          backdrop-blur-2xl
          border border-white/40
          shadow-[0_8px_30px_rgb(0,0,0,0.05)]
          rounded-[2rem]
          px-4 sm:px-6 py-3 sm:py-4
        ">
          
          {/* Left */}
          <div className="flex items-center gap-6 sm:gap-10">
            
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
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
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
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2 sm:gap-3">
            
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
                  p-2.5 sm:p-3
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

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="
                md:hidden
                p-2.5 sm:p-3
                rounded-2xl
                bg-white/40
                border border-white/50
                text-slate-700
              "
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div
          className={`
            md:hidden
            overflow-hidden
            transition-all duration-300 ease-in-out
            ${mobileOpen ? "max-h-[400px] opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"}
          `}
        >
          <div className="
            bg-white/30
            backdrop-blur-2xl
            border border-white/40
            shadow-[0_8px_30px_rgb(0,0,0,0.05)]
            rounded-[2rem]
            px-6 py-5
          ">
            {/* Mobile Search */}
            <div className="
              lg:hidden flex items-center gap-2
              bg-white/40
              border border-white/50
              rounded-full
              px-4 py-2.5
              mb-4
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

            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-1">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="
                    text-sm font-semibold text-slate-600
                    hover:text-slate-900
                    hover:bg-white/40
                    transition-all duration-200
                    px-4 py-3
                    rounded-xl
                  "
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}