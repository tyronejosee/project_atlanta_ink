import { HeaderSection, TattooList } from "@/components";
import { ITattoo } from "@/interfaces";

interface Props {
  tattoos: ITattoo[];
}

export const TattooSection = ({ tattoos }: Props) => {
  return (
    <section className="py-16 px-4">
      <HeaderSection
        title="Our Work"
        subtitle="Browse through our recent work and get inspired for your next tattoo."
      />
      <TattooList tattoos={tattoos} />
    </section>
  );
};
