import { TATTOO_EXAMPLE_OBJ } from "@/config/constants";
import { HeaderSection, ParallaxScrollMain } from "@/components";
import { ITattoo } from "@/interfaces";

interface Props {
  tattoos: ITattoo[];
}

export const TattooSection = ({ tattoos }: Props) => {
  return (
    <section className="py-16">
      <HeaderSection title="Tattoos" />
      <ParallaxScrollMain tattoos={tattoos} />
    </section>
  );
};
