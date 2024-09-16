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
import { getArtists, getFaqs, getServices } from "@/lib/api";

export default async function HomePage() {
  const [services, artists, faqs] = await Promise.all([
    getServices(),
    getArtists(),
    getFaqs(),
  ]);

  return (
    <main>
      <Hero />
      <Promotion />
      <Services services={services} />
      <Works />
      <Artists artists={artists} />
      <Pricing />
      <Products />
      <FAQs faqs={faqs} />
      <Location />
      <FinalCTA />
    </main>
  );
}
