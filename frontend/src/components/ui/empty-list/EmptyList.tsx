"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface Props {
  content: string;
}

export const EmptyList = ({ content = "content" }: Props) => {
  const router = useRouter();

  const goBackToHome = () => {
    router.push("/");
  };

  return (
    <section className="flex flex-col items-center justify-center h-[450px] px-4 py-16 space-y-8">
      <motion.header
        className="flex flex-col justify-center items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <p className="text-7xl font-bold text-primary mb-4">200</p>
        <p>{content} not found.</p>
      </motion.header>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={goBackToHome}
        className="px-4 py-2 bg-primary hover:bg-primary/50 text-neutral-light rounded-xl transition-colors"
      >
        Go back to home
      </motion.button>
    </section>
  );
};
