"use client";

import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="bg-cover bg-center h-[calc(100vh)] relative overflow-hidden">
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
        className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full text-center relative z-10 space-y-4"
      >
        <span className="text-primary text-xl font-bold">Tattoo Studio</span>
        <h2 className="text-7xl font-bold">DESIGNER STUDIO TATTOO</h2>
        <p className="max-w-screen-lg text-lg mb-6">Trust our experts for your next tattoo. With years of experience and a passion for detail, we’re here to bring your vision to life with precision and professionalism. Experience the difference of well-crafted art.</p>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 1 }}
        >
          <p className="text-neutral-light relative animate-pulse">Explore</p>
        </motion.div>
      </motion.div>
    </section>
  )
}
