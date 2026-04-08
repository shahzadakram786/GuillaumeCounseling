"use client";

import { TherapistPage } from "@/components/TherapistPage";
import { getOregonTherapists } from "@/lib/data/teamMembers"; // <--- Import the new helper function
import { contactInfo } from "@/lib/data/contact";

// Define Oregon-specific videos
const oregonVideos = [
  { id: 1, imageSrc: "/video/united.png", videoSrc: "/video/Untitled-design.mp4" },
  { id: 2, imageSrc: "/video/vicky.png", videoSrc: "/video/Vicky-Spear.webm" },
  { id: 3, imageSrc: "/video/ash.png", videoSrc: "/video/Ash-CSWA-short-vid_12-seconds.mp4" },
];

const OregonTherapists = () => (
  <TherapistPage
    title="Oregon Therapists"
    therapists={getOregonTherapists()} // <--- Use the helper function here!
    portalUrl={contactInfo.portals.oregon}
    canonicalPath="/providers/oregon-therapists"
    featuredVideos={oregonVideos} 
    
  />
);

export default OregonTherapists;