"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Building2,
  Handshake,
  MapPin,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden"
    >
      {/* Background */}

      <Image
        src="/hero.jpg"
        alt="TAGDEMPT PROMOTIONS"
        fill
        priority
        className="object-cover object-center scale-105"
      />

      {/* Overlay - lighter for clearer image */}

      <div className="absolute inset-0 bg-[#041226]/45" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#041226]/90 via-[#041226]/55 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#041226]/80 via-transparent to-transparent" />

      {/* Decorative Light */}

      <div className="absolute -right-52 top-20 h-[420px] w-[420px] rounded-full bg-yellow-500/10 blur-[130px]" />

      <div className="absolute -left-52 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="relative z-10 flex min-h-screen items-center">

        <div className="mx-auto w-full max-w-7xl px-6 py-32">

          {/* Brand */}

          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full border border-yellow-400/50 bg-[#08152B]/50 px-6 py-3 font-bold text-yellow-300 shadow-xl backdrop-blur-xl"
          >
            TAGDEMPT PROMOTIONS
          </motion.div>

          {/* Main Title */}

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-8 max-w-5xl text-5xl font-black leading-[1.2] text-white md:text-7xl lg:text-8xl"
          >
            نبني المستقبل
            <br />
            ونصنع قيمة تدوم للأجيال
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 max-w-3xl text-xl leading-10 text-gray-100"
          >
            شركة جزائرية متخصصة في الترقية العقارية والاستثمار،
            نطور مشاريع سكنية وتجارية تجمع بين الجودة والابتكار
            والشفافية، ونبني شراكات مستدامة تحقق قيمة حقيقية
            لعملائنا ومستثمرينا.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-wrap gap-5"
          >
            <a
              href="#projects"
              className="flex items-center gap-3 rounded-2xl bg-yellow-500 px-9 py-5 text-lg font-black text-[#08152B] shadow-2xl transition duration-300 hover:scale-105 hover:bg-yellow-400"
            >
              استكشف مشاريعنا
              <ArrowLeft size={22} />
            </a>

            <a
              href="/investment"
              className="rounded-2xl border-2 border-white/50 bg-[#08152B]/30 px-9 py-5 text-lg font-bold text-white shadow-xl backdrop-blur-xl transition duration-300 hover:bg-white hover:text-[#08152B]"
            >
              الاستثمار والشراكات
            </a>
          </motion.div>

          {/* Trust / Experience */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 flex flex-wrap gap-12"
          >
            <div>
              <div className="text-5xl font-black text-yellow-400">
                15
              </div>

              <div className="mt-2 text-gray-200">
                سنة خبرة
              </div>
            </div>

            <div>
              <div className="text-2xl font-black text-yellow-400">
                مشاريع عقارية
              </div>

              <div className="mt-2 text-gray-200">
                سكنية وتجارية
              </div>
            </div>

            <div>
              <div className="text-2xl font-black text-yellow-400">
                شراكات واستثمار
              </div>

              <div className="mt-2 text-gray-200">
                فرص وحلول عقارية
              </div>
            </div>
          </motion.div>

          {/* Cards */}

          <motion.div
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-20 grid gap-8 md:grid-cols-3"
          >
            {/* Card 1 */}

            <div className="rounded-3xl border border-yellow-500/20 bg-[#08152B]/45 p-8 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-2">

              <Building2
                size={42}
                className="mb-5 text-yellow-400"
              />

              <h3 className="mb-4 text-2xl font-black text-white">
                مشاريع استثنائية
              </h3>

              <p className="leading-8 text-gray-100">
                مشاريع سكنية وتجارية عصرية يتم تطويرها
                بعناية وفق رؤية تجمع بين الجودة والقيمة.
              </p>

            </div>

            {/* Card 2 */}

            <div className="rounded-3xl border border-yellow-500/20 bg-[#08152B]/45 p-8 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-2">

              <Handshake
                size={42}
                className="mb-5 text-yellow-400"
              />

              <h3 className="mb-4 text-2xl font-black text-white">
                استثمار وشراكات
              </h3>

              <p className="leading-8 text-gray-100">
                نعمل على تطوير فرص استثمارية وشراكات
                طويلة الأمد تقوم على الثقة والشفافية.
              </p>

            </div>

            {/* Card 3 */}

            <div className="rounded-3xl border border-yellow-500/20 bg-[#08152B]/45 p-8 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-2">

              <MapPin
                size={42}
                className="mb-5 text-yellow-400"
              />

              <h3 className="mb-4 text-2xl font-black text-white">
                حضور في الجزائر
              </h3>

              <p className="leading-8 text-gray-100">
                مكاتب في تيارت ووهران، مع طموح للتوسع
                وتطوير مشاريع جديدة في مختلف مناطق الجزائر.
              </p>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}