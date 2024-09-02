"use client";

import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Button } from "@nextui-org/react";
import { cn } from "@/lib/utils";

export const BackToTop = () => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [showing, setShowing] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
        setShowing(true);
      } else {
        if (direction < 0) {
          setVisible(true);
          setShowing(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  useEffect(() => {
    if (showing) {
      const timer = setTimeout(() => {
        setVisible(false);
        setShowing(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [showing]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "text-neutral-950 flex max-w-fit fixed top-16 inset-x-0 mx-auto rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[10] mt-2",
        )}
      >
        <Button radius="none" onClick={scrollToTop}>
          °°
          <span className="ml-2">Back to top</span>
        </Button>
      </motion.div>
    </AnimatePresence>
  );
};
