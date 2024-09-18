"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function NotFoundPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 py-16 space-y-8">
      <motion.header
        className="flex flex-col justify-center items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <h1 className="text-7xl font-bold text-primary mb-4">404</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </motion.header>
      <motion.div
        className="text-sm text-neutral-gray text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <p>You will be redirected to the homepage shortly.</p>
        <p>If you need assistance, please contact support.</p>
      </motion.div>
    </section>
  );
}
