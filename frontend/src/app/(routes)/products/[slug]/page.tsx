import { getProductBySlug } from "@/lib/api/products";
import ProductDetailContainer from "./container";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props) {
  const { slug } = params;

  try {
    const product = await getProductBySlug(slug);

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
  const product = await getProductBySlug(slug);

  return (
    <main className="max-w-screen-xl mx-auto my-16 px-4 xl:px-0 pt-4">
      <ProductDetailContainer product={product} />
    </main>
  );
}
