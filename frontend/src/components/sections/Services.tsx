"use client";

import Image from 'next/image';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Services = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const serviceItems = [
    {
      id: "85043ae9-44ac-488b-b494-f65b2bfa5a90",
      name: "Tattoo Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nihil inventore dolores possimus non saepe provident.",
      image: "/images/piercing.webp"
    },
    {
      id: "52b6e974-fb5f-4eb5-9140-866a21ff5a11",
      name: "Realistic Tattoo",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nihil inventore dolores possimus non saepe provident.",
      image: "/images/piercing.webp"
    },
    {
      id: "9d8dd3f9-7711-4e62-91fa-2031a3fbc51d",
      name: "Tribal Tattoo",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nihil inventore dolores possimus non saepe provident.",
      image: "/images/piercing.webp"
    },
    {
      id: "888a3ae3-df0a-477d-b930-cb59c4266b9e",
      name: "Handpoke Tattoo",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nihil inventore dolores possimus non saepe provident.",
      image: "/images/piercing.webp"
    },
    {
      id: "75f951cc-9778-4363-b4b9-6071841e63cf",
      name: "Piercing",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nihil inventore dolores possimus non saepe provident.",
      image: "/images/piercing.webp"
    },
    {
      id: "30fcad37-746e-4fba-a04a-b7124cd39322",
      name: "Tattoo Removal",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nihil inventore dolores possimus non saepe provident.",
      image: "/images/piercing.webp"
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-screen-xl mx-auto text-center">
        <header className="space-y-4 mb-8">
          <span className="text-xl font-bold text-primary">Lorem ipsum dolor sit</span>
          <h2 className="text-6xl font-bold text-white">SERVICES</h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {serviceItems.map((service) => {
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
                <article className="relative h-64 p-4 space-y-2 flex flex-col justify-center items-center overflow-hidden">
                  <div className="absolute inset-0 bg-primary"></div>
                  <div className="absolute inset-0 bg-neutral-dark">
                    <Image
                      src={service.image}
                      alt={service.name}
                      layout="fill"
                      objectFit="cover"
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
