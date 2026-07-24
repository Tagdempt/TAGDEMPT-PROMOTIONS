"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Quote,
  Award,
  Building2,
  Users,
} from "lucide-react";

export default function Founder() {
  return (
    <section className="bg-white py-32">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* الصورة */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="overflow-hidden rounded-[40px] shadow-2xl">

              <Image
                src="/founder.jpg"
                alt="Founder"
                width={900}
                height={1200}
                className="h-full w-full object-cover"
              />

            </div>

            <div className="absolute -bottom-8 -left-8 rounded-[30px] bg-[#08152B] p-8 shadow-2xl">

              <Award
                size={44}
                className="mb-4 text-yellow-400"
              />

              <p className="text-lg font-bold text-white">
                أكثر من 15 سنة خبرة
              </p>

            </div>

          </motion.div>

          {/* المحتوى */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-6 py-2 text-sm font-bold text-yellow-600">
              FOUNDER MESSAGE
            </span>

            <h2 className="mt-8 text-5xl font-black text-[#08152B]">
              كلمة المؤسس
            </h2>

            <Quote
              size={60}
              className="mt-8 text-yellow-500"
            />

            <p className="mt-8 text-xl leading-10 text-gray-700">
              نؤمن أن الاستثمار العقاري الحقيقي لا يقوم فقط
              على تشييد المباني، بل على بناء الثقة وخلق قيمة
              مستدامة للأجيال القادمة.

              نسعى في TAGDEMPT PROMOTIONS إلى تقديم مشاريع
              عقارية راقية تجمع بين الجودة والابتكار والالتزام،
              لتكون نموذجاً يحتذى به في السوق الجزائرية.
            </p>

            <div className="mt-12 border-r-4 border-yellow-500 pr-6">

              <h3 className="text-3xl font-black text-[#08152B]">
                السيد / رئيس مجلس الإدارة
              </h3>

              <p className="mt-2 text-lg text-yellow-600">
                Founder & CEO
              </p>

            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2">

              <div className="rounded-3xl bg-slate-50 p-7">

                <Building2
                  size={34}
                  className="mb-5 text-yellow-500"
                />

                <h4 className="font-bold text-[#08152B]">
                  رؤية مستقبلية
                </h4>

                <p className="mt-3 leading-8 text-gray-600">
                  تطوير مشاريع عقارية بمعايير عالمية.
                </p>

              </div>

              <div className="rounded-3xl bg-slate-50 p-7">

                <Users
                  size={34}
                  className="mb-5 text-yellow-500"
                />

                <h4 className="font-bold text-[#08152B]">
                  شركاء النجاح
                </h4>

                <p className="mt-3 leading-8 text-gray-600">
                  بناء علاقات طويلة الأمد مع المستثمرين والعملاء.
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}