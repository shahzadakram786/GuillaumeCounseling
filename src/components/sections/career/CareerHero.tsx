"use client";

import { ArrowRight } from "lucide-react";

interface CareerHeroProps {
  subtitle: string;
  tagline: string;
  applyEmail: string;
}

export const CareerHero = ({ subtitle, tagline, applyEmail }: CareerHeroProps) => {
  return (
    <div className="relative w-full h-[450px] md:h-[550px] lg:h-[600px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        // Update this URL to point to your actual image file!
        style={{ backgroundImage: `url('/video/career-hero.webp')` }} 
      >
        {/* Dark Overlay (Gradient from dark left to transparent right) */}
<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        <div className="max-w-2xl pt-10">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-marcellus text-white leading-tight mb-4">
            Careers at Guillaume <br className="hidden md:block" /> Counseling
          </h1>
          <p className="text-[15px] md:text-[17px] text-white/90 font-marcellus


 leading-relaxed mb-4 max-w-xl">
            {subtitle}
          </p>
          <p className="text-[16px] md:text-[18px] font-bold text-white font-marcellus


 mb-8">
            {tagline}
          </p>
          
          <a
            href={applyEmail}
            className="inline-flex items-center gap-2 px-7 py-3 bg-white text-[#d8008a] rounded shadow-md font-bold hover:bg-gray-100 transition-colors text-[14px]"
          >
            Apply Now <ArrowRight className="h-4 w-4 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </div>
  );
};