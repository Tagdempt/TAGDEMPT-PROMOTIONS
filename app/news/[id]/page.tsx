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
    <main className="bg-[#F6F8FB]">

      <section className="relative h-[560px] overflow-hidden">

        {article.image && (
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#08152B] via-[#08152bcc] to-transparent" />

        <div className="absolute bottom-0 w-full">

          <div className="mx-auto max-w-7xl px-6 pb-20">

            <div className="flex items-center gap-3 text-yellow-400">

              <CalendarDays size={20} />

              {new Date(article.createdAt).toLocaleDateString("ar-DZ")}

            </div>

            <h1 className="mt-8 max-w-5xl text-5xl font-black leading-tight text-white md:text-7xl">
              {article.title}
            </h1>

          </div>

        </div>

      </section>

      <section className="mx-auto max-w-5xl px-6 py-24">

        <article className="rounded-[36px] bg-white p-12 shadow-xl">

          <div className="prose prose-lg max-w-none leading-10 text-gray-700 whitespace-pre-line">
            {article.content}
          </div>

        </article>

        <div className="mt-12 flex justify-center">

          <Link
            href="/news"
            className="flex items-center gap-3 rounded-2xl bg-[#08152B] px-8 py-4 font-bold text-white transition hover:bg-yellow-500 hover:text-[#08152B]"
          >
            <ArrowLeft size={18} />
            العودة للأخبار
          </Link>

        </div>

      </section>

      {related.length > 0 && (

        <section className="mx-auto max-w-7xl px-6 pb-24">

          <h2 className="mb-12 text-center text-5xl font-black text-[#08152B]">
            أخبار أخرى
          </h2>

          <div className="grid gap-8 lg:grid-cols-3">

           {related.map((item) => (

              <Link
                key={item.id}
                href={`/news/${item.id}`}
                className="overflow-hidden rounded-[28px] bg-white shadow-xl transition hover:-translate-y-2"
              >

                {item.image && (

                  <div className="relative h-64">

                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />

                  </div>

                )}

                <div className="space-y-4 p-8">

                  <div className="text-sm text-yellow-600">

                    {new Date(item.createdAt).toLocaleDateString("ar-DZ")}

                  </div>

                  <h3 className="text-2xl font-black text-[#08152B]">
                    {item.title}
                  </h3>

                  <p className="line-clamp-3 text-gray-600">
                    {item.content}
                  </p>

                </div>

              </Link>

            ))}

          </div>

        </section>

      )}

    </main>
  );
}