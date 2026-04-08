import React from "react";
import { ChevronRight } from "lucide-react";

// ==========================================
// 1. Treatment Tracks Component
// ==========================================
export const TreatmentTracksSection = ({ treatmentTracks }: { treatmentTracks: any[] }) => {
  return (
    <div className="w-full bg-white pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-[32px] md:text-[38px] font-marcellus text-gray-900 mb-2">
            Treatment Track <span className="text-[#2b7bc4]">Options</span>
          </h2>
          <p className="text-[15px] text-gray-700 font-marcellus


">
            We have two different treatment options:
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6">
          {treatmentTracks.map((track) => (
            <div
              key={track.title}
              className="rounded-2xl p-6 md:py-5 md:px-8 text-center text-white shadow-md flex flex-col items-center justify-start"
              style={{
                // Horizontal gradient from Blue to Pink matching the design perfectly
                background: "linear-gradient(to right, #2b7bc4, #d8008a)",
              }}
            >
              <h4 className="text-[17px] md:text-[18px] font-marcellus


 font-medium mb-3">
                {track.title}
              </h4>
              <p className="text-[13px] md:text-[14px] text-white/95 leading-[1.6] font-marcellus


">
                {track.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 2. Policies Component
// ==========================================
export const PoliciesSection = ({ policyDocuments }: { policyDocuments: any[] }) => {
  return (
    <div className="w-full bg-white pt-8 pb-20">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        {/* Heading */}
        <h2 className="text-[28px] md:text-[36px] font-marcellus text-gray-900 mb-4 leading-[1.2]">
          A full Policies and Procedures document is available <br className="hidden md:block" />
          for your review below.
        </h2>

        {/* Subtitle */}
        <p className="text-[14px] md:text-[15px] text-gray-600 mb-8 max-w-3xl mx-auto font-extra-bold leading-relaxed font-marcellus


">
          A full Policies and Procedures document is available for your review. This document is provided as a reference and may be reviewed at your convenience.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          {policyDocuments.map((doc) => (
            <a
              key={doc.label}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-6 py-2.5 bg-[#d8008a] text-white rounded-sm font-medium hover:bg-[#b00070] transition-colors text-[14px] md:text-[15px] shadow-sm"
            >
              {doc.label}
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};