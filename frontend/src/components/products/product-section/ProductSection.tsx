import { HeaderSection, ProductList } from "@/components";
import { IProduct } from "@/interfaces";

interface Props {
  products: IProduct[];
}

export const ProductSection = ({ products }: Props) => {
  return (
    <section className="py-16">
      <div className="max-w-screen-xl mx-auto">
        <HeaderSection title="Our Products" />
        <ProductList products={products} />
      </div>
    </section>
  );
};
