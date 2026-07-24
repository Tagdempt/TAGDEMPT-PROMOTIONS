import { prisma } from "@/lib/prisma";
import type { Prisma } from "@prisma/client";

import Image from "next/image";
import Link from "next/link";

import {
  CalendarDays,
  ArrowLeft,
} from "lucide-react";

// منع Next.js من prerender الصفحة أثناء build
export const dynamic = "force-dynamic";

type NewsItem = Prisma.NewsGetPayload<{}>;

export default async function NewsPage() {
  const news: NewsItem[] = await prisma.news.findMany({
    where: {
      published: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="bg-[#F7F8FB]">

      {/* HERO */}

      <section className="relative overflow-hidden bg-gradient-to-r from-[#08152B] via-[#10284D] to-[#08152B] py-28">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,.08),transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">

          <span className="inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-6 py-2 text-sm font-bold text-yellow-400">
            NEWS
          </span>

          <h1 className="mt-8 text-5xl font-black text-white md:text-7xl">
            الأخبار
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-10 text-gray-300">
            آخر أخبار وإعلانات TAGDEMPT PROMOTIONS
            المتعلقة بالمشاريع والاستثمارات والشراكات.
          </p>

        </div>

      </section>

      {/* CONTENT */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        {news.length === 0 ? (

          <div className="rounded-[32px] bg-white p-20 text-center shadow-xl">

            <h2 className="text-3xl font-black text-[#08152B]">
              لا توجد أخبار حالياً
            </h2>

            <p className="mt-4 text-gray-600">
              سيتم نشر الأخبار قريباً.
            </p>

          </div>

        ) : (

          <div className="grid gap-10 lg:grid-cols-3">

            {news.map((item) => (

              <Link
                key={item.id}
                href={`/news/${item.id}`}
                className="group overflow-hidden rounded-[32px] bg-white shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >

                {item.image && (
                  <div className="relative h-[280px] overflow-hidden">

                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />

                  </div>
                )}

                <div className="space-y-6 p-8">

                  <div className="flex items-center gap-2 text-yellow-600">

                    <CalendarDays size={18} />

                    <span>
                      {new Date(item.createdAt).toLocaleDateString("ar-DZ")}
                    </span>

                  </div>

                  <h2 className="text-3xl font-black text-[#08152B]">
                    {item.title}
                  </h2>

                  <p className="line-clamp-4 leading-8 text-gray-600">
                    {item.content}
                  </p>

                  <div className="flex items-center gap-3 font-bold text-[#08152B] transition group-hover:text-yellow-600">

                    <span>
                      اقرأ المزيد
                    </span>

                    <ArrowLeft size={18} />

                  </div>

                </div>

              </Link>

            ))}

          </div>

        )}

      </section>

    </main>
  );
}