import React from "react";

export const AboutSection = ({ founderImage, aboutText }: { founderImage: string; aboutText: string[] }) => {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Main Blue Container */}
        <div className="bg-[#1873b9] rounded-[2rem] md:rounded-[2.5rem] md:rounded-tl-[2.5rem] p-6 md:p-10 text-white shadow-lg">
          
          {/* ==========================================
              THE CUTOUT IMAGE WRAPPER
              - float-left: Allows text to wrap around and under it
              - Negative margins (-mt-10, -ml-10): Pulls it flush to the top-left corner
              - bg-white + padding (pr-6, pb-6): Creates the white gap
              - rounded-br: Creates the inverted curve effect
              ========================================== */}
          <div className="
            w-full md:w-[340px] lg:w-[380px] 
            md:float-left 
            md:-mt-10 md:-ml-10 
            md:mr-8 md:mb-2 
            md:bg-white 
            md:pr-5 md:pb-5 
            md:rounded-br-[3rem]
            md:rounded-tl-[2.5rem]
            mb-6
          ">
            <img 
              src={founderImage} 
              alt="Nahomie Guillaume" 
              // The image border radius is smaller than the wrapper to keep the gap perfectly concentric
              className="w-full h-auto rounded-[1.5rem] md:rounded-tl-[1rem] md:rounded-bl-[4rem] md:rounded-tr-[4rem] object-cover shadow-sm" 
              loading="lazy" 
            />
          </div>

          {/* Heading */}
          <h3 className="text-3xl md:text-[36px] lg:text-[40px] font-marcellus font-medium mb-5 text-white leading-tight">
            About Guillaume Counseling
          </h3>
          
          {/* Paragraphs (These will flow naturally around and under the image) */}
          <div className="space-y-4 text-sm md:text-[15px] leading-relaxed text-white/95 font-sans">
            {aboutText.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
          
          {/* Clearfix ensures the blue box stretches all the way down even if text is short */}
          <div className="clear-both"></div>
        </div>

      </div>
    </div>
  );
};