"use client";

import { Image } from "@heroui/react";
import { ProductContent, ProductHeader } from "@/components";
import { DEFAULT_IMAGE } from "@/config/constants";
import { IProduct } from "@/interfaces";

interface Props {
  product: IProduct;
}

export default function ProductDetailContainer({ product }: Props) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="sm:hidden">
        <ProductHeader product={product} />
      </div>
      <figure className="z-5 flex flex-col items-center justify-center space-y-4 bg-white border border-neutral-800 rounded-xl px-20 overflow-hidden">
        <Image
          isZoomed
          src={product?.image || DEFAULT_IMAGE}
          alt={product.name}
          loading="eager"
        />
        <div className="z-10 grid grid-cols-4 gap-4 py-4">
          <Image
            src={product?.image || DEFAULT_IMAGE}
            alt={product.name}
            width={200}
            height={200}
            className="border border-neutral-800 rounded-xl"
          />
          <Image
            src={product?.image || DEFAULT_IMAGE}
            alt={product.name}
            width={200}
            height={200}
            className="border border-neutral-800 rounded-xl"
          />
          <Image
            src={product?.image || DEFAULT_IMAGE}
            alt={product.name}
            width={200}
            height={200}
            className="border border-neutral-800 rounded-xl"
          />
          <Image
            src={product?.image || DEFAULT_IMAGE}
            alt={product.name}
            width={200}
            height={200}
            className="border border-neutral-800 rounded-xl"
          />
        </div>
      </figure>
      <ProductContent product={product} />
    </section>
  );
}
