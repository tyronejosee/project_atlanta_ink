"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { DEFAULT_IMAGE } from "@/config/constants";
import { IProduct } from "@/interfaces";

interface Props {
  products: IProduct[];
}

export const ProductList = ({ products }: Props) => {
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
    hidden: { opacity: 0, x: 0 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4 xl:px-0"
      ref={ref}
    >
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          className="bg-neutral-darkgrey rounded-xl p-2 group"
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          transition={{
            duration: 0.3,
            delay: index * 0.1,
            ease: "easeOut",
          }}
        >
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            className="bg-neutral-darkgrey shadow-lg rounded-xl overflow-hidden"
          >
            <figure className="w-full h-60 relative rounded-lg overflow-hidden">
              <Image
                src={product.image || DEFAULT_IMAGE}
                alt={product.name}
                fill
                style={{ objectFit: "cover" }}
                className="object-cover rounded-b-xl"
              />
            </figure>
            <div className="p-4">
              <h3 className="text-lg font-semibold pb-2 mb-2 border-b border-b-neutral-gray group-hover:border-b-primary line-clamp-2">
                {product.name}
              </h3>
              <span>{product.price}</span>
            </div>
          </Link>
        </motion.div>
      ))}
    </section>
  );
};
