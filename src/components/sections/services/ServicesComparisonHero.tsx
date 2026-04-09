"use client";

export const ServiceComparisonHero = ({ data }: { data: any }) => {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      
      {/* Premium Background Accents */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#17609f]/5 blur-[120px] rounded-full -ml-48 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#d8008a]/5 blur-[100px] rounded-full -mr-32 -mb-20 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Main Section Title */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-[42px] font-marcellus font-bold text-gray-900 tracking-tight uppercase max-w-4xl mx-auto leading-[1.1]">
            Comparison of Consulting and <br className="hidden md:block" /> Other Helping Services
          </h2>
          <div className="w-24 h-[1px] bg-[#d8008a] mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: BIGGER Image Layout (Increased to col-span-6) */}
          <div className="lg:col-span-6">
            <div className="relative group">
              {/* Asymmetric Rounded Corners */}
              <div className="rounded-tr-[5rem] rounded-bl-[5rem] rounded-tl-3xl rounded-br-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] border border-gray-100">
                <img 
                  src="/Our-Approach.webp" 
                  alt="Group therapy session" 
                  className="w-full h-full object-cover min-h-[450px] scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                />
              </div>
              
              {/* Floating Pink Badge - More substantial sizing */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:-right-8 bg-white py-4 px-8 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.1)] border border-gray-50">
                <p className="text-[#d8008a] font-bold text-[14px] uppercase tracking-[2px] whitespace-nowrap">
                  Group therapy session
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Sophisticated Text Content (col-span-6) */}
          <div className="lg:col-span-6 lg:pl-4">
            <div className="flex flex-col">
              <h3 className="text-2xl md:text-[34px] font-marcellus font-bold text-gray-900 mb-6 leading-[1.2] tracking-tight">
                Consultation Service compared to other forms of helping services
              </h3>
              
              <p className="text-[#17609f] text-[14px] font-bold mb-8 uppercase tracking-[2.5px] leading-relaxed">
                What is the consultation service offered by <br className="hidden sm:block"/> Guillaume Counseling Services?
              </p>

              <div className="space-y-6">
                <p className="text-[14px] md:text-[15px] text-gray-700 leading-relaxed">
                  {data.description}
                </p>
                
                {/* Visual Break / Secondary Content with higher contrast */}
                <div className="p-8 bg-gray-50/80 backdrop-blur-sm rounded-[2rem] border-l-[6px] border-[#17609f] shadow-sm">
                  <p className="text-[14px] md:text-[15px] text-gray-800 leading-relaxed font-medium italic">
                    {data.details}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};