import type { Metadata } from "next";
import { getData } from "@/lib/api";
import { IArtist } from "@/types/global";
import { ArtistList, Headline } from "@/components";

export const metadata: Metadata = {
  title: "Artists - Atlanta Ink",
  description: "List of our team of artists",
};

export default async function ArtistsPage() {
  const artists = await getData<IArtist[]>("artists");

  return (
    <main className="px-4 py-8 mx-auto max-w-7xl mt-16">
      <Headline title="Artists" className="pb-8 text-center" />
      <ArtistList artists={artists} />
    </main>
  );
};
