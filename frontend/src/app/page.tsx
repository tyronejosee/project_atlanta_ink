import Image from 'next/image';
import Link from 'next/link';
import { BackToTop } from '@/components/ui/back-to-top';
import { Button } from "@nextui-org/button";


export default function Home() {
  return (
    <main>
      <section className="bg-cover bg-center h-[calc(100vh-64px)] relative" style={{ backgroundImage: 'url(/hero.webp)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto flex flex-col items-center justify-center h-full text-center text-white relative z-10">
          <h2 className="text-7xl font-bold mb-4">DESIGNER STUDIO TATTOO</h2>
          <p className="max-w-screen-lg text-lg mb-6">Quisque posuere tellus purus, sed faucibus lectus consectetur blandit. Sed nec egestas orci, eget pulvinar lectus. Maecenas tempus, metus sit amet porttitor aliquet, sapien odio gravida lorem.</p>
          <Button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">Explore Tattoos</Button>
        </div>
      </section>

      <section id="artists" className="py-16">
        <div className="max-w-screen-xl mx-auto">
          <span className="text-3xl font-bold mb-8 text-center">Our team</span>
          <h2 className="text-3xl font-bold mb-8 text-center">ARTISTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow-md bg-neutral-800">
              <Image src="/example.jpg" alt="Artist 1" width={300} height={200} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-bold text-white">Artist 1</h3>
              <p className="text-gray-400">Especialista en tatuajes de estilo tradicional.</p>
            </div>
            <div className="p-6 border rounded-lg shadow-md bg-neutral-800">
              <Image src="/example.jpg" alt="Artist 1" width={300} height={200} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-bold text-white">Artist 1</h3>
              <p className="text-gray-400">Especialista en tatuajes de estilo tradicional.</p>
            </div>
            <div className="p-6 border rounded-lg shadow-md bg-neutral-800">
              <Image src="/example.jpg" alt="Artist 1" width={300} height={200} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-bold text-white">Artist 1</h3>
              <p className="text-gray-400">Especialista en tatuajes de estilo tradicional.</p>
            </div>
            <div className="p-6 border rounded-lg shadow-md bg-neutral-800">
              <Image src="/example.jpg" alt="Artist 1" width={300} height={200} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-bold text-white">Artist 1</h3>
              <p className="text-gray-400">Especialista en tatuajes de estilo tradicional.</p>
            </div>
            <div className="p-6 border rounded-lg shadow-md bg-neutral-800">
              <Image src="/example.jpg" alt="Artist 1" width={300} height={200} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-bold text-white">Artist 1</h3>
              <p className="text-gray-400">Especialista en tatuajes de estilo tradicional.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 bg-neutral-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">Our Prices</h2>
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

      <section id="products" className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">Products</h2>
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

      <section className="py-16 bg-neutral-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">Testimonials</h2>
          <div className="space-y-8">
            {/* Repeat for each testimonial */}
            <div className="bg-neutral-700 p-6 rounded-lg shadow-md">
              <p className="text-gray-400">"Excellent service, the tattoo artist understood exactly what I wanted. I will return!"</p>
              <h3 className="mt-4 font-bold text-white">Satisfied Customer</h3>
            </div>
            <div className="bg-neutral-700 p-6 rounded-lg shadow-md">
              <p className="text-gray-400">"Excellent service, the tattoo artist understood exactly what I wanted. I will return!"</p>
              <h3 className="mt-4 font-bold text-white">Satisfied Customer</h3>
            </div>
            <div className="bg-neutral-700 p-6 rounded-lg shadow-md">
              <p className="text-gray-400">"Excellent service, the tattoo artist understood exactly what I wanted. I will return!"</p>
              <h3 className="mt-4 font-bold text-white">Satisfied Customer</h3>
            </div>
            <div className="bg-neutral-700 p-6 rounded-lg shadow-md">
              <p className="text-gray-400">"Excellent service, the tattoo artist understood exactly what I wanted. I will return!"</p>
              <h3 className="mt-4 font-bold text-white">Satisfied Customer</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-neutral-800 p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-white">How do I care for my tattoo after getting it?</h4>
              <p className="text-gray-400">We provide detailed instructions and recommended products for aftercare.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Location</h2>
          <div className="flex h-64 md:h-96">
            <iframe
              className='w-1/2'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41840.404680117914!2d-122.34491178889505!3d49.04814267642056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54844bdc9eb95697%3A0x73a48d3f92b3193e!2sDesigner%20Ink%20Tattoo!5e0!3m2!1ses!2scl!4v1725241544253!5m2!1ses!2scl"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: 'invert(1) brightness(1) grayscale(100%)'
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="flex-1 p-6 border rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-gray-700 mb-4"><strong>Address:</strong> 123 Fake Street, Santiago, Chile</p>
              <p className="text-gray-700 mb-4"><strong>Hours:</strong> Monday to Saturday, 10:00 AM - 8:00 PM</p>
              <p className="text-gray-700 mb-4"><strong>Phone:</strong> +56 9 1234 5678</p>
              <p className="text-gray-700"><strong>Email:</strong> contact@madnesstattooart.cl</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">Book Your Appointment Today!</h2>
          <Link href="#booking" className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">Book Now</Link>
        </div>
      </section>

      <footer className="bg-neutral-900 text-gray-400 py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Designer Ink Tattoo. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <Link href="#" className="hover:text-red-600">Facebook</Link>
            <Link href="#" className="hover:text-red-600">Instagram</Link>
            <Link href="#" className="hover:text-red-600">Twitter</Link>
          </div>
        </div>
      </footer>
      <BackToTop />
    </main>
  );
}
