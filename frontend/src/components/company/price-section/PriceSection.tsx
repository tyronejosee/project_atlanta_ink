import Link from "next/link";
import { Button } from "@nextui-org/react";
import { HeaderSection } from "@/components";
import { IPrice } from "@/interfaces";

interface Props {
  prices: IPrice[];
}

export const PriceSection = ({ prices }: Props) => {
  return (
    <section id="pricing" className="py-16 bg-primary">
      <div className="max-w-screen-xl mx-auto text-center">
        <HeaderSection title="Prices" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 xl:px-0">
          {prices.map((price) => (
            <article
              key={price.id}
              className="p-6 shadow-md bg-neutral-darkgrey rounded-xl"
            >
              <h3 className="text-xl font-bold mb-2">{price.name}</h3>
              <p className="text-4xl font-bold text-primary">
                {price.price_range}
              </p>
              <p className="text-neutral-gray mt-2">{price.description}</p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-4">
          <Button
            as={Link}
            href="/prices"
            className="bg-neutral-darkgrey text-neutral-light font-medium rounded-xl"
          >
            See more
          </Button>
        </div>
      </div>
    </section>
  );
};
