import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";
import { MenuBar, Footer } from "@/components/layout";
import { WhatsAppButton } from "@/components/ui";

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
        </NextUIProvider>
      </body>
    </html>
  );
}
