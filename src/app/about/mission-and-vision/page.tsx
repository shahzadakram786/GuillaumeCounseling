"use client";


import { PageHero } from "@/components/layout/PageHero";
import { missionVisionData } from "@/lib/data/pages/missionVision";
import { motion } from "framer-motion";

const MissionAndVision = () => {
  const d = missionVisionData;

  return (
    <>
      

      <PageHero title={d.title} breadcrumbs={d.breadcrumbs} />

      <main id="main-content" className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Vision & Mission */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">Vision Statement</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">{d.vision}</p>

            <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-4">Mission Statement</h3>
            <p className="text-muted-foreground leading-relaxed mb-12">{d.mission}</p>
          </motion.div>

          {/* Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {d.pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-muted rounded-lg p-6"
              >
                <h4 className="font-heading font-bold text-primary text-lg mb-2">{pillar.title}</h4>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
              </motion.div>
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


