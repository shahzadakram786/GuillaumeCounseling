"use client";

import { PageHero } from "@/components/layout/PageHero";
import { christianCounselingData } from "@/lib/data/pages/christianCounseling";

// ==========================================
// DRY HELPER: Floating Value Card
// ==========================================
const ValueCard = ({ text }: { text: string }) => (
  <div className="bg-white/80 backdrop-blur-md p-6 rounded-[1.25rem] border border-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all hover:shadow-lg hover:-translate-y-1">
    <p className="text-[14px] text-gray-700 leading-relaxed italic">
      "{text}"
    </p>
  </div>
);

const ChristianCounseling = () => {
  const d = christianCounselingData;

  return (
    <>
      <PageHero title={d.title} breadcrumbs={d.breadcrumbs} />

      <main id="main-content" className="relative overflow-hidden bg-white">
        
        {/* Decorative Background Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#17609f]/5 blur-[120px] rounded-full -mr-64 -mt-32 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#d8008a]/5 blur-[100px] rounded-full -ml-48 -mb-32 pointer-events-none" />

        <div className="container mx-auto px-4 max-w-6xl py-16 md:py-24 relative z-10">
          
          {/* Section 1: Split Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-24 items-start">
            
            {/* Left: Premium Image Layout */}
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Main Image with custom border radius */}
                <div className="rounded-tr-[5rem] rounded-bl-[5rem] rounded-tl-2xl rounded-br-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={d.image} 
                    alt={d.imageCaption} 
                    className="w-full h-auto object-cover min-h-[500px]" 
                  />
                </div>
                {/* Floating Caption Badge */}
                <div className="absolute -bottom-6 right-6 bg-white py-3 px-6 rounded-xl shadow-xl border border-gray-50">
                   <p className="text-[12px] font-bold text-[#17609f] uppercase tracking-[1px]">
                     {d.imageCaption}
                   </p>
                </div>
              </div>
            </div>

            {/* Right: Content Section */}
            <div className="lg:col-span-7 flex flex-col pt-4">
              <h2 className="text-3xl md:text-5xl font-marcellus text-gray-900 mb-8 leading-tight tracking-tight">
                {d.heading}
              </h2>
              
              <div className="w-20 h-[2px] bg-[#d8008a] mb-10" />

              <h3 className="text-xl font-sans font-bold text-[#17609f] mb-6">
                {d.whatIsIt.title}
              </h3>

              <div className="space-y-6">
                <p className="text-[14px] md:text-[15px] text-gray-700 leading-relaxed">
                  {d.whatIsIt.text}
                </p>
                
                {/* Highlighted Insight Box */}
                <div className="bg-gray-50 border-l-4 border-[#17609f] p-6 rounded-r-2xl my-8">
                  <p className="text-[14px] font-medium text-gray-900 leading-relaxed italic">
                    {d.whatIsIt.practical}
                  </p>
                </div>

                <p className="text-[14px] md:text-[15px] text-gray-700 leading-relaxed">
                  {d.whatIsIt.whoCan}
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Values Grid (Optional but recommended for premium feel) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ValueCard text="Integrating Biblical wisdom with modern psychology." />
            <ValueCard text="A safe space for spiritual growth and healing." />
            <ValueCard text="Personalized care rooted in faith and science." />
          </div>

        </div>
      </main>
    </>
  );
};

export default ChristianCounseling;