"use client";

import { motion } from "framer-motion";
import { HandHeart, CircleDollarSign, CalendarClock, TrendingUp, ShieldCheck } from "lucide-react";

// Helper function to auto-assign the correct icon based on the title
const getIconForTitle = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes("support")) return HandHeart;
  if (t.includes("compensation") || t.includes("transparent")) return CircleDollarSign;
  if (t.includes("scheduling") || t.includes("flexib")) return CalendarClock;
  if (t.includes("growth")) return TrendingUp;
  return ShieldCheck; // Fallback icon
};

export const WhyThisPractice = ({ items }: { items: { title: string, description: string }[] }) => {
  return (
    <div className="mb-20">
      
      {/* Centered Two-Color Heading */}
      <h2 className="text-3xl md:text-4xl font-marcellus


 font-bold text-center mb-12 text-gray-900 tracking-tight">
        Why <span className="text-[#17609f]">This Practice</span>
      </h2>

      {/* 4-Column Grid on Desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, index) => {
          const IconComponent = getIconForTitle(item.title);

          return (
            <motion.div 
              key={item.title} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: index * 0.1 }} // Staggers the animation slightly
              className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-start shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Blue Circular Icon Container */}
              <div className="w-[52px] h-[52px] rounded-full bg-[#17609f] flex items-center justify-center mb-5 shrink-0 shadow-sm">
                <IconComponent className="w-[26px] h-[26px] text-white" strokeWidth={1.5} />
              </div>

              {/* Text Content */}
              <h3 className="font-marcellus


 font-bold text-gray-900 text-[17px] mb-2.5">
                {item.title}
              </h3>
              <p className="text-[14px] text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};