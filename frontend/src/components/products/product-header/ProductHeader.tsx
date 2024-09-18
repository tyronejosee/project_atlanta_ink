"use client";

import { useRouter } from "next/navigation";
import { Select, SelectItem } from "@nextui-org/react";
import { SORT_CHOICES } from "@/config/constants";
import { Headline } from "@/components";

export const ProductHeader = () => {
  const router = useRouter();

  const handleChange = (value: string) => {
    router.push(`/products?sort_by=${value}`);
  };

  return (
    <nav className="flex justify-between py-4">
      <Headline title="Products" />
      <Select
        size="sm"
        label="Sort by"
        className="w-60"
        onChange={(e) => handleChange(e.target.value)}
      >
        {SORT_CHOICES.map((choices) => (
          <SelectItem key={choices.key} value={choices.key}>
            {choices.label}
          </SelectItem>
        ))}
      </Select>
    </nav>
  );
};
