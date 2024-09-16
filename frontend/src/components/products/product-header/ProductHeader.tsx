"use client"

import { Select, SelectItem, Pagination } from "@nextui-org/react";
import { PRODUCT_FILTER_CHOICES } from "@/config/constants";
import { Headline } from "@/components";

export const ProductHeader = () => {
  return (
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
  )
}
