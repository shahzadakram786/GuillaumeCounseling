
import { PageHero } from "@/components/layout/PageHero";
import { christianCounselingData } from "@/lib/data/pages/christianCounseling";

const ChristianCounseling = () => {
  const d = christianCounselingData;

  return (
    <>
      

      <PageHero title={d.title} breadcrumbs={d.breadcrumbs} />

      <main id="main-content" className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8">{d.heading}</h2>

          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="w-full md:w-2/5">
              <img src={d.image} alt={d.imageCaption} className="w-full rounded-lg shadow-lg" loading="lazy" />
              <p className="text-sm text-muted-foreground mt-2 italic">{d.imageCaption}</p>
            </div>
            <div className="w-full md:w-3/5">
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">{d.whatIsIt.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{d.whatIsIt.text}</p>
              <p className="text-muted-foreground leading-relaxed mb-4">{d.whatIsIt.practical}</p>
              <p className="text-muted-foreground leading-relaxed">{d.whatIsIt.whoCan}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ChristianCounseling;


export const metadata = {
  title: "Christian Counseling | Guillaume Counseling",
  description: "Learn about our Christian and Biblical counseling services.",
};
