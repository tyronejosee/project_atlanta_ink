import { Button } from "@nextui-org/react";

export const PromotionSection = () => {
  return (
    <section
      className="relative flex justify-center items-center h-72 bg-cover bg-no-repeat md:bg-fixed"
      style={{ backgroundImage: `url("/images/hero.webp")` }}
    >
      <header className="flex flex-col justify-center items-center space-y-4">
        <h2 className="text-6xl font-bold">Get <span className="text-primary font-black">15%</span> discount for your first tattoo</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id doloremque eveniet accusamus nulla non nam magnam.</p>
        <Button href="#" variant="flat" className="bg-neutral-light text-neutral-dark rounded-xl">
          Make an Appointment
        </Button>
      </header>
      <div className="absolute inset-0 bg-neutral-darkgrey opacity-45"></div>
    </section>
  );
};
