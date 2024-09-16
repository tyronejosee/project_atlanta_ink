import type { Metadata } from "next";
import { getArtists } from "@/lib/api";
import { ArtistList, EmptyList, Headline } from "@/components";

export const metadata: Metadata = {
  title: "Artists - Atlanta Ink",
  description: "List of our team of artists",
};

export default async function ArtistsPage() {
  const artists = await getArtists();

  return (
    <section className="px-4 py-8 mx-auto max-w-7xl mt-16">
      {artists.length > 0 ? (
        <>
          <Headline title="Artists" className="pb-8 text-center" />
          <ArtistList artists={artists} />
        </>
      ) : (
        <EmptyList content="artists" />
      )}
    </section>
  );
};
