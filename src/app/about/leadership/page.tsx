"use client";

import { PageHero } from "@/components/layout/PageHero";
import { leadershipData, LeadershipMember } from "@/lib/data/pages/leadership";
import { User, Globe, MapPin, ChevronRight } from "lucide-react";
import Link from "next/link";

// ==========================================
// 1. Reusable Split-Color Heading Component
// ==========================================
const SectionHeading = ({ firstWord, secondWord }: { firstWord: string; secondWord: string }) => (
  <h2 className="text-3xl md:text-[34px] font-bold font-marcellus text-gray-900 text-center mb-6">
    {firstWord} <span className="text-[#2b7bc4]">{secondWord}</span>
  </h2>
);

// ==========================================
// 2. Horizontal Member Card Component
// ==========================================
const MemberCard = ({ member, variant = "detailed" }: { member: LeadershipMember; variant?: "board" | "detailed" }) => {
  const isBoard = variant === "board";

  return (
    <div className={`bg-white border border-gray-200 rounded-2xl p-3 md:p-2 shadow-sm flex flex-row items-center gap-4 transition-shadow hover:shadow-md w-full ${isBoard ? 'max-w-[360px]' : 'max-w-[420px]'}`}>
      
      {/* Image Wrapper */}
      <div className="shrink-0">
        <img 
          src={member.image} 
          alt={member.name} 
          className={`${isBoard ? 'w-24 h-24 md:w-28 md:h-28' : 'w-28 h-28 md:w-36 md:h-36'} object-cover object-top rounded-xl shadow-sm border border-gray-100`} 
          loading="lazy" 
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-center text-left w-full">
        <h3 className="font-marcellus font-bold text-gray-900 text-[14px] sm:text-[15px] md:text-[16px] leading-tight">
          {member.name}
        </h3>
        
        {isBoard ? (
          <p className="text-gray-600 text-[12px] sm:text-[13px] mt-1.5 md:text-[15px] font-medium leading-snug font-marcellus">
            {member.title}
          </p>
        ) : (
          <div className="mt-2 flex flex-col items-start w-full">
            {member.title && (
              <p className="text-[12px] sm:text-[13px] font-medium leading-tight mb-1">
                {member.title}
              </p>
            )}
            
            {member.languages && (
              <div className="flex items-start gap-1.5 text-[#17609f] mb-1">
                <Globe className="w-3.5 h-3.5 shrink-0 mt-[1px]" />
                <p className="text-[11px] sm:text-[12px] font-medium leading-tight">{member.languages}</p>
              </div>
            )}
            
            {member.description && (
              <p className="text-gray-600 text-[11px] sm:text-[12px] leading-relaxed mt-1">
                {member.description}
              </p>
            )}

            <Link 
  href={`/team/${member.slug}`} 
  className="mt-2.5 inline-flex items-center justify-center gap-1 px-4 py-1.5 bg-[#d8008a] text-white rounded-sm font-medium hover:bg-pink-700 transition-colors text-[11px] shadow-sm"
>
  Learn More
  <ChevronRight className="w-3 h-3 stroke-[2.5]" />
</Link>
          </div>
        )}
      </div>
    </div>
  );
};

// ==========================================
// 3. Main Page Component
// ==========================================
const Leadership = () => {
  const d = leadershipData;

  return (
    <>
      <PageHero title={d.title} breadcrumbs={d.breadcrumbs} />

      <main id="main-content" className="py-16 md:py-24 bg-white w-full">
        <div className="container mx-auto px-4 max-w-5xl flex flex-col gap-10">
          
          {/* Board Members */}
          <div className="">
            <SectionHeading firstWord="Board" secondWord="Members" />
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {d.boardMembers.map((m) => (
                <MemberCard key={m.name + m.title} member={m} variant="board" />
              ))}
            </div>
          </div>

          {/* Leadership Team */}
          <div className="">
            <SectionHeading firstWord="Leadership" secondWord="Team" />
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {d.leadershipTeam.map((m) => (
                <MemberCard key={m.name + m.title} member={m} />
              ))}
            </div>
          </div>

          {/* ==========================================
              OREGON CLINICAL SUPERVISORS
              ========================================== */}
          <div className="">
            {/* 1. BOTH TITLES IN ONE DIV */}
            <div className="mb-8 flex flex-col items-center justify-center">
              <h2 className="text-3xl md:text-[34px] font-bold font-marcellus text-gray-900 text-center mb-2">
                Clinical <span className="text-[#2b7bc4]">Supervisors</span>
              </h2>
              <div className="flex items-center font-bold justify-center gap-1.5 text-[#17609f]">
                <MapPin className="w-[18px] h-[18px] fill-[#17609f] text-white" />
                <h3 className="text-lg md:text-[19px] font-marcellus


 font-bold text-gray-900">
                  Oregon Clinical Supervisors
                </h3>
              </div>
            </div>

            {/* 2. CARDS IN ANOTHER DIV */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {d.clinicalSupervisors.oregon.map((m) => (
                <MemberCard key={m.name} member={m} />
              ))}
            </div>
          </div>

          {/* ==========================================
              CALIFORNIA CLINICAL SUPERVISORS
              ========================================== */}
          <div className="">
            {/* 1. TITLE IN ONE DIV */}
            <div className="mb-8 flex items-center justify-center gap-1.5 text-[#17609f]">
              <MapPin className="w-[18px] h-[18px] fill-[#17609f] text-white" />
              <h3 className="text-lg md:text-[19px] font-marcellus


 font-bold text-gray-900">
                California Clinical Supervisors
              </h3>
            </div>

            {/* 2. CARDS IN ANOTHER DIV */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {d.clinicalSupervisors.california.map((m) => (
                <MemberCard key={m.name} member={m} />
              ))}
            </div>
          </div>

        </div>
      </main>
    </>
  );
};

export default Leadership;