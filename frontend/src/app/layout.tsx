import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import "../styles/globals.css";
import { MenuBar, Footer, WhatsAppButton, BackToTop, DataProvider } from "@/components";
import { getCompany } from "@/lib/api";

const space = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atlanta Ink - Tattoo Studio",
  description: "Tattoo Studio",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const company = await getCompany();

  return (
    <html lang="en" className="dark">
      <body className={space.className}>
        <NextUIProvider>
          <DataProvider initialData={company}>
            <MenuBar />
            {children}
            <Footer />
            <WhatsAppButton />
            <BackToTop />
          </DataProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
