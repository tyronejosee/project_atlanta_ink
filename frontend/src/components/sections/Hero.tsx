import { Button } from "@nextui-org/button";

export const Hero = () => {
  // h-[calc(100vh-64px)]
  return (
    <section className="bg-cover bg-center h-[calc(100vh)] relative" style={{ backgroundImage: 'url(/hero.webp)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto flex flex-col items-center justify-center h-full text-center text-white relative z-10">
        <h2 className="text-7xl font-bold mb-4">DESIGNER STUDIO TATTOO</h2>
        <p className="max-w-screen-lg text-lg mb-6">Quisque posuere tellus purus, sed faucibus lectus consectetur blandit. Sed nec egestas orci, eget pulvinar lectus. Maecenas tempus, metus sit amet porttitor aliquet, sapien odio gravida lorem.</p>
        <Button className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700">Explore Tattoos</Button>
      </div>
    </section>
  )
}
