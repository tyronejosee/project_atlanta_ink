import type { Metadata } from "next";

import { getBrands, getCategories } from "@/lib/api";
import {
  HeaderPage,
  PaginationItem,
  ProductList,
  ProductToolbar,
} from "@/components";
import { getProducts } from "@/lib/api/products";
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
  const { sort_by, search, category, brand, page = 1 } = searchParams;

  const params = {
    ...(sort_by && { sort_by }),
    ...(search && { search }),
    ...(category && { category }),
    ...(brand && { brand }),
    page,
  };

  const [productsData, brands, categories] = await Promise.all([
    getProducts(params),
    getBrands(),
    getCategories(),
  ]);

  const { results: products, count } = productsData;

  const totalPages = Math.ceil(count / 10);

  return (
    <main className="max-w-screen-xl mx-auto my-16 px-4 xl:px-0">
      <HeaderPage
        title="Our Products"
        subtitle="Discover our selection of aftercare products and tattoo supplies."
      />
      <>
        <ProductToolbar brands={brands} categories={categories} />
        {products.length === 0 ? (
          <section className=" relative flex justify-center items-center w-full h-[400px] rounded-xl overflow-hidden">
            <div className="z-10 text-center text-gray-500">
              No products found for{" "}
              <span className="ml-2 font-semibold text-primary">
                {search?.toUpperCase()}
              </span>
            </div>
            <div className="absolute z-5 w-full h-full bg-neutral-darkgrey animate-pulse"></div>
          </section>
        ) : (
          <>
            <PaginationItem totalPages={totalPages} currentPage={page} />
            <ProductList products={products} />
          </>
        )}
      </>
    </main>
  );
}
