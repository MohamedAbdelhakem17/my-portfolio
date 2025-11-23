"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  // Navigation
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <div key={pathname}>
        {/* Animation */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
        />
        {/* Content */}
        {children}
      </div>
    </AnimatePresence>
  );
}
