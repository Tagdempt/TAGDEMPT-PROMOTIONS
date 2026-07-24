import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { ArrowLeft, CalendarDays } from "lucide-react";

export default async function News() {
  const news = await prisma.news.findMany({
    where: {
      published: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
  });

  if (news.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-white py-36">

      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-yellow-400/5 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-24 text-center">

          <span className="inline-block rounded-full border border-yellow-500/20 bg-yellow-100 px-6 py-2 text-sm font-bold tracking-widest text-yellow-700">
            NEWS & UPDATES
          </span>

          <h2 className="mt-8 text-5xl font-black text-[#08152B] md:text-6xl">
            آخر الأخبار
          </h2>

          <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600" />

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-10 text-slate-600">
            تابع آخر أخبار المؤسسة، المشاريع الجديدة،
            الشراكات، والإنجازات التي تحققها TAGDEMPT PROMOTIONS.
          </p>

        </div>

        <div className="grid gap-10 lg:grid-cols-3">

          {news.map((item) => (

            <article
              key={item.id}
              className="group overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-yellow-400 hover:shadow-2xl"
            >

              {item.image && (

                <div className="relative h-72 overflow-hidden">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                </div>

              )}

              <div className="space-y-6 p-8">

                <div className="flex items-center gap-2 text-sm text-yellow-700">

                  <CalendarDays size={18} />

                  {new Date(item.createdAt).toLocaleDateString("ar-DZ")}

                </div>

                <h3 className="text-3xl font-black leading-tight text-[#08152B]">
                  {item.title}
                </h3>

                <p className="line-clamp-4 leading-8 text-slate-600">
                  {item.content}
                </p>

                <Link
                  href={`/news/${item.id}`}
                  className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-600 px-6 py-3 font-bold text-[#08152B] transition hover:scale-105"
                >
                  اقرأ المزيد

                  <ArrowLeft size={18} />

                </Link>

              </div>

            </article>

          ))}

        </div>

        <div className="mt-20 text-center">

          <Link
            href="/news"
            className="inline-flex items-center gap-3 rounded-2xl border-2 border-[#08152B] px-10 py-4 text-lg font-bold text-[#08152B] transition hover:bg-[#08152B] hover:text-white"
          >
            جميع الأخبار

            <ArrowLeft size={22} />

          </Link>

        </div>

      </div>

    </section>
  );
}