"use client";

import { PageHero } from "@/components/layout/PageHero";
import { missionVisionData } from "@/lib/data/pages/missionVision";
import { motion } from "framer-motion";
import { Microscope, Lightbulb, HeartHandshake, Bandage, HelpingHand, Sparkles } from "lucide-react";

// ==========================================
// SCALED DOWN: Icons are now w-9 h-9 (36px)
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

// ==========================================
// SCALED DOWN: The 3D Flip Card Component
// ==========================================
const PillarFlipCard = ({ pillar, index }: { pillar: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      // Changed height from h-[320px] to h-56 (224px) for a compact size
      className="group h-56 [perspective:1000px] cursor-pointer"
    >
      <div className="relative w-full h-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
        {/* CARD FRONT - Adjusted padding to p-5 and text size to text-lg */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] border border-[#17609f] rounded-2xl bg-white p-5 flex flex-col justify-between shadow-sm">
          <div className="text-[#17609f]">
            {getPillarIcon(pillar.title)}
          </div>
          <h4 className="text-lg lg:text-xl font-heading font-semibold text-[#17609f] leading-tight">
            {pillar.title}
          </h4>
        </div>

        {/* CARD BACK - Adjusted text to text-sm to fit smaller height */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl bg-[#17609f] p-5 flex items-center justify-center shadow-lg text-center">
          <p className="text-white text-sm leading-relaxed font-medium">
            {pillar.description}
          </p>
        </div>

      </div>
    </motion.div>
  );
};

const MissionAndVision = () => {
  const d = missionVisionData;

  return (
    <>
      <PageHero title={d.title} breadcrumbs={d.breadcrumbs} />

      <main id="main-content" className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Vision & Mission */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-foreground mb-4">Vision Statement</h2>
            <p className="text-foreground leading-relaxed mb-8">{d.vision}</p>

            <h3 className="text-xl md:text-4xl font-heading font-bold text-foreground mb-4">Mission Statement</h3>
            <p className="text-foreground leading-relaxed mb-12">{d.mission}</p>
          </motion.div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {d.pillars.map((pillar, i) => (
              <PillarFlipCard key={pillar.title} pillar={pillar} index={i} />
            ))}
          </div>

          {/* About + Image */}
          <div className="flex flex-col md:flex-row gap-8 items-start mb-16">
            <div className="w-full md:w-1/3">
              <img src={d.founderImage} alt="Nahomie Guillaume" className="w-full rounded-lg shadow-lg" loading="lazy" />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-4">About Guillaume Counseling</h3>
              {d.aboutText.map((text, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed mb-4">{text}</p>
              ))}
            </div>
          </div>

          {/* Our Approach */}
          <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-4">Our Approach</h3>
          <p className="text-muted-foreground leading-relaxed mb-8">{d.approachIntro}</p>

          <div className="space-y-6 mb-16">
            {d.approaches.map((approach, i) => (
              <div key={approach.title} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </span>
                <div>
                  <h4 className="font-heading font-semibold text-foreground">{approach.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{approach.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Treatment Tracks */}
          <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-6">Treatment Track Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {d.treatmentTracks.map((track) => (
              <div key={track.title} className="bg-muted rounded-lg p-6">
                <h4 className="font-heading font-bold text-primary mb-2">{track.title}</h4>
                <p className="text-sm text-muted-foreground">{track.description}</p>
              </div>
            ))}
          </div>

          {/* Policy Documents */}
          <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-4">Policies and Procedures</h3>
          <p className="text-muted-foreground mb-4">A full Policies and Procedures document is available for your review.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            {d.policyDocuments.map((doc) => (
              <a
                key={doc.label}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors text-sm text-center"
              >
                {doc.label}
              </a>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default MissionAndVision;