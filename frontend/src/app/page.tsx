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
  TattooSection,
} from "@/components";
import {
  getArtists,
  getFaqs,
  getPrices,
  getServices,
  getTattoos,
} from "@/lib/api";

export default async function HomePage() {
  const [services, tattoos, artists, prices, faqs] = await Promise.all([
    getServices(),
    getTattoos(),
    getArtists(),
    getPrices({ is_featured: true }),
    getFaqs(),
  ]);

  return (
    <main>
      <HeroSection />
      <PromotionSection />
      <ServiceSection services={services} />
      <TattooSection tattoos={tattoos} />
      <ArtistSection artists={artists} />
      <PriceSection prices={prices} />
      <ProductSection />
      <FAQSection faqs={faqs} />
      <LocationSection />
      <FinalCTASection />
    </main>
  );
}
