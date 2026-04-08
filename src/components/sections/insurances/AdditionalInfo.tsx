"use client";

// ==========================================
// DRY HELPER 1: Centered White Info Card
// ==========================================
const InfoCard = ({ title, text }: { title: string, text: string | string[] }) => (
  <div className="bg-white rounded-[1.5rem] p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 text-center flex flex-col h-full">
    <h3 className="text-xl md:text-2xl font-sans font-bold text-[#17609f] mb-5">
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
const BillingCard = ({ title, url }: { title: string, url: string }) => (
  // Exact gradient from the screenshot: Blue top-left -> Purple middle -> Pink bottom-right
  <div className="bg-gradient-to-br from-[#2a5c9a] via-[#802c98] to-[#e3007c] rounded-[1.25rem] p-8 md:p-10 shadow-lg text-center flex flex-col items-center justify-between h-full">
    <div className="mb-8">
      <h3 className="text-2xl md:text-3xl font-sans font-bold text-white mb-3">
        {title}
      </h3>
      <p className="text-[14px] text-white/95 leading-snug">
        Your Rights and Protections Against<br/>Surprise Medical Bills (pdf)
      </p>
    </div>
    
    {/* Pink Download Button (Fixed the typo from "Donwload" in your screenshot!) */}
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-[#e6007e] hover:bg-[#c4006a] transition-colors text-white font-bold text-[14px] py-2.5 px-10 rounded shadow-sm inline-block"
    >
      Download
    </a>
  </div>
);

// ==========================================
// MAIN COMPONENT
// ==========================================
export const AdditionalInfo = ({ data }: { data: any }) => {
  return (
    <div className="mb-24 mt-20">
      
      {/* --- PART 1: ADDITIONAL INFORMATION --- */}
      <div className="mb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-gray-900 mb-4 tracking-tight">
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
          <h2 className="text-4xl md:text-[42px] font-marcellus text-gray-900 tracking-tight">
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