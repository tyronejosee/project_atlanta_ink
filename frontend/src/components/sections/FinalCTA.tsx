import Link from 'next/link';

export const FinalCTA = () => {
  return (
    <section className="py-16 bg-neutral-800">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-white">Book Your Appointment Today!</h2>
        <Link href="#booking" className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">Book Now</Link>
      </div>
    </section>
  )
}
