"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[9999] h-1 origin-left bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-300"
      style={{
        scaleX: scrollYProgress,
        width: "100%",
      }}
    />
  );
}