"use client";

import { culturalServices } from "@/lib/data/services";
import { motion } from "framer-motion";

// ==========================================
// 1. Reusable Service Card Component
// ==========================================
const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  // Logic to determine the checkerboard color pattern
  const isBlueCard = index === 1 || index === 2 || index === 5 || index === 6;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      // ADDED 'relative' to the outer wrapper so the fill animation covers the whole card
      className={`group relative flex flex-col overflow-hidden border transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 cursor-pointer ${
        isBlueCard ? "bg-[#17609f] border-[#17609f]" : "bg-white border-gray-200"
      }`}
    >
      {/* ==========================================
          THE FULL-CARD FILL ANIMATION
          Moved to the root level. Slides from bottom-0 to h-full over the image.
          z-10 ensures it slides OVER the image but UNDER the text.
          ========================================== */}
      <div 
        className={`absolute bottom-0 left-0 w-full h-0 transition-all duration-500 ease-out group-hover:h-full z-10 ${
          // The '/95' adds 95% opacity so the image subtly shows through. 
          // (Change to just "bg-[#0f4575]" if you want it 100% solid)
          isBlueCard ? "bg-[#0f4575]/95" : "bg-[#17609f]/95"
        }`}
      ></div>

      {/* Image Section (z-0: Behind the animation layer) */}
      <div className={`relative h-56 w-full z-20 ${!isBlueCard ? "p-1" : ""}`}>
        <div className="w-full h-full overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            loading="lazy"
          />
        </div>
      </div>

      {/* Text Block Section (z-20: Always visible above the animation layer) */}
      <div className="relative flex flex-grow items-center justify-center p-6 text-center z-20">
        <h3
          className={`text-[15px] font-medium leading-snug transition-colors duration-500 ${
            isBlueCard ? "text-white" : "text-[#17609f] group-hover:text-white"
          }`}
        >
          {service.title}
        </h3>
      </div>
    </motion.div>
  );
};

// ==========================================
// 2. Main Section Layout Component
// ==========================================
export const CulturalServices = () => {
  return (
    <section className="py-16 md:py-24 bg-white w-full">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Static Content */}
          <div className="lg:col-span-1 lg:sticky lg:top-24">
            <h2 className="text-3xl md:text-[40px] font-marcellus text-gray-900 leading-[1.1]">
              Culturally Specific <br />
              <span className="text-[#2b7bc4]">Services</span>
            </h2>
            <p className="mt-4 text-sm md:text-base text-gray-700 font-marcellus


">
              We provide culturally specific services with a special focus on the following populations:
            </p>
          </div>

          {/* Right Column: Dynamic Data Mapping */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {culturalServices.map((service, index) => (
              <ServiceCard 
                key={service.title} 
                service={service} 
                index={index} 
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};