import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";

export default async function Projects() {
  const projects = await prisma.project.findMany({
    include: {
      images: {
        where: {
          isCover: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 6,
  });

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-gradient-to-b from-[#08152B] via-[#07121F] to-[#020814] py-36"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,.10),transparent_40%)]" />
      <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-yellow-500/5 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="mb-24 text-center">

          <span className="inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-6 py-2 text-sm font-bold tracking-widest text-yellow-400">
            OUR PROJECTS
          </span>

          <h2 className="mt-8 text-5xl font-black text-white md:text-6xl">
            مشاريعنا
          </h2>

          <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600" />

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-10 text-slate-300">
            مشاريع عقارية مصممة وفق أعلى معايير الجودة،
            تجمع بين الفخامة والاستدامة وقيمة الاستثمار.
          </p>

        </div>

        {projects.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-20 text-center text-xl text-white">
            لا توجد مشاريع حالياً.
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-3">

            {projects.map((project) => (

              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="group overflow-hidden rounded-[34px] border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-yellow-400 hover:shadow-[0_35px_90px_rgba(212,175,55,.18)]"
              >

                <div className="relative h-[460px] overflow-hidden">

                  {project.images.length > 0 ? (
                    <Image
                      src={project.images[0].url}
                      alt={project.title}
                      fill
                      sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-slate-800 text-white">
                      No Image
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#08152B] via-black/25 to-transparent" />

                  <div className="absolute left-6 top-6 rounded-full bg-yellow-500 px-5 py-2 text-sm font-black text-[#08152B] shadow-lg">
                    {project.status}
                  </div>

                  <div className="absolute bottom-0 w-full p-8">

                    <div className="mb-5 flex items-center gap-2 text-yellow-400">

                      <MapPin size={18} />

                      <span className="font-semibold">
                        {project.city} • {project.state}
                      </span>

                    </div>

                    <h3 className="text-3xl font-black text-white">
                      {project.title}
                    </h3>

                    <p className="mt-4 line-clamp-3 leading-8 text-slate-200">
                      {project.description}
                    </p>

                    <div className="mt-8 flex w-fit items-center gap-3 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-600 px-7 py-3 font-bold text-[#08152B] transition duration-300 group-hover:scale-105">

                      استكشف المشروع

                      <ArrowLeft size={20} />

                    </div>

                  </div>

                </div>

              </Link>

            ))}

          </div>
        )}

        <div className="mt-20 text-center">

          <Link
            href="/projects"
            className="inline-flex items-center gap-3 rounded-2xl border-2 border-yellow-500 px-10 py-4 text-lg font-bold text-yellow-400 transition hover:bg-yellow-500 hover:text-[#08152B]"
          >
            عرض جميع المشاريع
            <ArrowLeft size={22} />
          </Link>

        </div>

      </div>
    </section>
  );
}