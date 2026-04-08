"use client";

import Link from "next/link";
import { aboutSection } from "@/lib/data/services";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export const AboutSection = () => {
  return (
    // Changed bg-muted to bg-white to match the clean background
    <section className="py-16 md:py-24 w-full">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center"
        >
          {/* ==========================================
              LEFT COLUMN: IMAGE
              ========================================== */}
          <div className="w-full lg:w-5/12">
            {/* Increased rounding to rounded-3xl to match the soft edges in the screenshot */}
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={aboutSection.image}
                alt="Nahomie Guillaume, Founder"
                className="w-full h-[590px] object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* ==========================================
              RIGHT COLUMN: TEXT & BUTTON
              ========================================== */}
          <div className="w-full lg:w-7/12">
            {/* Heading: Applied Marcellus font and colored the second half with your brand blue */}
            <h2 className="text-3xl md:text-[40px] font-marcellus text-gray-900 leading-[1.2] mb-6">
              About <span className="text-[#2b7bc4]">Guillaume Counseling</span>
            </h2>
            
            {/* Description: Tweaked line-height and text color for perfect readability */}
            <p className="text-[15px] md:text-base text-gray-700 font-marcellus


 leading-[1.7] mb-8">
              {aboutSection.text}
            </p>
            
            {/* Button: Applied the exact brand pink, square-ish corners, and chevron icon */}
            <Link
              href={aboutSection.link || "/about"}
              className="inline-flex items-center gap-1 px-8 py-2.5 bg-[#d8008a] text-white rounded-sm text-[15px] font-medium hover:bg-pink-700 transition-colors shadow-sm w-fit"
            >
              Read More
              <ChevronRight className="h-4 w-4 stroke-[2.5]" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};