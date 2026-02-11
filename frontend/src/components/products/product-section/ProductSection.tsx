import { HeaderSection } from "@/components/ui/header/HeaderSection";
import type { ProductResponse } from "@/types";

import { ProductList } from "../product-list/ProductList";

type Props = {
  products: ProductResponse[];
};

export const ProductSection = ({ products }: Props) => {
  return (
    <section className="py-16 px-4 xl:px-0">
      <div className="max-w-screen-xl mx-auto">
        <HeaderSection
          title="Our Products"
          subtitle="Discover our selection of aftercare products and tattoo supplies."
        />
        <ProductList products={products} />
      </div>
    </section>
  );
};
