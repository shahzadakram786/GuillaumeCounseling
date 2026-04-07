import React from "react";
import { ChevronRight } from "lucide-react";

export const PoliciesSection = ({ policyDocuments }: { policyDocuments: any[] }) => {
  return (
    <div className="text-center pb-24">
      {/* Centered Large Heading */}
      <h2 className="text-2xl md:text-3xl lg:text-[36px] font-marcellus text-gray-900 mb-6 leading-tight max-w-5xl mx-auto">
        A full Policies and Procedures document is available <br className="hidden md:block" /> 
        for your review below.
      </h2>
      
      {/* Subtext */}
      <p className="text-gray-600 text-sm md:text-[15px] mb-10 max-w-4xl mx-auto leading-relaxed">
        A full Policies and Procedures document is available for your review. This document is provided as a reference and may be reviewed at your convenience.
      </p>
      
      {/* Centered Buttons Flex Container */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        {policyDocuments.map((doc) => (
          <a
            key={doc.label}
            href={doc.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1 px-8 py-3 bg-[#d8008a] text-white rounded-sm font-medium hover:bg-pink-700 transition-colors text-sm shadow-sm"
          >
            {doc.label}
            {/* Added the chevron arrow to match the design */}
            <ChevronRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        ))}
      </div>
    </div>
  );
};