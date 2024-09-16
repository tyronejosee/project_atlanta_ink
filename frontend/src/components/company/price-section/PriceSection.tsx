import Link from "next/link";
import { Button } from "@nextui-org/react";
import { HeaderSection } from "@/components";

export const PriceSection = () => {
  return (
    <section id="pricing" className="py-16 bg-primary">
      <div className="max-w-screen-xl mx-auto text-center">
        <HeaderSection title="Prices" />
        {/* ! TODO: Add negative prop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 xl:px-0">
          <article className="p-6 shadow-md bg-neutral-darkgrey rounded-xl">
            <h3 className="text-xl font-bold mb-2">Small Tattoo</h3>
            <p className="text-4xl font-bold text-primary">$50</p>
            <p className="text-neutral-gray mt-2">Tattoos up to 5cm.</p>
          </article>
          <article className="p-6 shadow-md bg-neutral-darkgrey rounded-xl">
            <h3 className="text-xl font-bold mb-2">Small Tattoo</h3>
            <p className="text-4xl font-bold text-primary">$50</p>
            <p className="text-neutral-gray mt-2">Tattoos up to 5cm.</p>
          </article>
          <article className="p-6 shadow-md bg-neutral-darkgrey rounded-xl">
            <h3 className="text-xl font-bold mb-2">Small Tattoo</h3>
            <p className="text-4xl font-bold text-primary">$50</p>
            <p className="text-neutral-gray mt-2">Tattoos up to 5cm.</p>
          </article>
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
  )
}
