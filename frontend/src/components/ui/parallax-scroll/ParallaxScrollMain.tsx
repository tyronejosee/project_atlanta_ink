"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export const ParallaxScrollMain = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
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
  const partSize = Math.ceil(images.length / 5);

  const firstPart = images.slice(0, partSize);
  const secondPart = images.slice(partSize, 2 * partSize);
  const thirdPart = images.slice(2 * partSize, 3 * partSize);
  const fourthPart = images.slice(3 * partSize, 4 * partSize);
  const fifthPart = images.slice(4 * partSize);

  return (
    <div
      className={cn(
        "h-[40rem] items-start overflow-y-auto w-full px-4",
        className,
      )}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-start mx-auto gap-4"
        ref={gridRef}
      >
        <div className="grid gap-4">
          {firstPart.map((el, idx) => (
            <motion.div style={{ y: translateFirst }} key={"grid-1" + idx}>
              <Image
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-xl gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-4">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <Image
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-xl gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-4">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <Image
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-xl gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-4">
          {fourthPart.map((el, idx) => (
            <motion.div style={{ y: translateFourth }} key={"grid-4" + idx}>
              <Image
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-xl gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-4">
          {fifthPart.map((el, idx) => (
            <motion.div style={{ y: translateFifth }} key={"grid-5" + idx}>
              <Image
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-xl gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
