"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { SCHEDULE_LIST } from "@/config/constants";
import { HeaderPage } from "@/components";
import { useAnimateOnView } from "@/hooks";

export const ScheduleList = () => {
  const { ref, controls, itemVariants } = useAnimateOnView(0.1, false);

  return (
    <section>
      <HeaderPage
        title="Our Hours"
        subtitle="Visit us during our operating hours for all your tattoo needs."
        headingLevel="h2"
      />
      <div className="grid grid-cols-1 gap-4">
        <ul
          className="grid grid-col-1 divide-y-4 divide-dashed divide-neutral-darkgrey"
          ref={ref}
        >
          {SCHEDULE_LIST.map((schedule, idx) => (
            <motion.li
              key={schedule.id}
              variants={itemVariants}
              initial="hidden"
              animate={controls}
              transition={{
                duration: 0.3,
                delay: idx * 0.1,
                ease: "easeOut",
              }}
              className="group px-4 py-4 flex items-center"
            >
              <figure className="mr-4">
                <Calendar className="size-6" />
              </figure>
              <div className="w-full space-y-2">
                <div className="flex justify-between">
                  <span className="group-hover:font-bold group-hover:text-primary">
                    {schedule.day}
                  </span>
                  <span className="group-hover:font-bold group-hover:text-primary">
                    {schedule.schedule}
                  </span>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};
