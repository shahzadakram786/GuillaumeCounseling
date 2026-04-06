"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/lib/data/navigation";
import { ChevronDown } from "lucide-react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ open, onClose }: MobileMenuProps) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label]
    );
  };

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-foreground/50 z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background z-50 transform transition-transform duration-300 lg:hidden overflow-y-auto ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="pt-20 pb-6 px-6">
          {navLinks.map((item) => (
            <div key={item.label} className="border-b border-border">
              {item.children ? (
                <>
                  <button
                    onClick={() => toggleExpand(item.label)}
                    className="flex items-center justify-between w-full py-3 text-foreground font-medium text-base"
                    aria-expanded={expandedItems.includes(item.label)}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        expandedItems.includes(item.label) ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedItems.includes(item.label) && (
                    <div className="pl-4 pb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={onClose}
                          className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block py-3 font-medium text-base text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
