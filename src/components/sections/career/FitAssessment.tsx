"use client";

import { CheckCircle, XCircle } from "lucide-react";

export const FitAssessment = ({ fitFor, notFitFor }: { fitFor: string[], notFitFor: string[] }) => {
  return (
    <div className="mb-20 rounded-[1rem] p-6 md:p-6 bg-gradient-to-r from-[#17609f] to-[#d8008a] shadow-xl w-full">
      
      {/* Centered White Header */}
      <h2 className="text-white text-center text-3xl font-marcellus


 tracking-wide uppercase mb-10">
        Who This Is For
      </h2>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        
        {/* Left Card: GOOD FIT */}
        <div className="bg-white rounded-[1rem] p-8 md:p-10 flex flex-col shadow-sm">
          <h3 className="font-marcellus


 font-bold text-xl text-gray-900 mb-4">
            Who This Is a Good Fit For
          </h3>
          <ul className="space-y-2">
            {fitFor.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[14px] md:text-[14px] text-gray-700">
                {/* Solid blue checkmark */}
                <CheckCircle className="w-[22px] h-[22px] fill-[#17609f] text-white shrink-0 mt-0.5" />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Card: NOT A GOOD FIT */}
        <div className="bg-white rounded-[1rem] p-8 md:p-10 flex flex-col shadow-sm">
          <h3 className="font-marcellus


 font-bold text-xl text-gray-900 mb-4">
            Who This Is NOT a Good Fit For
          </h3>
          
          <ul className="space-y-2 flex-grow">
            {notFitFor.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[14px] md:text-[14px] text-gray-700">
                {/* Solid pink X circle */}
                <XCircle className="w-[22px] h-[22px] fill-[#d8008a] text-white shrink-0 mt-0.5" />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
          
          {/* Disclaimer moved INSIDE the right card to match the screenshot perfectly! */}
          <p className=" font-bold text-gray-900 text-[14px] md:text-[14px] leading-snug">
            Building a caseload takes time — and we support that process intentionally.
          </p>
        </div>

      </div>
    </div>
  );
};