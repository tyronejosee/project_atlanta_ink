"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

type Props = {
  error: Error;
  reset: () => void;
};

export default function GlobalError({ error, reset }: Props) {
  useEffect(() => {
    console.error("Error:", error);
  }, [error]);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 py-16 space-y-8">
      <motion.header
        className="flex flex-col justify-center items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <h1 className="text-7xl font-bold text-primary mb-4">500</h1>
        <p>{error.message}</p>
      </motion.header>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={() => reset()}
        className="px-4 py-2 bg-primary hover:bg-primary/50 text-neutral-light rounded-xl transition-colors"
      >
        Retry
      </motion.button>
    </section>
  );
}
