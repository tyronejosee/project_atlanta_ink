"use client";

import { useState } from "react";
import { Button } from "@nextui-org/react";

import { Plus, Minus } from "lucide-react";
export const ProductCounter = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex space-x-1">
      <Button
        className="bg-neutral-darkgrey"
        isIconOnly
        size="sm"
        onClick={decrement}
      >
        <Minus className="size-2" />
      </Button>
      <div className="bg-primary rounded-lg w-10 flex justify-center items-center font-extrabold">
        {count}
      </div>
      <Button
        className="bg-neutral-darkgrey"
        isIconOnly
        size="sm"
        onClick={increment}
      >
        <Plus className="size-2" />
      </Button>
    </div>
  );
};
