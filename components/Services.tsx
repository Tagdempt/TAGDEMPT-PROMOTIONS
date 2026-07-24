"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Building,
  Compass,
  TrendingUp,
  Landmark,
  BadgeCheck,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "الترقية العقارية",
    text: "تطوير مشاريع سكنية وتجارية بمعايير عالمية تجمع بين الجودة والابتكار والاستدامة.",
  },
  {
    icon: Building,
    title: "إدارة المشاريع",
    text: "إدارة احترافية لجميع مراحل المشروع من الدراسة وحتى التسليم النهائي.",
  },
  {
    icon: Compass,
    title: "الدراسات الهندسية",
    text: "حلول هندسية ومعمارية حديثة تحقق أعلى معايير الكفاءة والجمال.",
  },
  {
    icon: TrendingUp,
    title: "الاستثمار العقاري",
    text: "فرص استثمارية وشراكات استراتيجية تحقق قيمة وعوائد مستدامة.",
  },
  {
    icon: Landmark,
    title: "الاستشارات",
    text: "استشارات فنية ومالية وقانونية لمرافقة المستثمر في جميع المراحل.",
  },
  {
    icon: BadgeCheck,
    title: "ضمان الجودة",
    text: "رقابة صارمة وجودة تنفيذ وفق أفضل المعايير العالمية في البناء.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-[#08152B] via-[#07121F] to-[#020814] py-36"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(212,175,55,.08),transparent_40%)]" />

      <div className="absolute -top-40 left-0 h-[500px] w-[500px] rounded-full bg-yellow-500/5 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-blue-500/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <span className="inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-6 py-2 text-sm font-bold tracking-widest text-yellow-400">
            OUR SERVICES
          </span>

          <h2 className="mt-8 text-5xl font-black text-white md:text-6xl">
            خدماتنا
          </h2>

          <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600" />

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-10 text-slate-300">
            نقدم حلولاً متكاملة في التطوير العقاري والاستثمار وإدارة المشاريع
            وفق أعلى معايير الجودة والحوكمة والاستدامة.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .5,
                  delay: index * .08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition-all duration-500 hover:border-yellow-400 hover:bg-white/10 hover:shadow-[0_30px_80px_rgba(212,175,55,.22)]"
              >
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute -top-24 -left-24 h-52 w-52 rounded-full bg-yellow-400/10 blur-3xl" />
                </div>

                <div className="relative z-10">

                  <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-[28px] bg-gradient-to-br from-yellow-300 via-yellow-500 to-amber-700 shadow-xl">
                    <Icon size={42} className="text-[#08152B]" />
                  </div>

                  <h3 className="mb-5 text-3xl font-black tracking-tight text-white">
                    {service.title}
                  </h3>

                  <p className="text-lg leading-9 text-slate-300">
                    {service.text}
                  </p>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}