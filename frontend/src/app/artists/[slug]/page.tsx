import { notFound } from 'next/navigation';
import Image from 'next/image';

import { getBySlug } from '@/lib/api';
import { IArtist } from '@/types';
import { Instagram } from '@/components/icons';
import { Badge, ParallaxScroll } from '@/components/ui';
import { images } from '@/utils/constants';

interface Props {
  params: { slug: string };
}

export default async function ArtistDetailPage({ params }: Props) {
  const { slug } = params;

  try {
    const artist = await getBySlug<IArtist>('artists', slug);

    if (!artist) { notFound(); }

    return (
      <section className="bg-neutral-dark max-w-screen-xl mx-auto flex mt-16 min-h-screen">
        <section className="w-96 flex flex-col p-4 space-y-4">
          <Image
            src={artist.profile}
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
                <Instagram />
              </a>
            )}
          </div>
        </section>
        <section className="w-full p-4">
          <ParallaxScroll images={images} />
        </section>
      </section>
    );
  } catch (error) {
    return (
      <main className="px-4 py-8 mx-auto max-w-4xl">
        <p>Error loading artist data.</p>
      </main>
    );
  }
}
