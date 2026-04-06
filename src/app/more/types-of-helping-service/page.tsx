
import { PageHero } from "@/components/layout/PageHero";
import { typesOfServiceData } from "@/lib/data/pages/typesOfService";

const TypesOfService = () => {
  const d = typesOfServiceData;

  return (
    <>
      

      <PageHero title={d.title} breadcrumbs={d.breadcrumbs} />

      <main id="main-content" className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            {d.services.map((service) => (
              <div key={service.title} className="bg-muted rounded-lg p-6">
                <h2 className="text-xl font-heading font-bold text-foreground mb-3">{service.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default TypesOfService;


export const metadata = {
  title: "Types of Helping Service | Guillaume Counseling",
  description: "Learn about the different types of helping services we offer.",
};
