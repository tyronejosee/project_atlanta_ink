"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { IArtist } from '@/types';
import Loading from '@/app/loading';

interface Props {
  artists: IArtist[];
}

export const ArtistList = ({ artists }: Props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 8000); // Simula un tiempo de carga
    return () => clearTimeout(timer);
  }, []);


  return (
    <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {loading && <Loading />}
      {artists.map((artist) => (
        <Link
          key={artist.id}
          href={`/artists/${artist.slug}`}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="w-full h-48 relative">
            <img
              src={artist.image}
              alt={artist.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{artist.name}</h3>
            <p className="text-gray-600">{artist.description}</p>
          </div>
        </Link>
      ))}
    </section>
  );
};
