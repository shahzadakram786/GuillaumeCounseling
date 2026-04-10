'use client'

import React from 'react'
import { motion } from 'framer-motion'
// Assuming this path is correct for your project
import { insuranceProvidersImages } from '@/lib/data/services'
import { ParticleBackground } from "@/components/ui/particle-background"; 


export default function InsuranceMarquee() {
  // Tripling the array ensures a perfectly smooth infinite loop
  const duplicatedProviders = [...insuranceProvidersImages, ...insuranceProvidersImages, ...insuranceProvidersImages]

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[#FAFAFC] flex items-center">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
              <ParticleBackground />
            </div>

      {/* ── CSS Animations for the Aurora Background ── */}
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

      {/* ── Animated Aurora Background (Matching the FAQ section) ── */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden flex justify-center items-center opacity-40">
        <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-[#17609f]/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob" />
        <div className="absolute top-0 right-10 w-[350px] h-[350px] bg-[#d8008a]/15 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-40 w-[450px] h-[450px] bg-[#17609f]/15 rounded-full mix-blend-multiply filter blur-[120px] animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* ── Glassmorphic Container ── */}
        <div className="relative bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] rounded-[2.5rem] overflow-hidden py-12 md:py-16">
          
          {/* Subtle grid pattern inside the glass card */}
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#17609f_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

          {/* Section Header */}
          <div className="px-6 md:px-12 mb-10 text-center relative z-10">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 mb-5 rounded-full bg-[#d8008a]/10 text-[#d8008a] font-bold tracking-[0.2em] uppercase text-[10px]"
            >
              Coverage Simplified
            </motion.span>
            
            <h3 className="font-marcellus font-bold text-[#17609f] text-3xl md:text-4xl lg:text-5xl tracking-tight">
              We Accept Most Major <span className="text-[#d8008a] italic font-serif">Insurance Plans</span>
            </h3>
          </div>

          {/* The Marquee Track */}
          <div className="relative flex overflow-hidden py-6">
            <motion.div
              className="flex items-center gap-16 md:gap-24 pr-16 md:pr-24"
              animate={{
                x: ['0%', '-33.33%'],
              }}
              transition={{
                duration: 40,
                ease: 'linear',
                repeat: Infinity,
              }}
            >
              {duplicatedProviders.map((provider, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 flex items-center justify-center group/logo"
                  style={{ minWidth: '160px' }}
                >
                  {/* Premium Logo Styling: Grayscale to Color on hover */}
                  <img
                    src={provider.logo}
                    alt={`${provider.name} logo`}
                    className="h-14 md:h-18 w-auto object-contain 
                               opacity-60 grayscale filter
                               group-hover/logo:opacity-100 group-hover/logo:grayscale-0
                               transition-all duration-500 ease-in-out
                               hover:scale-105 transform cursor-pointer z-10" 
                  />
                  
                  {/* Subtle pink 'Spotlight' effect on hover behind each logo */}
                  <div className="absolute inset-0 bg-[#d8008a]/5 blur-2xl rounded-full scale-0 group-hover/logo:scale-100 transition-transform duration-500" />
                </div>
              ))}
            </motion.div>

            {/* Fades: Matched to the frosted white glass */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-white/90 via-white/50 to-transparent z-20" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-white/90 via-white/50 to-transparent z-20" />
          </div>

          {/* Bottom Hint */}
          <div className="mt-8 px-4 text-center relative z-10">
             <p className="text-gray-500 font-medium text-sm md:text-base">
               Don't see your Insurance provider? <a href="/contact-us" className="text-[#17609f] font-bold underline underline-offset-4 cursor-pointer hover:text-[#d8008a] transition-colors">Contact us</a> to verify.
             </p>
          </div>

        </div>
        
      </div>
      
    </section>
  )
}