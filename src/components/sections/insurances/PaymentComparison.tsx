import { ShieldCheck, CreditCard } from "lucide-react";

export const PaymentComparison = ({ data }: { data: any }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-24">
      
      {/* Insurance Box */}
      <div className="bg-white rounded-[1.5rem] p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-blue-50 rounded-xl"><ShieldCheck className="w-8 h-8 text-[#17609f]" /></div>
          <h2 className="text-2xl md:text-3xl font-sans font-bold text-gray-900 tracking-tight">Insurance</h2>
        </div>
        <p className="text-[15px] md:text-[16px] text-gray-700 leading-relaxed mb-4">{data.insuranceInfo}</p>
        <p className="text-[15px] md:text-[16px] text-gray-700 leading-relaxed mb-8">{data.insuranceAssessment}</p>
        
        <div className="bg-gray-50 rounded-xl p-6 md:p-8 flex-grow border border-gray-100">
          <h4 className="font-bold text-gray-900 text-[16px] md:text-[17px] mb-5">Services Generally Covered:</h4>
          <ul className="space-y-3">
            {data.coveredServices.map((s: string, i: number) => (
              <li key={i} className="flex items-start gap-3 text-[14px] md:text-[15px] text-gray-700 leading-snug">
                <div className="w-2 h-2 mt-1.5 rounded-full bg-[#17609f] shrink-0" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Self Pay Box */}
      <div className="bg-white rounded-[1.5rem] p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-pink-50 rounded-xl"><CreditCard className="w-8 h-8 text-[#d8008a]" /></div>
          <h2 className="text-2xl md:text-3xl font-sans font-bold text-gray-900 tracking-tight">Self Pay</h2>
        </div>
        <p className="text-[15px] md:text-[16px] text-gray-700 leading-relaxed mb-4">{data.selfPay.intro}</p>
        <p className="text-[15px] md:text-[16px] text-gray-700 leading-relaxed mb-8">{data.selfPay.benefits}</p>

        <div className="bg-pink-50/40 rounded-xl p-6 md:p-8 flex-grow border border-pink-100">
          <h4 className="font-bold text-gray-900 text-[16px] md:text-[17px] mb-5">Self-pay may be appropriate for:</h4>
          <ul className="space-y-3">
            {data.selfPay.appropriateFor.map((s: string, i: number) => (
              <li key={i} className="flex items-start gap-3 text-[14px] md:text-[15px] text-gray-700 leading-snug">
                <div className="w-2 h-2 mt-1.5 rounded-full bg-[#d8008a] shrink-0" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
};