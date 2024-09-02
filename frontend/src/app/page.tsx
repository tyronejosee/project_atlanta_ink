import { Footer } from '@/components/layout';
import { BackToTop } from '@/components/ui/backToTop';
import { Artists, FAQs, FinalCTA, Hero, Location, Pricing, Products, Testimonials } from '@/components/sections';

export default function Home() {
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
