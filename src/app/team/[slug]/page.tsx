import { notFound } from "next/navigation";
import { getTeamMemberBySlug } from "@/lib/data/teamMembers";
import { PageHero } from "@/components/layout/PageHero";
import { GraduationCap, Star, ArrowLeft, Brain } from "lucide-react";
import Link from "next/link";

// Next.js 15+ dynamic route props MUST be a Promise
interface TeamMemberPageProps {
  params: Promise<{ slug: string }>;
}

// ==========================================
// DRY HELPER 1: Profile Detail Grid Card (Education/Specialties)
// ==========================================
const ProfileDetailCard = ({ title, icon: Icon, iconColor, bulletColor, items }: { title: string; icon: React.ElementType; iconColor: string; bulletColor: string; items?: string[] | null; }) => {
  if (!items || items.length === 0) return null;
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-5">
        <Icon className={`w-6 h-6 ${iconColor}`} />
        <h3 className="text-2xl font-bold font-marcellus text-gray-900">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2.5">
            <span className={`w-1.5 h-1.5 rounded-full ${bulletColor} mt-2 shrink-0`}></span>
            <span className="text-sm md:text-[15px] text-gray-700 leading-snug">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// ==========================================
// DRY HELPER 2: Gradient Image Card
// ==========================================
const GradientBioCard = ({ paragraphs, imageSrc, textClass = "font-marcellus", imagePosition = "right" }: { paragraphs?: string[], imageSrc: string, textClass?: string, imagePosition?: "left" | "right" }) => {
  if (!paragraphs || paragraphs.length === 0) return null;
  const isImageRight = imagePosition === "right";
  return (
    <div className={`rounded-[2rem] p-2 md:p-3 mb-12 h-full flex flex-col ${isImageRight ? "md:flex-row" : "md:flex-row-reverse"} gap-4 md:gap-8 shadow-xl items-stretch`} style={{ background: "linear-gradient(135deg, #17609f 0%, #d8008a 100%)" }}>
      <div className={`w-full md:w-[45%] py-6 flex flex-col justify-center space-y-5 text-white ${isImageRight ? 'pl-4 md:pl-6' : 'pr-4 md:pr-6'}`}>
        {paragraphs.map((p, i) => (
          <p key={i} className={`text-[14px] md:text-[15px] leading-snug text-white/95 ${textClass}`}>{p}</p>
        ))}
      </div>
      <div className="w-full md:w-[55%] h-[100%] flex items-stretch justify-center ">
        <div className="bg-white p-2 rounded-[1.5rem] w-full h-full shadow-sm flex items-stretch">
          <img src={imageSrc} alt="Biography Section" className="w-full h-full object-cover rounded-[1rem] min-h-[300px]" />
        </div>
      </div>
    </div>
  );
};

// ==========================================
// DRY HELPER 3: Clean Split Image Card
// ==========================================
const SplitBioCard = ({ paragraphs, imageSrc }: { paragraphs?: string[], imageSrc: string }) => {
  if (!paragraphs || paragraphs.length === 0) return null;
  return (
    <div className="mb-12 flex flex-col md:flex-row gap-8 items-stretch">
      <div className="w-full md:w-[45%] flex items-stretch">
        <img src={imageSrc} alt="Biography Section" className="w-full h-auto object-cover rounded-[2rem] shadow-md flex-grow" />
      </div>
      <div className="w-full md:w-[55%] p-4 flex flex-col justify-center space-y-5">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-[15px] text-gray-700 leading-relaxed font-sans">{p}</p>
        ))}
      </div>
    </div>
  );
};

// ==========================================
// DRY HELPER 4: Main Content Bio Video Card
// ==========================================
const BioVideoCard = ({ videoSrc, posterSrc }: { videoSrc?: string, posterSrc: string }) => {
  if (!videoSrc) return null;
  return (
    <div className="mb-12">
      <div className="rounded-[2rem] overflow-hidden shadow-xl border-[4px] border-[#17609f] bg-black w-full relative pt-[56.25%]">
        <video className="absolute top-0 left-0 w-full h-full object-cover" controls poster={posterSrc} preload="metadata" playsInline>
          <source src={videoSrc} type="video/mp4" />
          <source src={videoSrc} type="video/webm" />
        </video>
      </div>
    </div>
  );
};

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================
export default async function TeamMemberPage({ params }: TeamMemberPageProps) {
  const resolvedParams = await params;
  const member = getTeamMemberBySlug(resolvedParams.slug);

  if (!member) notFound();

  const sidebarDetails = [
    { label: "Works with", value: (member as any).worksWith },
    { label: "Languages", value: member.languages },
    { label: "Appointment", value: (member as any).appointmentStatus },
    { label: "License", value: (member as any).License },
  ];

  return (
    <>
      <PageHero title={member.name} breadcrumbs={[{ label: "Home", href: "/" }, { label: member.name, href: "#" }]} />

      <main className="py-16 md:py-24 bg-white w-full">
        <div className="container mx-auto max-w-7xl">
          {/* <Link href="/" className="inline-flex items-center gap-2 text-[#17609f] hover:text-[#d8008a] transition-colors mb-10 font-medium text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Leadership Team
          </Link> */}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
            
            {/* --- LEFT SIDEBAR (Wrapped in a flex-col to stack card and video) --- */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 flex flex-col gap-6">
              
              {/* Profile Card */}
              <div className="border-[4px] border-[#17609f] rounded-[2rem] p-4 md:p-3 bg-white flex flex-col shadow-md">
                <img src={member.image} alt={member.name} className="w-full h-auto object-cover rounded-[1.25rem] mb-6" />
                <div className="flex flex-col gap-4 px-1 pb-2 text-left">
                  {sidebarDetails.map((detail, idx) => detail.value && (
                    <div key={idx} className="flex flex-col gap-0.5">
                      <h4 className="font-sans text-[18px] font-bold text-gray-900 leading-tight">{detail.label}</h4>
                      <p className="font-sans text-[15px] text-gray-800 leading-snug">{detail.value}</p>
                    </div>
                  ))}
                </div>
                {(member as any).portalUrl && (
                  <div className="mt-6 mb-2 flex justify-center w-full">
                    <Link href={(member as any).portalUrl} className="inline-block px-6 py-3 bg-[#d8008a] text-white rounded-md font-bold hover:bg-pink-700 transition-colors text-[14px] shadow-sm uppercase tracking-wide text-center">
                      Request an Appointment
                    </Link>
                  </div>
                )}
              </div>

              {/* NEW: SIDEBAR VIDEO PLAYER */}
              {/* Only shows if video exists AND position is set to "sidebar" */}
              {(member as any).videoSrc && (member as any).videoPosition === "sidebar" && (
                <div className="rounded-[2rem] overflow-hidden shadow-md bg-black w-full border border-gray-200">
                  <video className="w-full h-auto object-cover" controls preload="metadata" playsInline>
                    <source src={(member as any).videoSrc} type="video/mp4" />
                    <source src={(member as any).videoSrc} type="video/webm" />
                  </video>
                </div>
              )}
            </div>

            {/* --- RIGHT MAIN CONTENT --- */}
            <div className="lg:col-span-8">
              <h1 className="text-3xl md:text-4xl lg:text-[42px] font-marcellus text-gray-900 mb-2 leading-tight">{member.name}</h1>
              <h2 className="text-lg md:text-[22px] font-sans text-[#2b7bc4] mb-10 font-medium">{member.title}</h2>

              {member.bio && (
                <div className="prose prose-lg max-w-none text-gray-700 font-sans leading-relaxed space-y-5 mb-12">
                  {member.bio.map((p: string, i: number) => <p key={i}>{p}</p>)}
                </div>
              )}

              {/* MAIN CONTENT VIDEO PLAYER */}
              {/* Only shows if video exists AND position is set to "main" */}
              {(member as any).videoSrc && (member as any).videoPosition === "main" && (
                <BioVideoCard videoSrc={(member as any).videoSrc} posterSrc={member.image} />
              )}

              <GradientBioCard paragraphs={(member as any).bio2} imageSrc={(member as any).bio2Image || member.image} textClass="font-marcellus" imagePosition="right" />            
              <SplitBioCard paragraphs={(member as any).bio3} imageSrc={(member as any).bio3Image || member.image} />
              <GradientBioCard paragraphs={(member as any).bio4} imageSrc={(member as any).bio4Image || member.image} textClass="font-marcellus" imagePosition="right" />

              {(member as any).bio5 && (
                <div className="prose prose-lg max-w-none text-gray-700 font-sans leading-relaxed space-y-5 mb-16">
                  {(member as any).bio5.map((p: string, i: number) => <p key={i}>{p}</p>)}
                </div>
              )}




              {/* specialtiesMain */}

              <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                <ProfileDetailCard title="Approaches" icon={Star} iconColor="text-[#d8008a]" bulletColor="bg-[#2b7bc4]" items={member.approaches} />
                <ProfileDetailCard title="Specialties" icon={Brain} iconColor="text-[#17609f]" bulletColor="bg-[#d8008a]" items={member.specialtiesMain} />
              </div>

              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ProfileDetailCard title="Specialties" icon={Star} iconColor="text-[#d8008a]" bulletColor="bg-[#2b7bc4]" items={member.specialties} />
                <ProfileDetailCard title="Education" icon={GraduationCap} iconColor="text-[#17609f]" bulletColor="bg-[#d8008a]" items={member.education} />
              </div> */}

            </div>
          </div>
        </div>
      </main>
    </>
  );
}