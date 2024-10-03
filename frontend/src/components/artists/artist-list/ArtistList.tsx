"use client";

import Link from "next/link";
import Image from "next/image";
import { Chip } from "@nextui-org/react";
import { motion } from "framer-motion";
import { IArtist } from "@/interfaces";
import { DEFAULT_IMAGE } from "@/config/constants";
import { useAnimateOnView } from "@/hooks";

interface Props {
  artists: IArtist[];
}

export const ArtistList = ({ artists }: Props) => {
  const { ref, controls, itemVariants } = useAnimateOnView(0.1, false);

  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-4" ref={ref}>
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
          className="group"
        >
          <Link href={`/artists/${artist.slug}`}>
            <figure className="relative w-full h-0 pb-[100%] border border-neutral-800 rounded-xl overflow-hidden">
              <Image
                src={artist.image || DEFAULT_IMAGE}
                alt={artist.name}
                fill
                className="transform transition-transform duration-300 group-hover:scale-110"
              />
            </figure>
            <div className="p-4 text-center space-y-4">
              <h3 className="group-hover:font-bold line-clamp-1">
                {artist.name}
              </h3>
              <div className="flex justify-center items-center h-10">
                <ul className="flex flex-col space-y-1 sm:space-y-0 sm:flex-row sm:space-x-1">
                  {artist.styles.map((style) => (
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
            </div>
          </Link>
        </motion.div>
      ))}
    </section>
  );
};
