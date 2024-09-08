
import Link from "next/link";
import { Button } from "@nextui-org/react";

export const FinalCTA = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="max-w-screen-xl mx-auto text-center">
        <header>
          <h2 className="text-3xl font-bold mb-8 text-white">What are you waiting for, schedule your time!</h2>
        </header>
        <form className="max-w-screen-sm mx-auto flex flex-col space-y-4">
          <input type="text" placeholder="example@example.com" className="bg-primary border-2 border-neutral-dark py-2.5 px-4 placeholder-neutral-darkgrey" />
          <Button
            as={Link}
            href="/contact"
            className="bg-neutral-dark w-full text-neutral-light font-medium rounded-none"
          >
            Book Now
          </Button>
        </form>
      </div>
    </section>
  )
}
