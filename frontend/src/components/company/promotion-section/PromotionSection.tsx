"use client";

import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";

export const PromotionSection = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push(`/bookings?firstTime=true`);
  };

  return (
    <section
      className="relative h-96 md:h-72 flex justify-center items-center bg-cover bg-no-repeat md:bg-fixed px-4 md:px-0"
      style={{ backgroundImage: `url("/images/hero.webp")` }}
    >
      <header className="flex flex-col justify-center items-center space-y-4">
        <h2 className="text-4xl md:text-6xl font-bold">
          Get <span className="text-primary font-black">15%</span> discount for
          your first tattoo
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id doloremque
          eveniet accusamus nulla non nam magnam.
        </p>
        <Button
          onClick={handleButtonClick}
          variant="flat"
          className="bg-neutral-light text-neutral-dark rounded-xl"
        >
          Make an Appointment
        </Button>
      </header>
    </section>
  );
};
