"use client";

import { careerData } from "@/lib/data/pages/career";
import { CareerHero } from "@/components/sections/career/CareerHero";
import { WhyThisPractice } from "@/components/sections/career/WhyThisPage";
import { OurApproach } from "@/components/sections/career/OurApproch";
import { PositionTypes } from "@/components/sections/career/PositionType";
import { FitAssessment } from "@/components/sections/career/FitAssessment";
import { Expectations } from "@/components/sections/career/Expectations";
import { Representation } from "@/components/sections/career/Presentation";
import { ApplyCTA } from "@/components/sections/career/ApplyCTA";

const Career = () => {
  const d = careerData;

  return (
    <>
      <CareerHero
        subtitle={d.subtitle}
        tagline={d.tagline}
        applyEmail={d.applyEmail}
      />

      <main id="main-content" className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <WhyThisPractice items={d.whyThisPractice} />

          <OurApproach data={d.ourApproach} />

          <PositionTypes rolesInfo={d.allRolesInfo} positions={d.positions} />

          <FitAssessment fitFor={d.whoFitFor} notFitFor={d.whoNotFitFor} />

          <Expectations items={d.expectations} />

          {/* Inside your main Career.tsx file */}
          <Representation
            data={d.representation}
            image="/video/benefits-offered.jpg" // <-- Add your image path here!
          />
          <ApplyCTA data={d.applyInfo} email={d.applyEmail} />
        </div>
      </main>
    </>
  );
};

export default Career;
