"use client";
import { PageHero } from "@/components/layout/PageHero";
import { ServiceAccordions } from "@/components/sections/services/ServiceAccordions";
import { ServiceReferences } from "@/components/sections/services/ServiceRefrences";
import { ServiceComparisonHero } from "@/components/sections/services/ServicesComparisonHero";
import { typesOfServiceData } from "@/lib/data/pages/typesOfService";


const TypesOfService = () => {
  const d = typesOfServiceData;

  return (
    <>
          <PageHero title={d.title} breadcrumbs={d.breadcrumbs} />
    
      {/* Hero section with Image and Intro */}
      <ServiceComparisonHero data={d.consultationIntro} />

      {/* Blue section with Accordions */}
      <ServiceAccordions faqs={d.detailedServices} />

      {/* White section with References */}
      <ServiceReferences references={d.references} />
    </>
  );
};

export default TypesOfService;