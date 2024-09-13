import Link from "next/link";
import Image from "next/image";
import { DEFAULT_IMAGE } from "@/utils/constants";
import { IProduct } from "@/types/global";

interface Props {
  products: IProduct[];
}

export const ProductList = ({ products }: Props) => {
  return (
    <article className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.slug}`}
          className="bg-neutral-darkgrey shadow-lg rounded-xl overflow-hidden"
        >
          <div className="w-full h-60 relative">
            <Image
              src={DEFAULT_IMAGE}
              alt={product.name}
              fill
              style={{ objectFit: "cover" }}
              className="object-cover rounded-b-xl"
            />
          </div>
          <div className="p-4">
            <h3 className="text-center text-xl font-semibold pb-2 mb-2 border-b border-b-neutral-gray">{product.name}</h3>
            <span>{product.price}</span>
          </div>
        </Link>
      ))}
    </article>
  );
};

