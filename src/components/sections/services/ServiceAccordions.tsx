"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Matches your dynamic data structure exactly
export interface FAQ {
  title: string;
  definition?: string;
  fullText: string;
}

type AnimationPhase = "idle" | "exiting" | "entering";

export const ServiceAccordions = ({ faqs }: { faqs: FAQ[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<AnimationPhase>("idle");

  // Fallback to prevent crashes if data hasn't loaded yet
  if (!faqs || faqs.length === 0) return null;

  // Function to handle the slide cross-fade animation sequence
  const changeSlide = (newIndex: number) => {
    if (phase !== "idle" || newIndex === currentIndex) return;
    
    setPhase("exiting");
    
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setPhase("entering");
      
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setPhase("idle");
        });
      });
    }, 400); 
  };

  const next = () => changeSlide((currentIndex + 1) % faqs.length);
  const prev = () => changeSlide((currentIndex - 1 + faqs.length) % faqs.length);

  const faq = faqs[currentIndex];

  // Helper to dynamically format titles into questions if they aren't already
  const formatAsQuestion = (title: string) => {
    if (title.trim().endsWith("?")) return title;
    return `What is ${title}?`;
  };

  // Animation Classes
  const questionAnim = 
    phase === "exiting" ? "opacity-0 -translate-x-8 -translate-y-4 blur-sm transition-all duration-400 ease-in" :
    phase === "entering" ? "opacity-0 translate-x-8 translate-y-4 transition-none" :
    "opacity-100 translate-x-0 translate-y-0 blur-0 transition-all duration-500 ease-out";

  const answerAnim = 
    phase === "exiting" ? "opacity-0 -translate-x-12 -translate-y-6 blur-md transition-all duration-400 ease-in delay-75" :
    phase === "entering" ? "opacity-0 translate-x-12 translate-y-6 transition-none" :
    "opacity-100 translate-x-0 translate-y-0 blur-0 transition-all duration-500 ease-out delay-100";

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[#FAFAFC] min-h-[650px] flex items-center">
      
      {/* ── CSS Animations for Aurora Background & Custom Scrollbar ── */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 12s infinite alternate cubic-bezier(0.4, 0, 0.2, 1); }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        /* Premium Custom Scrollbar for Text Content */
        .premium-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .premium-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .premium-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 10px;
        }
        .premium-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}} />

      {/* ── Animated Aurora Background ── */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden flex justify-center items-center opacity-60">
        <div className="absolute top-10 left-10 w-[450px] h-[450px] bg-[#17609f]/15 rounded-full mix-blend-multiply filter blur-[100px] animate-blob" />
        <div className="absolute top-0 right-10 w-[400px] h-[400px] bg-[#d8008a]/10 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-40 w-[550px] h-[550px] bg-[#17609f]/10 rounded-full mix-blend-multiply filter blur-[120px] animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* ════ LEFT PANEL: Title & Controls ════ */}
          <div className="lg:col-span-4 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-marcellus text-[#17609f] mb-10 tracking-tight leading-[1.1]">
              Guillaume <br />
              <span className="text-gray-900">Frequently Asked <br /> Questions</span>
            </h2>
            
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <button 
                onClick={prev}
                className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center bg-white shadow-sm hover:border-[#17609f] hover:text-[#17609f] transition-all active:scale-90"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Unique Pagination Dots */}
              <div className="flex gap-3 mx-2">
                {faqs.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => changeSlide(i)}
                    className={`w-3 h-3 rounded-full border border-[#d8008a] transition-all duration-300 ${
                      currentIndex === i ? "bg-[#d8008a]" : "bg-transparent"
                    }`}
                  />
                ))}
              </div>

              <button 
                onClick={next}
                className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center bg-white shadow-sm hover:border-[#17609f] hover:text-[#17609f] transition-all active:scale-90"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* ════ RIGHT PANEL: Animated Glassmorphic Chat Bubbles ════ */}
          <div className="lg:col-span-8 flex flex-col justify-center relative min-h-[450px]">
            
            {/* ── Question Bubble (White Glass) ── */}
            <div className={`w-full max-w-[480px] mb-6 ${questionAnim}`}>
              <div className="relative">
                <div className="bg-white/80 backdrop-blur-md border border-white/60 rounded-[2rem] p-6 md:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.06)] relative z-10">
                  <h3 className="text-lg md:text-[20px] font-marcellus font-bold text-[#17609f] leading-snug">
                    {formatAsQuestion(faq.title)}
                  </h3>
                </div>
                {/* Specific Chat Tail */}
                <div className="absolute bottom-0 -left-3 w-6 h-6 bg-white transform -skew-x-12" style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }} />
              </div>
            </div>

            {/* ── Answer Bubble (Deep Translucent Gradient) ── */}
            <div className={`w-full max-w-[580px] ml-auto ${answerAnim}`}>
              <div className="relative">
                <div className="bg-gradient-to-br from-[#7932e6]/90 to-[#5d26b0]/90 backdrop-blur-xl rounded-[2.5rem] p-4 md:p-8 shadow-[0_20px_60px_rgba(121,50,230,0.3)] relative z-10 overflow-hidden">
                  
                  {/* Subtle background pattern inside answer bubble */}
                  <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                  {/* Scrollable Text Container */}
                  <div className="relative z-10 overflow-y-auto max-h-[200px] premium-scrollbar pr-4">
                    
                    {/* Render Definition if it exists in data */}
                    {faq.definition && (
                      <div className="mb-4 pb-4 border-b border-white/20">
                        <p className="text-white/90 italic text-[13px] leading-relaxed">
                          {faq.definition}
                        </p>
                      </div>
                    )}

                    {/* Render Full Text */}
                    <div 
                      className="text-white text-[14px] md:text-[14px] leading-relaxed font-medium space-y-3 prose-p:last:mb-0"
                      dangerouslySetInnerHTML={{ __html: faq.fullText }}
                    />
                  </div>
                  
                  {/* Branding Footer with Official Logo */}
                  <div className="mt-6 pt-5 border-t border-white/20 flex items-center justify-end gap-3 relative z-10">
                    <div className="flex items-center gap-3 opacity-95">
                      <img 
                        src="/Gillaume-Counseling-Footer-Logo-1024x707.webp" 
                        alt="Guillaume Counseling" 
                        className="h-10 w-auto object-contain drop-shadow-md"
                      />
                      <span className="text-[11px] font-bold uppercase tracking-[2px] text-white">
                        Guillaume Counseling
                      </span>
                    </div>
                  </div>

                </div>
                {/* Specific Chat Tail */}
                <div className="absolute bottom-0 -right-3 w-6 h-6 bg-[#5d26b0] transform skew-x-12" style={{ clipPath: 'polygon(0 0, 0% 100%, 100% 100%)' }} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};