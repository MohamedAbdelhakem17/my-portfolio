"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

export default function AnimatedStaggerParent({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const parent: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 1.5,
      },
    },
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
      filter: "blur(6px)",
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        opacity: { duration: 0.4, ease: "easeOut" },
        scale: { duration: 0.45, ease: "easeOut" },
        filter: { duration: 0.45, ease: "easeOut" },
        y: {
          type: "spring",
          stiffness: 140,
          damping: 18,
        },
      },
    },
  };

  return (
    <motion.div
      variants={parent}
      initial="hidden"
      animate="show"
      className={className}
    >
      {Array.isArray(children) ? (
        children.map((childNode, i) => (
          <motion.div key={i} variants={child}>
            {childNode}
          </motion.div>
        ))
      ) : (
        <motion.div variants={child}>{children}</motion.div>
      )}
    </motion.div>
  );
}
