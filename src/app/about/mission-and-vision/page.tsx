"use client";

import { AboutSection } from "@/components/about1/aboutSection";
import { ApproachSection } from "@/components/about1/approchSection";
import { PoliciesSection } from "@/components/about1/policySection";
import { TreatmentTracksSection } from "@/components/about1/trackTreatmentSection";
import { VisionMissionPillars } from "@/components/about1/VisionMissionPillars";
import { PageHero } from "@/components/layout/PageHero";
import { missionVisionData } from "@/lib/data/pages/missionVision";

// Import all your new separate components

const MissionAndVision = () => {
  const d = missionVisionData;

  return (
    <>
      <PageHero title={d.title} breadcrumbs={d.breadcrumbs} />

      <main id="main-content" className="">
        {/* The container wraps EVERYTHING so all sections align perfectly */}
        {/* <div className="container mx-auto px-4 max-w-6xl"> */}
          
          <VisionMissionPillars
            vision={d.vision} 
            mission={d.mission} 
            pillars={d.pillars} 
          />
          
          <AboutSection
            founderImage={d.founderImage} 
            aboutText={d.aboutText} 
          />
          
          <ApproachSection 
            approachIntro={d.approachIntro} 
            approaches={d.approaches} 
          />
          
          <TreatmentTracksSection
            treatmentTracks={d.treatmentTracks} 
          />
          
          <PoliciesSection
            policyDocuments={d.policyDocuments} 
          />

        {/* </div> */}
      </main>
    </>
  );
};

export default MissionAndVision;