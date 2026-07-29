"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Scale,
  FileCheck,
  Landmark,
} from "lucide-react";

const principles = [
  {
    icon: ShieldCheck,
    title: "الشفافية",
    text: "نعتمد أعلى مستويات الوضوح والإفصاح في جميع تعاملاتنا مع العملاء والمستثمرين.",
  },
  {
    icon: Scale,
    title: "الحوكمة",
    text: "نطبق أفضل الممارسات الإدارية والرقابية لضمان استدامة الأعمال.",
  },
  {
    icon: FileCheck,
    title: "الامتثال",
    text: "الالتزام الكامل بالقوانين الجزائرية والمعايير المهنية في القطاع العقاري.",
  },
  {
    icon: Landmark,
    title: "الاستدامة",
    text: "تنفيذ مشاريع تراعي البيئة والمجتمع وتحقق قيمة طويلة المدى.",
  },
];

export default function Governance() {
  return (
    <section
  id="governance"
  className="relative overflow-hidden bg-[#08152B] py-32"
>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(212,175,55,.08),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >

          <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-6 py-2 text-sm font-bold text-yellow-400">
            GOVERNANCE
          </span>

          <h2 className="mt-8 text-5xl font-black text-white md:text-6xl">
            الحوكمة والشفافية
          </h2>

          <p className="mt-8 text-xl leading-10 text-gray-300">
            تعتمد TAGDEMPT PROMOTIONS منظومة حوكمة متكاملة
            لضمان النزاهة، الجودة، والاستدامة في جميع أعمالها.
          </p>

        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">

          {principles.map((item, index) => {

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
                className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition-all hover:border-yellow-400 hover:shadow-[0_25px_60px_rgba(212,175,55,.18)]"
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

      </div>

    </section>
  );
}