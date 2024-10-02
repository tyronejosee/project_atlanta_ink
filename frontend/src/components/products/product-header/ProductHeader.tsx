import { IProduct } from "@/interfaces";

interface Props {
  product: IProduct;
}

export const ProductHeader = ({ product }: Props) => {
  return (
    <header className="space-y-2">
      <h1 className="text-3xl md:text-4xl font-bold text-neutral-light line-clamp-2">
        {product.name}
      </h1>
      <p className="font-medium text-neutral-gray">{product.category}</p>
      <p className="font-bold text-primary text-3xl">
        ${product.price} {product.currency}
      </p>
    </header>
  );
};
