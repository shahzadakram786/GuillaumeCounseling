"use client";

import { culturalServices } from "@/lib/data/services";
import { motion } from "framer-motion";
import { ParticleBackground } from "@/components/ui/particle-background"; 

const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  const isBlueCard = index === 1 || index === 2 || index === 5 || index === 6;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative flex flex-col overflow-hidden border transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 cursor-pointer ${
        isBlueCard ? "bg-[#17609f] border-[#17609f]" : "bg-white border-gray-200"
      }`}
    >
      <div 
        className={`absolute bottom-0 left-0 w-full h-0 transition-all duration-500 ease-out group-hover:h-full z-10 ${
          isBlueCard ? "bg-[#0f4575]/95" : "bg-[#17609f]/95"
        }`}
      ></div>

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

export const CulturalServices = () => {
  return (
    // FIX 1: Removed `overflow-hidden` from this section wrapper
    <section className="relative py-16 md:py-24 bg-[#FAFAFC] w-full">
      
      {/* FIX 2: Wrapped the background in its own isolated overflow container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <ParticleBackground />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10 pointer-events-none">
        {/* We need items-start so the left column doesn't stretch to the full height of the grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Sticky Content */}
          <div className="lg:col-span-1 lg:sticky lg:top-32 pointer-events-auto">
            <h2 className="text-3xl md:text-[40px] font-marcellus text-gray-900 leading-[1.1]">
              Culturally Specific <br />
              <span className="text-[#2b7bc4]">Services</span>
            </h2>
            <p className="mt-4 text-sm md:text-base text-gray-700 font-marcellus">
              We provide culturally specific services with a special focus on the following populations:
            </p>
          </div>

          {/* Right Column: Dynamic Data Mapping */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 pointer-events-auto">
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