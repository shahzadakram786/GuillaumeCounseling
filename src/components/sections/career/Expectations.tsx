"use client";

import { CheckCircle2 } from "lucide-react";

export const Expectations = ({ items }: { items: { title: string, description: string }[]}) => {
  return (
    <div className="mb-20">
      <h2 className="text-3xl md:text-4xl font-marcellus


 font-bold text-gray-900 mb-10 text-center tracking-tight">
        What You Can Expect
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {items.map((item) => (
          <div 
            key={item.title} 
            // The specific gradient from your image
            style={{ background: "linear-gradient(135deg, #17609f 0%, #d8008a 100%)" }}
            className="rounded-xl p-6 flex items-start gap-4 shadow-md hover:shadow-lg transition-shadow"
          >
            {/* White circle with pink check inside */}
            <div className="bg-white rounded-full p-[2px] shrink-0 mt-0.5">
              <CheckCircle2 className="w-[20px] h-[20px] text-[#d8008a]" strokeWidth={2.5} />
            </div>

            <div className="text-white">
              <h3 className="font-marcellus


 font-bold text-[17px] mb-1.5 tracking-wide">
                {item.title}
              </h3>
              <p className="text-[14px] leading-snug text-white/95">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      
     
    </div>
  );
};