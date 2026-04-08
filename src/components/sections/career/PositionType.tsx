"use client";

import { CheckCircle } from "lucide-react";

// DRY HELPER: Reusable bullet point for the cards
const HollowBullet = () => (
  <div className="w-3.5 h-3.5 mt-1.5 rounded-full border-[3px] border-[#17609f] bg-white shrink-0" />
);

export const PositionTypes = ({ rolesInfo, positions }: { rolesInfo: string[], positions: any[] }) => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl md:text-4xl font-marcellus


 font-bold text-gray-900 mb-6 tracking-tight">
        Position Types & Availability
      </h2>
      
      {/* "All roles are:" List */}
      <div className="mb-12">
        <p className="text-gray-900 text-[15px] md:text-[16px] mb-4 font-medium">All roles are:</p>
        <ul className="space-y-2">
          {rolesInfo.map((info) => (
            <li key={info} className="flex items-center gap-3 text-gray-700 text-[15px] md:text-[16px]">
              {/* Solid blue checkmark */}
              <CheckCircle className="w-[20px] h-[20px] fill-[#17609f] text-white shrink-0" />
              <span>{info}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Cards Grid */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        {positions.map((pos) => {
          
          // DRY LOGIC: Evaluate the workload data once per card instead of 4 separate times!
          const workload = pos.caseload || pos.hours;
          const workloadLabel = pos.caseload ? "Caseload:" : "Hours:";

          return (
            <div 
              key={pos.title} 
              className="w-full md:w-[calc(50%-16px)] max-w-2xl bg-white rounded-[1.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.20)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.09)] transition  border border-gray-100 overflow-hidden flex flex-col"
            >
              {/* The Blue Header */}
              <div className="px-6 text-center">
                <h3 className="font-marcellus


 bg-[#17609f] py-4 rounded-b-[2.5rem] font-bold text-white text-[17px] md:text-[18px] tracking-wide">
                  {pos.title}
                </h3>
              </div>

              {/* White Body Content */}
              <div className="px-6 py-4 flex-grow flex flex-col">
                {pos.subtitle && (
                  <p className="font-bold text-gray-900 mb-4 text-[14px] md:text-[14px]">
                    {pos.subtitle}
                  </p>
                )}
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {pos.details.map((detail: string) => (
                    <li key={detail} className="flex items-start gap-3 text-gray-700">
                      {/* DRY: Using the helper component here */}
                      <HollowBullet />
                      <span className="text-[14px] md:text-[14px] leading-snug">{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* DRY: Using the consolidated workload variables here */}
                {workload && (
                  <div className="mt-auto">
                    <p className="font-bold text-gray-900 text-[15px] md:text-[16px] mb-1">
                      {workloadLabel}
                    </p>
                    <p className="text-[15px] md:text-[16px] text-gray-700 leading-relaxed">
                      Part-time: {workload.partTime}<br />
                      Full-time: {workload.fullTime}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};