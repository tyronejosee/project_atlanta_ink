import { HeaderSection, TattooList } from "@/components";
import { ITattoo } from "@/interfaces";

interface Props {
  tattoos: ITattoo[];
}

export const TattooSection = ({ tattoos }: Props) => {
  return (
    <section className="py-16 px-4">
      <HeaderSection title="Tattoos" />
      <TattooList tattoos={tattoos} />
    </section>
  );
};
