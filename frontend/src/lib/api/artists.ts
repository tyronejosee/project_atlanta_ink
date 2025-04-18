import { fetcher } from "@/lib/api";
import { USE_API } from "@/config/constants";
import { IArtist, ITattoo } from "@/interfaces";

import artistsData from "@/data/artists.json";
import tattoosData from "@/data/tattoos.json";

export async function getArtists() {
  if (USE_API) return await fetcher("/artists");
  return artistsData;
}

export async function getArtistBySlug(slug: string) {
  if (USE_API) return await fetcher<IArtist>(`/artists/${slug}`);
  const artist = artistsData.find((a) => a.slug === slug);
  if (!artist) throw new Error("Artist not found");
  return artist;
}

export async function getTattoosByArtist(slug: string) {
  if (USE_API) return await fetcher<ITattoo[]>(`/artists/${slug}/tattoos`);
  const artist = artistsData.find((artist: IArtist) => artist.slug === slug);
  if (!artist) throw new Error("Artist not found");
  const artistTattoos = tattoosData.filter(
    (tattoo: ITattoo) => tattoo.artist === artist.name,
  );
  if (!artistTattoos.length) throw new Error("Tattoos not found");
  return artistTattoos;
}
