
import { PageHero } from "@/components/layout/PageHero";
import { contactInfo } from "@/lib/data/contact";
import { Phone, Mail, MapPin, Calendar } from "lucide-react";

const contactCards = [
  {
    icon: Phone,
    title: "",
    lines: [
      `Oregon: ${contactInfo.oregonPhone}`,
      `California: ${contactInfo.californiaPhone}`,
    ],
  },
  {
    icon: Calendar,
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
    lines: [`Mailing address: ${contactInfo.mailingAddress}`],
  },
];

const appointmentCards = [
  {
    title: "Request an Appointment",
    subtitle: "Sacramento, California",
    href: contactInfo.portals.california,
  },
  {
    title: "Request an Appointment",
    subtitle: "Portland, Oregon",
    href: contactInfo.portals.oregon,
  },
];

const ContactUs = () => {
  return (
    <>
      

      <PageHero
        title="Contact Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us", href: "#" },
        ]}
      />

      <main id="main-content" className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">
              Are you ready to schedule an Appointment?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              To schedule an appointment, call, email, or self-schedule through the client portal by clicking on the Request an Appointment" link below.
            </p>
          </div>

          {/* Info Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {contactCards.map((card, i) => (
              <div
                key={i}
                className="bg-background border border-border rounded-xl shadow-sm p-8 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-5">
                  <card.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                {card.title && (
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2">{card.title}</h3>
                )}
                {card.lines.map((line, j) => (
                  <p key={j} className="text-muted-foreground text-sm leading-relaxed">{line}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Appointment Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Empty first col to offset */}
            <div className="hidden md:block" />
            {appointmentCards.map((card, i) => (
              <div
                key={i}
                className="bg-background border border-border rounded-xl shadow-sm p-8 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-5">
                  <Calendar className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-1">{card.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{card.subtitle}</p>
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors text-sm"
                >
                  Book Appointment
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactUs;


export const metadata = {
  title: "Contact Us | Guillaume Counseling",
  description: "Contact Guillaume Counseling for appointments and inquiries. Call, email, or self-schedule through our client portal.",
};
