"use client";

import { PageHero } from "@/components/layout/PageHero";
import { insurancesData } from "@/lib/data/pages/insurances";
import { AdditionalInfo } from "@/components/sections/insurances/AdditionalInfo";
// Import your new modular components
import { IntroBanner } from "@/components/sections/insurances/IntroBanner";
import { FeeSchedule } from "@/components/sections/insurances/FeeSchedule";
import { PaymentComparison } from "@/components/sections/insurances/PaymentComparison";
import { NetworkPolicies } from "@/components/sections/insurances/NetworkPolicies";
// import { AdditionalInfo } from "@/components/sections/insurances/AdditionalInfo";

const Insurances = () => {
  const d = insurancesData;

  return (
    <>
      <PageHero title={d.title} breadcrumbs={d.breadcrumbs} />

      <main id="main-content" className="py-16 md:py-24 bg-gray-50/30">
        <div className="container mx-auto px-4 max-w-6xl">
          
          <IntroBanner data={d.psychotherapy} />
          
          <FeeSchedule data={d} />
          
          <PaymentComparison data={d} />
          
          <NetworkPolicies data={d} />

          <AdditionalInfo data={d} />

        </div>
      </main>
    </>
  );
};

export default Insurances;