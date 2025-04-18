import type { Metadata } from "next";

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
// import { getProducts } from "@/lib/api";

export const metadata: Metadata = {
  title: "Atlanta Ink - Tattoo Studio",
  description:
    "Welcome to Atlanta Ink, your premier tattoo studio. We specialize in custom tattoo designs, ensuring every piece is unique and tailored to your vision. Book your session today!",
  keywords:
    "atlanta ink, tattoo studio, custom tattoos, tattoo designs, tattoo artists, atlanta",
  openGraph: {
    title: "Atlanta Ink - Tattoo Studio",
    description:
      "Welcome to Atlanta Ink, your premier tattoo studio. We specialize in custom tattoo designs, ensuring every piece is unique and tailored to your vision. Book your session today!",
    url: "https://atlanta-ink-studio.vercel.app/",
    images: [
      {
        url: "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1727889010/Atlanta%20Ink%20API/atlanta-ink-seo.webp",
        width: 1280,
        height: 720,
        alt: "Atlanta Ink Seo",
      },
    ],
    siteName: "Atlanta Ink",
  },
};

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
