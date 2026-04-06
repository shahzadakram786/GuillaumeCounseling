"use client";


import { PageHero } from "@/components/layout/PageHero";
import { careerData } from "@/lib/data/pages/career";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Career = () => {
  const d = careerData;

  return (
    <>
      

      <PageHero title={d.title}>
        <p className="text-primary-foreground/90 mt-2 max-w-2xl">{d.subtitle}</p>
        <p className="text-primary-foreground font-semibold mt-2">{d.tagline}</p>
        <a
          href={d.applyEmail}
          className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-background text-foreground rounded-md font-medium hover:bg-background/90 transition-colors"
        >
          Apply Now <ArrowRight className="h-4 w-4" />
        </a>
      </PageHero>

      <main id="main-content" className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Why This Practice */}
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8">Why This Practice</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {d.whyThisPractice.map((item) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-muted rounded-lg p-6">
                <h3 className="font-heading font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Our Approach */}
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">Our Approach</h2>
          <p className="text-muted-foreground font-semibold mb-2">{d.ourApproach.intro}</p>
          <p className="text-muted-foreground mb-4">{d.ourApproach.text}</p>
          <p className="text-muted-foreground mb-4">{d.ourApproach.goal}</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
            {d.ourApproach.list.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p className="text-muted-foreground font-medium mb-8">{d.ourApproach.closing}</p>
          <img src={d.ourApproach.image} alt="Our Approach" className="w-full rounded-lg mb-16" loading="lazy" />

          {/* Position Types */}
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">Position Types & Availability</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-8">
            {d.allRolesInfo.map((info) => <li key={info}>{info}</li>)}
          </ul>

          <div className="space-y-8 mb-16">
            {d.positions.map((pos) => (
              <div key={pos.title} className="bg-muted rounded-lg p-6">
                <h3 className="font-heading font-bold text-foreground text-lg">{pos.title}</h3>
                {pos.subtitle && <p className="text-primary text-sm font-medium mt-1">{pos.subtitle}</p>}
                <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-3">
                  {pos.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
                {pos.caseload && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Caseload: Part-time: {pos.caseload.partTime} | Full-time: {pos.caseload.fullTime}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Who Fit / Not Fit */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-muted rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground mb-3">Who This Is a Good Fit For</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                {d.whoFitFor.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground mb-3">Who This Is NOT a Good Fit For</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                {d.whoNotFitFor.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>

          <p className="text-muted-foreground font-semibold mb-12">Building a caseload takes time — and we support that process intentionally.</p>

          {/* Expectations */}
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8">What You Can Expect</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {d.expectations.map((item) => (
              <div key={item.title} className="bg-muted rounded-lg p-6">
                <h3 className="font-heading font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          <img src={d.benefitsImage} alt="Benefits offered" className="w-full rounded-lg mb-16" loading="lazy" />

          {/* Representation */}
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">A Practice Rooted in Representation</h2>
          <p className="text-muted-foreground mb-4">{d.representation.intro}</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
            {d.representation.values.map((v) => <li key={v}>{v}</li>)}
          </ul>
          <p className="text-muted-foreground font-medium mb-12">{d.representation.closing}</p>

          {/* Apply */}
          <div className="bg-primary/10 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Apply Now</h2>
            <p className="text-muted-foreground mb-4">{d.applyInfo.text}</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-6 inline-block text-left">
              {d.applyInfo.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <div>
              <a
                href={d.applyEmail}
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                Apply Now <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Career;


