"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DEFAULT_IMAGE } from "@/config/constants";
import { IService } from "@/interfaces";
import { HeaderSection } from "@/components";
import { useAnimateOnView } from "@/hooks";

interface Props {
  services: IService[];
}

export const ServiceSection = ({ services }: Props) => {
  const { ref, controls, itemVariants } = useAnimateOnView(0.1, false);

  return (
    <section className="max-w-screen-xl mx-auto text-center py-16">
      <HeaderSection
        title="Our Services"
        subtitle="Explore our diverse range of tattoo styles and customization options."
      />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 xl:px-0"
        ref={ref}
      >
        {services.map((service, idx) => {
          return (
            <motion.article
              key={service.id}
              variants={itemVariants}
              initial="hidden"
              animate={controls}
              transition={{
                duration: 0.3,
                delay: idx * 0.1,
                ease: "easeOut",
              }}
              className="group relative h-64 p-4 space-y-2 flex flex-col justify-center items-center overflow-hidden rounded-xl border border-neutral-800"
            >
              <div className="absolute inset-0 bg-neutral-dark">
                <Image
                  src={service.image || DEFAULT_IMAGE}
                  alt={service.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="z-10 opacity-25 transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="z-20 p-4 space-y-2 text-center">
                <h3 className="text-xl font-bold text-primary">
                  {service.name}
                </h3>
                <p className="text-neutral-lightgray">{service.description}</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};
