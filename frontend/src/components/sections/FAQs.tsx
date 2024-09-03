"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const FAQs = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const faqItems = [
    {
      question: "How do I care for my tattoo after getting it?",
      answer: "We provide detailed instructions and recommended products for aftercare.",
    },
    {
      question: "Is it normal for my tattoo to scab?",
      answer: "Yes, it is a natural part of the healing process. Do not pick at the scabs.",
    },
    {
      question: "Can I exercise after getting a tattoo?",
      answer: "It's best to avoid intense exercise that causes heavy sweating for a few days.",
    },
    {
      question: "Can I exercise after getting a tattoo?",
      answer: "It's best to avoid intense exercise that causes heavy sweating for a few days.",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-screen-xl mx-auto text-center">
        <header className="space-y-4 mb-8">
          <span className="text-xl font-bold text-primary">Lorem ipsum dolor sit</span>
          <h2 className="text-6xl font-bold">Frequently Asked Questions</h2>
        </header>
        <div className="grid grid-cols-2 gap-4">
          {faqItems.map((faq, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });

            return (
              <motion.div
                key={index}
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <article className="bg-neutral-darkgrey p-6">
                  <h4 className="font-bold text-primary">{faq.question}</h4>
                  <p className="text-neutral-gray">{faq.answer}</p>
                </article>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
