export const Location = () => {
  return (
    <section className="py-16">
      <div className="mx-auto text-center">
        <header className="space-y-4 mb-8">
          <span className="text-xl font-bold text-primary">Lorem ipsum dolor sit</span>
          <h2 className="text-6xl font-bold">Our Location</h2>
        </header>
        <div className="flex h-64 md:h-96">
          <div className="relative md:w-1/2 flex flex-col justify-center items-center bg-neutral-darkgrey overflow-x-hidden">
            <h3 className="text-3xl text-primary font-bold mb-2">Contact Information</h3>
            <span className="text-lg text-neutral-gray font-bold mb-4">Dont wait any longer contact us</span>
            <p><strong>Address:</strong> 1039 Grant St SE A10, Atlanta, GA 30315, US</p>
            <p><strong>Hours:</strong> Monday to Saturday, 12:00 PM - 20:00 PM</p>
            <p><strong>Phone:</strong> +1 404-123-1234</p>
            <p><strong>Email:</strong> contact@atlantaink.com</p>
          </div>
          <iframe
            className="md:w-1/2"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6636.66036172617!2d-84.38647250642092!3d33.7262772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f503115b8f1a9b%3A0xb75d1994ec7d096b!2sAtlanta Ink%3A Tattoo and Piercing!5e0!3m2!1ses!2scl!4v1725552961038!5m2!1ses!2scl"
            width="100%"
            height="100%"
            style={{
              border: "16px",
              filter: "invert(1) brightness(1) grayscale(100%)"
            }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
