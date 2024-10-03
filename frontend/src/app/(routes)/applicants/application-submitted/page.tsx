"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function ApplicationSubmittedPage() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/");
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 py-16 space-y-8">
      <motion.header
        className="max-w-screen-sm flex flex-col justify-center items-center text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <h1 className="text-7xl font-bold text-primary mb-4">
          Application Received
        </h1>
        <p>
          Thank you for your interest in joining our tattoo team! We will review
          your application and get back to you soon.
        </p>
      </motion.header>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={handleButtonClick}
        className="px-4 py-2 bg-primary hover:bg-primary/50 text-neutral-light rounded-xl transition-colors"
      >
        Back to Home
      </motion.button>
    </section>
  );
}
