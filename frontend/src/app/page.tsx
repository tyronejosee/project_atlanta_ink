import {
  Artists,
  FAQs,
  FinalCTA,
  Hero,
  Location,
  Pricing,
  Products,
  Promotion,
  Services,
  Testimonials,
  Works,
  BackToTop
} from "@/components";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Promotion />
      <Services />
      <Works />
      <Artists />
      <Testimonials />
      <Pricing />
      <Products />
      <FAQs />
      <Location />
      <FinalCTA />
      <BackToTop />
    </main>
  );
}
