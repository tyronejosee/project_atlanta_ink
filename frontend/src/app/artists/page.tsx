import type { Metadata } from "next";
import { getData } from "@/lib/api";
import { IArtist } from "@/types";
import { ArtistList } from "@/components/artists";

export const metadata: Metadata = {
  title: "Artists - Atlanta Ink",
  description: "Artist List",
};

export default async function ArtistsPage() {
  const artists = await getData<IArtist[]>("artists");

  return (
    <main className="px-4 py-8 mx-auto max-w-7xl">
      <h1 className="text-4xl font-bold mb-8 text-center">Artists</h1>
      <ArtistList artists={artists} />
    </main>
  );
};
