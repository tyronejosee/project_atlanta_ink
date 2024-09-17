import { useRouter } from "next/router";
import { getProducts } from "@/lib/api";
import { PaginationItem, ProductHeader, ProductList, Sidebar } from "@/components";
import { IProductQueryParams } from "@/interfaces";

interface Props {
  searchParams: IProductQueryParams;
}

export default async function ProductsPage({ searchParams }: Props) {
  const { sort_by, search, category, price } = searchParams;
  const params = {
    ...(sort_by && { sort_by }),
    ...(search && { search }),
    ...(category && { category }),
    ...(price && { price }),
  };
  const products = await getProducts(params);

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 mt-16">
        <div className="flex">
          <Sidebar />
          <section className="pl-56 ml-4">
            <ProductHeader />
            {products.length === 0 ? (
              <p className="text-center text-gray-500">
                No products found for <span className="font-semibold">"{search}"</span>
              </p>
            ) : (
              <>
                <ProductList products={products} />
                <PaginationItem />
              </>
            )}
          </section>
        </div>
      </div>
    </>
  )
}
