import Image from 'next/image';

export const Products = () => {
  return (
    <section id="products" className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-6xl font-bold mb-8 text-white">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow-md bg-neutral-800">
            <Image src="/path/to/product1.jpg" alt="Product 1" width={300} height={200} className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-xl font-bold text-white">Product 1</h3>
            <p className="text-gray-400">$20 - Tattoo cream.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md bg-neutral-800">
            <Image src="/path/to/product1.jpg" alt="Product 1" width={300} height={200} className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-xl font-bold text-white">Product 1</h3>
            <p className="text-gray-400">$20 - Tattoo cream.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md bg-neutral-800">
            <Image src="/path/to/product1.jpg" alt="Product 1" width={300} height={200} className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-xl font-bold text-white">Product 1</h3>
            <p className="text-gray-400">$20 - Tattoo cream.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
