"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { ITattoo } from "@/interfaces";

interface Props {
  tattoos: ITattoo[];
}

export const ParallaxScrollMain = ({ tattoos }: Props) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  // Define transformations for each of the five sections
  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateFourth = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateFifth = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Divide images into 5 equal parts
  const partSize = Math.ceil(tattoos.length / 5);

  const firstPart = tattoos.slice(0, partSize);
  const secondPart = tattoos.slice(partSize, 2 * partSize);
  const thirdPart = tattoos.slice(2 * partSize, 3 * partSize);
  const fourthPart = tattoos.slice(3 * partSize, 4 * partSize);
  const fifthPart = tattoos.slice(4 * partSize);

  return (
    <div
      className="h-[40rem] items-start overflow-y-auto w-full px-4"
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-start mx-auto gap-4"
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
        <div className="grid gap-4">
          {fourthPart.map((fourthPart, idx) => (
            <motion.div
              key={"grid-4" + idx}
              style={{ y: translateFourth }}
              className="group overflow-hidden rounded-xl"
            >
              <Image
                src={fourthPart.image}
                className="h-80 w-full object-cover object-left-top gap-10 !m-0 !p-0 transform transition-transform duration-300 group-hover:scale-110 grayscale group-hover:grayscale-0"
                height="400"
                width="400"
                alt={`${fourthPart.name} by ${fourthPart.artist}`}
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-4">
          {fifthPart.map((fifthPart, idx) => (
            <motion.div
              key={"grid-5" + idx}
              style={{ y: translateFifth }}
              className="group overflow-hidden rounded-xl"
            >
              <Image
                src={fifthPart.image}
                className="h-80 w-full object-cover object-left-top gap-10 !m-0 !p-0 transform transition-transform duration-300 group-hover:scale-110 grayscale group-hover:grayscale-0"
                height="400"
                width="400"
                alt={`${fifthPart.name} by ${fifthPart.artist}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
