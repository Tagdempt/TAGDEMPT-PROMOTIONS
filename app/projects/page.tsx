import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  ArrowLeft,
  Building2,
  BadgeDollarSign,
} from "lucide-react";

export const metadata: Metadata = {
  title: "مشاريعنا العقارية | TAGDEMPT PROMOTIONS",
  description:
    "اكتشف مشاريع TAGDEMPT PROMOTIONS العقارية في الجزائر، مشاريع عصرية تجمع بين الجودة والابتكار والاستدامة وتوفر أفضل قيمة للمستثمرين والعملاء.",
  keywords: [
    "TAGDEMPT PROMOTIONS",
    "مشاريع عقارية",
    "مشاريع عقارية في الجزائر",
    "الترقية العقارية",
    "الاستثمار العقاري",
    "عقارات الجزائر",
    "مشاريع TAGDEMPT",
  ],
  openGraph: {
    title: "مشاريعنا العقارية | TAGDEMPT PROMOTIONS",
    description:
      "اكتشف مشاريع TAGDEMPT PROMOTIONS العقارية في الجزائر وفرص الاستثمار العقاري الواعدة.",
    url: "https://tagdempt-promotions.vercel.app/projects",
    siteName: "TAGDEMPT PROMOTIONS",
    locale: "ar_DZ",
    type: "website",
  },
};

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({
    include: {
      images: {
        where: {
          isCover: true,
        },
        take: 1,
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="bg-[#F6F8FB]">
      {/* Hero */}

      <section className="relative overflow-hidden bg-gradient-to-r from-[#08152B] via-[#0B2141] to-[#08152B] py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,.08),transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-6 py-2 text-sm font-bold text-yellow-400">
            PROJECTS
          </span>

          <h1 className="mt-8 text-5xl font-black text-white md:text-7xl">
            مشاريعنا
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-10 text-gray-300">
            مشاريع عقارية عصرية تجمع بين الجودة والابتكار والاستدامة،
            لتقديم أفضل قيمة للمستثمرين والعملاء.
          </p>
        </div>
      </section>

      {/* Projects */}

      <section className="mx-auto max-w-7xl px-6 py-24">
        {projects.length === 0 ? (
          <div className="rounded-[32px] bg-white p-20 text-center shadow-xl">
            <Building2
              size={70}
              className="mx-auto mb-6 text-yellow-500"
            />

            <h2 className="text-3xl font-black text-[#08152B]">
              لا توجد مشاريع متاحة حاليًا
            </h2>

            <p className="mt-4 text-lg text-gray-500">
              سيتم إضافة مشاريعنا العقارية الجديدة قريبًا.
            </p>
          </div>
        ) : (
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => {
              const coverImage = project.images[0]?.url;

              return (
                <article
                  key={project.id}
                  className="group overflow-hidden rounded-[32px] bg-white shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >
                  {/* Image */}

                  <div className="relative h-[300px] overflow-hidden bg-[#08152B]">
                    {coverImage ? (
                      <Image
                        src={coverImage}
                        alt={project.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <Building2
                          size={80}
                          className="text-yellow-500/60"
                        />
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#08152B]/80 via-transparent to-transparent" />

                    <div className="absolute bottom-5 right-5">
                      <span className="rounded-full border border-white/20 bg-[#08152B]/80 px-5 py-2 text-sm font-bold text-yellow-400 backdrop-blur-md">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Content */}

                  <div className="p-8">
                    <h2 className="line-clamp-2 text-2xl font-black text-[#08152B] transition group-hover:text-yellow-600">
                      {project.title}
                    </h2>

                    <div className="mt-5 space-y-3">
                      <div className="flex items-center gap-3 text-gray-600">
                        <MapPin
                          size={20}
                          className="shrink-0 text-yellow-500"
                        />
                        <span>{project.location}</span>
                      </div>

                      {project.price && (
                        <div className="flex items-center gap-3 text-gray-600">
                          <BadgeDollarSign
                            size={20}
                            className="shrink-0 text-yellow-500"
                          />
                          <span>{project.price}</span>
                        </div>
                      )}

                      {project.area && (
                        <div className="flex items-center gap-3 text-gray-600">
                          <Building2
                            size={20}
                            className="shrink-0 text-yellow-500"
                          />
                          <span>{project.area}</span>
                        </div>
                      )}
                    </div>

                    <p className="mt-6 line-clamp-3 leading-8 text-gray-500">
                      {project.description}
                    </p>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="mt-8 flex items-center justify-center gap-3 rounded-2xl bg-[#08152B] px-6 py-4 font-bold text-white transition hover:bg-yellow-600"
                    >
                      <span>اكتشف المشروع</span>

                      <ArrowLeft
                        size={20}
                        className="transition group-hover:-translate-x-1"
                      />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}