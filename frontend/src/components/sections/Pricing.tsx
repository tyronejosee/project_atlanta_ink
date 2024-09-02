export const Pricing = () => {
  return (
    <section id="pricing" className="py-16 bg-neutral-800">
      <div className="container mx-auto text-center">
        <h2 className="text-6xl font-bold mb-8 text-white">Our Prices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow-md bg-neutral-700">
            <h3 className="text-xl font-bold mb-2 text-white">Small Tattoo</h3>
            <p className="text-4xl font-bold text-red-500">$50</p>
            <p className="text-gray-400 mt-2">Tattoos up to 5cm.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md bg-neutral-700">
            <h3 className="text-xl font-bold mb-2 text-white">Small Tattoo</h3>
            <p className="text-4xl font-bold text-red-500">$50</p>
            <p className="text-gray-400 mt-2">Tattoos up to 5cm.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md bg-neutral-700">
            <h3 className="text-xl font-bold mb-2 text-white">Small Tattoo</h3>
            <p className="text-4xl font-bold text-red-500">$50</p>
            <p className="text-gray-400 mt-2">Tattoos up to 5cm.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
