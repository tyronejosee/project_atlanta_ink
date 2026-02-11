"use client";

import { clsx } from "clsx";

type Props = {
  title: string;
  subtitle?: string;
  isNegative?: boolean;
};

export const HeaderSection = ({
  title,
  subtitle = "Lorem ipsum dolor sit",
  isNegative = false,
}: Props) => {
  return (
    <header className="max-w-xs lg:max-w-md mx-auto space-y-4 mb-8 text-center">
      <span
        className={clsx(
          "text-lg md:text-xl font-bold",
          isNegative ? "text-neutral-dark" : "text-primary",
        )}
      >
        {subtitle}
      </span>
      <h2 className="text-5xl md:text-6xl font-bold text-neutral-light">
        {title}
      </h2>
    </header>
  );
};
