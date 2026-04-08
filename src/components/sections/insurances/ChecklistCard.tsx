import { CheckCircle } from "lucide-react";

export const ChecklistCard = ({ title, items, icon: Icon, fillClass = "fill-[#17609f]" }: { title: string, items: string[], icon: any, fillClass?: string }) => {
  return (
    <div className="bg-white rounded-[1.5rem] p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-8">
        <Icon className="w-8 h-8 text-[#17609f]" />
        <h3 className="text-xl md:text-2xl font-sans font-bold text-gray-900">{title}</h3>
      </div>
      <ul className="space-y-4 flex-grow">
        {items.map((item: string, i: number) => (
          <li key={i} className="flex items-start gap-3 text-[15px] md:text-[16px] text-gray-700 leading-relaxed">
            <CheckCircle className={`w-[22px] h-[22px] ${fillClass} text-white shrink-0 mt-0.5`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};