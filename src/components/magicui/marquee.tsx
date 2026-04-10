import { Marquee } from "@/components/ui/marquee"; 

// 1. Put your actual image paths here. 
// These should live inside your "public" folder (e.g., public/logos/brand1.png)
const marqueeImages = [
  "/Aetna.svg",
  "/BCBS.svg",
  "/Cigna.svg",
  "/Humana.svg",
  // "/UnitedHealth.svg",
  "/ComPsych.svg",
];

export const ReviewMarquee = () => {
  return (
    <section className="py-12 bg-white overflow-hidden">
      {/* Container for the Marquee */}
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        
        {/* The Marquee Component */}
        <Marquee pauseOnHover className="[--duration:25s]">
          
          {/* Map through the images array */}
          {marqueeImages.map((src, index) => (
            <div key={index} className="mx-8 flex items-center justify-center">
              <img 
                src={src} 
                alt={`Marquee graphic ${index + 1}`} 
                // h-24 controls the height. adjust as needed!
                className="h-28 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100" 
              />
            </div>
          ))}

        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:25s]">
          
  
          {marqueeImages.map((src, index) => (
            <div key={index} className="mx-8 flex items-center justify-center">
              <img 
                src={src} 
                alt={`Marquee graphic ${index + 1}`} 
                className="h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100" 
              />
            </div>
          ))}

        </Marquee>


        {/* Gradient fades to the left and right edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </section>
  );
};