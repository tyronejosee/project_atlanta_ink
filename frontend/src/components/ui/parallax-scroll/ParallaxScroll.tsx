"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ITattoo } from "@/interfaces";

interface Props {
  tattoos: ITattoo[];
}

export const ParallaxScroll = ({ tattoos }: Props) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(tattoos.length / 3);

  const firstPart = tattoos.slice(0, third);
  const secondPart = tattoos.slice(third, 2 * third);
  const thirdPart = tattoos.slice(2 * third);

  return (
    <div className="h-[40rem] items-start overflow-y-auto w-full" ref={gridRef}>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-4"
        ref={gridRef}
      >
        <div className="grid gap-4">
          {firstPart.map((firstPart, idx) => (
            <motion.div
              key={"grid-1" + idx}
              style={{ y: translateFirst }}
              className="group overflow-hidden rounded-xl"
            >
              <Image
                src={firstPart.image}
                className="h-80 w-full object-cover object-left-top gap-10 !m-0 !p-0 transform transition-transform duration-300 group-hover:scale-110 grayscale group-hover:grayscale-0"
                height="400"
                width="400"
                alt={`${firstPart.name} by ${firstPart.artist}`}
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-4">
          {secondPart.map((secondPart, idx) => (
            <motion.div
              key={"grid-2" + idx}
              style={{ y: translateSecond }}
              className="group overflow-hidden rounded-xl"
            >
              <Image
                src={secondPart.image}
                className="h-80 w-full object-cover object-left-top gap-10 !m-0 !p-0 transform transition-transform duration-300 group-hover:scale-110 grayscale group-hover:grayscale-0"
                height="400"
                width="400"
                alt={`${secondPart.name} by ${secondPart.artist}`}
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-4">
          {thirdPart.map((thirdPart, idx) => (
            <motion.div
              key={"grid-3" + idx}
              style={{ y: translateThird }}
              className="group overflow-hidden rounded-xl"
            >
              <Image
                src={thirdPart.image}
                className="h-80 w-full object-cover object-left-top gap-10 !m-0 !p-0 transform transition-transform duration-300 group-hover:scale-110 grayscale group-hover:grayscale-0"
                height="400"
                width="400"
                alt={`${thirdPart.name} by ${thirdPart.artist}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
