import Link from "next/link";
import {
  Building2,
  MapPin,
  TrendingUp,
  ArrowLeft,
  Phone,
  Mail,
} from "lucide-react";

const opportunities = [
  {
    title: "مشروع سكني",
    location: "تيارت - الجزائر",
    status: "قيد الدراسة",
    description:
      "فرصة استثمارية في مشروع سكني واعد يهدف إلى تطوير وحدات سكنية عصرية وفق معايير الجودة والراحة والاستدامة.",
  },
  {
    title: "مجمع فلل",
    location: "وهران - الجزائر",
    status: "فرصة استثمارية",
    description:
      "مشروع سكني راقٍ يوفر فرصة للمستثمرين الراغبين في المشاركة في تطوير مجمع فلل بمعايير عصرية وموقع استراتيجي.",
  },
  {
    title: "مركز تجاري",
    location: "الجزائر العاصمة",
    status: "قريبًا",
    description:
      "مشروع تجاري مستقبلي يهدف إلى خلق مساحة اقتصادية وتجارية متكاملة تجمع بين الاستثمار والتنمية والقيمة المستدامة.",
  },
];

export default function OpportunitiesPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}

      <section className="relative overflow-hidden bg-[#08152B] py-28 text-white">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,.15),transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">

          <span className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-6 py-2 text-sm font-bold tracking-wide text-yellow-400">
            INVESTMENT OPPORTUNITIES
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight md:text-6xl">
            فرص الاستثمار
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-300 md:text-xl">
            اكتشف الفرص الاستثمارية والمشاريع العقارية التي تقدمها
            TAGDEMPT PROMOTIONS، وكن جزءًا من مشاريع واعدة تساهم في
            بناء مستقبل عقاري مستدام في الجزائر.
          </p>

        </div>

      </section>

      {/* Opportunities */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-black text-[#08152B]">
            فرص متاحة للاستثمار
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
            نستعرض مجموعة من المشاريع الحالية والمستقبلية التي يمكن أن
            تمثل فرصًا واعدة للشراكة والاستثمار.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {opportunities.map((item) => (

            <article
              key={item.title}
              className="group flex flex-col overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* Card Header */}

              <div className="relative flex h-52 items-center justify-center overflow-hidden bg-[#08152B]">

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,.18),transparent_65%)]" />

                <Building2
                  size={72}
                  strokeWidth={1.2}
                  className="relative text-yellow-400 transition duration-300 group-hover:scale-110"
                />

                <div className="absolute right-5 top-5 rounded-full bg-yellow-500 px-4 py-2 text-xs font-black text-[#08152B]">
                  {item.status}
                </div>

              </div>

              {/* Card Content */}

              <div className="flex flex-1 flex-col p-8">

                <h3 className="text-2xl font-black text-[#08152B]">
                  {item.title}
                </h3>

                <div className="mt-5 flex items-center gap-2 text-gray-500">

                  <MapPin
                    size={19}
                    className="text-yellow-500"
                  />

                  <span>
                    {item.location}
                  </span>

                </div>

                <p className="mt-6 flex-1 leading-8 text-gray-600">
                  {item.description}
                </p>

                <Link
                  href="/investor-center"
                  className="mt-8 flex items-center justify-center gap-3 rounded-xl bg-yellow-500 px-6 py-4 font-black text-[#08152B] transition hover:bg-yellow-400"
                >
                  طلب معلومات

                  <ArrowLeft size={20} />

                </Link>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* Investment CTA */}

      <section className="bg-[#08152B] py-24">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <TrendingUp
            size={56}
            className="mx-auto text-yellow-400"
          />

          <h2 className="mt-8 text-4xl font-black text-white">
            هل تبحث عن فرصة استثمارية؟
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-gray-300">
            فريق TAGDEMPT PROMOTIONS جاهز للاستماع إلى احتياجاتك
            الاستثمارية وتقديم المعلومات اللازمة حول المشاريع والفرص
            المتاحة.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/investor-center"
              className="rounded-xl bg-yellow-500 px-8 py-4 font-black text-[#08152B] transition hover:bg-yellow-400"
            >
              الدخول إلى مركز المستثمر
            </Link>

            <Link
              href="/contact"
              className="flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-bold text-white transition hover:border-yellow-400 hover:text-yellow-400"
            >
              تواصل معنا
            </Link>

          </div>

        </div>

      </section>

      {/* Contact Information */}

      <section className="bg-white py-16">

        <div className="mx-auto grid max-w-5xl gap-6 px-6 md:grid-cols-2">

          <a
            href="tel:+213659100227"
            className="flex items-center gap-5 rounded-3xl border border-slate-200 bg-slate-50 p-7 transition hover:border-yellow-400 hover:shadow-lg"
            dir="ltr"
          >

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#08152B] text-yellow-400">
              <Phone size={24} />
            </div>

            <div className="text-right">

              <p className="text-sm text-gray-500">
                الهاتف
              </p>

              <p className="mt-1 font-black text-[#08152B]">
                +213 659 100 227
              </p>

            </div>

          </a>

          <a
            href="mailto:tagdemptpromotions@gmail.com"
            className="flex items-center gap-5 rounded-3xl border border-slate-200 bg-slate-50 p-7 transition hover:border-yellow-400 hover:shadow-lg"
          >

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#08152B] text-yellow-400">
              <Mail size={24} />
            </div>

            <div className="text-right">

              <p className="text-sm text-gray-500">
                البريد الإلكتروني
              </p>

              <p className="mt-1 break-all font-black text-[#08152B]">
                tagdemptpromotions@gmail.com
              </p>

            </div>

          </a>

        </div>

      </section>

    </main>
  );
}