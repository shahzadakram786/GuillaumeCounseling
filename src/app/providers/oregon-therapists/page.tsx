"use client";

import { TherapistPage } from "@/components/TherapistPage";
import { oregonTherapists } from "@/lib/data/pages/therapists";
import { contactInfo } from "@/lib/data/contact";

const OregonTherapists = () => (
  <TherapistPage
    title="Oregon Therapists"
    therapists={oregonTherapists}
    portalUrl={contactInfo.portals.oregon}
    canonicalPath="/providers/oregon-therapists"
  />
);

export default OregonTherapists;
