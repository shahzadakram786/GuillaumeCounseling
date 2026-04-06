"use client";

import Link from "next/link";
import { contactInfo } from "@/lib/data/contact";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data/siteConfig";

export const Hero = () => {
  // DRY Method: Define the dynamic data for the buttons here
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
        <div className="z-10 container mx-auto px-5 sm:px-10 lg:px-4 py-12 sm:py-16 lg:py-0 grid grid-cols-1 lg:grid-cols-2 gap-10  items-center w-full h-full">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full text-white order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-marcellus font-bold leading-[1.15] tracking-tight mb-4 sm:mb-6">
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

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#d8008a] font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base rounded-sm shadow-md"
              aria-label="Schedule an appointment"
            >
              Appointments
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end  lg:order-2 w-full h-full"
          >
            <img
              src={siteConfig.heroImage}
              alt="Guillaume Counseling"
              className="w-full max-w-[320px] sm:max-w-[450px]  max-h-[350px] lg:max-h-[612px] lg:max-w-full object-contain drop-shadow-xl"
              loading="eager"
            />
          </motion.div>
        </div>
      </section>

      {/* Portal Buttons */}
      <div className="bg-white py-6 border-y-2 border-[#d8008a] w-full">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-5 md:gap-8">
          {/* DRY Method: Mapping over the array */}
          {portalLinks.map((portal) => (
            <a
              key={portal.id}
              href={portal.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#d8008a] text-white hover:bg-pink-700 rounded  transition-colors text-sm md:text-base font-medium text-center px-6 py-3 w-full md:w-auto shadow-sm"
            >
              {portal.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};