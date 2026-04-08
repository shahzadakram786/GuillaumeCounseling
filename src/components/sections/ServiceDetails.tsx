"use client";

import { therapyServices } from "@/lib/data/services";
import { motion } from "framer-motion";

export const ServiceDetails = () => {
  return (
    // Solid blue background matching the screenshot
    <section className="py-16 md:py-24 bg-[#1873b9] w-full">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Main Flex Container: Stacks on mobile, side-by-side on large screens */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          
          {/* ==========================================
              LEFT COLUMN: SCROLLING CARDS
              ========================================== */}
          <div className="w-full lg:w-2/3 flex flex-col gap-6 md:gap-8">
            {therapyServices.map((service, index) => {
              // Alternates the layout for every other card
              const isReversed = index % 2 !== 0;
              
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  // White card wrapper with rounded corners and padding
                  className={`bg-white rounded-[2rem] p-4 md:p-6 flex flex-col ${
                    isReversed ? "md:flex-row-reverse" : "md:flex-row"
                  } gap-6 md:gap-8 items-center shadow-lg`}
                >
                  {/* Image Container */}
                  <div className="w-full md:w-1/2 shrink-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      // Image has its own rounded corners inside the white card
                      className="w-full h-56 md:h-64 object-cover rounded-2xl"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Text Container */}
                  <div className="w-full md:w-1/2 py-2">
                    <h3 className="text-xl md:text-2xl font-semibold text-[#17609f] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ==========================================
              RIGHT COLUMN: STICKY GRADIENT BOX
              ========================================== */}
          {/* 'lg:sticky lg:top-32' is the magic that locks it to the screen on desktop */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              // Gradient from pink to blue matching your brand
              className="rounded-3xl p-8 md:p-10 shadow-2xl bg-gradient-to-r from-[#d8008a] to-[#2b7bc4]"
            >
              <h2 className="text-3xl md:text-[34px] font-marcellus


 font-medium text-white leading-[1.3] tracking-tight">
                Individual Therapy, <br />
                Couples Therapy, <br />
                Family Therapy, and <br />
                Group Therapy
              </h2>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};