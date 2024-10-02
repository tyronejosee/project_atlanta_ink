import React from "react";
import { Metadata } from "next";
import { EmptyList, HeaderPage, PriceItem } from "@/components";
import { getPrices } from "@/lib/api";
import { IPrice } from "@/interfaces";
import { PriceList } from "@/components/company/price-list/PriceList";

export const metadata: Metadata = {
  title: "Prices - Atlanta Ink",
  description:
    "Check out our tattoo prices at Atlanta Ink. Affordable rates for various tattoo styles and sizes.",
  keywords:
    "tattoo prices, affordable tattoos, tattoo styles, tattoo sizes, atlanta",
};

export default async function PricesPage() {
  const prices = await getPrices();

  return (
    <main className="max-w-screen-xl mx-auto mt-16 px-4 xl:px-0">
      {prices.length > 0 ? (
        <>
          <HeaderPage title="Our Prices" />
          <PriceList prices={prices} />
        </>
      ) : (
        <EmptyList content="prices" />
      )}
    </main>
  );
}
