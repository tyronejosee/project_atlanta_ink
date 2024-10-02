"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function ThankYouPage() {
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
          Booking Confirmation
        </h1>
        <p>Your booking at Atlanta Ink Studio has been confirmed.</p>
        <p>
          Thank you for choosing us! If you have any questions, feel free to
          reach out.
        </p>
        <p>Looking forward to seeing you.</p>
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
