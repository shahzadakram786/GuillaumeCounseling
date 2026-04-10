"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";

export interface FAQ {
  title: string;
  definition?: string;
  fullText: string;
}

type AnimationPhase = "idle" | "exiting" | "entering";

export const ServiceAccordions = ({ faqs }: { faqs: FAQ[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<AnimationPhase>("idle");
  const [isExpanded, setIsExpanded] = useState(false);

  if (!faqs || faqs.length === 0) return null;

  const changeSlide = (newIndex: number) => {
    if (phase !== "idle" || newIndex === currentIndex) return;
    
    setPhase("exiting");
    setIsExpanded(false); 
    
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

  const formatAsQuestion = (title: string) => {
    if (title.trim().endsWith("?")) return title;
    return `What is ${title}?`;
  };

  const questionAnim = 
    phase === "exiting" ? "opacity-0 -translate-x-8 -translate-y-4 blur-sm transition-all duration-400 ease-in" :
    phase === "entering" ? "opacity-0 translate-x-8 translate-y-4 transition-none" :
    "opacity-100 translate-x-0 translate-y-0 blur-0 transition-all duration-500 ease-out";

  const answerAnim = 
    phase === "exiting" ? "opacity-0 -translate-x-12 -translate-y-6 blur-md transition-all duration-400 ease-in delay-75" :
    phase === "entering" ? "opacity-0 translate-x-12 translate-y-6 transition-none" :
    "opacity-100 translate-x-0 translate-y-0 blur-0 transition-all duration-500 ease-out delay-100";

  return (
    // Updated: Changed background to include gradient, overflow hidden for blobs
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-[#FAFAFC] via-white to-[#FAFAFC] min-h-[650px] flex items-center">
      
      {/* ── CSS Animations for Background and Accordion ── */}
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
      `}} />

      {/* ── Dynamic Aurora Background Blobs (Premium Look) ── */}
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

          {/* ════ RIGHT PANEL: Glassmorphic Chat Bubbles ════ */}
          <div className="lg:col-span-8 flex flex-col justify-center relative min-h-[480px]">
            
            {/* ── Question Bubble (White Glass Effect) ── */}
            <div className={`w-full max-w-[480px] mb-8 ${questionAnim}`}>
              <div className="relative group">
                {/* Updated: White becomes semi-transparent with blur and a subtle border */}
                <div className="bg-white/80 backdrop-blur-md border border-white/60 rounded-[2rem] p-6 md:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.06)] relative z-10">
                  <h3 className="text-lg md:text-[22px] font-marcellus font-bold text-[#17609f] leading-snug">
                    {formatAsQuestion(faq.title)}
                  </h3>
                </div>
                {/* Custom tail matches the glassmorphism theme */}
                <div className="absolute bottom-0 -left-3 w-6 h-6 bg-white transform -skew-x-12 group-hover:bg-white/90" style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }} />
              </div>
            </div>

            {/* ── Answer Bubble (Deep Translucent Purple) ── */}
            <div className={`w-full max-w-[650px] ml-auto ${answerAnim}`}>
              <div className="relative">
                {/* Updated: p-8 md:p-10 for breathing room, subtle translucency */}
                <div className="bg-[#5d26b0]/95 backdrop-blur-xl rounded-[2.5rem] rounded-br-none p-8 md:p-10 shadow-[0_20px_60px_rgba(121,50,230,0.3)] relative z-20 overflow-hidden transition-all duration-500">
                  
                  <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                  {/* Text Content Container */}
                  <div className="relative z-10">
                    
                    {/* Updated: Definition in accent color, text softened */}
                    {faq.definition && (
                      <div className="mb-6 pb-6 border-b border-white/10">
                        <span className="block text-[10px] font-bold uppercase tracking-[2px] text-[#d8008a] mb-2">Context</span>
                        <p className="text-white/80 italic text-[14px] md:text-[15px] leading-relaxed font-light">
                          "{faq.definition}"
                        </p>
                      </div>
                    )}

                    {/* The Expandable Wrapper */}
                    <div className="relative">
                      <div 
                        className={`text-white text-[15px] md:text-[16px] leading-[1.8] font-medium space-y-4 prose-p:last:mb-0 transition-all duration-700 ease-in-out overflow-hidden ${
                          isExpanded ? "max-h-[800px]" : "max-h-[140px]"
                        }`}
                        dangerouslySetInnerHTML={{ __html: faq.fullText }}
                      />
                      
                      {/* Fading Gradient Overlay (Matches purple background) */}
                      {!isExpanded && (
                        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#5d26b0] to-transparent pointer-events-none" />
                      )}
                    </div>

                    {/* See More / Less Button */}
                    <button 
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="mt-4 flex items-center gap-1.5 text-[12px] font-bold text-[#d8008a] hover:text-white transition-colors uppercase tracking-[1px] relative z-20 group"
                    >
                      {isExpanded ? "See Less" : "See More"}
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                      ) : (
                        <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                      )}
                    </button>

                  </div>
                  
                  {/* Branding Footer */}
                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-end gap-3 relative z-10">
                    <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
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
                <div className="absolute -bottom-2 -right-3 w-8 h-8 bg-[#5d26b0]/95 transform rotate-12 z-10" style={{ clipPath: 'polygon(0 0, 0% 100%, 100% 100%)' }} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};