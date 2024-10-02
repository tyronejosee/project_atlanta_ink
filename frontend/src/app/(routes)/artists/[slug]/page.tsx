import { notFound } from "next/navigation";
import Image from "next/image";
import { Chip } from "@nextui-org/react";

import { DEFAULT_IMAGE } from "@/config/constants";
import { getArtist, getTattoosByArtist } from "@/lib/api";
import { Instagram, EmptyList, WhatsApp, TattooList } from "@/components";
import { IStyle } from "@/interfaces";
import Link from "next/link";
import { BookingButton } from "@/components";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props) {
  const { slug } = params;

  try {
    const artist = await getArtist(slug);

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
    getArtist(slug),
    getTattoosByArtist(slug),
  ]);

  if (!artist) return notFound();
  const hasTattoos = tattoos && tattoos.length > 0;

  return (
    <section className="max-w-screen-xl mx-auto sm:flex mt-16 min-h-screen">
      <section className="flex justify-center items-center sm:flex-col sm:justify-normal sm:w-96 p-4 space-y-4">
        <Image
          src={artist.image || DEFAULT_IMAGE}
          alt={artist.name}
          width={300}
          height={300}
          className="object-cover size-40 rounded-xl sm:size-64 sm:w-full border border-neutral-800"
        />
        <div className="px-4 sm:px-0 space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-neutral-light">
            {artist.name}
          </h1>
          <div>
            <ul className="flex space-x-1">
              {artist.styles.map((style: IStyle) => (
                <li key={style.id}>
                  <Chip
                    color="primary"
                    variant="bordered"
                    size="sm"
                    className="text-xs rounded-sm"
                  >
                    {style.name}
                  </Chip>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xs sm:text-sm text-neutral-gray line-clamp-4">
            {artist.description}
          </p>
          <div className="flex items-center space-x-2">
            <BookingButton artistID={artist.id} />
            {artist.instagram && (
              <Link
                href={artist.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </Link>
            )}
            {artist.whatsapp && (
              <Link
                href={`https://wa.me/${artist.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsApp />
              </Link>
            )}
          </div>
        </div>
      </section>
      <section className="w-full p-4">
        {hasTattoos ? (
          <TattooList tattoos={tattoos} className="md:grid-cols-3" />
        ) : (
          <EmptyList content="Tattoos" />
        )}
      </section>
    </section>
  );
}
