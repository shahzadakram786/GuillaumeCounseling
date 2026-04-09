"use client";

import { ArrowRight, DownloadCloud } from "lucide-react";

// ==========================================
// DRY HELPER 1: Centered White Info Card
// ==========================================
const InfoCard = ({ title, text }: { title: string, text: string | string[] }) => (
  <div className="bg-white rounded-[1.5rem] p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 text-center flex flex-col h-full">
    <h3 className="text-xl md:text-2xl font-marcellus font-bold text-[#17609f] mb-5">
      {title}
    </h3>
    <div className="text-[14px] text-gray-900 leading-relaxed font-medium">
      {/* If data is an array (like payment policies), join it into a single paragraph */}
      {Array.isArray(text) ? text.map((p, i) => <span key={i}>{p} </span>) : text}
    </div>
  </div>
);

// ==========================================
// DRY HELPER 2: Diagonal Gradient Billing Card
// ==========================================
const BillingCard = ({ title, url }: { title: string, url: string }) => {
  return (
    <div className="group relative h-full flex transition-all duration-500 hover:-translate-y-2">
      
      {/* Layer 1: The "Glow" behind the glass (Blue/Pink accent) */}
      <div className="absolute inset-x-10 inset-y-10 bg-gradient-to-tr from-[#17609f]/20 to-[#d8008a]/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Layer 2: The Glass Card */}
      <div className="relative z-10 w-full bg-white/60 backdrop-blur-[14px] rounded-[2rem] border border-white/40 p-8 md:p-12 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col h-full overflow-hidden">
        
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#17609f]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="text-center mb-8 flex flex-col items-center">
          
          {/* Icon Container with subtle glass effect */}
          <div className="w-16 h-16 rounded-2xl bg-white/80 border border-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
            <DownloadCloud className="w-7 h-7 text-[#17609f]" />
          </div>

          <h3 className="text-3xl md:text-xl font-marcellus font-boldd text-gray-900 mb-4 ">
            {title}
          </h3>
          
          {/* Sophisticated minimalist divider */}
          <div className="w-12 h-[1px] bg-gray-300 mx-auto mb-6 group-hover:w-20 group-hover:bg-[#17609f] transition-all duration-500" />
          
          <p className="text-[14px] md:text-[15px] text-gray-700 leading-relaxed font-medium tracking-wide">
            Your Rights and Protections Against
            <span className="block mt-1 font-bold text-gray-900">Surprise Medical Bills (PDF)</span>
          </p>
        </div>
        
        {/* Premium Button Style */}
        <div className="mt-auto pt-6 text-center">
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#17609f] hover:bg-[#d8008a] text-white font-bold text-[13px] uppercase tracking-[2px] py-4 px-10 rounded-full shadow-lg transition-all duration-300 active:scale-95"
          >
            <span>Download File</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </div>
  );
};

// ==========================================
// MAIN COMPONENT
// ==========================================
export const AdditionalInfo = ({ data }: { data: any }) => {
  return (
    <div className="mb-24 mt-20">
      
      {/* --- PART 1: ADDITIONAL INFORMATION --- */}
      <div className="mb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-marcellus  font-bold text-gray-900 mb-4 tracking-tight">
            Additional Information
          </h2>
          <p className="text-[15px] md:text-[16px] text-gray-800 font-medium">
            {data.additionalInfo || "We are actively expanding our in-network partnerships. Please check this page periodically for updates."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto items-stretch">
          <InfoCard 
            title="Payment Policy" 
            text={data.paymentPolicy} 
          />
          <InfoCard 
            title="Cancellation Policy" 
            text={data.cancellationPolicy} 
          />
        </div>
      </div>

      {/* --- PART 2: BILLING POLICIES --- */}
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          {/* Using a slightly different styling here to match the specific look of the "Billing Policies" header in the screenshot */}
          <h2 className="text-3xl md:text-4xl font-marcellus font-bold text-gray-900 mb-4 tracking-tight">
            Billing Policies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
          {/* Automatically rendering the cards based on your billingDocuments data */}
          {data.billingDocuments.map((doc: any, index: number) => (
            <BillingCard 
              key={index} 
              title={doc.label} // Expecting "Oregon" or "California"
              url={doc.url} 
            />
          ))}
        </div>
      </div>

    </div>
  );
};