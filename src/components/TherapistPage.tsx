
import { PageHero } from "@/components/layout/PageHero";
import { Therapist } from "@/lib/data/pages/therapists";
import { contactInfo } from "@/lib/data/contact";

interface TherapistPageProps {
  title: string;
  therapists: Therapist[];
  portalUrl: string;
  canonicalPath: string;
}

const TherapistCard = ({ therapist }: { therapist: Therapist }) => (
  <div className="bg-card rounded-lg shadow-md overflow-hidden">
    <img src={therapist.image} alt={therapist.name} className="w-full h-72 object-cover object-top" loading="lazy" />
    <div className="p-6">
      <h3 className="font-heading font-bold text-foreground text-lg">{therapist.name}</h3>
      <p className="text-primary text-sm font-medium mt-1">{therapist.location}</p>
      <ul className="mt-3 space-y-1.5">
        {therapist.details.map((detail, i) => (
          <li key={i} className="text-muted-foreground text-sm leading-relaxed">{detail}</li>
        ))}
      </ul>
    </div>
  </div>
);

export const TherapistPage = ({ title, therapists, portalUrl, canonicalPath }: TherapistPageProps) => {
  return (
    <>
      

      <PageHero
        title={title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: title, href: "#" },
        ]}
      />

      <main id="main-content" className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8">{title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {therapists.map((t) => <TherapistCard key={t.name} therapist={t} />)}
          </div>

          <div className="text-center">
            <a
              href={portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors text-lg"
            >
              REQUEST AN APPOINTMENT
            </a>
          </div>
        </div>
      </main>
    </>
  );
};
