"use client";

import { motion } from "framer-motion";
import { Microscope, Lightbulb, HeartHandshake, Bandage, HelpingHand, Sparkles } from "lucide-react";

// ==========================================
// Helper & Card Components (Kept private inside this file)
// ==========================================
const getPillarIcon = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes("science")) return <Microscope className="w-9 h-9" strokeWidth={1.5} />;
  if (t.includes("wisdom")) return <Lightbulb className="w-9 h-9" strokeWidth={1.5} />;
  if (t.includes("hope")) return <HeartHandshake className="w-9 h-9" strokeWidth={1.5} />;
  if (t.includes("healing")) return <Bandage className="w-9 h-9" strokeWidth={1.5} />;
  if (t.includes("support")) return <HelpingHand className="w-9 h-9" strokeWidth={1.5} />;
  return <Sparkles className="w-9 h-9" strokeWidth={1.5} />;
};

const PillarFlipCard = ({ pillar, index }: { pillar: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group h-56 [perspective:1000px] cursor-pointer"
  >
    <div className="relative w-full h-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] border border-[#17609f] rounded-2xl bg-white p-5 flex flex-col justify-between shadow-sm">
        <div className="text-[#17609f]">{getPillarIcon(pillar.title)}</div>
        <h4 className="text-lg lg:text-xl font-heading font-semibold text-[#17609f] leading-tight">
          {pillar.title}
        </h4>
      </div>
      <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl bg-[#17609f] p-5 flex items-center justify-center shadow-lg text-center">
        <p className="text-white text-sm leading-relaxed font-medium">
          {pillar.description}
        </p>
      </div>
    </div>
  </motion.div>
);

// ==========================================
// Main Exported Component
// ==========================================
export const VisionMissionPillars = ({ 
  vision, 
  mission, 
  pillars 
}: { 
  vision: string; 
  mission: string; 
  pillars: any[] 
}) => {
  return (
    <div className=" w-full bg-[#F7F7F7]">
                <div className="container py-16 mx-auto px-4 max-w-6xl">

      {/* Vision & Mission Text */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h2 className="text-2xl md:text-4xl font-heading font-bold text-foreground mb-4">Vision Statement</h2>
        <p className="text-sm text-foreground leading-5 mb-8">{vision}</p>

        <h3 className="text-xl md:text-4xl font-heading font-bold text-foreground mb-4">Mission Statement</h3>
        <p className="text-sm text-foreground leading-5 mb-12">{mission}</p>
      </motion.div>

      {/* Pillars Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {pillars.map((pillar, i) => (
          <PillarFlipCard key={pillar.title} pillar={pillar} index={i} />
        ))}
      </div> 
      </div>
    </div>
  );
};