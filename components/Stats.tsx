"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: 15,
    suffix: "+",
    title: "سنة خبرة",
    text: "خبرة متراكمة في المجال العقاري",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#08152B] via-[#0B1D39] to-[#08152B] py-24">
      
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,.08),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="flex justify-center">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="w-full max-w-md rounded-[32px] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl transition-all hover:border-yellow-400 hover:shadow-[0_20px_60px_rgba(212,175,55,.18)]"
              >

                <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-yellow-400 to-amber-600 shadow-lg">
                  <Icon
                    size={38}
                    className="text-[#08152B]"
                  />
                </div>

                <h3 className="text-5xl font-black text-white">
                  <CountUp
                    end={item.value}
                    duration={3}
                  />
                  {item.suffix}
                </h3>

                <p className="mt-5 text-2xl font-black text-yellow-400">
                  {item.title}
                </p>

                <p className="mt-3 text-lg text-gray-300">
                  {item.text}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}