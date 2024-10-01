"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useAnimateOnView } from "@/hooks";
import { ITattoo } from "@/interfaces";
import { Chip } from "@nextui-org/react";

interface Props {
  tattoos: ITattoo[];
  className?: string;
}

export const TattooList = ({ tattoos, className }: Props) => {
  const { ref, controls, itemVariants } = useAnimateOnView(0.1, false);

  return (
    <section
      className={`${className}
        grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`}
      ref={ref}
    >
      {tattoos.map((tattoo, idx) => (
        <motion.div
          key={tattoo.id}
          className="relative border border-neutral-800 rounded-xl overflow-hidden group"
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          transition={{
            duration: 0.3,
            delay: idx * 0.1,
            ease: "easeOut",
          }}
        >
          <figure className="relative w-full h-0 pb-[100%]">
            <Image
              src={tattoo.image}
              alt={tattoo.name}
              fill
              className="z-10 transform transition-transform duration-300 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />
          </figure>
          <Chip
            variant="flat"
            size="sm"
            className="invisible group-hover:visible transition-all duration-100 text-xs rounded-sm absolute z-30 bottom-2 left-2 shadow-xl"
          >
            {tattoo.name}
          </Chip>
        </motion.div>
      ))}
    </section>
  );
};
