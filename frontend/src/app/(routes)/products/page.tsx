import { Metadata } from "next";
import { getCategories, getProducts } from "@/lib/api";
import {
  HeaderPage,
  PaginationItem,
  ProductList,
  ProductToolbar,
} from "@/components";
import { IProductQueryParams } from "@/interfaces";

interface Props {
  searchParams: IProductQueryParams;
}

export const metadata: Metadata = {
  title: "Products - Atlanta Ink",
  description:
    "Discover our exclusive range of high-quality tattoo products designed for professional artists and enthusiasts alike. From premium inks and needles to innovative tools and accessories, we offer everything you need to create stunning body art.",
  keywords: "tattoos, tattoo products, atlanta",
};

export default async function ProductsPage({ searchParams }: Props) {
  const { sort_by, search, category, price } = searchParams;
  const params = {
    ...(sort_by && { sort_by }),
    ...(search && { search }),
    ...(category && { category }),
    ...(price && { price }),
  };

  const [products, categories] = await Promise.all([
    getProducts(params),
    getCategories(),
  ]);

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 mt-16">
        <HeaderPage title="Products" />
        <>
          <ProductToolbar categories={categories} />
          {products.length === 0 ? (
            <p className="text-center text-gray-500">
              No products found for{" "}
              <span className="font-semibold text-primary">{search}</span>
            </p>
          ) : (
            <>
              <ProductList products={products} />
              <PaginationItem />
            </>
          )}
        </>
      </div>
    </>
  );
}
