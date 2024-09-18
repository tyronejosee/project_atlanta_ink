import { PriceItem } from "@/components";

export const PriceList = () => {
  return (
    <section className="mt-20 pt-4 pb-12 bg-neutral-dark">
      <div className="max-w-screen-lg mx-auto text-center">
        <header className="space-y-4 mb-6">
          <h2 className="text-6xl font-bold">Price List</h2>
        </header>
        <article className="grid grid-cols-2 gap-4">
          <ul className="grid grid-col-1 divide-y-4 divide-dashed divide-neutral-darkgrey">
            <PriceItem name="Small Tattoo" price={40} />
            <PriceItem name="Small Tattoo" price={40} />
            <PriceItem name="Small Tattoo" price={40} />
            <PriceItem name="Small Tattoo" price={40} />
            <PriceItem name="Small Tattoo" price={40} />
            <PriceItem name="Small Tattoo" price={40} />
          </ul>
          <ul className="grid grid-col-1 divide-y-4 divide-dashed divide-neutral-darkgrey">
            <PriceItem name="Small Tattoo" price={40} />
            <PriceItem name="Small Tattoo" price={40} />
            <PriceItem name="Small Tattoo" price={40} />
            <PriceItem name="Small Tattoo" price={40} />
            <PriceItem name="Small Tattoo" price={40} />
            <PriceItem name="Small Tattoo" price={40} />
          </ul>
        </article>
      </div>
    </section>
  );
};
