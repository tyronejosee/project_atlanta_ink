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
  Works
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
    </main>
  );
}
