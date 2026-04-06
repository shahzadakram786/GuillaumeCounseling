
import { PageHero } from "@/components/layout/PageHero";
import { insurancesData } from "@/lib/data/pages/insurances";

const Insurances = () => {
  const d = insurancesData;

  return (
    <>
      

      <PageHero title={d.title} breadcrumbs={d.breadcrumbs} />

      <main id="main-content" className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Psychotherapy Services */}
          <p className="text-muted-foreground mb-2">{d.psychotherapy.intro}</p>
          <p className="text-muted-foreground mb-8 font-medium">{d.psychotherapy.responsibility}</p>

          {/* Medical Model Rates */}
          <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-4">Psychotherapy (Medical Model) Rates</h2>
          <div className="bg-muted rounded-lg p-6 mb-8">
            {d.medicalModelRates.map((r) => (
              <div key={r.service} className="flex justify-between py-2 border-b border-border last:border-0">
                <span className="text-sm text-foreground">{r.service}</span>
                <span className="text-sm font-semibold text-primary">{r.rate}</span>
              </div>
            ))}
          </div>

          {/* Personal Growth Rates */}
          <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-2">Personal Growth Model Rates</h2>
          <p className="text-primary font-semibold text-sm mb-4">Private Pay Only</p>
          <div className="bg-muted rounded-lg p-6 mb-8">
            {d.personalGrowthRates.map((r) => (
              <div key={r.service} className="flex justify-between py-2 border-b border-border last:border-0">
                <span className="text-sm text-foreground">{r.service}</span>
                <span className="text-sm font-semibold text-primary">{r.rate}</span>
              </div>
            ))}
          </div>

          {/* Group Rates */}
          <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-4">Group Classes and Workshops</h2>
          <div className="bg-muted rounded-lg p-6 mb-8">
            {d.groupRates.map((r) => (
              <div key={r.service} className="flex justify-between py-2 border-b border-border last:border-0">
                <span className="text-sm text-foreground">{r.service}</span>
                <span className="text-sm font-semibold text-primary">{r.rate}</span>
              </div>
            ))}
          </div>

          {/* Sliding Scale */}
          <h3 className="font-heading font-bold text-foreground mb-2">Sliding Scale (Uninsured Only)</h3>
          <p className="text-muted-foreground text-sm mb-2">{d.slidingScale.intro}</p>
          <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 mb-12">
            {d.slidingScale.rates.map((r) => <li key={r}>{r}</li>)}
          </ul>

          {/* Insurance */}
          <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-4">Insurance</h2>
          <p className="text-muted-foreground mb-4">{d.insuranceInfo}</p>
          <p className="text-muted-foreground mb-6">{d.insuranceAssessment}</p>

          <h3 className="font-heading font-bold text-foreground mb-3">Services Generally Covered by Insurance</h3>
          <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 mb-8">
            {d.coveredServices.map((s) => <li key={s}>{s}</li>)}
          </ul>

          {/* Self Pay */}
          <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-4">Self Pay</h2>
          <p className="text-muted-foreground mb-2">{d.selfPay.intro}</p>
          <p className="text-muted-foreground mb-4">{d.selfPay.benefits}</p>
          <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 mb-8">
            {d.selfPay.appropriateFor.map((s) => <li key={s}>{s}</li>)}
          </ul>

          {/* In-Network */}
          <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-4">Oregon, in-network</h2>
          <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 mb-8">
            {d.oregonInNetwork.map((s) => <li key={s}>{s}</li>)}
          </ul>

          <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-4">California, in-network</h2>
          <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 mb-8">
            {d.californiaInNetwork.map((s) => <li key={s}>{s}</li>)}
          </ul>

          {/* Out of Network */}
          <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-4">Out-of-Network (Oregon & California)</h2>
          <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 mb-8">
            {d.outOfNetwork.map((s) => <li key={s}>{s}</li>)}
          </ul>

          {/* Cancellation */}
          <h3 className="font-heading font-bold text-foreground mb-2">Cancellation Policy</h3>
          <p className="text-muted-foreground text-sm mb-8">{d.cancellationPolicy}</p>

          {/* Billing Documents */}
          <h3 className="font-heading font-bold text-foreground mb-4">Billing Policies</h3>
          <div className="flex flex-col sm:flex-row gap-3">
            {d.billingDocuments.map((doc) => (
              <a
                key={doc.label}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors text-sm text-center"
              >
                {doc.label}
              </a>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Insurances;


export const metadata = {
  title: "Insurance and Payments | Guillaume Counseling",
  description: "Learn about insurance plans accepted and payment options at Guillaume Counseling.",
};
