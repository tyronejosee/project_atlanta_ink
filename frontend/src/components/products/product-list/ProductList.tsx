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
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls, products]);

  const itemVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
      ref={ref}
    >
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          className="group"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{
            duration: 0.3,
            delay: index * 0.1,
            ease: "easeOut",
          }}
        >
          <Link href={`/products/${product.slug}`}>
            <figure className="relative w-full h-0 pb-[100%] border border-neutral-800 rounded-xl overflow-hidden">
              <Image
                src={product.image || DEFAULT_IMAGE}
                alt={product.name}
                fill
                className="transform transition-transform duration-300 group-hover:scale-110"
              />
            </figure>
            <div className="pt-4">
              <h3 className="line-clamp-2 group-hover:font-bold">
                {product.name}
              </h3>
              <p className="text-neutral-gray line-clamp-1">{product.brand}</p>
              <p className="text-xl font-extrabold text-primary">
                ${product.price}
              </p>
            </div>
          </Link>
        </motion.div>
      ))}
    </section>
  );
};
