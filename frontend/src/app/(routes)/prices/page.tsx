import { EmptyList, HeaderPage, PriceItem } from "@/components";
import { getPrices } from "@/lib/api";
import { IPrice } from "@/interfaces";

export default async function PricesPage() {
  const prices = await getPrices();

  const middleIndex = Math.ceil(prices.length / 2);
  const firstColumnPrices = prices.slice(0, middleIndex);
  const secondColumnPrices = prices.slice(middleIndex);

  return (
    <section className="max-w-screen-xl mx-auto mt-16 px-4">
      {prices.length > 0 ? (
        <>
          <HeaderPage title="Our Prices" />
          <article className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <ul className="grid grid-col-1 divide-y-4 divide-dashed divide-neutral-darkgrey">
              {firstColumnPrices.map((price: IPrice) => (
                <PriceItem key={prices.id} price={price} />
              ))}
            </ul>
            <ul className="grid grid-col-1 divide-y-4 divide-dashed divide-neutral-darkgrey">
              {secondColumnPrices.map((price: IPrice) => (
                <PriceItem key={prices.id} price={price} />
              ))}
            </ul>
          </article>
        </>
      ) : (
        <EmptyList content="prices" />
      )}
    </section>
  );
}
