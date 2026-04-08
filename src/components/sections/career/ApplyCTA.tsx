"use client";

import { ChevronRight, CheckCircle } from "lucide-react";

export const ApplyCTA = ({ data, email }: { data: any, email: string }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-[1.5rem] shadow-sm p-8 md:p-14 w-full max-w-5xl mx-auto mb-16">
      
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-marcellus


 font-bold text-gray-900 mb-3 tracking-tight">
          Apply Now
        </h2>
        <p className="text-[16px] md:text-[17px] text-gray-700">
          {data.text}
        </p>
      </div>

      {/* Required Items (Horizontal on desktop, stacked on mobile) */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 mb-10">
        {data.items.map((item: string) => (
          <div 
            key={item} 
            className="flex items-center gap-3 border border-gray-200 rounded-lg py-3 px-5 bg-white w-full md:w-auto"
          >
            {/* Solid blue checkmark with white center */}
            <CheckCircle className="w-[20px] h-[20px] fill-[#17609f] text-white shrink-0" />
            <span className="text-[14px] md:text-[15px] text-gray-700 font-medium">
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* Call to Action Button */}
      <div className="flex justify-center">
        <a
          href={email}
          className="inline-flex items-center gap-1.5 px-8 py-3 bg-[#d8008a] text-white rounded shadow-sm font-bold hover:bg-pink-700 transition-colors text-[14px]"
        >
          Apply Now <ChevronRight className="w-4 h-4 stroke-[3]" />
        </a>
      </div>
      
    </div>
  );
};