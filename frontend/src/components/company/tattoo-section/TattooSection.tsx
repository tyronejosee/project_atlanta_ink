import React from "react"
import { TATTOO_EXAMPLE } from "@/config/constants"
import { ParallaxScrollMain } from "@/components"

export const TattooSection = () => {
  return (
    <section className="py-16">
      <div className="text-center">
        <header className="space-y-4 mb-8">
          <span className="text-xl font-bold text-primary">Check out our</span>
          <h2 className="text-6xl font-bold text-white">Works</h2>
        </header>
        <div>
          <ParallaxScrollMain images={TATTOO_EXAMPLE} />
        </div>
      </div>
    </section>
  )
}