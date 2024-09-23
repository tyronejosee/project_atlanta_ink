import type { Metadata } from "next";
import { getArtists } from "@/lib/api";
import { ArtistList, EmptyList, HeaderPage } from "@/components";

export const metadata: Metadata = {
  title: "Artists - Atlanta Ink",
  description: "List of our team of artists",
};

export default async function ArtistsPage() {
  const artists = await getArtists();

  return (
    <section className="max-w-screen-xl mx-auto my-16">
      {artists.length > 0 ? (
        <>
          <HeaderPage title="Our Artists" />
          <ArtistList artists={artists} />
        </>
      ) : (
        <EmptyList content="artists" />
      )}
    </section>
  );
}
