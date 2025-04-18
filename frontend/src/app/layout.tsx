import type { Metadata } from "next";
import { NextUIProvider } from "@nextui-org/react";
import "../styles/globals.css";
import { mainFont } from "@/config/fonts";
// import { getCompany } from "@/lib/api";
import { MenuBar, Footer, DataProvider } from "@/components";
import { getCompany } from "@/lib/api/company";

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
      <body className={mainFont.className}>
        <NextUIProvider>
          <DataProvider initialData={company}>
            <MenuBar />
            {children}
            <Footer />
          </DataProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
