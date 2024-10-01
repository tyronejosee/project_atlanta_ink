"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { IArtist } from "@/interfaces";
import { DEFAULT_IMAGE } from "@/config/constants";
import { useAnimateOnView } from "@/hooks";
import { Badge } from "@/components";

interface Props {
  artists: IArtist[];
}

export const ArtistList = ({ artists }: Props) => {
  const { ref, controls, itemVariants } = useAnimateOnView(0.1, false);

  return (
    <section
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4 xl:px-0"
      ref={ref}
    >
      {artists.map((artist, idx) => (
        <motion.div
          key={artist.id}
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          transition={{
            duration: 0.3,
            delay: idx * 0.1,
            ease: "easeOut",
          }}
        >
          <Link href={`/artists/${artist.slug}`}>
            <figure className="w-full h-60 relative rounded-lg overflow-hidden">
              <Image
                src={artist.image || DEFAULT_IMAGE}
                alt={artist.name}
                fill
                style={{ objectFit: "cover" }}
                className="transform transition-transform duration-300 group-hover:scale-110 object-cover"
              />
            </figure>
            <div className="px-4 pt-4 text-center">
              <h3 className="text-xl font-semibold pb-2 mb-2 border-b border-b-neutral-gray group-hover:border-b-primary">
                {artist.name}
              </h3>
              <div className="flex justify-center items-center h-10">
                <ul className="flex space-x-1">
                  {artist.styles.map((style) => (
                    <li key={style.id}>
                      <Badge variant="secondary" className="text-xs">
                        {style.name}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </section>
  );
};
