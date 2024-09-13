import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import "../styles/globals.css";
import { MenuBar, Footer, WhatsAppButton, BackToTop } from "@/components";

const space = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atlanta Ink - Tattoo Studio",
  description: "Tattoo Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={space.className}>
        <NextUIProvider>
          <MenuBar />
          {children}
          <Footer />
          <WhatsAppButton />
          <BackToTop />
        </NextUIProvider>
      </body>
    </html>
  );
}
