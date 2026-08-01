import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function NewsDetails({ params }: Props) {
  const { id } = await params;

  const article = await prisma.news.findUnique({
    where: {
      id,
    },
  });

  if (!article) {
    notFound();
  }

  const related = await prisma.news.findMany({
    where: {
      published: true,
      id: {
        not: article.id,
      },
    },
    take: 3,
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#071528] via-[#0A1C34] to-[#F6F8FB]">

      {/* ================= HEADER ================= */}

      <section className="px-6 pb-12 pt-32">
        <div className="mx-auto max-w-6xl">

          <Link
            href="/news"
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-bold text-gray-200 backdrop-blur-xl transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-[#08152B]"
          >
            <ArrowLeft size={18} />
            العودة للأخبار
          </Link>

          <div className="text-center">

            <div className="mb-6 flex items-center justify-center gap-3 text-yellow-400">
              <CalendarDays size={20} />

              <span className="font-semibold">
                {new Date(article.createdAt).toLocaleDateString("ar-DZ")}
              </span>
            </div>

            <h1 className="mx-auto max-w-5xl text-4xl font-black leading-tight text-white md:text-6xl lg:text-7xl">
              {article.title}
            </h1>

          </div>

        </div>
      </section>

      {/* ================= ARTICLE ================= */}

      <section className="mx-auto max-w-5xl px-6 pb-24">

        <article className="overflow-hidden rounded-[36px] bg-white shadow-[0_25px_80px_rgba(0,0,0,.15)]">

          {/* Article Image */}

          {article.image && (
            <div className="relative mx-auto h-[280px] w-full overflow-hidden md:h-[400px] lg:h-[480px]">

              <Image
                src={article.image}
                alt={article.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1024px"
                className="object-cover"
              />

            </div>
          )}

          {/* Article Content */}

          <div className="px-6 py-12 md:px-12 md:py-16 lg:px-16">

            <div className="mx-auto max-w-3xl">

              <div className="whitespace-pre-line text-lg leading-[2.3] text-gray-700 md:text-xl">
                {article.content}
              </div>

            </div>

          </div>

        </article>

        {/* Back Button */}

        <div className="mt-12 flex justify-center">

          <Link
            href="/news"
            className="flex items-center gap-3 rounded-2xl bg-[#08152B] px-8 py-4 font-bold text-white shadow-lg transition hover:bg-yellow-500 hover:text-[#08152B]"
          >
            <ArrowLeft size={18} />
            العودة إلى الأخبار
          </Link>

        </div>

      </section>

      {/* ================= RELATED NEWS ================= */}

      {related.length > 0 && (

        <section className="bg-[#F6F8FB] px-6 py-24">

          <div className="mx-auto max-w-7xl">

            <h2 className="mb-14 text-center text-4xl font-black text-[#08152B] md:text-5xl">
              أخبار أخرى
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

              {related.map((item) => (

                <Link
                  key={item.id}
                  href={`/news/${item.id}`}
                  className="group overflow-hidden rounded-[32px] bg-white shadow-[0_15px_50px_rgba(0,0,0,.08)] transition duration-500 hover:-translate-y-2"
                >

                  {item.image && (

                    <div className="relative h-[240px] overflow-hidden">

                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />

                    </div>

                  )}

                  <div className="space-y-4 p-8">

                    <div className="flex items-center gap-2 text-sm font-semibold text-yellow-600">

                      <CalendarDays size={16} />

                      {new Date(item.createdAt).toLocaleDateString("ar-DZ")}

                    </div>

                    <h3 className="line-clamp-2 text-2xl font-black leading-tight text-[#08152B]">
                      {item.title}
                    </h3>

                    <p className="line-clamp-3 leading-8 text-gray-600">
                      {item.content}
                    </p>

                    <div className="flex items-center gap-2 pt-3 font-bold text-[#08152B] transition group-hover:text-yellow-600">

                      اقرأ المزيد

                      <ArrowLeft size={18} />

                    </div>

                  </div>

                </Link>

              ))}

            </div>

          </div>

        </section>

      )}

    </main>
  );
}