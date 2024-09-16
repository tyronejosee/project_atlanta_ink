
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { HeaderSection } from "@/components/ui/header/HeaderSection";

export const FinalCTASection = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="max-w-screen-xl mx-auto text-center">
        <header>
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white">What are you waiting for, schedule your time!</h2>
        </header>
        <form className="max-w-screen-sm mx-auto flex flex-col space-y-4 px-4 xl:px-0">
          <input type="text" placeholder="example@example.com" className="bg-primary border-2 border-neutral-dark py-2.5 px-4 placeholder-neutral-darkgrey rounded-xl" />
          <Button
            as={Link}
            href="/contact"
            className="bg-neutral-dark w-full text-neutral-light font-medium rounded-xl"
          >
            Book Now
          </Button>
        </form>
      </div>
    </section>
  )
}
