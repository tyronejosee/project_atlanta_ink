"use client"

import { Select, SelectItem, Pagination } from "@nextui-org/react";
import { Headline, ProductList } from "@/components";
import { PRODUCT_FILTER_CHOICES } from "@/utils/constants";
import { products } from "@/utils/data";

export default function ProductsPage() {
  return (
    <>
      <nav className="flex justify-between py-4">
        <Headline title="Products" />
        <Select
          size="sm"
          label="Sort by"
          className="w-60"
        >
          {PRODUCT_FILTER_CHOICES.map((choices) => (
            <SelectItem key={choices.key}>
              {choices.label}
            </SelectItem>
          ))}
        </Select>
      </nav>
      <ProductList products={products} />
      <nav className="flex justify-center items-center py-4">
        <Pagination
          loop
          showControls
          color={"primary"}
          total={5}
          initialPage={1}
        />
      </nav>
    </>
  )
}

