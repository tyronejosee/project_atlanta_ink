"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import { useAnimateOnView } from "@/hooks";
import { IPrice } from "@/interfaces";
import { HeaderSection } from "@/components";

interface Props {
  prices: IPrice[];
}

export const PriceSection = ({ prices }: Props) => {
  const { ref, controls, itemVariants } = useAnimateOnView(0.1, false);

  return (
    <section className="py-16 bg-primary">
      <div className="max-w-screen-xl mx-auto text-center">
        <HeaderSection
          title="Our Pricing"
          subtitle="Check out our price list for tattoo services and consultations."
        />
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 xl:px-0"
          ref={ref}
        >
          {prices.map((price, idx) => {
            return (
              <motion.article
                key={price.id}
                variants={itemVariants}
                initial="hidden"
                animate={controls}
                transition={{
                  duration: 0.3,
                  delay: idx * 0.1,
                  ease: "easeOut",
                }}
                className="p-6 shadow-md bg-neutral-darkgrey hover:bg-neutral-dark rounded-xl"
              >
                <h3 className="text-xl font-bold mb-2">{price.name}</h3>
                <p className="text-4xl font-bold text-primary">
                  {price.price_range}
                </p>
                <p className="text-neutral-gray mt-2">{price.description}</p>
              </motion.article>
            );
          })}
        </div>
        <div className="mx-auto mt-4">
          <Button
            as={Link}
            href="/prices"
            className="bg-neutral-darkgrey text-neutral-light font-medium rounded-xl"
          >
            See more
          </Button>
        </div>
      </div>
    </section>
  );
};
