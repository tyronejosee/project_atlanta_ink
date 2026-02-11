import type { Metadata } from "next";

import { getPrices } from "@/lib/api/company";
import { EmptyList, HeaderPage } from "@/components";
import { PriceList } from "@/components/company/price-list/PriceList";

export const metadata: Metadata = {
  title: "Prices",
  description:
    "Check out our tattoo prices at Atlanta Ink. Affordable rates for various tattoo styles and sizes.",
  keywords:
    "tattoo prices, affordable tattoos, tattoo styles, tattoo sizes, atlanta",
};

export default async function PricesPage() {
  const prices = await getPrices();

  return (
    <main className="max-w-screen-xl mx-auto my-16 px-4 xl:px-0">
      {prices.length > 0 ? (
        <>
          <HeaderPage
            title="Our Pricing"
            subtitle="Check out our price list for tattoo services and consultations."
          />
          <PriceList prices={prices} />
          <div>
            <p className="text-xs text-neutral-gray text-center">
              * ph: per hour / ps: per session
            </p>
          </div>
        </>
      ) : (
        <EmptyList content="prices" />
      )}
    </main>
  );
}
