"use client";

import { TherapistPage } from "@/components/TherapistPage";
import { californiaTherapists } from "@/lib/data/pages/therapists";
import { contactInfo } from "@/lib/data/contact";

const CaliforniaTherapists = () => (
  <TherapistPage
    title="California Therapists"
    therapists={californiaTherapists}
    portalUrl={contactInfo.portals.california}
    canonicalPath="/providers/california-therapists"
  />
);

export default CaliforniaTherapists;
