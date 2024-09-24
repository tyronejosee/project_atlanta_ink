"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Chip } from "@nextui-org/react";
import { ITattoo } from "@/interfaces";

interface Props {
  tattoos: ITattoo[];
}

export const ArtistGallery = ({ tattoos }: Props) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const itemVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <section className="grid grid-cols-2 lg:grid-cols-3 gap-4" ref={ref}>
      {tattoos.map((tattoo, index) => (
        <motion.figure
          key={tattoo.id}
          className="relative border border-neutral-darkgrey rounded-xl overflow-hidden group"
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          transition={{
            duration: 0.3,
            delay: index * 0.1,
            ease: "easeOut",
          }}
        >
          <Image
            src={tattoo.image}
            alt={tattoo.name}
            width={400}
            height={400}
            className="z-10 transform transition-transform duration-300 group-hover:scale-110 grayscale group-hover:grayscale-0"
          />
          <Chip
            variant="flat"
            size="sm"
            className="invisible group-hover:visible transition-all duration-100 text-xs rounded-sm absolute z-30 bottom-2 left-2 shadow-xl"
          >
            {tattoo.name}
          </Chip>
        </motion.figure>
      ))}
    </section>
  );
};
