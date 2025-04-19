import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArtistBySlug, getTattoosByArtist } from "@/lib/api/artists";
import ArtistsBySlugContainer from "./container";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  try {
    const artist = await getArtistBySlug(slug);

    if (!artist) {
      return {
        title: "Artist Not Found",
        description: "The artist you are looking for does not exist.",
      };
    }

    return {
      title: `${artist.name} - Atlanta Ink`,
      description: `Explore tattoos by ${artist.name} at Atlanta Ink.`,
    };
  } catch {
    return {
      title: "Error",
      description: "An error occurred while loading the artist data.",
    };
  }
}

export default async function ArtistDetailPage({ params }: Props) {
  const { slug } = await params;
  const [artist, tattoos] = await Promise.all([
    getArtistBySlug(slug),
    getTattoosByArtist(slug),
  ]);

  if (!artist) return notFound();
  return <ArtistsBySlugContainer artist={artist} tattoos={tattoos} />;
}
