import React from "react";
import { TATTOO_EXAMPLE } from "@/config/constants";
import { HeaderSection, ParallaxScrollMain } from "@/components";

export const TattooSection = () => {
  return (
    <section className="py-16">
      <div className="text-center">
        <HeaderSection title="Tattoos" />
        <div>
          <ParallaxScrollMain images={TATTOO_EXAMPLE} />
        </div>
      </div>
    </section>
  );
};
