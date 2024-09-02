import Image from 'next/image';

export const Artists = () => {
  return (
    <section id="artists" className="py-16">
      <div className="max-w-screen-xl mx-auto">
        <p className="text-center text-xl font-bold mb-8">Our team</p>
        <h2 className="text-6xl font-bold mb-8 text-center">ARTISTS</h2>
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
  )
}

