import { IFaq } from "@/interfaces";
import { HeaderSection } from "@/components";
import { FAQList } from "./FAQList";

interface Props {
  faqs: IFaq[];
}

export const FAQSection = ({ faqs }: Props) => {
  return (
    <section className="py-16">
      <div className="max-w-screen-xl mx-auto">
        <HeaderSection
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about tattoos and our studio."
        />
        <FAQList faqs={faqs} />
      </div>
    </section>
  );
};
