"use client"

import { PageHero } from "@/components/layout/PageHero";
// 1. CHANGED: We now import TeamMember instead of the old Therapist interface
import { TeamMember } from "@/lib/data/teamMembers"; 
import { ChevronRight } from "lucide-react"; 
import Link from "next/link"; 
import { FeaturedVideos, FeaturedVideo } from "./sections/VideoSection";

interface TherapistPageProps {
  title: string;
  // 2. CHANGED: This now expects our unified TeamMember array
  therapists: TeamMember[]; 
  portalUrl: string;
  canonicalPath: string;
  featuredVideos?: FeaturedVideo[];
}

// 3. CHANGED: Prop type updated to TeamMember
const TherapistCard = ({ therapist }: { therapist: TeamMember }) => (
  <div className="bg-white border border-gray-200 rounded-[1.5rem] shadow-sm flex flex-col h-full p-4 md:p-5 transition-shadow hover:shadow-md">
    <div className="bg-[#f6f8fa] rounded-[1rem] p-4 flex items-center gap-4 mb-5">
      <img
        src={therapist.image}
        alt={therapist.name}
        className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full object-cover shrink-0 shadow-sm border-2 border-white"
        loading="lazy"
      />
      <div>
        <h3 className="font-sans font-bold text-gray-900 text-[16px] md:text-[17px] leading-tight">
          {therapist.name}
        </h3>
      </div>
    </div>

    <div className="flex-grow flex flex-col justify-between">
      <div className="mb-6 px-1">
        {/* 4. CHANGED: Now uses summaryLocation */}
        {therapist.summaryLocation && (
          <p className="text-gray-800 text-[13.5px] md:text-[14px] leading-relaxed mb-1">
            {therapist.summaryLocation}
          </p>
        )}
        <ul className="space-y-1">
          {/* 5. CHANGED: Now uses summaryDetails (with a ? to prevent errors if it's empty) */}
          {therapist.summaryDetails?.map((detail, i) => (
            <li key={i} className="text-gray-700 text-[13.5px] md:text-[14px] leading-relaxed">
              {detail}
            </li>
          ))}
        </ul>
      </div>

      <div className="px-1">
        <Link
          href={therapist.slug ? `/team/${therapist.slug}` : "#"}
          className="inline-flex items-center justify-center gap-1 px-4 py-2 bg-[#d8008a] text-white rounded-md font-medium hover:bg-pink-700 transition-colors text-[13px] shadow-sm"
        >
          View Full Profile
          <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
        </Link>
      </div>
    </div>
  </div>
);

export const TherapistPage = ({ title, therapists, portalUrl, canonicalPath, featuredVideos }: TherapistPageProps) => {
  const titleWords = title.split(" ");
  const firstWord = titleWords[0];
  const restOfTitle = titleWords.slice(1).join(" ");

  return (
    <>
      <PageHero
        title={title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: title, href: "#" },
        ]}
      />

      <main id="main-content" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-gray-900 text-center mb-12">
            {firstWord} <span className="text-[#17609f]">{restOfTitle}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
            {therapists.map((t) => (
              <TherapistCard key={t.slug} therapist={t} />
            ))}
          </div>
        </div>
      </main>

      {/* Conditionally render the videos ONLY if data is provided */}
      {featuredVideos && featuredVideos.length > 0 && (
        <FeaturedVideos videos={featuredVideos} />
      )}
    </>
  );
};