"use client";

import {
  Accordion,
  AccordionItem,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { ChevronLeft, Heart } from "lucide-react";
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

      <div className="space-y-2">
        <p>
          <span className="font-bold text-primary">SKU:</span> {product.sku}
        </p>
        <p>
          <span className="font-bold text-primary">Stock:</span> {product.stock}
        </p>
        <div
          dangerouslySetInnerHTML={{
            __html: product.description || "<p>No description available.</p>",
          }}
        />
      </div>

      <div className="w-full flex justify-between py-4 border-y border-neutral-800">
        <h2 className="text-foreground text-large">Select quantity</h2>
        <ProductCounter />
      </div>

      <Popover
        placement="top"
        color="primary"
        size="lg"
        backdrop="blur"
        className="hidden lg:block"
      >
        <PopoverTrigger>
          <Button
            size="lg"
            color="primary"
            className="text-neutral-light font-medium w-full"
          >
            Add to bag
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full">
          <div className="w-full px-1 py-2">
            <div className="text-small font-bold">
              Functionality Unavailable
            </div>
            <div className="text-tiny">
              Sorry, this functionality is currently unavailable.
            </div>
          </div>
        </PopoverContent>
      </Popover>

      <Popover placement="top" color="primary" size="lg" backdrop="blur">
        <PopoverTrigger>
          <Button
            size="lg"
            variant="bordered"
            className="w-full"
            endContent={<Heart className="size-4" />}
          >
            Favorites
          </Button>
        </PopoverTrigger>
        <PopoverContent className="text-neutral-light font-medium w-full">
          <div className="w-full px-1 py-2">
            <div className="text-small font-bold">
              Functionality Unavailable
            </div>
            <div className="text-tiny">
              Sorry, this functionality is currently unavailable.
            </div>
          </div>
        </PopoverContent>
      </Popover>

      <div className="bg-neutral-darkgrey flex flex-col items-center justify-center space-y-2 rounded-xl p-4">
        <p className="font-medium">Shipping cost: From $5.54 USD</p>
        <p className="text-primary font-medium">
          Free shipping for members from: $55.56 USD
        </p>
      </div>

      <Accordion selectionMode="multiple" className="w-full">
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
          indicator={({ isOpen }) =>
            isOpen ? (
              <ChevronLeft className="stroke-primary" />
            ) : (
              <ChevronLeft className="group-hover:stroke-primary" />
            )
          }
        >
          <p className="text-neutral-gray">
            We accept the following payment options: Credit Cards, Debit Cards,
            and Stripe.
          </p>
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Share"
          title="Share"
          indicator={({ isOpen }) =>
            isOpen ? (
              <ChevronLeft className="stroke-primary" />
            ) : (
              <ChevronLeft className="group-hover:stroke-primary" />
            )
          }
        >
          <p className="text-neutral-gray">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod saepe
            distinctio sapiente molestiae, ut recusandae, veritatis illum quasi
            eligendi harum omnis beatae voluptate et dolores similique sunt
            quaerat voluptatibus provident?
          </p>
        </AccordionItem>
      </Accordion>

      {/* CTA Button */}
      <nav className="lg:hidden z-40 w-full fixed left-0 bottom-0 bg-neutral-darkgrey py-2 px-4">
        <Popover placement="top" color="primary" size="lg" backdrop="blur">
          <PopoverTrigger>
            <Button size="lg" color="primary" className="w-full">
              Add to bag
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full">
            <div className="w-full px-1 py-2">
              <div className="text-small font-bold">
                Functionality Unavailable
              </div>
              <div className="text-tiny">
                Sorry, this functionality is currently unavailable.
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </nav>
    </div>
  );
};
