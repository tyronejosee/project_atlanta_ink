import {
  ArtistSection,
  FAQSection,
  FinalCTASection,
  HeroSection,
  LocationSection,
  PriceSection,
  ProductSection,
  PromotionSection,
  ServiceSection,
  TattooSection
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
      <HeroSection />
      <PromotionSection />
      <ServiceSection services={services} />
      <TattooSection />
      <ArtistSection artists={artists} />
      <PriceSection />
      <ProductSection />
      <FAQSection faqs={faqs} />
      <LocationSection />
      <FinalCTASection />
    </main>
  );
}
