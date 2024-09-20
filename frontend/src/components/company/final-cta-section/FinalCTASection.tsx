"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input, Button } from "@nextui-org/react";

export const FinalCTASection = () => {
  const [phone, setPhone] = useState("");
  const router = useRouter();

  // TODO: Add types
  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push(`/bookings?phone=${encodeURIComponent(phone)}`);
  };

  return (
    <section className="py-16 bg-primary">
      <div className="max-w-screen-xl mx-auto text-center">
        <header>
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white">
            What are you waiting for, schedule your time!
          </h2>
        </header>
        <form
          className="max-w-screen-sm mx-auto flex flex-col space-y-4 px-4 xl:px-0"
          onSubmit={handleSubmit}
        >
          <Input
            type="text"
            size="lg"
            placeholder="+14040000000"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Button
            type="submit"
            className="bg-neutral-dark w-full text-neutral-light font-medium rounded-xl"
          >
            Book Now
          </Button>
        </form>
      </div>
    </section>
  );
};
