"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/data/navigation";
import { siteConfig } from "@/lib/data/siteConfig";
import { ChevronDown, Menu, X } from "lucide-react";
import { MobileMenu } from "./MobileMenu";

export const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Premium Scroll Logic: Detect direction to show/hide
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Check if we have scrolled past the top
      setScrolled(currentScrollY > 50);

      // 2. Hide if scrolling down, show if scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false); // Scrolling Down
      } else {
        setVisible(true); // Scrolling Up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#17609f] focus:text-white focus:px-4 focus:py-2 focus:rounded">
        Skip to content
      </a>

      {/* Main Header with dynamic visibility and transition */}
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 transform ${
          visible ? "translate-y-0" : "-translate-y-full"
        } ${
          scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.05)] py-1" 
          : "bg-white py-3"
        }`}
      >
        <nav className="container mx-auto px-4 lg:max-w-6xl flex items-center justify-between">
          <Link href="/" className="flex-shrink-0 transition-transform hover:scale-105 active:scale-95" aria-label="Guillaume Counseling Home">
            <img
              src={siteConfig.logo}
              alt="Guillaume Counseling Logo"
              className={`transition-all duration-300 ${scrolled ? "h-12 md:h-14" : "h-14 md:h-16"} w-auto`}
              loading="eager"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setHoveredDropdown(item.label)}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                {item.children ? (
                  <>
                    <button
                      className={`flex items-center gap-1 px-4 py-2 text-[14px] font-bold transition-all duration-300 hover:text-[#17609f] ${
                        hoveredDropdown === item.label ? "text-[#17609f]" : "text-gray-700"
                      }`}
                      aria-expanded={hoveredDropdown === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${hoveredDropdown === item.label ? "rotate-180" : ""}`} />
                    </button>

                    {/* Premium Glassmorphism Dropdown */}
                    <div className={`absolute top-full left-0 pt-2 z-[110] transition-all duration-300 ${
                      hoveredDropdown === item.label ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"
                    }`}>
                      <div className="bg-white/95 backdrop-blur-lg border border-gray-100 rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.1)] py-2 min-w-[240px] overflow-hidden">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-6 py-3 text-[14px] font-medium text-gray-700 hover:bg-[#17609f] hover:text-white transition-all duration-200"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`relative px-4 py-2 text-[14px] font-bold transition-all duration-300 hover:text-[#17609f] ${
                      isActive(item.href) ? "text-[#17609f]" : "text-gray-700"
                    }`}
                  >
                    {item.label}
                    {isActive(item.href) && (
                      <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#d8008a] rounded-full" />
                    )}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-gray-900 transition-colors hover:text-[#17609f]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </nav>
      </header>

      {/* Spacer to prevent content from jumping behind fixed navbar */}
      <div className="h-20 md:h-24" />

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
};