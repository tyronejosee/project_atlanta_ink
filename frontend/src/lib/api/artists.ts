import { fetcher } from "@/lib/api";
import { USE_API } from "@/config/constants";
import { IArtist, ITattoo } from "@/interfaces";

import artists from "@/data/artists.json";
import tattoos from "@/data/tattoos.json";

export async function getArtists() {
  if (USE_API) return await fetcher("/artists");
  return artists;
}

export async function getArtistBySlug(slug: string) {
  if (USE_API) return await fetcher<IArtist>(`/artists/${slug}`);
  const artist = artists.find((a) => a.slug === slug);
  if (!artist) throw new Error("Artist not found");
  return artist;
}

export async function getTattoosByArtist(slug: string) {
  if (USE_API) return await fetcher<ITattoo[]>(`/artists/${slug}/tattoos`);
  const artist = artists.find((artist: IArtist) => artist.slug === slug);
  if (!artist) throw new Error("Artist not found");
  const artistTattoos = tattoos.filter(
    (tattoo: ITattoo) => tattoo.artist === artist.name,
  );
  if (!artistTattoos.length) throw new Error("Tattoos not found");
  return artistTattoos;
}
