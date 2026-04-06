"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/data/navigation";
import { siteConfig } from "@/lib/data/siteConfig";
import { ChevronDown, Menu, X } from "lucide-react";
import { MobileMenu } from "./MobileMenu";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded">
        Skip to content
      </a>
      <header className={` top-0 left-0 right-0 z-50 transition-all duration-300 bg-background ${scrolled ? "shadow-md" : "shadow-sm"}`}>
        <nav className="container mx-auto flex items-center justify-between px-4 py-2">
          <Link href="/" className="flex-shrink-0" aria-label="Guillaume Counseling Home">
            <img
              src={siteConfig.logo}
              alt="Guillaume Counseling Logo"
              className="h-14 md:h-16 w-auto"
              loading="eager"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0">
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
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold transition-colors hover:text-primary text-foreground ${
                        hoveredDropdown === item.label ? "text-primary" : ""
                      }`}
                      aria-expanded={hoveredDropdown === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown className="h-3.5 w-3.5" />
                    </button>
                    {hoveredDropdown === item.label && (
                      <div className="absolute top-full left-0 pt-1">
                        <div className="bg-background border border-border rounded-md shadow-lg py-1 min-w-[220px]">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-2.5 text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 text-sm font-semibold transition-colors hover:text-primary text-foreground ${
                      isActive(item.href) ? "text-primary border-b-2 border-primary" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
};
