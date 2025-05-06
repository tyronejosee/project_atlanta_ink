"use client";

import { motion } from "framer-motion";

const squareVariants = {
  animate: (i: number) => ({
    y: [0, -8, 0],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      delay: i * 0.15,
      ease: "easeInOut",
    },
  }),
};

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-neutral-dark">
      <div className="grid grid-cols-2 gap-4 w-20 h-20">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            custom={i}
            variants={squareVariants}
            animate="animate"
            className="w-6 h-6 rounded-none bg-primary"
          />
        ))}
      </div>
    </div>
  );
}
