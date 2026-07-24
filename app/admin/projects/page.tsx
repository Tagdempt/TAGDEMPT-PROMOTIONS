import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import DeleteProjectButton from "@/components/DeleteProjectButton";

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
    <div className="space-y-8">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-black text-[#08152B]">
            إدارة المشاريع
          </h1>

          <p className="text-gray-500 mt-2">
            جميع مشاريع المؤسسة
          </p>

        </div>

        <Link
          href="/admin/projects/new"
          className="rounded-xl bg-[#08152B] px-6 py-3 font-bold text-white hover:bg-yellow-500 hover:text-[#08152B]"
        >
          + مشروع جديد
        </Link>

      </div>

      <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr className="text-[#08152B]">

              <th className="p-5">الصورة</th>

              <th className="p-5 text-right">
                المشروع
              </th>

              <th className="p-5">
                المدينة
              </th>

              <th className="p-5">
                النوع
              </th>

              <th className="p-5">
                الحالة
              </th>

              <th className="p-5">
                مميز
              </th>

              <th className="p-5">
                الإجراءات
              </th>

            </tr>

          </thead>

          <tbody>

            {projects.map((project) => (

              <tr
                key={project.id}
                className="border-t hover:bg-slate-50"
              >

                <td className="p-4">

                  {project.images[0] ? (

                    <div className="relative mx-auto h-16 w-24 overflow-hidden rounded-xl">

                      <Image
                        src={project.images[0].url}
                        alt={project.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />

                    </div>

                  ) : (

                    <div className="text-gray-400">
                      —
                    </div>

                  )}

                </td>

                <td className="p-4">

                  <div className="font-bold">
                    {project.title}
                  </div>

                  {project.shortDescription && (

                    <div className="text-sm text-gray-500 mt-1">

                      {project.shortDescription}

                    </div>

                  )}

                </td>

                <td className="text-center">
                  {project.city}
                </td>

                <td className="text-center">
                  {project.type}
                </td>

                <td className="text-center">

                  <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-bold text-green-700">

                    {project.status}

                  </span>

                </td>

                <td className="text-center">

                  {project.featured ? (

                    <span className="rounded-full bg-yellow-400 px-3 py-1 text-sm font-bold">

                      ⭐ نعم

                    </span>

                  ) : (

                    <span className="text-gray-400">
                      لا
                    </span>

                  )}

                </td>

                <td>

                  <div className="flex justify-center gap-2">

                    <Link
                      href={`/admin/projects/${project.id}/edit`}
                      className="rounded-lg bg-blue-600 px-3 py-2 text-sm text-white"
                    >
                      تعديل
                    </Link>

                    <Link
                      href={`/admin/projects/${project.id}/images`}
                      className="rounded-lg bg-emerald-600 px-3 py-2 text-sm text-white"
                    >
                      الصور
                    </Link>

                    <DeleteProjectButton
                      id={project.id}
                    />

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}