"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>

      {loading && (

        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: .6 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#050B16]"
        >

          <div className="flex flex-col items-center">

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                rotate: [0, 3, -3, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >

              <Image
                src="/logo.png"
                alt="TAGDEMPT"
                width={120}
                height={120}
                priority
              />

            </motion.div>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 text-3xl font-black tracking-[6px] text-yellow-400"
            >
              TAGDEMPT
            </motion.h2>

            <p className="mt-2 tracking-[3px] text-gray-400">
              PROMOTIONS
            </p>

            <div className="mt-10 h-1 w-72 overflow-hidden rounded-full bg-white/10">

              <motion.div
                className="h-full bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.3,
                  ease: "linear",
                }}
              />

            </div>

          </div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}