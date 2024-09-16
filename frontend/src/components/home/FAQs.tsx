"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CircleHelp } from "lucide-react";
import { IFaq } from "@/types/global";

interface Props {
  faqs: IFaq[]
}

export const FAQs = ({ faqs }: Props) => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16">
      <div className="max-w-screen-xl mx-auto text-center">
        <header className="space-y-4 mb-8">
          <span className="text-xl font-bold text-primary">Lorem ipsum dolor sit</span>
          <h2 className="text-6xl font-bold">Frequently Asked Questions</h2>
        </header>
        <div className="grid grid-cols-2 gap-4">
          {faqs.map((faq, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });

            return (
              <motion.div
                key={faq.id}
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <article className="relative bg-neutral-darkgrey p-6 flex flex-col items-center justify-center overflow-hidden rounded-xl">
                  <h4 className="font-bold text-primary">{faq.question}</h4>
                  <p className="text-neutral-gray">{faq.answer}</p>
                  <CircleHelp className="rotate-12 size-14 opacity-10 absolute -top-2 -right-2" />
                </article>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
