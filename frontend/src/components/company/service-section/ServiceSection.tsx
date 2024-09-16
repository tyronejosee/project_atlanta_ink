"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { DEFAULT_IMAGE } from "@/config/constants";
import { IService } from "@/interfaces";
import { HeaderSection } from "@/components";

interface Props {
  services: IService[];
}

export const ServiceSection = ({ services }: Props) => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16">
      <div className="max-w-screen-xl mx-auto text-center">
        <HeaderSection title="Services" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 xl:px-0">
          {services.map((service) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });
            return (
              <motion.div
                key={service.id}
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
                transition={{ duration: 0.5 }}
              >
                <article className="relative h-64 p-4 space-y-2 flex flex-col justify-center items-center overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-primary"></div>
                  <div className="absolute inset-0 bg-neutral-dark">
                    <Image
                      src={service.image || DEFAULT_IMAGE}
                      alt={service.name}
                      fill
                      style={{ objectFit: "cover" }}
                      className="z-10 opacity-25"
                    />
                  </div>
                  <div className="relative z-20 p-4 space-y-2 text-center">
                    <h4 className="text-xl font-bold text-primary">{service.name}</h4>
                    <p className="text-neutral-lightgray">{service.description}</p>
                  </div>
                </article>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
