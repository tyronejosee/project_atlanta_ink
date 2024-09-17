"use client"

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Input, Slider, CheckboxGroup, Checkbox } from "@nextui-org/react"
import { DEFAULT_IMAGE } from "@/config/constants";
import { categories } from "@/utils/data"

export const Sidebar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(null);

  // Update the search state when the URL changes
  useEffect(() => {
    setSearch(searchParams.get("search") || "");
  }, [searchParams]);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
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
  }, [debounceTimeout]);

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

  return (
    <aside className="fixed top-16 w-56 h-[620px] border-r border-r-neutral-darkgrey z-20 space-y-4 p-4 overflow-y-auto">
      <nav className="space-y-8">
        <Input
          label="Search"
          type="text"
          radius="md"
          size="sm"
          value={search}
          onChange={handleSearchChange}
        />
        <div>
          <Slider
            size="md"
            step={25}
            color="primary"
            label="Price"
            showSteps={true}
            maxValue={100}
            minValue={25}
            defaultValue={25}
            className="max-w-md"
          />
        </div>
        <div className="flex flex-col gap-3">
          <CheckboxGroup
            label="Categories"
            color="primary"
          // value={selected}
          // onValueChange={setSelected}
          >
            {categories.map((categories) => (
              <Checkbox
                key={categories.id}
                value={categories.id}>
                {categories.name}
              </Checkbox>
            ))}
          </CheckboxGroup>
        </div>
        <div>
          <Image
            src={DEFAULT_IMAGE}
            alt="Reference image"
            width={200}
            height={100}
            className="rounded-xl"
          />
        </div>
      </nav>
    </aside>
  )
}
