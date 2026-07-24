export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  ArrowLeft,
  Building2,
  BadgeDollarSign,
} from "lucide-react";

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
              لا توجد مشاريع حالياً
            </h2>

            <p className="mt-4 text-gray-600">
              سيتم إضافة المشاريع قريباً.
            </p>
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="group overflow-hidden rounded-[34px] bg-white shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-[320px] overflow-hidden">
                  {project.images.length > 0 ? (
                    <Image
                      src={project.images[0].url}
                      alt={project.title}
                      fill
                      sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-slate-200">
                      <Building2
                        size={70}
                        className="text-slate-500"
                      />
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                  <div className="absolute left-6 top-6 rounded-full bg-yellow-500 px-4 py-2 font-bold text-[#08152B]">
                    {project.status}
                  </div>
                </div>

                <div className="space-y-5 p-8">
                  <div className="flex items-center gap-2 text-yellow-600">
                    <MapPin size={18} />

                    <span>
                      {project.city} • {project.state}
                    </span>
                  </div>

                  <h2 className="text-3xl font-black text-[#08152B]">
                    {project.title}
                  </h2>

                  <p className="line-clamp-3 leading-8 text-gray-600">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between border-t pt-5">
                    <span className="flex items-center gap-2 font-bold text-yellow-600">
                      <BadgeDollarSign size={18} />

                      {project.price ?? "حسب الطلب"}
                    </span>

                    <span className="flex items-center gap-2 font-bold text-[#08152B]">
                      التفاصيل

                      <ArrowLeft size={18} />
                    </span>
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