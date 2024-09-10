import { notFound } from "next/navigation";
import Image from "next/image";
import { getBySlug, getTattoosByArtist } from "@/lib/api";
import { IArtist } from "@/types";
import { Instagram, YouTube } from "@/components/icons";
import { Badge, ParallaxScroll } from "@/components/ui";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params;

  try {
    const artist = await getBySlug<IArtist>("artists", slug);

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
  const { slug } = params;
  const [artist, tattoos] = await Promise.all([
    getBySlug<IArtist>("artists", slug),
    getTattoosByArtist<[]>(slug),
  ]);

  if (!artist) return notFound()
  if (!tattoos) return notFound()

  return (
    <section className="bg-neutral-dark max-w-screen-xl mx-auto flex mt-16 min-h-screen">
      <section className="w-96 flex flex-col p-4 space-y-4">
        <Image
          src={artist.image}
          alt={artist.name}
          width={300}
          height={300}
          className="w-full rounded-full mb-4"
        />
        <div>
          <h1 className="text-4xl font-bold mb-2">{artist.name}</h1>
          <p className="text-sm text-neutral-gray line-clamp-4">{artist.description}</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Styles:</h2>
          <ul className="flex space-x-1">
            {artist.styles.map((style) => (
              <li key={style.id}>
                <Badge>{style.name}</Badge>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
          {artist.instagram && (
            <a href={artist.instagram} target="_blank" rel="noopener noreferrer">
              <Instagram />
            </a>
          )}
          {artist.whatsapp && (
            <a href={`https://wa.me/${artist.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <YouTube />
            </a>
          )}
        </div>
      </section>
      <section className="w-full p-4">
        <ParallaxScroll images={tattoos} />
      </section>
    </section>
  );
}
