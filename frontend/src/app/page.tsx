import { Footer } from '@/components/layout';

import { Artists, FAQs, FinalCTA, Hero, Location, Pricing, Products, Testimonials } from '@/components/sections';
import { BackToTop } from '@/components/ui';

export default function HomePage() {

  return (
    <main>
      <Hero />
      <Artists />
      <Pricing />
      <Products />
      <Testimonials />
      <FAQs />
      <Location />
      <FinalCTA />
      <Footer />
      <BackToTop />
    </main>
  );
}
