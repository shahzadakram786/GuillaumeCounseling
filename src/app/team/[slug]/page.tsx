import { notFound } from "next/navigation";
import { getTeamMemberBySlug } from "@/lib/data/teamMembers";
import { PageHero } from "@/components/layout/PageHero";
import { MapPin, Globe, GraduationCap, Star, ArrowLeft } from "lucide-react";
import Link from "next/link";

// Next.js 15+ dynamic route props MUST be a Promise
interface TeamMemberPageProps {
  params: Promise<{ slug: string }>;
}

// 1. You MUST add 'async' here
export default async function TeamMemberPage({ params }: TeamMemberPageProps) {
  
  // 2. You MUST 'await' the params before you can use the slug
  const resolvedParams = await params;
  
  // 3. Now you can safely use resolvedParams.slug
  const member = getTeamMemberBySlug(resolvedParams.slug);

  // If the URL is wrong or the member doesn't exist, show a 404 page
  if (!member) {
    notFound();
  }

  return (
    <>
      <PageHero 
        title={member.name} 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Leadership", href: "/leadership" },
          { label: member.name, href: "#" },
        ]} 
      />

      <main className="py-16 md:py-24 bg-white w-full">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Back Button */}
          <Link href="/leadership" className="inline-flex items-center gap-2 text-[#17609f] hover:text-[#d8008a] transition-colors mb-10 font-medium text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to Leadership Team
          </Link>

          {/* ==========================================
              DYNAMIC LAYOUT: 1/3 Sidebar, 2/3 Main Content
              ========================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* LEFT SIDEBAR: Image & Quick Info */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              {/* Image */}
              <div className="rounded-[2rem] overflow-hidden shadow-lg border border-gray-100">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Quick Info Card */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm space-y-4">
                
                {/* Title */}
                <div className="pb-4 border-b border-gray-200">
                  <h3 className="font-sans font-bold text-gray-900 text-lg">{member.title}</h3>
                </div>

                {/* Locations */}
                {member.locations && (
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#d8008a] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Locations</p>
                      <p className="text-sm text-gray-800 font-medium">{member.locations.join(", ")}</p>
                    </div>
                  </div>
                )}

                {/* Languages */}
                {member.languages && (
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-[#17609f] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Languages</p>
                      <p className="text-sm text-gray-800 font-medium">{member.languages}</p>
                    </div>
                  </div>
                )}

                {/* Optional Booking Button */}
                <div className="pt-4">
                  <Link href="/contact-us" className="flex items-center justify-center w-full py-3 bg-[#17609f] text-white rounded-md font-medium hover:bg-blue-800 transition-colors text-sm shadow-md">
                    Request Appointment
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT MAIN CONTENT: Bio & Details */}
            <div className="lg:col-span-8">
              
              {/* Header */}
              <h1 className="text-3xl md:text-4xl lg:text-[42px] font-marcellus text-gray-900 mb-2 leading-tight">
                {member.name}
              </h1>
              <h2 className="text-lg md:text-xl font-sans text-[#2b7bc4] mb-8 font-medium">
                {member.title}
              </h2>

              {/* Biography Paragraphs */}
              <div className="prose prose-lg max-w-none text-gray-700 font-sans leading-relaxed space-y-5 mb-12">
                {member.bio.map((paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Grid for Education & Specialties */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Specialties */}
                {member.specialties && (
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
                    <div className="flex items-center gap-3 mb-5">
                      <Star className="w-6 h-6 text-[#d8008a]" />
                      <h3 className="text-xl font-marcellus text-gray-900">Specialties</h3>
                    </div>
                    <ul className="space-y-3">
                      {member.specialties.map((item: string, index: number) => (
                        <li key={index} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2b7bc4] mt-2 shrink-0"></span>
                          <span className="text-sm md:text-[15px] text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Education */}
                {member.education && (
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
                    <div className="flex items-center gap-3 mb-5">
                      <GraduationCap className="w-6 h-6 text-[#17609f]" />
                      <h3 className="text-xl font-marcellus text-gray-900">Education</h3>
                    </div>
                    <ul className="space-y-3">
                      {member.education.map((item: string, index: number) => (
                        <li key={index} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#d8008a] mt-2 shrink-0"></span>
                          <span className="text-sm md:text-[15px] text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>

            </div>
          </div>
        </div>
      </main>
    </>
  );
}