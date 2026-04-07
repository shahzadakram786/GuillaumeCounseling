import React from "react";

export const ApproachSection = ({ approachIntro, approaches }: { approachIntro: string; approaches: any[] }) => {
  return (
    <div className="py-16 md:py-24 bg-[#1873b9]">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* ==========================================
            HEADER SECTION (Centered text)
            ========================================== */}
        <div className="text-center max-w-5xl mx-auto mb-16 md:mb-20">
          <h3 className="text-3xl md:text-4xl lg:text-[45px] font-marcellus text-white mb-6 leading-tight">
            Our Approach
          </h3>
          <p className="text-white/95 text-sm md:text-base leading-relaxed font-sans">
            {approachIntro}
          </p>
        </div>

        {/* ==========================================
            CARDS GRID SECTION
            1 col on mobile, 2 on tablet, 3 on desktop
            ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 lg:gap-y-14 ">
          {approaches.map((approach, i) => (
            // The relative class is required here so the absolute badge positions itself relative to this card
            <div 
              key={approach.title} 
              className="relative bg-white rounded-[1.5rem] p-8 md:p-8 text-center shadow-xl"
            >
              
              {/* ==========================================
                  THE OVERLAPPING PINK NUMBER BADGE
                  ========================================== */}
              <div className="absolute -top-5 -left-5 w-11 h-11 bg-[#d8008a] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md z-10">
                {i + 1}
              </div>

              {/* Card Title */}
              <h4 className="text-lg md:text-sm font-bold font-marcellus text-[#17609f] mb-4 ">
                {approach.title}
              </h4>
              
              {/* Card Description */}
              <p className="text-sm md:text-sm text-gray-800 leading-6 font-light font-marcellus">
                {approach.description}
              </p>
              
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};