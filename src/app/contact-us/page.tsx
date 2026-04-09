"use client";

import { PageHero } from "@/components/layout/PageHero";
import { OfficeLocations } from "@/components/sections/contact/OfficeLocations";
import { contactInfo } from "@/lib/data/contact";
import { Phone, Mail, MapPin, Calendar, Printer } from "lucide-react";

const contactCards = [
  {
    icon: Phone,
    title: "",
    lines: [`Oregon: ${contactInfo.oregonPhone}`, `California: ${contactInfo.californiaPhone}`],
  },
  {
    icon: Printer,
    title: "Fax",
    lines: [contactInfo.fax],
  },
  {
    icon: Mail,
    title: "Email",
    lines: [contactInfo.email],
  },
  {
    icon: MapPin,
    title: "Mailing address",
    lines: [contactInfo.mailingAddress],
  },
];

const appointmentCards = [
  {
    location: "Sacramento, California",
    href: contactInfo.portals.california,
  },
  {
    location: "Portland, Oregon",
    href: contactInfo.portals.oregon,
  },
];

const ContactUs = () => {
  return (
    <>
      <PageHero title="Contact Us" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us", href: "#" }]} />

      <main className="py-16 md:py-24 bg-gray-50/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-marcellus text-gray-900 mb-4">
              Are you ready to schedule an Appointment?
            </h2>
            <p className="text-[14px] text-gray-600 max-w-3xl mx-auto leading-relaxed">
              To schedule an appointment, call, email, or self-schedule through the client portal by clicking on the "Request an Appointment" link below.
            </p>
          </div>

          {/* Top Row: Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {contactCards.map((card, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl shadow-sm p-10 flex flex-col items-center text-center transition-all hover:shadow-md">
                <div className="w-16 h-16 rounded-full bg-[#d8008a] flex items-center justify-center mb-6 shadow-lg shadow-pink-100">
                  <card.icon className="h-7 w-7 text-white" />
                </div>
                {card.title && <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>}
                {card.lines.map((line, j) => (
                  <p key={j} className="text-[14px] text-gray-600 font-medium">{line}</p>
                ))}
              </div>
            ))}

            {/* Bottom Row: Appointment Cards (Integrated into same grid for clean alignment) */}
            {appointmentCards.map((card, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl shadow-sm p-10 flex flex-col items-center text-center transition-all hover:shadow-md">
                <div className="w-16 h-16 rounded-full bg-[#d8008a] flex items-center justify-center mb-6 shadow-lg shadow-pink-100">
                  <Calendar className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Request an Appointment</h3>
                <p className="text-[14px] text-gray-500 mb-6">{card.location}</p>
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#d8008a] hover:bg-[#b00070] text-white rounded-lg font-bold transition-all text-[13px] uppercase tracking-wider"
                >
                  Book Appointment
                </a>
              </div>
            ))}
          </div>
        </div>


        <OfficeLocations/>
      </main>
    </>
  );
};

export default ContactUs;