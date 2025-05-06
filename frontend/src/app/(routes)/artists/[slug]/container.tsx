"use client";

import type { ArtistResponse, StyleResponse, TattooResponse } from "@/types";

import Link from "next/link";
import { Chip, Image } from "@heroui/react";
import {
  Instagram,
  EmptyList,
  WhatsApp,
  TattooList,
  BookingButton,
} from "@/components";
import { DEFAULT_IMAGE } from "@/config/constants";

type Props = {
  artist: ArtistResponse;
  tattoos: TattooResponse[];
};

export default function ArtistsBySlugContainer({ artist, tattoos }: Props) {
  const hasTattoos = tattoos && tattoos.length > 0;
  return (
    <section className="max-w-screen-xl mx-auto sm:flex mt-16 min-h-screen">
      <section className="flex justify-center items-center sm:flex-col sm:justify-normal sm:w-96 p-4 space-y-4">
        <Image
          isBlurred
          src={artist.image || DEFAULT_IMAGE}
          alt={artist.name}
          width={300}
          height={300}
          radius="none"
          loading="eager"
          className="object-cover size-40 rounded-none sm:size-64 sm:w-full border border-neutral-800"
        />
        <div className="px-4 sm:px-0 space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-neutral-light">
            {artist.name}
          </h1>
          <div>
            <ul className="flex space-x-1">
              {artist.styles.map((style: StyleResponse) => (
                <li key={style.id}>
                  <Chip
                    color="primary"
                    variant="bordered"
                    size="sm"
                    className="text-xs rounded-none"
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
