import { PageHero } from "@/components/layout/PageHero";
import { Therapist } from "@/lib/data/pages/therapists";
import { ChevronRight } from "lucide-react"; // Make sure to import the arrow icon
import Link from "next/link"; // Make sure to import Link

interface TherapistPageProps {
  title: string;
  therapists: Therapist[];
  portalUrl: string;
  canonicalPath: string;
}

const TherapistCard = ({ therapist }: { therapist: Therapist }) => (
  // The outer card: White background, rounded border, internal padding
  <div className="bg-white border border-gray-200 rounded-[1.5rem] shadow-sm flex flex-col h-full p-4 md:p-5 transition-shadow hover:shadow-md">

    {/* 1. Light Gray Top Header Block */}
    <div className="bg-[#f6f8fa] rounded-[1rem] p-4 flex items-center gap-4 mb-5">
      <img
        src={therapist.image}
        alt={therapist.name}
        // Circular image with a small white border
        className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full object-cover shrink-0 shadow-sm border-2 border-white"
        loading="lazy"
      />
      <div>
        <h3 className="font-sans font-bold text-gray-900 text-[16px] md:text-[17px] leading-tight">
          {therapist.name}
        </h3>
      </div>
    </div>

    {/* 2. Middle Content: Details List */}
    <div className="flex-grow flex flex-col justify-between">
      <div className="mb-6 px-1">
        {/* If your data has a specific location string, render it here */}
        {therapist.location && (
          <p className="text-gray-800 text-[13.5px] md:text-[14px] leading-relaxed mb-1">
            {therapist.location}
          </p>
        )}
        <ul className="space-y-1">
          {therapist.details.map((detail, i) => (
            <li key={i} className="text-gray-700 text-[13.5px] md:text-[14px] leading-relaxed">
              {detail}
            </li>
          ))}
        </ul>
      </div>

      {/* 3. Bottom Button */}
      <div className="px-1">
        <Link
          // Make sure your therapist data in therapists.ts includes a 'slug' (e.g., 'jennifer-moorhead')!
          href={(therapist as any).slug ? `/team/${(therapist as any).slug}` : "#"}
          className="inline-flex items-center justify-center gap-1 px-4 py-2 bg-[#d8008a] text-white rounded-md font-medium hover:bg-pink-700 transition-colors text-[13px] shadow-sm"
        >
          View Full Profile
          <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
        </Link>
      </div>
    </div>
  </div>
);

export const TherapistPage = ({ title, therapists, portalUrl, canonicalPath }: TherapistPageProps) => {
  // Split the title so we can make the first word dark and the second word blue
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
          
          {/* Title with two-tone colors perfectly matching the screenshot */}
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-gray-900 text-center mb-12">
            {firstWord} <span className="text-[#17609f]">{restOfTitle}</span>
          </h2>

          {/* Grid of Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
            {therapists.map((t) => (
              <TherapistCard key={t.name} therapist={t} />
            ))}
          </div>

          {/* Footer Appointment Button */}
          <div className="text-center">
            <a
              href={portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 bg-[#17609f] text-white rounded-md font-medium hover:bg-blue-800 transition-colors text-[15px] shadow-md uppercase tracking-wide"
            >
              Request an Appointment
            </a>
          </div>
        </div>
      </main>
    </>
  );
};