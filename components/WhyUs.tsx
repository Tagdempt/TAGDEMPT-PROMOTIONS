"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Gem,
  Landmark,
  Building2,
  Award,
  ArrowLeft,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "الشفافية",
    text: "نؤمن بأن الثقة تبدأ من الوضوح، ونعمل بشفافية في تعاملاتنا مع عملائنا وشركائنا.",
  },
  {
    icon: Gem,
    title: "الجودة",
    text: "نحرص على تقديم مشاريع وحلول عقارية وفق معايير عالية تلبي تطلعات عملائنا.",
  },
  {
    icon: Landmark,
    title: "خبرة تمتد لـ 15 سنة",
    text: "خبرة متراكمة في المجال العقاري تمنحنا فهماً أعمق للسوق واحتياجات المستثمرين والعملاء.",
  },
  {
    icon: Building2,
    title: "رؤية مستقبلية",
    text: "نسعى إلى تطوير حلول عقارية حديثة ومستدامة تساهم في خلق قيمة حقيقية على المدى الطويل.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-[#08152B] py-32">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,.10),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >

          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-6 py-2 text-sm font-bold text-yellow-400">
            <Award size={17} />
            WHY TAGDEMPT
          </span>

          <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-6xl">
            لماذا TAGDEMPT PROMOTIONS؟
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-10 text-gray-300 md:text-xl">
            خبرة تمتد لأكثر من 15 سنة، ورؤية تقوم على الثقة والجودة
            والشفافية، لنقدم قيمة حقيقية لعملائنا وشركائنا في المجال العقاري.
          </p>

        </motion.div>

        {/* Experience Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 flex max-w-4xl flex-col items-center justify-center rounded-[36px] border border-yellow-400/20 bg-gradient-to-r from-yellow-500/10 via-white/5 to-yellow-500/10 px-8 py-10 text-center shadow-[0_20px_60px_rgba(212,175,55,.08)] md:flex-row md:gap-8"
        >

          <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-yellow-400 to-amber-600 shadow-lg">
            <Award
              size={46}
              className="text-[#08152B]"
            />
          </div>

          <div className="mt-6 md:mt-0">

            <div className="text-5xl font-black text-yellow-400">
              15+
            </div>

            <h3 className="mt-2 text-2xl font-black text-white">
              سنة من الخبرة
            </h3>

            <p className="mt-2 text-gray-300">
              خبرة ومعرفة متراكمة في المجال العقاري
            </p>

          </div>

        </motion.div>

        {/* Features */}
        <div className="grid gap-8 lg:grid-cols-2">

          {features.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition-all hover:border-yellow-400 hover:shadow-[0_25px_60px_rgba(212,175,55,.18)]"
              >

                <div className="flex items-start gap-6">

                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-yellow-400 to-amber-600">

                    <Icon
                      size={38}
                      className="text-[#08152B]"
                    />

                  </div>

                  <div>

                    <h3 className="text-2xl font-black text-white md:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-5 leading-9 text-gray-300">
                      {item.text}
                    </p>

                    <div className="mt-8 flex items-center gap-2 font-bold text-yellow-400">

                      <span>
                        اكتشف المزيد
                      </span>

                      <ArrowLeft
                        size={18}
                        className="transition-transform group-hover:-translate-x-1"
                      />

                    </div>

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