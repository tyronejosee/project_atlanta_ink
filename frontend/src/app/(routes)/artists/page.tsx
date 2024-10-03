import React from "react";
import type { Metadata } from "next";
import { getArtists } from "@/lib/api";
import { ArtistList, EmptyList, HeaderPage } from "@/components";

export const metadata: Metadata = {
  title: "Artists - Atlanta Ink",
  description:
    "Meet our tattoo artists. Each has their own style and is ready to help you create the tattoo you want. Browse their portfolios and find the perfect artist for your next design",
  keywords: "artists, tattoo artists, atlanta",
};

export default async function ArtistsPage() {
  const artists = await getArtists();

  return (
    <main className="max-w-screen-xl mx-auto my-16 px-4 xl:px-0">
      {artists.length > 0 ? (
        <>
          <HeaderPage
            title="Our Artists"
            subtitle="Meet the talented artists who bring your designs to life."
          />
          <ArtistList artists={artists} />
        </>
      ) : (
        <EmptyList content="artists" />
      )}
    </main>
  );
}
