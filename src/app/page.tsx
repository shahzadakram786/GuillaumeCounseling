import { Hero } from "@/components/sections/Hero";
import { CulturalServices } from "@/components/sections/CulturalServices";
import { ServiceDetails } from "@/components/sections/ServiceDetails";
import { AboutSection } from "@/components/sections/AboutSection";
import { siteConfig } from "@/lib/data/siteConfig";
import { ServiceAccordions } from "@/components/sections/services/ServiceAccordions";
import { typesOfServiceData } from "@/lib/data/pages/typesOfService";

// 1. Import the custom wrapper you built instead of the raw Marquee
import { ReviewMarquee } from "@/components/magicui/marquee"; // Adjust path if you saved it elsewhere
import InsuranceMarquee from "@/components/magicui/InsuranceMarquee";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: siteConfig.heroImage,
    telephone: ["(503) 922-3360", "(916) 992-2620"],
    email: "info@guillaumecounseling.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "20333 State Hwy 249, Suite 200",
      addressLocality: "Houston",
      addressRegion: "TX",
      postalCode: "77070",
      addressCountry: "US",
    },
  };

  return (
    <>
      <main id="main-content">
        <Hero />
        
        {/* 2. Use your new component here! */}
        <ReviewMarquee />
        {/* <InsuranceMarquee/> */}
        
        <CulturalServices />
        <ServiceDetails />
        <AboutSection />
        
        <ServiceAccordions faqs={typesOfServiceData.detailedServices} />
      </main>
    </>
  );
};

export default Index;

export const metadata = {
  title: "Mental Health and Relationship Counseling | Guillaume Counseling",
};