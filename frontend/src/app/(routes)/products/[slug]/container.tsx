"use client";

import type { ProductResponse } from "@/types";

import { Image } from "@heroui/react";
import { ProductContent, ProductHeader } from "@/components";
import { DEFAULT_IMAGE } from "@/config/constants";

type Props = {
  product: ProductResponse;
};

export default function ProductDetailContainer({ product }: Props) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="sm:hidden">
        <ProductHeader product={product} />
      </div>
      <figure className="z-5 flex flex-col items-center justify-center bg-white border border-neutral-800 rounded-none overflow-hidden">
        <Image
          isZoomed
          width={500}
          height={500}
          radius="none"
          loading="eager"
          alt={product.name}
          src={product?.image || DEFAULT_IMAGE}
        />
        <div className="z-10 grid grid-cols-4 gap-2 pb-4">
          <div className="border-2 border-neutral-300 rounded-none overflow-hidden">
            <Image
              isZoomed
              width={60}
              height={60}
              radius="none"
              alt={product.name}
              src={product?.image || DEFAULT_IMAGE}
            />
          </div>
          <div className="border-2 border-neutral-300 rounded-none overflow-hidden">
            <Image
              isZoomed
              width={60}
              height={60}
              radius="none"
              alt={product.name}
              src={product?.image || DEFAULT_IMAGE}
            />
          </div>
          <div className="border-2 border-neutral-300 rounded-none overflow-hidden">
            <Image
              isZoomed
              width={60}
              height={60}
              radius="none"
              alt={product.name}
              src={product?.image || DEFAULT_IMAGE}
            />
          </div>
          <div className="border-2 border-neutral-300 rounded-none overflow-hidden">
            <Image
              isZoomed
              width={60}
              height={60}
              radius="none"
              alt={product.name}
              src={product?.image || DEFAULT_IMAGE}
            />
          </div>
        </div>
      </figure>
      <ProductContent product={product} />
    </section>
  );
}
