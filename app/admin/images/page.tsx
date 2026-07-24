import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import { Images, ArrowLeft } from "lucide-react";

export default async function ImagesPage() {
  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      images: true,
    },
  });

  return (
    <div className="space-y-8">

      {/* Header */}

      <div>
        <h1 className="text-3xl font-black text-[#08152B]">
          إدارة صور المشاريع
        </h1>

        <p className="mt-2 text-gray-500">
          اختر المشروع الذي تريد إدارة صوره.
        </p>
      </div>

      {/* Projects */}

      {projects.length === 0 ? (

        <div className="rounded-2xl border bg-white p-12 text-center shadow-sm">

          <Images
            size={50}
            className="mx-auto mb-5 text-gray-400"
          />

          <h2 className="text-xl font-bold text-gray-700">
            لا توجد مشاريع حالياً
          </h2>

          <p className="mt-2 text-gray-500">
            أضف مشروعاً أولاً حتى تتمكن من إدارة صوره.
          </p>

        </div>

      ) : (

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {projects.map((project) => {

            const coverImage =
              project.images.find((image) => image.isCover) ??
              project.images[0];

            return (

              <div
                key={project.id}
                className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >

                {/* Image */}

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

                    <div className="flex h-full items-center justify-center">

                      <Images
                        size={50}
                        className="text-gray-300"
                      />

                    </div>

                  )}

                </div>

                {/* Content */}

                <div className="p-6">

                  <h2 className="text-xl font-black text-[#08152B]">
                    {project.title}
                  </h2>

                  <p className="mt-2 text-sm text-gray-500">
                    {project.images.length} صورة
                  </p>

                  <Link
                    href={`/admin/images/${project.id}`}
                    className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-[#08152B] px-5 py-3 font-bold text-white transition hover:bg-yellow-500 hover:text-[#08152B]"
                  >

                    <Images size={18} />

                    إدارة الصور

                    <ArrowLeft size={18} />

                  </Link>

                </div>

              </div>

            );

          })}

        </div>

      )}

    </div>
  );
}