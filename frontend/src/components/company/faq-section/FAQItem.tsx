"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";
import { CircleHelp, ChevronLeft } from "lucide-react";
import { IFaq } from "@/interfaces";

interface Props {
  faq: IFaq;
}

export const FAQItem = ({ faq }: Props) => {
  return (
    <Accordion variant="splitted" className="group">
      <AccordionItem
        key={faq.id}
        aria-label={faq.question}
        title={faq.question}
        HeadingComponent="h3"
        startContent={<CircleHelp className="stroke-primary" />}
        indicator={({ isOpen }) =>
          isOpen ? (
            <ChevronLeft className="stroke-primary" />
          ) : (
            <ChevronLeft className="group-hover:stroke-primary" />
          )
        }
        className="bg-neutral-darkgrey shadow-none"
      >
        <p className="text-sm text-neutral-gray">{faq.answer}</p>
      </AccordionItem>
    </Accordion>
  );
};
