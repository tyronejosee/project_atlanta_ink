import { USE_API } from "@/config/constants";
import { IArtist, ITattoo } from "@/interfaces";
import { fetcher } from "@/lib/api";
import { loadJson, loadMultipleJson } from "@/lib/load-json";

export async function getArtists() {
  if (USE_API) {
    return await fetcher("/artists");
  }
  return await loadJson("src/data/artists.json");
}

export async function getArtistBySlug(slug: string) {
  if (USE_API) {
    return await fetcher<IArtist>(`/artists/${slug}`);
  }
  const artists = await loadJson<IArtist[]>("src/data/artists.json");
  const artist = artists.find((a) => a.slug === slug);
  if (!artist) throw new Error("Artist not found");
  return artist;
}

export async function getTattoosByArtist(slug: string) {
  if (USE_API) {
    return await fetcher<ITattoo[]>(`/artists/${slug}/tattoos`);
  }
  const [artists, tattoos] = await loadMultipleJson([
    "src/data/artists.json",
    "src/data/tattoos.json",
  ]);
  const artist = artists.find((artist: IArtist) => artist.slug === slug);
  if (!artist) throw new Error("Artist not found");
  const artistTattoos = tattoos.filter(
    (tattoo: ITattoo) => tattoo.artist === artist.name,
  );
  if (!artistTattoos.length) throw new Error("Tattoos not found");
  return artistTattoos;
}
