"use client";

import React from "react";
import { motion } from "framer-motion";
import { useAnimateOnView } from "@/hooks";
import { IPrice } from "@/interfaces";
import { PriceItem } from "@/components";

interface Props {
  prices: IPrice[];
}

export const PriceList = ({ prices }: Props) => {
  const firstColumnAnimation = useAnimateOnView(0.1, false);
  const secondColumnAnimation = useAnimateOnView(0.1, false);

  const middleIndex = Math.ceil(prices.length / 2);
  const firstColumnPrices = prices.slice(0, middleIndex);
  const secondColumnPrices = prices.slice(middleIndex);

  return (
    <>
      <section className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ul
          className="grid grid-col-1 divide-y-4 divide-dashed divide-neutral-darkgrey"
          ref={firstColumnAnimation.ref}
        >
          {firstColumnPrices.map((price, idx) => (
            <motion.div
              key={price.id}
              variants={firstColumnAnimation.itemVariants}
              initial="hidden"
              animate={firstColumnAnimation.controls}
              transition={{
                duration: 0.3,
                delay: idx * 0.1,
                ease: "easeOut",
              }}
            >
              <PriceItem key={price.id} price={price} />
            </motion.div>
          ))}
        </ul>
        <ul
          className="hidden lg:grid grid-col-1 divide-y-4 divide-dashed divide-neutral-darkgrey"
          ref={firstColumnAnimation.ref}
        >
          {secondColumnPrices.map((price, idx) => (
            <motion.div
              key={price.id}
              variants={firstColumnAnimation.itemVariants}
              initial="hidden"
              animate={firstColumnAnimation.controls}
              transition={{
                duration: 0.3,
                delay: idx * 0.1,
                ease: "easeOut",
              }}
            >
              <PriceItem key={price.id} price={price} />
            </motion.div>
          ))}
        </ul>
      </section>
      <section className="lg:hidden">
        <ul
          className="grid grid-col-1 divide-y-4 divide-dashed divide-neutral-darkgrey"
          ref={secondColumnAnimation.ref}
        >
          {prices.map((price, idx) => (
            <motion.div
              key={price.id}
              variants={secondColumnAnimation.itemVariants}
              initial="hidden"
              animate={secondColumnAnimation.controls}
              transition={{
                duration: 0.3,
                delay: idx * 0.1,
                ease: "easeOut",
              }}
            >
              <PriceItem key={price.id} price={price} />
            </motion.div>
          ))}
        </ul>
      </section>
    </>
  );
};
