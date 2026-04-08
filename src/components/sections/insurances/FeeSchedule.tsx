"use client";

// DRY HELPER 1: Tighter reusable bullet point
const HollowBullet = () => (
  <div className="w-3 h-3 mt-1 rounded-full border-[2.5px] border-[#17609f] bg-white shrink-0" />
);

// DRY HELPER 2: Reusable List Item
const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2.5 text-[14px] text-gray-700">
    <HollowBullet />
    <span>{children}</span>
  </li>
);

// DRY HELPER 3: Reusable Card Wrapper (Handles exact shadows, borders, and blue headers)
const FeeCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="bg-white rounded-[1.25rem] shadow-[0_8px_30px_rgba(0,0,0,0.20)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.09)] transition border border-gray-100 overflow-hidden flex flex-col">
    {/* Blue Header */}
    <div className="px-5 text-center">
      <h3 className="font-sans bg-[#17609f] py-3.5 rounded-b-[1.25rem] font-bold text-white text-[16px] md:text-[17px] tracking-wide">
        {title}
      </h3>
    </div>

    <div className="p-6 md:p-8 flex-grow flex flex-col">
      {/* Centered Rates Title & Line */}
      <div className="text-center mb-5">
        <h4 className="text-lg md:text-xl font-sans font-medium text-gray-900 mb-2">Rates</h4>
        <div className="w-16 h-[1px] bg-[#17609f] mx-auto"></div>
      </div>
      
      {/* Dynamic Content Goes Here */}
      {children}
    </div>
  </div>
);


export const FeeSchedule = ({ data }: { data: any }) => {
  return (
    <div className="mb-16">
      {/* Main Section Header */}
      <h2 className="text-2xl md:text-3xl font-sans font-bold text-gray-900 mb-8 text-center tracking-tight">
        Fee Schedule (Subject to Change)
      </h2>

      {/* Grid for the Two Main Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 items-stretch">
        
        {/* Card 1: Psychotherapy (Medical Model) */}
        <FeeCard title="Psychotherapy (Medical Model)">
          <ul className="space-y-2.5">
            {data.medicalModelRates.map((r: any, i: number) => (
              <ListItem key={i}>{r.service}: {r.rate}</ListItem>
            ))}
          </ul>
        </FeeCard>

        {/* Card 2: Personal Growth Model */}
        <FeeCard title="Personal Growth Model">
          <div className="flex flex-col">
            {/* Private Pay Section */}
            <h5 className="font-bold text-gray-900 text-[15px] mb-2.5">
              Private Pay Only
            </h5>
            <ul className="space-y-2.5 mb-5">
              {data.personalGrowthRates.map((r: any, i: number) => (
                <ListItem key={i}>{r.service}: {r.rate}</ListItem>
              ))}
            </ul>

            {/* Groups Section */}
            <h5 className="font-bold text-gray-900 text-[15px] mb-2.5">
              Group Classes and Workshops
            </h5>
            <ul className="space-y-2.5">
              {data.groupRates.map((r: any, i: number) => (
                <ListItem key={i}>{r.service}: {r.rate}</ListItem>
              ))}
              {/* Final bullet */}
              <ListItem>Can be based anywhere in the world</ListItem>
            </ul>
          </div>
        </FeeCard>

      </div>

      {/* Sliding Scale Section - Tighter margins and 14px text */}
      <div className="max-w-3xl mx-auto text-center mt-4">
        <h3 className="text-[16px] md:text-[17px] font-sans font-bold text-gray-900 mb-2">
          Sliding Scale (Uninsured Only)
        </h3>
        <p className="text-[14px] text-gray-800 mb-5">
          {data.slidingScale.intro}
        </p>
        
        {/* Stacked centered text lines */}
        <div className="space-y-2.5">
          {data.slidingScale.rates.map((rate: string, i: number) => {
            const parts = rate.split(":");
            return (
              <p key={i} className="text-[14px] text-gray-800">
                {parts[0]} {parts[1] ? <span className="font-bold">:{parts[1]}</span> : ""}
              </p>
            );
          })}
        </div>
      </div>

    </div>
  );
};