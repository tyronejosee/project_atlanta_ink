import { ProductHeader, ProductList, ProductPagination, Sidebar } from "@/components";
import { API_URL } from "@/utils/constants";

async function getProducts() {
  const res = await fetch(`${API_URL}/products`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

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
