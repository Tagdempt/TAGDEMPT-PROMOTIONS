"use client";

import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Rocket,
  ShieldCheck,
} from "lucide-react";

const cards = [
  {
    icon: Eye,
    title: "رؤيتنا",
    text: "أن نكون من الشركات العقارية الرائدة في الجزائر وشمال إفريقيا من خلال مشاريع مبتكرة ومستدامة.",
  },
  {
    icon: Target,
    title: "رسالتنا",
    text: "تقديم حلول عقارية متكاملة تخلق قيمة حقيقية للمجتمع والمستثمرين والعملاء.",
  },
  {
    icon: Rocket,
    title: "استراتيجيتنا",
    text: "الاعتماد على الابتكار، الجودة، التحول الرقمي، والشراكات الاستراتيجية لتحقيق نمو مستدام.",
  },
  {
    icon: ShieldCheck,
    title: "قيمنا",
    text: "الشفافية، الالتزام، الاحترافية، المسؤولية، والتميز في جميع مراحل العمل.",
  },
];

export default function Strategy() {
  return (
    <section className="relative overflow-hidden bg-white py-32">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,.05),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >

          <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-6 py-2 text-sm font-bold text-yellow-600">
            STRATEGY
          </span>

          <h2 className="mt-8 text-5xl font-black text-[#08152B] md:text-6xl">
            رؤيتنا واستراتيجيتنا
          </h2>

          <p className="mt-8 text-xl leading-10 text-gray-600">
            نعمل وفق رؤية طويلة المدى تهدف إلى تطوير مشاريع عقارية
            نوعية تحقق أعلى قيمة اقتصادية واجتماعية.
          </p>

        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">

          {cards.map((card, index) => {

            const Icon = card.icon;

            return (

              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-xl transition-all hover:border-yellow-400 hover:shadow-2xl"
              >

                <div className="flex items-start gap-6">

                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-yellow-400 to-amber-600">

                    <Icon
                      size={38}
                      className="text-[#08152B]"
                    />

                  </div>

                  <div>

                    <h3 className="text-3xl font-black text-[#08152B]">
                      {card.title}
                    </h3>

                    <p className="mt-5 leading-9 text-gray-600">
                      {card.text}
                    </p>

                  </div>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}