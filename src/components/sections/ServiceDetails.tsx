"use client";

import { therapyServices } from "@/lib/data/services";
import { motion } from "framer-motion";

export const ServiceDetails = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 space-y-16 md:space-y-24">
        {therapyServices.map((service, index) => {
          const isReversed = index % 2 !== 0;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-12 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 md:h-80 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
