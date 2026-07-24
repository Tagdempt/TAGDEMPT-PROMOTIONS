import {
  Building2,
  Handshake,
  TrendingUp,
  ShieldCheck,
  Landmark,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

const items = [
  {
    icon: Building2,
    title: "الترقية العقارية",
    text: "مشاريع سكنية وتجارية عالية الجودة تحقق قيمة طويلة الأجل.",
  },
  {
    icon: Handshake,
    title: "الشراكات",
    text: "فتح المجال أمام المستثمرين والشركاء لإنجاز مشاريع استراتيجية.",
  },
  {
    icon: TrendingUp,
    title: "عوائد مستقرة",
    text: "استثمارات مبنية على دراسات مالية وهندسية دقيقة.",
  },
  {
    icon: ShieldCheck,
    title: "حوكمة وشفافية",
    text: "التزام كامل بأفضل معايير الحوكمة وإدارة المخاطر.",
  },
];

export default function InvestmentPage() {
  return (
    <main className="bg-[#F7F8FB]">
      {/* HERO */}

      <section className="relative overflow-hidden bg-gradient-to-r from-[#08152B] via-[#10284D] to-[#08152B] py-32">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,.08),transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">

          <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-6 py-2 text-sm font-bold text-yellow-400">
            INVESTMENT
          </span>

          <h1 className="mt-8 text-5xl font-black text-white md:text-7xl">
            الاستثمار والشراكات
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-xl leading-10 text-gray-300">
            نرحب بالمستثمرين والشركاء الاستراتيجيين للمساهمة
            في تطوير مشاريع عقارية تحقق نمواً مستداماً
            وقيمة مضافة للاقتصاد الوطني.
          </p>

        </div>

      </section>

      {/* Cards */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid gap-10 md:grid-cols-2">

          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[32px] bg-white p-10 shadow-xl transition hover:-translate-y-2"
              >

                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-yellow-400 to-amber-600">

                  <Icon
                    size={40}
                    className="text-[#08152B]"
                  />

                </div>

                <h2 className="text-3xl font-black text-[#08152B]">
                  {item.title}
                </h2>

                <p className="mt-6 leading-9 text-gray-600">
                  {item.text}
                </p>

              </div>
            );
          })}

        </div>

      </section>

      {/* Why */}

      <section className="bg-[#08152B] py-24">

        <div className="mx-auto max-w-6xl px-6">

          <div className="rounded-[36px] bg-white/5 p-14 backdrop-blur-xl">

            <Landmark
              size={70}
              className="mx-auto text-yellow-400"
            />

            <h2 className="mt-8 text-center text-5xl font-black text-white">
              لماذا الاستثمار معنا؟
            </h2>

            <div className="mt-12 grid gap-8 md:grid-cols-3">

              <div className="rounded-3xl bg-white/5 p-8 text-center">
                <h3 className="text-2xl font-black text-yellow-400">
                  خبرة
                </h3>

                <p className="mt-5 leading-8 text-gray-300">
                  فريق متخصص في إدارة وتطوير المشاريع العقارية.
                </p>
              </div>

              <div className="rounded-3xl bg-white/5 p-8 text-center">
                <h3 className="text-2xl font-black text-yellow-400">
                  استدامة
                </h3>

                <p className="mt-5 leading-8 text-gray-300">
                  مشاريع تحقق قيمة طويلة الأجل للمستثمرين.
                </p>
              </div>

              <div className="rounded-3xl bg-white/5 p-8 text-center">
                <h3 className="text-2xl font-black text-yellow-400">
                  ثقة
                </h3>

                <p className="mt-5 leading-8 text-gray-300">
                  شفافية كاملة في جميع مراحل الاستثمار.
                </p>
              </div>

            </div>

            <div className="mt-14 text-center">

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-2xl bg-yellow-500 px-10 py-5 text-lg font-bold text-[#08152B] transition hover:scale-105"
              >
                تواصل معنا

                <ArrowLeft size={22} />

              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}