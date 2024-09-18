"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { CircleHelp, ChevronLeft } from "lucide-react";
import { IFaq } from "@/interfaces";
import { HeaderSection } from "@/components";

interface Props {
  faqs: IFaq[];
}

export const FAQSection = ({ faqs }: Props) => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16">
      <div className="max-w-screen-xl mx-auto">
        <HeaderSection title="Frequently Asked Questions" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 xl:px-0">
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
                <Accordion variant="splitted">
                  <AccordionItem
                    key={faq.id}
                    aria-label={faq.question}
                    title={faq.question}
                    startContent={<CircleHelp className="stroke-primary" />}
                    indicator={({ isOpen }) =>
                      isOpen ? (
                        <ChevronLeft className="stroke-primary" />
                      ) : (
                        <ChevronLeft />
                      )
                    }
                    className="bg-neutral-darkgrey shadow-none"
                  >
                    <p className="text-sm text-neutral-gray">{faq.answer}</p>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
