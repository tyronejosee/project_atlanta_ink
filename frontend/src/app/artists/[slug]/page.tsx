import { notFound } from 'next/navigation';

import { IArtist } from '@/types';
import { getBySlug } from '@/lib/api';

interface Props {
  params: { slug: string };
}

export default async function ArtistDetailPage({ params }: Props) {
  const { slug } = params;

  try {
    const artist = await getBySlug<IArtist>('artists', slug);
    console.log(artist)

    if (!artist) { notFound(); }

    return (
      <main className="px-4 py-8 mx-auto max-w-4xl">
        <div className="flex flex-col items-center">
          <img
            src={artist.profile}
            alt={artist.name}
            className="w-48 h-48 object-cover rounded-full mb-4"
          />
          <h1 className="text-4xl font-bold mb-2">{artist.name}</h1>
          <p className="text-lg text-gray-600 mb-4">{artist.description}</p>
        </div>
      </main>
    );
  } catch (error) {
    return (
      <main className="px-4 py-8 mx-auto max-w-4xl">
        <p>Error loading artist data.</p>
      </main>
    );
  }
}
