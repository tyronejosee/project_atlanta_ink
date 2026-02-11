import type { Metadata } from "next";

import { Footer, MenuBar } from "@/components";
import { mainFont } from "@/config/fonts";
import { getCompany } from "@/lib/api/company";

import "../styles/globals.css";
import Providers from "./providers";

const SITE = {
  NAME: "Atlanta Ink - Tattoo Studio",
  DESCRIPTION:
    "Welcome to Atlanta Ink, your premier tattoo studio. We specialize in custom tattoo designs, ensuring every piece is unique and tailored to your vision. Book your session today!",
  AUTHOR: "Tyrone José",
  AUTHOR_URL: "https://github.com/tyronejosee",
  DOMAIN: "https://atlanta-ink-studio.vercel.app/",
};

const OG_IMAGES = {
  main: "og/atlanta-ink-seo.webp",
};

export const metadata: Metadata = {
  title: {
    default: "Homepage",
    template: `%s · ${SITE.NAME}`,
  },
  description: `${SITE.DESCRIPTION}`,
  authors: [{ name: SITE.AUTHOR, url: SITE.AUTHOR_URL }],
  publisher: SITE.AUTHOR,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    siteName: SITE.NAME,
    type: "website",
    locale: "en",
    url: SITE.DOMAIN,
    images: [
      {
        url: `${SITE.DOMAIN}/${OG_IMAGES.main}`,
        width: 1200,
        height: 630,
        alt: SITE.NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.NAME,
    description: SITE.DESCRIPTION,
    images: [
      {
        url: `${SITE.DOMAIN}/${OG_IMAGES.main}`,
        width: 1200,
        height: 630,
        alt: SITE.NAME,
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const company = await getCompany();

  return (
    <html lang="en" className="dark">
      <body className={mainFont.className}>
        <Providers initialData={company}>
          <MenuBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
