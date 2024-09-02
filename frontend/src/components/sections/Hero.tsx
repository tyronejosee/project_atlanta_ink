"use client";

import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="bg-cover bg-center h-[calc(100vh-64px)] relative overflow-hidden">
      <video
        className="absolute inset-0 object-cover"
        src="/hero.mp4"
        autoPlay
        muted
        loop
      ></video>
      <div className="absolute inset-0 bg-neutral-950 opacity-50"></div>
      <div className="container mx-auto flex flex-col items-center justify-center h-full text-center text-white relative z-10">
        <h2 className="text-7xl font-bold mb-4">DESIGNER STUDIO TATTOO</h2>
        <p className="max-w-screen-lg text-lg mb-6">Quisque posuere tellus purus, sed faucibus lectus consectetur blandit. Sed nec egestas orci, eget pulvinar lectus. Maecenas tempus, metus sit amet porttitor aliquet, sapien odio gravida lorem.</p>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 1 }}
        >
          <Button className="bg-purple-600 text-white py-2 px-4 hover:bg-purple-700">Explore Tattoos</Button>
        </motion.div>
      </div>
    </section>
  )
}
