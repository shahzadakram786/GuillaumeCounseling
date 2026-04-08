"use client";

// ==========================================
// DRY HELPER 1: Bullets
// ==========================================
const WhiteBullet = () => <div className="w-1.5 h-1.5 mt-2 rounded-full bg-white shrink-0" />;
const DarkBullet = () => <div className="w-1.5 h-1.5 mt-2 rounded-full bg-gray-800 shrink-0" />;

// ==========================================
// DRY HELPER 2: Transparent Card (Top Row)
// ==========================================
const TransparentCard = ({ title, subtitle, items }: { title: string, subtitle?: string, items: string[] }) => (
  <div className="border-[1.5px] border-[#d8008a]/60 rounded-[1.25rem] p-6 md:p-8 flex flex-col h-full bg-white/5">
    <h3 className="text-xl md:text-2xl font-sans font-bold text-white mb-4 tracking-wide">
      {title}
    </h3>
    {subtitle && <p className="text-[14px] text-white/90 mb-5">{subtitle}</p>}
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-[14px] text-white">
          <WhiteBullet />
          <span className="leading-snug">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

// ==========================================
// DRY HELPER 3: Solid White Card (Bottom Row)
// ==========================================
const SolidCard = ({ title, subtitle, items }: { title: string, subtitle?: string, items: string[] }) => (
  <div className="bg-white rounded-[1.25rem] p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.15)] flex flex-col w-full">
    <h3 className="text-lg md:text-xl font-sans font-bold text-gray-900 mb-2">
      {title}
    </h3>
    {subtitle && <p className="text-[14px] text-gray-700 mb-5">{subtitle}</p>}
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-[14px] text-gray-800">
          <DarkBullet />
          <span className="leading-snug">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

// ==========================================
// MAIN COMPONENT
// ==========================================
export const NetworkPolicies = ({ data }: { data: any }) => {
  
  // Fallbacks just in case your data object doesn't have the new text from the image yet!
  const financialItems = data.financialResponsibility?.items || [
    "Clients with a deductible are required to pay $100 at the time of the appointment until claims are processed",
    "Clients with coinsurance are required to pay $30 at the time of the appointment",
    "Balances will be updated once insurance claims are finalized"
  ];

  return (
    // Full-width gradient wrapper that breaks out of the parent container to touch the edges of the screen
    <div className="w-[100vw] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-r from-[#0b3866] via-[#592261] to-[#b81d60] py-16 md:py-24 my-16">
      
      {/* Inner container to keep content centered */}
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Top Grid: In-Network Transparent Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
          <TransparentCard 
            title="Oregon, in-network:" 
            subtitle="We are in-network with the following Oregon plans:"
            items={data.oregonInNetwork} 
          />
          <TransparentCard 
            title="California, in-network:" 
            subtitle="We are in-network with:"
            items={data.californiaInNetwork} 
          />
        </div>

        {/* Centered Disclaimer Note */}
        <div className="text-center text-white my-10 px-4">
          <p className="text-[14px] font-bold mb-1">Please note:</p>
          <p className="text-[14px] font-bold">
            Associate-level clinicians are limited to seeing Medicaid clients and commercial plans that allow supervised billing.
          </p>
        </div>

        {/* Bottom Stack: Out-of-Network & Financial Responsibility Solid Cards */}
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          <SolidCard 
            title="Out-of-Network (Oregon & California)" 
            subtitle="We accept:"
            items={data.outOfNetwork} 
          />
          <SolidCard 
            title="Client Financial Responsibility" 
            subtitle="Clients are responsible for understanding their insurance benefits and coverage."
            items={financialItems} 
          />
        </div>

      </div>
    </div>
  );
};