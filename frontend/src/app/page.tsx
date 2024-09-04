import { Footer } from '@/components/layout;
import { Artists, FAQs, FinalCTA, Hero, Location, Pricing, Products, Promotion, Services, Testimonials } from '@/components/sections';
import { BackToTop } from '@/components/ui';

export default function HomePage() {

  return (
    <main>
      <Hero />
      <Promotion />
      <Services />
      {/* <Works /> */}
      <Artists />
      <Testimonials />
      <Pricing />
      <Products />
      <FAQs />
      <Location />
      <FinalCTA />
      <Footer />
      <BackToTop />
    </main>
  );
}
