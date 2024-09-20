"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IArtist } from "@/interfaces";
import { DEFAULT_IMAGE } from "@/config/constants";
import { Badge } from "@/components";

interface Props {
  artists: IArtist[];
}

export const ArtistList = ({ artists }: Props) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-4" ref={ref}>
      {artists.map((artist, index) => (
        <motion.div
          key={artist.id}
          className="bg-neutral-darkgrey rounded-xl p-2 group"
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          transition={{
            duration: 0.5,
            delay: index * 0.2,
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
