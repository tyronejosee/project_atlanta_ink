"use client";

import { motion } from "framer-motion";
import { ChevronsDown } from "lucide-react";
import { Logo } from "@/components";
import { COMPANY_NAME, COMPANY_DESCRIPTION } from "@/config/constants";

export const HeroSection = () => {
  return (
    <section className="bg-cover bg-center h-screen relative overflow-hidden">
      <video
        className="absolute inset-0 object-cover h-full w-full opacity-75"
        src="/hero.mp4"
        autoPlay
        muted
        loop
      ></video>
      <motion.header
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          delay: 0.3,
        }}
        className="max-w-screen-xl mx-auto px-4 md:px-0 flex flex-col items-center justify-center h-full text-center relative z-10 space-y-4"
      >
        <span className="text-md md:text-lg font-medium text-neutral-lightgray">
          Tattoo Studio & Piercing
        </span>
        <h2 className="text-5xl md:text-7xl font-bold text-white py-4 px-10 bg-primary rounded-xl">
          {COMPANY_NAME.toUpperCase()}
        </h2>
        <p className="text-md md:text-lg max-w-screen-md text-neutral-lightgray">
          {COMPANY_DESCRIPTION}
        </p>
      </motion.header>
      <div className="absolute bottom-20 md:bottom-10 left-1/2 transform -translate-x-1/2  animate-pulse">
        <div className="flex flex-col justify-center items-center">
          <ChevronsDown />
          <span className="text-neutral-light text-sm">Explore</span>
        </div>
      </div>
      <motion.figure
        initial={{ scale: 0, rotate: -180 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 1,
        }}
        className="hidden md:block absolute bottom-20 left-20"
      >
        <Logo />
      </motion.figure>
    </section>
  );
};
