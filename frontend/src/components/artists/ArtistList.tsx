import Link from "next/link";
import { IArtist } from "@/types/global";
import Image from "next/image";
import { DEFAULT_IMAGE } from "@/utils/constants";
import { Badge } from "@/components";

interface Props {
  artists: IArtist[];
}

export const ArtistList = ({ artists }: Props) => {
  return (
    <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {artists.map((artist) => (
        <Link
          key={artist.id}
          href={`/artists/${artist.slug}`}
          className="bg-neutral-darkgrey shadow-lg overflow-hidden"
        >
          <div className="w-full h-60 relative">
            <Image
              src={artist.image || DEFAULT_IMAGE}
              alt={artist.name}
              fill
              style={{ objectFit: "cover" }}
              className="object-cover obje"
            />
          </div>
          <div className="p-4">
            <h3 className="text-center text-xl font-semibold pb-2 mb-2 border-b border-b-neutral-gray">{artist.name}</h3>
            <div className="flex justify-center items-center h-10">
              <ul className="flex space-x-1">
                {artist.styles.map((style) => (
                  <li key={style.id}>
                    <Badge variant={"secondary"} className="text-xs">{style.name}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};
