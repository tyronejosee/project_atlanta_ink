"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const ProductSection = () => {
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
    <section id="products" className="py-16" ref={ref}>
      <div className="max-w-screen-xl mx-auto">
        <header className="space-y-4 mb-8 text-center">
          <span className="text-xl font-bold text-primary">Lorem ipsum dolor sit</span>
          <h2 className="text-6xl font-bold">Products</h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array(5).fill("").map((_, index) => (
            <motion.div
              key={index}
              className="p-2 border shadow-md bg-neutral-800 rounded-xl"
              variants={itemVariants}
              initial="hidden"
              animate={controls}
              transition={{
                duration: 0.3,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <Image
                src="/example.jpg"
                alt={`Artist ${index + 1}`}
                width={300}
                height={300}
                className="w-full h-48 object-cover mb-4 rounded-xl"
              />
              <h3 className="text-xl font-bold">Artist {index + 1}</h3>
              <p className="text-primary">$5USD</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
