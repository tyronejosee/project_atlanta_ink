"use client";

import { motion } from "framer-motion";
import { useAnimateOnView } from "@/hooks";
import { IFaq } from "@/interfaces";
import { FAQItem } from "./FAQItem";

interface Props {
  faqs: IFaq[];
}

export const FAQList = ({ faqs }: Props) => {
  const { ref, controls, itemVariants } = useAnimateOnView(0.1, false);

  const middleIndex = Math.ceil(faqs.length / 2);
  const firstColumnFaqs = faqs.slice(0, middleIndex);
  const secondColumnFaqs = faqs.slice(middleIndex);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 xl:px-0">
      <div className="grid grid-col-1 gap-2" ref={ref}>
        {firstColumnFaqs.map((faq, idx) => (
          <motion.div
            key={faq.id}
            variants={itemVariants}
            initial="hidden"
            animate={controls}
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
      <div className="grid grid-col-1 gap-2" ref={ref}>
        {secondColumnFaqs.map((faq, idx) => (
          <motion.div
            key={faq.id}
            variants={itemVariants}
            initial="hidden"
            animate={controls}
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
    </div>
  );
};
