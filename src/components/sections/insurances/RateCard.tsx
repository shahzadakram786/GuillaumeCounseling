export const RateCard = ({ title, subtitle, rates }: { title: string, subtitle?: string, rates: { service: string, rate: string }[] }) => {
  return (
    <div className="bg-white rounded-[1.5rem] p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col h-full">
      <div className="mb-6">
        <h3 className="text-xl md:text-2xl font-sans font-bold text-gray-900">{title}</h3>
        {subtitle && <p className="text-[#d8008a] font-bold text-[14px] uppercase tracking-wide mt-2">{subtitle}</p>}
      </div>
      <div className="flex-grow flex flex-col">
        {rates.map((r, i) => (
          <div key={i} className="flex justify-between items-center py-3.5 border-b border-gray-100 last:border-0">
            <span className="text-[15px] md:text-[16px] text-gray-700 leading-snug pr-4">{r.service}</span>
            <span className="text-[15px] md:text-[16px] font-bold text-[#17609f] whitespace-nowrap">{r.rate}</span>
          </div>
        ))}
      </div>
    </div>
  );
};