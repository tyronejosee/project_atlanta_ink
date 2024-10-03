"use client";

import {
  Accordion,
  AccordionItem,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { ChevronLeft, Truck } from "lucide-react";
import { IProduct } from "@/interfaces";
import { ProductCounter, ProductHeader } from "@/components";

interface Props {
  product: IProduct;
}

export const ProductContent = ({ product }: Props) => {
  return (
    <div className="w-full h-full md:h-[calc(100vh-16vh)] space-y-4 overflow-auto">
      <p className="font-bold hover:underline">Shop all {product.brand}</p>
      <div className="hidden sm:block">
        <ProductHeader product={product} />
      </div>
      <div>
        <p>
          <span className="font-bold text-primary">SKU:</span> {product.sku}
        </p>
        <p>
          <span className="font-bold text-primary">Stock:</span> {product.stock}
        </p>
      </div>
      <ProductCounter />
      <Popover placement="top" color="primary" size="lg" backdrop="opaque">
        <PopoverTrigger>
          <Button size="lg" variant="bordered" className="w-full">
            Favorites
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full">
          <div className="w-full px-1 py-2">
            <div className="text-small font-bold">
              Functionality Unavailable
            </div>
            <div className="text-tiny">
              Sorry, this functionality is currently unavailable. Please try
              again later.
            </div>
          </div>
        </PopoverContent>
      </Popover>

      <div className="bg-neutral-darkgrey flex items-center space-x-4 rounded-xl py-2 px-4">
        <Truck />
        <span className="font-normal text-xs text-neutral-gray">
          <strong>Free Home Delivery:</strong>
          Place your order and receive it conveniently at your doorstep, with no
          additional cost.
        </span>
      </div>
      <Accordion variant="splitted" selectionMode="multiple" className="w-full">
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="Returns and Shipping"
          indicator={({ isOpen }) =>
            isOpen ? (
              <ChevronLeft className="stroke-primary" />
            ) : (
              <ChevronLeft className="group-hover:stroke-primary" />
            )
          }
          className="bg-neutral-darkgrey shadow-none"
        >
          <p className="text-neutral-gray">
            Delivery throughout the country. Check the estimated delivery date
            when making your purchase. You can return your order for any reason,
            free of charge, within 30 days.
          </p>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Payment methods"
          title="Payment methods"
        >
          We accept the following payment options: Credit Cards, Debit Cards,
          and Stripe.
        </AccordionItem>
        <AccordionItem key="3" aria-label="Share" title="Share"></AccordionItem>
      </Accordion>
      <nav className="z-40 w-full fixed left-0 bottom-0 bg-neutral-darkgrey py-2 px-4">
        <Button size="lg" color="primary" className="w-full">
          Buy Now
        </Button>
      </nav>
    </div>
  );
};
