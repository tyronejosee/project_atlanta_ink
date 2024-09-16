"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { IArtist } from "@/types/global";
import { DEFAULT_IMAGE } from "@/utils/constants";

interface Props {
  artists: IArtist[];
}

export const Artists = ({ artists }: Props) => {
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
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="artists" className="py-16" ref={ref}>
      <div className="max-w-screen-xl mx-auto text-center">
        <header className="space-y-4 mb-8">
          <span className="text-xl font-bold text-primary">Lorem ipsum dolor sit</span>
          <h2 className="text-6xl font-bold mb-8 text-center">ARTISTS</h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artists, index) => (
            <motion.div
              key={artists.id}
              className="p-6 border shadow-md bg-neutral-800"
              variants={itemVariants}
              initial="hidden"
              animate={controls}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <Image
                src={artists.image || DEFAULT_IMAGE}
                alt={artists.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-bold text-white">{artists.name}</h3>
              <p className="text-gray-400">{artists.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
