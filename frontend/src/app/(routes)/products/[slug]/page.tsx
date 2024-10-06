import Image from "next/image";
import { Button } from "@nextui-org/react";
import { Truck } from "lucide-react";
import { DEFAULT_IMAGE } from "@/config/constants";
import { getProduct } from "@/lib/api";
import { ProductContent, ProductCounter, ProductHeader } from "@/components";

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
    <main className="max-w-screen-xl mx-auto my-16 px-4 xl:px-0 pt-4">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="sm:hidden">
          <ProductHeader product={product} />
        </div>
        <figure className="z-5 flex flex-col items-center justify-center space-y-4 bg-white border border-neutral-800 rounded-xl px-20 overflow-hidden">
          <div className="relative w-full h-0 pb-[100%] rounded-xl group">
            <Image
              src={product?.image || DEFAULT_IMAGE}
              alt={product.name}
              fill
              className="transform transition-transform duration-300 group-hover:scale-125"
            />
          </div>
          <div className="z-10 grid grid-cols-4 gap-4 py-4">
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
        <ProductContent product={product} />
      </section>
    </main>
  );
}
