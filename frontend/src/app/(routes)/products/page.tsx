import { ProductHeader, ProductList, ProductPagination, Sidebar } from "@/components";
import { getProducts } from "@/lib/api";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 mt-16">
        <div className="flex">
          <Sidebar />
          <section className="pl-56 ml-4">
            <ProductHeader />
            <ProductList products={products} />
            <ProductPagination />
          </section>
        </div>
      </div>
    </>
  )
}
