export const Pricing = () => {
  return (
    <section id="pricing" className="py-16 bg-primary">
      <div className="max-w-screen-xl mx-auto text-center">
        <header className="space-y-4 mb-8">
          <span className="text-xl font-bold text-neutral-dark">Lorem ipsum dolor sit</span>
          <h2 className="text-6xl font-bold">Our Prices</h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <article className="p-6 shadow-md bg-neutral-darkgrey">
            <h3 className="text-xl font-bold mb-2">Small Tattoo</h3>
            <p className="text-4xl font-bold text-primary">$50</p>
            <p className="text-neutral-gray mt-2">Tattoos up to 5cm.</p>
          </article>
          <article className="p-6 shadow-md bg-neutral-darkgrey">
            <h3 className="text-xl font-bold mb-2">Small Tattoo</h3>
            <p className="text-4xl font-bold text-primary">$50</p>
            <p className="text-neutral-gray mt-2">Tattoos up to 5cm.</p>
          </article>
          <article className="p-6 shadow-md bg-neutral-darkgrey">
            <h3 className="text-xl font-bold mb-2">Small Tattoo</h3>
            <p className="text-4xl font-bold text-primary">$50</p>
            <p className="text-neutral-gray mt-2">Tattoos up to 5cm.</p>
          </article>
        </div>
      </div>
    </section>
  )
}
