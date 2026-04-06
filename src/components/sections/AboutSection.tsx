"use client";

import Link from "next/link";
import { aboutSection } from "@/lib/data/services";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row gap-8 md:gap-12 items-center"
        >
          <div className="w-full md:w-2/5">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={aboutSection.image}
                alt="Nahomie Guillaume, Founder"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="w-full md:w-3/5">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              {aboutSection.heading}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {aboutSection.text}
            </p>
            <Link
              href={aboutSection.link}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Read More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
