import Image from "next/image";
import { Button } from "@nextui-org/react";
import { Truck } from "lucide-react";
import { DEFAULT_IMAGE } from "@/config/constants";
import { getProduct } from "@/lib/api";
import { ProductCounter } from "@/components";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props) {
  const { slug } = params;

  try {
    const product = await getProduct(slug);

    if (!product) {
      return {
        title: "Product Not Found",
        description: "The artist you are looking for does not exist.",
      };
    }

    return {
      title: `${product.name} - Atlanta Ink`,
      description: `Explore products by ${product.brand} at Atlanta Ink.`,
    };
  } catch {
    return {
      title: "Error",
      description: "An error occurred while loading the product data.",
    };
  }
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = params;
  const product = await getProduct(slug);

  return (
    <main className="max-w-screen-xl mx-auto p-4 mt-16">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <figure className="space-y-4 bg-white border border-neutral-800 rounded-xl px-20">
          <div className="relative w-full h-0 pb-[100%] rounded-xl overflow-hidden group">
            <Image
              src={product?.image || DEFAULT_IMAGE}
              alt={product.name}
              fill
              className="transform transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="grid grid-cols-4 gap-4 py-4">
            <Image
              src={product?.image || DEFAULT_IMAGE}
              alt={product.name}
              width={200}
              height={200}
              className="border border-neutral-800 rounded-xl"
            />
            <Image
              src={product?.image || DEFAULT_IMAGE}
              alt={product.name}
              width={200}
              height={200}
              className="border border-neutral-800 rounded-xl"
            />
            <Image
              src={product?.image || DEFAULT_IMAGE}
              alt={product.name}
              width={200}
              height={200}
              className="border border-neutral-800 rounded-xl"
            />
            <Image
              src={product?.image || DEFAULT_IMAGE}
              alt={product.name}
              width={200}
              height={200}
              className="border border-neutral-800 rounded-xl"
            />
          </div>
        </figure>
        <div className="w-full h-full md:h-[calc(100vh-16vh)] space-y-4 overflow-auto">
          <p className="font-bold hover:underline">Shop all {product.brand}</p>
          <header className="flex flex-col space-y-4">
            <h1 className="font-bold text-3xl">{product.name}</h1>
            <span className="font-bold text-primary text-3xl">
              ${product.price}
            </span>
          </header>
          <div>
            <h2 className="font-bold text-2xl text-neutral-gray">Details</h2>
            <p>
              <span className="font-bold text-primary">SKU:</span> {product.sku}
            </p>
            <p>
              <span className="font-bold text-primary">Stock:</span>{" "}
              {product.stock}
            </p>
            <p>
              <span className="font-bold text-primary">Currency:</span>{" "}
              {product.currency}
            </p>
            <p>
              <span className="font-bold text-primary">Category:</span>{" "}
              {product.category}
            </p>
          </div>
          <ProductCounter />
          <div className="space-x-4">
            <Button color="primary">Buy Now</Button>
            <Button className="bg-neutral-darkgrey">Add to cart</Button>
          </div>
          <div className="bg-neutral-darkgrey flex items-center space-x-4 rounded-xl py-2 px-4">
            <Truck />
            <span className="font-normal text-xs text-neutral-gray">
              <strong>Free Home Delivery:</strong>
              Place your order and receive it conveniently at your doorstep,
              with no additional cost.
            </span>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            soluta assumenda, placeat cum cupiditate quisquam alias provident
            ipsam quod sit odio ipsa harum enim similique, voluptate facere
            eligendi esse unde! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Numquam consequatur, dolore quod nisi, accusamus
            dolores, debitis nemo exercitationem ipsum commodi minus.
            Perferendis enim tempore hic doloremque adipisci quidem voluptatem
            praesentium? Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Pariatur quos ex ad, rerum ipsum temporibus! Repellendus error
            veniam, ullam nemo quibusdam iure, dolore in libero magni vitae
            blanditiis deserunt eius?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            soluta assumenda, placeat cum cupiditate quisquam alias provident
            ipsam quod sit odio ipsa harum enim similique, voluptate facere
            eligendi esse unde! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Numquam consequatur, dolore quod nisi, accusamus
            dolores, debitis nemo exercitationem ipsum commodi minus.
            Perferendis enim tempore hic doloremque adipisci quidem voluptatem
            praesentium? Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Pariatur quos ex ad, rerum ipsum temporibus! Repellendus error
            veniam, ullam nemo quibusdam iure, dolore in libero magni vitae
            blanditiis deserunt eius?
          </p>
        </div>
      </section>

      {/* <aside>
        <nav className="flex space-x-4" id="product-tabs">
          <a
            href="#description-tab"
            className="flex items-center justify-center type-base--url h-10 bg-neutral-100 dark:bg-neutral-800 rounded-xl w-full"
          >
            Description
          </a>
          <a
            href="#specifications-tab"
            className="flex items-center justify-center type-base--url h-10 bg-neutral-100 dark:bg-neutral-800 rounded-xl w-full"
          >
            Specifications
          </a>
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
      </aside> */}
    </main>
  );
}
