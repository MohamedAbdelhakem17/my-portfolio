"use client";

import STATS from "@/lib/constants/statistics.constant";
import { cn } from "@/lib/utils/cn";
import CountUp from "react-countup";

export default function Statistics() {
  return (
    <div className="col-span-full flex p-4 order-3 gap-6 items-center justify-between lg:mt-8 mt-4 flex-wrap pb-3">
      {STATS.map((item, index) => {
        return (
          <div
            key={index}
            className="flex-1 flex gap-2 items-center justify-center"
          >
            {/* Counter */}
            <CountUp
              end={item.value}
              duration={3}
              delay={1}
              className="text-4xl xl:text-6xl font-extrabold"
            />

            {/* Label */}
            <p
              className={cn(
                item.label.length < 15 ? "max-w-[100px]" : "max-w-[150px]",
                "leading-snug text-white/80"
              )}
            >
              {item.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}
