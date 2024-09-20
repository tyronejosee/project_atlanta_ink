import { BookOpen } from "lucide-react";

interface Props {
  name: string;
  description: string;
  price_range: string;
}

export const PriceItem = ({ name, description, price_range }: Props) => {
  return (
    <li className="group px-4 py-6 flex items-center">
      <figure className="mr-4">
        <BookOpen className="size-8" />
      </figure>
      <div className="w-full space-y-2">
        <div className="flex justify-between">
          <span className="group-hover:font-bold group-hover:text-primary">
            {name}
          </span>
          <span className="group-hover:font-bold group-hover:text-primary">
            ${price_range}
          </span>
        </div>
        <span className="text-xs text-neutral-gray line-clamp-1">
          {description}
        </span>
      </div>
    </li>
  );
};
