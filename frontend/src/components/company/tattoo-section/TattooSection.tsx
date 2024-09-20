import { TATTOO_EXAMPLE_OBJ } from "@/config/constants";
import { HeaderSection, ParallaxScrollMain } from "@/components";

export const TattooSection = () => {
  return (
    <section className="py-16">
      <HeaderSection title="Tattoos" />
      <ParallaxScrollMain images={TATTOO_EXAMPLE_OBJ} />
    </section>
  );
};
