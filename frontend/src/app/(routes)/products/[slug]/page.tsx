import Image from "next/image";
import { Button } from "@nextui-org/react";
import { Truck } from "lucide-react";
import { ProductCounter } from "@/components";
import { API_URL, DEFAULT_IMAGE } from "@/utils/constants";

async function getProduct(slug: string) {
  const res = await fetch(`${API_URL}/products/${slug}`);

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}

interface Props {
  params: { slug: string };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = params;
  const product = await getProduct(slug);

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 mt-16 space-y-4">
        <section className="grid gap-8 grid-cols-1 md:grid-cols-2">
          <figure className="overflow-hidden flex">
            <div className="grid grid-rows-3 gap-4 pr-4">
              <Image
                src={product?.image || DEFAULT_IMAGE}
                alt="pending"
                width={200}
                height={200}
                className="rounded-xl"
              />
              <Image
                src={product?.image || DEFAULT_IMAGE}
                alt="pending"
                width={200}
                height={200}
                className="rounded-xl"
              />
              <Image
                src={product?.image || DEFAULT_IMAGE}
                alt="pending"
                width={200}
                height={200}
                className="rounded-xl"
              />
            </div>
            <div>
              <Image
                src={product?.image || DEFAULT_IMAGE}
                alt={product.name}
                width={600}
                height={600}
                className="h-full rounded-xl"
              />
            </div>
          </figure>
          <article className="flex flex-col h-full">
            <div className="space-y-4">
              <p className="font-bold hover:underline focus:text-primary">
                Shop all {product.brand}
              </p>
              <header className="flex flex-col space-y-4">
                <h1 className="font-bold text-3xl">{product.name}</h1>
                <span className="font-bold text-primary text-3xl">${product.price}</span>
              </header>
              <div>
                <h2 className="font-bold text-2xl text-neutral-gray">Details</h2>
                <p><span className="font-bold text-primary">SKU:</span> {product.sku}</p>
                <p><span className="font-bold text-primary">Stock:</span> {product.stock}</p>
                <p><span className="font-bold text-primary">Currency:</span> {product.currency}</p>
                <p><span className="font-bold text-primary">Category:</span> {product.category}</p>
              </div>
              <ProductCounter />
              <div className="space-x-4">
                <Button color="primary">Buy Now</Button>
                <Button className="bg-neutral-darkgrey">Add to cart</Button>
              </div>
            </div>
            <div className="mt-auto bg-neutral-darkgrey flex items-center space-x-4 rounded-xl py-2 px-4">
              <Truck />
              <span className="font-normal text-xs text-neutral-gray">
                <strong>Free Home Delivery:</strong>
                Place your order and receive it conveniently at your doorstep, with no additional cost.
              </span>
            </div>
          </article>
        </section>

        <aside>
          <nav className="flex space-x-4" id="product-tabs">
            <a href="#description-tab" className="flex items-center justify-center type-base--url h-10 bg-neutral-100 dark:bg-neutral-800 rounded-xl w-full">Description</a>
            <a href="#specifications-tab" className="flex items-center justify-center type-base--url h-10 bg-neutral-100 dark:bg-neutral-800 rounded-xl w-full">Specifications</a>
          </nav>
          <section className="bg-neutral-100 dark:bg-neutral-800 rounded-xl p-4 mt-4">
            <article id="description-tab" className="tab-content">
              <h3 className="sub-headline">Description</h3>
              <p>{product.description}</p>
            </article>
            <article id="specifications-tab" className="tab-content hidden">
              <h3 className="sub-headline">Specifications</h3>
              <p className="leading-loose">Especifications</p>
            </article>
          </section>
        </aside>
      </div >
    </>
  );
};
