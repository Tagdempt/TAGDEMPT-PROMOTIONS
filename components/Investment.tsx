"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Handshake,
  Landmark,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";

const items = [
  {
    icon: TrendingUp,
    title: "عوائد استثمارية",
    text: "فرص مدروسة تحقق نمواً مستداماً وقيمة طويلة الأجل.",
  },
  {
    icon: Handshake,
    title: "شراكات استراتيجية",
    text: "نتعاون مع المستثمرين والمؤسسات لإنجاز مشاريع نوعية.",
  },
  {
    icon: Landmark,
    title: "استثمارات آمنة",
    text: "إدارة احترافية للمشاريع وفق أعلى معايير الحوكمة.",
  },
  {
    icon: ShieldCheck,
    title: "ثقة وشفافية",
    text: "وضوح كامل في جميع مراحل الاستثمار والتطوير.",
  },
];

export default function Investment() {
  return (
    <section
      id="investment"
      className="relative overflow-hidden bg-gradient-to-b from-[#08152B] to-[#050B16] py-32"
    >

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,.08),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-6 py-2 text-sm font-bold text-yellow-400">
            INVESTMENT
          </span>

          <h2 className="mt-8 text-5xl font-black text-white md:text-6xl">
            الاستثمار والشراكات
          </h2>

          <p className="mt-8 text-xl leading-10 text-gray-300">
            نرحب بالمستثمرين وشركاء النجاح للمساهمة في تطوير
            مشاريع عقارية حديثة تحقق قيمة اقتصادية مستدامة.
          </p>

        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {items.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition-all hover:border-yellow-400 hover:shadow-[0_25px_60px_rgba(212,175,55,.15)]"
              >

                <div className="flex items-start gap-6">

                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-yellow-400 to-amber-600">

                    <Icon
                      size={38}
                      className="text-[#08152B]"
                    />

                  </div>

                  <div>

                    <h3 className="text-3xl font-black text-white">
                      {item.title}
                    </h3>

                    <p className="mt-5 leading-9 text-gray-300">
                      {item.text}
                    </p>

                  </div>

                </div>

              </motion.div>

            );

          })}

        </div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-[40px] border border-yellow-500/30 bg-gradient-to-r from-yellow-500 to-amber-500 p-12 text-center"
        >

          <h3 className="text-4xl font-black text-[#08152B]">
            هل ترغب في الاستثمار معنا؟
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-[#08152B]/90">
            فريق TAGDEMPT PROMOTIONS مستعد لدراسة فرص التعاون
            والاستثمار وتقديم أفضل الحلول العقارية.
          </p>

          <a
            href="/contact"
            className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-[#08152B] px-10 py-5 text-lg font-bold text-white transition hover:scale-105"
          >
            ابدأ شراكتك معنا
            <ArrowLeft size={20} />
          </a>

        </motion.div>

      </div>

    </section>
  );
}