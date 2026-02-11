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
  BackToTop,
} from "@/components";
import { getFaqs, getPrices, getServices } from "@/lib/api/company";
import { getArtists } from "@/lib/api/artists";
import { getRandomTattoos } from "@/lib/api/tattoos";
import { getProducts } from "@/lib/api/products";

export default async function HomePage() {
  const [services, tattoos, artists, prices, productsData, faqs] =
    await Promise.all([
      getServices(),
      getRandomTattoos(),
      getArtists(),
      getPrices({ is_featured: true }),
      getProducts(),
      getFaqs(),
    ]);

  const { results: products } = productsData;

  return (
    <main>
      <HeroSection />
      <PromotionSection />
      <ServiceSection services={services} />
      <TattooSection tattoos={tattoos} />
      <ArtistSection artists={artists} />
      <PriceSection prices={prices} />
      <ProductSection products={products} />
      <FAQSection faqs={faqs} />
      <LocationSection />
      <FinalCTASection />
      <BackToTop />
    </main>
  );
}
