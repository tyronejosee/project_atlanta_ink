import React from 'react'
import { tattoosExample } from '@/utils/constants'
import { ParallaxScrollMain } from '../ui/ParallaxScrollMain'

export const Works = () => {
  return (
    <section className="py-16">
      <div className="text-center">
        <header className="space-y-4 mb-8">
          <span className="text-xl font-bold text-primary">Check out our</span>
          <h2 className="text-6xl font-bold text-white">Works</h2>
        </header>
        <div>
          <ParallaxScrollMain images={tattoosExample} />
        </div>
      </div>
    </section>
  )
}
