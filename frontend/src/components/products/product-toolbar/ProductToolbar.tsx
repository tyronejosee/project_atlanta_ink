"use client";

import type { BrandResponse, CategoryResponse } from "@/types";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input, Select, SelectItem } from "@heroui/react";
import { SORT_CHOICES } from "@/config/constants";

type Props = {
  brands: BrandResponse[];
  categories: CategoryResponse[];
};

export const ProductToolbar = ({ brands, categories }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(
    null,
  );

  useEffect(() => {
    setSearch(searchParams.get("search") || "");
  }, [searchParams]);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const searchValue = e.target.value;
      setSearch(searchValue);

      // Clear the previous timeout
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }

      const updateQueryParams = (newParams: Record<string, string>) => {
        // Clear all existing parameters
        const currentParams = new URLSearchParams();

        // Add only the new search parameter
        if (newParams.search) {
          currentParams.set("search", newParams.search);
        }

        router.push(`?${currentParams.toString()}`);
      };

      // Set a new timeout
      const timeout = setTimeout(() => {
        updateQueryParams({ search: searchValue });
      }, 0.8); // 800ms delay

      setDebounceTimeout(timeout);
    },
    [debounceTimeout, router],
  );

  const handleBrandChange = (value: string) => {
    router.push(`/products?brand=${value}`);
  };

  const handleCategoryChange = (value: string) => {
    router.push(`/products?category=${value}`);
  };

  const handleSortChange = (value: string) => {
    router.push(`/products?sort_by=${value}`);
  };

  return (
    <aside className="pb-8">
      <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        {/* Search field */}
        <Input
          size="sm"
          type="text"
          radius="none"
          label="Search"
          value={search}
          onChange={handleSearchChange}
          className="w-full md:w-1/4"
        />

        {/* Brand field */}
        <Select
          size="sm"
          radius="none"
          label="Select brand"
          className="w-full md:w-1/4"
          classNames={{ popoverContent: "rounded-none" }}
          onChange={(e) => handleBrandChange(e.target.value)}
        >
          {brands.map((brand) => (
            <SelectItem key={brand.id} classNames={{ base: "rounded-none" }}>
              {brand.name}
            </SelectItem>
          ))}
        </Select>

        {/* Category field */}
        <Select
          size="sm"
          radius="none"
          label="Select category"
          className="w-full md:w-1/4"
          classNames={{ popoverContent: "rounded-none" }}
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          {categories.map((category) => (
            <SelectItem key={category.id} classNames={{ base: "rounded-none" }}>
              {category.name}
            </SelectItem>
          ))}
        </Select>

        {/* Sort_by field */}
        <Select
          size="sm"
          radius="none"
          label="Sort by"
          className="w-full md:w-1/4"
          classNames={{ popoverContent: "rounded-none" }}
          onChange={(e) => handleSortChange(e.target.value)}
        >
          {SORT_CHOICES.map((choices) => (
            <SelectItem key={choices.key} classNames={{ base: "rounded-none" }}>
              {choices.label}
            </SelectItem>
          ))}
        </Select>
      </nav>
    </aside>
  );
};
