import Link from 'next/link';

export const FinalCTA = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="max-w-screen-xl mx-auto text-center">
        <header>
          <h2 className="text-3xl font-bold mb-8 text-white">Book Your Appointment Today!</h2>
        </header>
        <form className="max-w-screen-sm mx-auto flex flex-col space-y-4">
          <input type="text" className="bg-primary border-2 border-neutral-dark py-2.5 px-4" />
          <Link href="#booking" className="bg-neutral-dark text-white py-2 px-4 hover:bg-red-700">Book Now</Link>
        </form>
      </div>
    </section>
  )
}
