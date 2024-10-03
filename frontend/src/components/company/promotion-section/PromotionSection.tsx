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
      style={{ backgroundImage: `url("/images/promotion-image.webp")` }}
    >
      <header className="flex flex-col justify-center items-center space-y-4">
        <h2 className="text-4xl md:text-6xl font-bold">
          Get <span className="text-primary font-black">15%</span> discount for
          your first tattoo
        </h2>
        <p>
          Book your appointment and take advantage of this special offer for new
          clients. Its the perfect time to start your next tattoo.
        </p>
        <Button
          onClick={handleButtonClick}
          color="primary"
          className="text-neutral-light font-medium"
        >
          Make an Appointment
        </Button>
      </header>
    </section>
  );
};
