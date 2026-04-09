"use client";

import Link from "next/link";
import { contactInfo } from "@/lib/data/contact";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data/siteConfig";

export const Hero = () => {
  // DRY Method: Define the dynamic data for the portal buttons here
  const portalLinks = [
    {
      id: "oregon",
      href: contactInfo.portals.oregon,
      label: "Oregon Client Portal - Login or Self-Register",
    },
    {
      id: "california",
      href: contactInfo.portals.california,
      label: "California Client Portal - Login or Self-Register",
    },
  ];

  return (
    <>
      <section
        className="relative flex items-center overflow-hidden w-full lg:h-[612px]"
        style={{
          background: "linear-gradient(135deg, #024a87 0%, #68268c 50%, #d8008a 100%)",
        }}
      >
        <div className="z-10 container mx-auto px-4 py-12 sm:py-16 lg:py-0 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-6xl">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full text-white order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-marcellus font-bold leading-[1.15] tracking-tight mb-4 sm:mb-6">
              Mental Health and <br />
              Relationship <br />
              <span className="text-[#3b82f6] font-bold">Counseling</span>
            </h1>

            <div className="space-y-1 sm:space-y-2 mb-6 sm:mb-8">
              <p className="text-sm sm:text-base md:text-lg font-bold">
                Hope, Healing, and Support
              </p>
              <p className="text-sm sm:text-base md:text-lg font-bold">
                Integration of Faith, Science, and Wisdom
              </p>
            </div>

            {/* ==========================================
                MAGIC BORDER BUTTON: APPOINTMENTS
                Brand matched conic-gradient: Pink to Deep Blue
                ========================================== */}
            <Link
              href="/contact-us"
              aria-label="Schedule an appointment"
              className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[#d8008a] focus:ring-offset-2 focus:ring-offset-slate-50 w-auto group shadow-lg"
            >
              {/* Spinning Brand-Color Gradient Background */}
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#d8008a_0%,#024a87_50%,#d8008a_100%)]" />
              
              {/* Inner Button Content (Dark Navy background) */}
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#0a2540] px-8 py-3 text-sm sm:text-base font-semibold text-white backdrop-blur-3xl gap-2 transition-colors group-hover:bg-[#024a87]">
                Appointments
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end lg:order-2 w-full h-full"
          >
            <img
              src={siteConfig.heroImage}
              alt="Guillaume Counseling"
              className="w-full max-w-[320px] sm:max-w-[450px] max-h-[350px] lg:max-h-[612px] lg:max-w-full object-contain drop-shadow-xl"
              loading="eager"
            />
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          PORTAL BUTTONS BAR
          ========================================== */}
      <div className="bg-white py-6 border-y-2 border-[#d8008a] transition w-full">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-5 md:gap-8">
          
          {/* DRY Method: Mapping over the array with MAGIC BORDER & GRADIENT */}
          {portalLinks.map((portal) => (
            <a
              key={portal.id}
              href={portal.href}
              target="_blank"
              rel="noopener noreferrer"
              // Outer wrapper handles the shape and focus rings
              className="relative inline-flex h-12 w-full md:w-auto overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[#d8008a] focus:ring-offset-2 focus:ring-offset-slate-50 group shadow-md"
            >
              {/* Spinning Brand-Color Gradient Background */}
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#d8008a_0%,#024a87_50%,#d8008a_100%)]" />
              
              {/* Inner Button Content (Website Brand Gradient) */}
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#024a87] via-[#68268c] to-[#d8008a]  px-6 py-3 text-sm md:text-base font-medium text-white backdrop-blur-3xl transition-all delay-150 duration-500 group-hover:bg-gradient-to-l">
                {portal.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};