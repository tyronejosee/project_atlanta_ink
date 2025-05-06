"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import { Plus, Minus } from "lucide-react";

export const ProductCounter = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < 10) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="flex space-x-1">
      <Button
        isIconOnly
        size="sm"
        radius="none"
        onPress={decrement}
        className="bg-neutral-darkgrey"
      >
        <Minus className="size-2" />
      </Button>
      <div className="bg-primary rounded-none w-10 flex justify-center items-center font-extrabold">
        {count}
      </div>
      <Button
        isIconOnly
        size="sm"
        radius="none"
        onPress={increment}
        className="bg-neutral-darkgrey"
      >
        <Plus className="size-2" />
      </Button>
    </div>
  );
};
