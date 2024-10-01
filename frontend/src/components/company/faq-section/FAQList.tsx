"use client";

import React from "react";
import { motion } from "framer-motion";
import { useAnimateOnView } from "@/hooks";
import { IFaq } from "@/interfaces";
import { FAQItem } from "./FAQItem";

interface Props {
  faqs: IFaq[];
}

export const FAQList = ({ faqs }: Props) => {
  const firstColumnAnimation = useAnimateOnView(0.1, false);
  const secondColumnAnimation = useAnimateOnView(0.1, false);

  const middleIndex = Math.ceil(faqs.length / 2);
  const firstColumnFaqs = faqs.slice(0, middleIndex);
  const secondColumnFaqs = faqs.slice(middleIndex);

  return (
    <>
      <section className="hidden lg:grid sm:grid-cols-2">
        <div className="grid grid-col-1 gap-4" ref={firstColumnAnimation.ref}>
          {firstColumnFaqs.map((faq, idx) => (
            <motion.div
              key={faq.id}
              variants={firstColumnAnimation.itemVariants}
              initial="hidden"
              animate={firstColumnAnimation.controls}
              transition={{
                duration: 0.3,
                delay: idx * 0.1,
                ease: "easeOut",
              }}
            >
              <FAQItem faq={faq} />
            </motion.div>
          ))}
        </div>
        <div className="grid grid-col-1 gap-4" ref={firstColumnAnimation.ref}>
          {secondColumnFaqs.map((faq, idx) => (
            <motion.div
              key={faq.id}
              variants={firstColumnAnimation.itemVariants}
              initial="hidden"
              animate={firstColumnAnimation.controls}
              transition={{
                duration: 0.3,
                delay: idx * 0.1,
                ease: "easeOut",
              }}
            >
              <FAQItem faq={faq} />
            </motion.div>
          ))}
        </div>
      </section>
      <section className="lg:hidden px-2 xl:px-0">
        <div className="grid grid-col-1 gap-4" ref={secondColumnAnimation.ref}>
          {faqs.map((faq, idx) => (
            <motion.div
              key={faq.id}
              variants={secondColumnAnimation.itemVariants}
              initial="hidden"
              animate={secondColumnAnimation.controls}
              transition={{
                duration: 0.3,
                delay: idx * 0.1,
                ease: "easeOut",
              }}
            >
              <FAQItem faq={faq} />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};
