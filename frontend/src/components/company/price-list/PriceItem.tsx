import { BookOpen } from "lucide-react";
import { IPrice } from "@/interfaces";

interface Props {
  price: IPrice;
}

export const PriceItem = ({ price }: Props) => {
  return (
    <li className="group px-4 py-6 flex items-center">
      <figure className="mr-4">
        <BookOpen className="size-8" />
      </figure>
      <div className="w-full space-y-2">
        <div className="flex justify-between">
          <h2 className="group-hover:font-bold group-hover:text-primary">
            {price.name}
          </h2>
          <span className="group-hover:font-bold group-hover:text-primary">
            {price.price_range}
          </span>
        </div>
        <span className="text-xs text-neutral-gray line-clamp-1">
          {price.description}
        </span>
      </div>
    </li>
  );
};
