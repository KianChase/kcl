"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND } from "@/constants/brand";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
].map(item => ({
  ...item,
  ariaLabel: `Visit ${BRAND.name} ${item.label} page`
}));

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 banner-spacing ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-md py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <Logo 
            variant={isScrolled ? "monogram" : "full"} 
            className={`transition-all duration-300 ${isScrolled ? "scale-90" : "scale-100"}`} 
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isScrolled
                    ? pathname === item.href
                      ? "text-red-600"
                      : "text-gray-600 hover:text-red-600"
                    : "text-white hover:text-gray-200"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/consultation"
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isScrolled
                  ? `bg-red-600 text-white hover:bg-red-700`
                  : "bg-white/90 text-red-600 hover:bg-white"
              }`}
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-red-600" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-red-600" : "text-white"} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden"
            >
              <div className="py-2 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-2 text-sm font-medium ${
                      pathname === item.href
                        ? "bg-red-600 text-white"
                        : "text-gray-600 hover:bg-red-50 hover:text-red-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/consultation"
                  className="block px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700"
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
} 