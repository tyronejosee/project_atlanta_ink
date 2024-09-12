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
      <Pricing />
      <Products />
      <FAQs />
      <Location />
      <FinalCTA />
      <BackToTop />
    </main>
  );
}
