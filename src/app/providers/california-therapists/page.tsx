"use client";

import { TherapistPage } from "@/components/TherapistPage";
import { californiaTherapists } from "@/lib/data/pages/therapists";
import { contactInfo } from "@/lib/data/contact";
import { getCaliforniaTherapists } from "@/lib/data/teamMembers";

// Define California-specific videos (Update these with real California videos)
const californiaVideos = [
  { id: 1, imageSrc: "/video/ragini.png", videoSrc: "/video/ragini-lal.webm" },
  // { id: 2, imageSrc: "/video/cali-therapist-2.png", videoSrc: "/video/cali-2.mp4" },
  // { id: 3, imageSrc: "/video/cali-therapist-3.png", videoSrc: "/video/cali-3.mp4" },
];

const CaliforniaTherapists = () => (
  <TherapistPage
    title="California Therapists"
    therapists={getCaliforniaTherapists()}
    portalUrl={contactInfo.portals.california}
    canonicalPath="/providers/california-therapists"
    featuredVideos={californiaVideos} // <--- Pass the specific data here
  />
);

export default CaliforniaTherapists;