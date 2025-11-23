"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="col-span-full lg:col-span-1 lg:order-2 order-1 p-4 relative mt-16 lg:mt-0 flex items-center justify-center">
      {/* Main wrapper animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className="w-[340px] h-[340px] sm:w-[300px] sm:h-[300px] xl:w-[498px] xl:h-[498px] mix-blend-lighten"
      >
        <Image
          src="/images/me.png"
          priority
          quality={100}
          fill
          alt="Mohamed Abdelhakem"
          className="object-contain p-4"
        />
      </motion.div>

      {/* Fade-in delay wrapper */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {/* Rotating SVG Ring */}
        <motion.svg
          className="w-[380px] h-[380px] sm:w-[320px] sm:h-[320px] xl:w-[500px] xl:h-[500px]"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
