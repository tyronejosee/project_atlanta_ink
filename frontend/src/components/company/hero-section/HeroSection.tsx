"use client";

import { motion } from "framer-motion";
import { Logo } from "@/components";
import { COMPANY_NAME, COMPANY_DESCRIPTION } from "@/config/constants";

export const HeroSection = () => {
  return (
    <section className="bg-cover bg-center h-screen relative overflow-hidden">
      <video
        className="absolute inset-0 object-cover h-full w-full"
        src="/hero.mp4"
        autoPlay
        muted
        loop
      ></video>
      <div className="absolute inset-0 bg-neutral-dark opacity-50"></div>
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="max-w-screen-xl mx-auto px-4 md:px-0 flex flex-col items-center justify-center h-full text-center relative z-10 space-y-4"
      >
        <span className="text-md md:text-xl text-primary font-bold">
          Tattoo Studio
        </span>
        <h2 className="text-5xl md:text-7xl font-bold">
          {COMPANY_NAME.toUpperCase()}
        </h2>
        <p className="text-md md:text-lg max-w-screen-lg mb-6">
          {COMPANY_DESCRIPTION}
        </p>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 1 }}
        ></motion.div>
      </motion.div>
      <span className="absolute bottom-20 md:bottom-10 left-1/2 transform -translate-x-1/2 text-neutral-light animate-pulse">
        Explore
      </span>
      <div className="hidden md:block absolute bottom-20 left-20">
        <Logo />
      </div>
    </section>
  );
};
