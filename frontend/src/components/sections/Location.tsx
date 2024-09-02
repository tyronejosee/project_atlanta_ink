export const Location = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-6xl font-bold mb-8">Our Location</h2>
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
  )
}
