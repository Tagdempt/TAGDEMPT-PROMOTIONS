"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Building2,
  ShieldCheck,
  Landmark,
  Gem,
  ArrowLeft,
} from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "مشاريع نوعية",
    text: "مشاريع سكنية وتجارية مصممة وفق أحدث المعايير العالمية.",
  },
  {
    icon: ShieldCheck,
    title: "جودة والتزام",
    text: "التزام كامل بالجودة والشفافية في جميع مراحل الإنجاز.",
  },
  {
    icon: Landmark,
    title: "استثمار مستدام",
    text: "حلول استثمارية تحقق قيمة طويلة الأجل للمستثمرين.",
  },
  {
    icon: Gem,
    title: "رؤية مستقبلية",
    text: "نبني مدنًا ومجتمعات تواكب تطلعات المستقبل.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F7F8FA] py-28"
    >
      <div className="absolute -left-44 top-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-[130px]" />
      <div className="absolute -right-44 bottom-0 h-96 w-96 rounded-full bg-blue-700/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[36px] shadow-2xl">

              <Image
                src="/about.jpg"
                alt="TAGDEMPT PROMOTIONS"
                width={900}
                height={900}
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

            </div>

            <div className="absolute -bottom-8 -right-8 rounded-3xl border-4 border-yellow-500 bg-white px-8 py-6 shadow-2xl">

              <div className="text-5xl font-black text-yellow-500">
                15+
              </div>

              <div className="mt-2 font-semibold text-[#08152B]">
                سنة من الخبرة
              </div>

            </div>

          </motion.div>

          {/* CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <span className="font-black tracking-[4px] text-yellow-600 uppercase">
              ABOUT US
            </span>

            <h2 className="mt-5 text-5xl font-black leading-tight text-[#08152B]">
              نبني الثقة...
              <br />
              قبل أن نبني العقار
            </h2>

            <div className="mt-7 h-1 w-28 rounded-full bg-yellow-500" />

            <p className="mt-8 text-xl leading-10 text-gray-600">
              TAGDEMPT PROMOTIONS شركة جزائرية متخصصة في الترقية العقارية
              والاستثمار، نعمل على تطوير مشاريع عمرانية حديثة تجمع بين
              الجودة والابتكار والاستدامة، مع الالتزام بأعلى معايير
              الشفافية والحوكمة لتحقيق أفضل قيمة لعملائنا وشركائنا.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">

              {features.map((item, index) => {

                const Icon = item.icon;

                return (

                  <div
                    key={index}
                    className="rounded-3xl border border-gray-200 bg-white p-7 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-yellow-500 hover:shadow-2xl"
                  >

                    <div className="mb-5 inline-flex rounded-2xl bg-yellow-100 p-4">

                      <Icon
                        size={28}
                        className="text-yellow-600"
                      />

                    </div>

                    <h3 className="mb-3 text-xl font-black text-[#08152B]">
                      {item.title}
                    </h3>

                    <p className="leading-8 text-gray-600">
                      {item.text}
                    </p>

                  </div>

                );

              })}

            </div>

            <a
              href="/investment"
              className="mt-12 inline-flex items-center gap-3 rounded-2xl bg-[#08152B] px-8 py-5 font-bold text-white transition duration-300 hover:bg-yellow-500 hover:text-[#08152B]"
            >
              تعرف على فرص الاستثمار

              <ArrowLeft size={20} />

            </a>

          </motion.div>

        </div>

      </div>
    </section>
  );
}