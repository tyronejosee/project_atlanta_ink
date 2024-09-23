"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { SORT_CHOICES } from "@/config/constants";
import { ICategory } from "@/interfaces";

interface Props {
  categories: ICategory[];
}

export const ProductToolbar = ({ categories }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(
    null,
  );

  // Update the search state when the URL changes
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

      // Set a new timeout
      const timeout = setTimeout(() => {
        updateQueryParams({ search: searchValue });
      }, 1000); // 1000ms delay

      setDebounceTimeout(timeout);
    },
    [debounceTimeout],
  );

  const updateQueryParams = (newParams: Record<string, string>) => {
    const currentParams = new URLSearchParams(window.location.search);

    Object.entries(newParams).forEach(([key, value]) => {
      if (value) {
        currentParams.set(key, value);
      } else {
        currentParams.delete(key);
      }
    });

    router.push(`?${currentParams.toString()}`);
  };

  const handleChange = (value: string) => {
    router.push(`/products?sort_by=${value}`);
  };

  return (
    <aside className="z-20 pb-8">
      <nav className="flex space-x-4">
        <Input
          label="Search"
          type="text"
          radius="md"
          size="sm"
          value={search}
          onChange={handleSearchChange}
          className="w-full"
        />
        <Select
          size="sm"
          label="Select category"
          className="w-60"
          onChange={(e) => handleChange(e.target.value)}
        >
          {categories.map((category) => (
            <SelectItem key={category.id} value={category.id}>
              {category.name}
            </SelectItem>
          ))}
        </Select>
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
    </aside>
  );
};
