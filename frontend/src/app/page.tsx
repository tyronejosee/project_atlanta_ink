import { Metadata } from "next";
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
  getProducts,
  getServices,
  getTattoos,
} from "@/lib/api";

export const metadata: Metadata = {
  title: "Atlanta Ink - Tattoo Studio ",
  description:
    "Welcome to Atlanta Ink, your premier tattoo studio. We specialize in custom tattoo designs, ensuring every piece is unique and tailored to your vision. Book your session today!",
  keywords:
    "atlanta ink, tattoo studio, custom tattoos, tattoo designs, tattoo artists, atlanta",
};

export default async function HomePage() {
  const [services, tattoos, artists, prices, products, faqs] =
    await Promise.all([
      getServices(),
      getTattoos(),
      getArtists(),
      getPrices({ is_featured: true }),
      getProducts(),
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
      <ProductSection products={products} />
      <FAQSection faqs={faqs} />
      <LocationSection />
      <FinalCTASection />
    </main>
  );
}
