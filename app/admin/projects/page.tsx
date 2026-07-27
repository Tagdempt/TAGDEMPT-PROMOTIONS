import { connection } from "next/server";
import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
  await connection();

  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      images: {
        where: {
          isCover: true,
        },
        take: 1,
      },
    },
  });

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-[#08152B]">
            إدارة المشاريع
          </h1>

          <p className="mt-2 text-gray-500">
            إدارة مشاريع الشركة وإضافة وتعديل وحذف المشاريع.
          </p>
        </div>

        <Link
          href="/admin/projects/new"
          className="rounded-xl bg-[#08152B] px-6 py-3 font-bold text-white transition hover:bg-yellow-500 hover:text-[#08152B]"
        >
          + إضافة مشروع
        </Link>
      </div>

      {projects.length === 0 ? (
        <div className="rounded-2xl border bg-white p-12 text-center shadow-sm">
          <h2 className="text-xl font-bold text-gray-700">
            لا توجد مشاريع حالياً
          </h2>

          <p className="mt-2 text-gray-500">
            أضف أول مشروع لعرضه هنا.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => {
            const coverImage = project.images[0];

            return (
              <div
                key={project.id}
                className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-56 bg-gray-100">
                  {coverImage ? (
                    <Image
                      src={coverImage.url}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-gray-400">
                      لا توجد صورة
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-black text-[#08152B]">
                    {project.title}
                  </h2>

                  <p className="mt-2 text-sm text-gray-500">
                    {project.city} - {project.state}
                  </p>

                  <div className="mt-5 flex gap-3">
                    <Link
                      href={`/admin/projects/${project.id}/edit`}
                      className="flex-1 rounded-xl bg-blue-600 px-4 py-3 text-center font-bold text-white transition hover:bg-blue-700"
                    >
                      تعديل
                    </Link>

                    <Link
                      href={`/admin/projects/${project.id}/images`}
                      className="flex-1 rounded-xl bg-[#08152B] px-4 py-3 text-center font-bold text-white transition hover:bg-yellow-500 hover:text-[#08152B]"
                    >
                      الصور
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}