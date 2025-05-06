"use client";

import type { TattooResponse } from "@/types";

import { useState } from "react";
import { Chip, Button, Image } from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import { Asterisk } from "lucide-react";
import { useAnimateOnView } from "@/hooks";

type Props = {
  tattoos: TattooResponse[];
  className?: string;
};

export const TattooList = ({ tattoos, className }: Props) => {
  const { ref, controls, itemVariants } = useAnimateOnView(0.1, false);
  const [selectedTattoo, setSelectedTattoo] = useState<TattooResponse | null>(
    null,
  );

  const openModal = (tattoo: TattooResponse) => {
    setSelectedTattoo(tattoo);
  };

  const closeModal = () => {
    setSelectedTattoo(null);
  };

  const modalVariants = {
    hidden: { scale: 0.5, opacity: 0, y: 200 },
    visible: { scale: 1, opacity: 1, y: 0 },
    exit: { scale: 0.5, opacity: 0, y: 200 },
  };

  return (
    <>
      <div
        className={`${className}
        grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`}
        ref={ref}
      >
        {tattoos.map((tattoo, idx) => (
          <motion.article
            key={tattoo.id}
            variants={itemVariants}
            initial="hidden"
            animate={controls}
            transition={{
              duration: 0.3,
              delay: idx * 0.1,
              ease: "easeOut",
            }}
            className="relative border border-neutral-800 rounded-none overflow-hidden group cursor-pointer"
            onClick={() => openModal(tattoo)}
          >
            <figure className="relative w-full h-0 pb-[100%]">
              <Image
                isBlurred
                radius="none"
                alt={tattoo.name}
                src={tattoo.image}
                className="z-10 transform transition-transform duration-300 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
            </figure>
            <Chip
              variant="flat"
              size="sm"
              startContent={<Asterisk size={16} />}
              className="invisible group-hover:visible transition-all duration-100 text-xs rounded-none absolute z-30 bottom-2 left-2 shadow-xl"
            >
              {tattoo.name} by {tattoo.artist}
            </Chip>
          </motion.article>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedTattoo && (
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm px-6 bg-neutral-darkgrey/80 text-white"
            onClick={closeModal}
          >
            <motion.figure
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="group rounded-none size-[400px] sm:size-[450px] md:size-[500px] lg:size-[550px] xl:size-[600px] relative border border-neutral-800 overflow-hidden"
            >
              <Image
                radius="none"
                alt={selectedTattoo.name}
                src={selectedTattoo.image}
                className="object-cover"
              />
              <Chip
                size="lg"
                radius="none"
                variant="flat"
                startContent={<Asterisk size={16} />}
                className="bottom-4 left-4 text-xs absolute z-30 shadow-xl"
              >
                {selectedTattoo.name} by {selectedTattoo.artist}
              </Chip>
              <Button
                isIconOnly
                size="sm"
                radius="none"
                className="absolute top-2 right-2 invisible group-hover:visible transition-all duration-100"
                onPress={closeModal}
              >
                x
              </Button>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
