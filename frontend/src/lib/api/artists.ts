import type { ArtistResponse, TattooResponse } from "@/types";

import { fetcher } from "@/lib/api";
import { USE_API } from "@/config/constants";

import artistsData from "@/data/artists.json";
import tattoosData from "@/data/tattoos.json";

export async function getArtists() {
  if (USE_API) return await fetcher<ArtistResponse[]>("/artists");
  return artistsData;
}

export async function getArtistBySlug(slug: string) {
  if (USE_API) return await fetcher<ArtistResponse>(`/artists/${slug}`);
  const artist = artistsData.find((a) => a.slug === slug);
  if (!artist) throw new Error("Artist not found");
  return artist;
}

export async function getTattoosByArtist(slug: string) {
  if (USE_API)
    return await fetcher<TattooResponse[]>(`/artists/${slug}/tattoos`);
  const artist = artistsData.find(
    (artist: ArtistResponse) => artist.slug === slug,
  );
  if (!artist) throw new Error("Artist not found");
  const artistTattoos = tattoosData.filter(
    (tattoo: TattooResponse) => tattoo.artist === artist.name,
  );
  if (!artistTattoos.length) throw new Error("Tattoos not found");
  return artistTattoos;
}
