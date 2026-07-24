import { prisma } from "@/lib/prisma";
import ImageUploader from "@/components/ImageUploader";
import ProjectImageCard from "@/components/ProjectImageCard";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ImagesPage({ params }: Props) {
  const { id } = await params;

  const project = await prisma.project.findUnique({
    where: {
      id,
    },
    include: {
      images: {
        orderBy: {
          isCover: "desc",
        },
      },
    },
  });

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-10">

      <div>
        <h1 className="text-4xl font-black text-[#08152B]">
          صور المشروع
        </h1>

        <p className="mt-2 text-gray-500">
          {project.title}
        </p>
      </div>

      <ImageUploader projectId={project.id} />

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {project.images.length === 0 ? (

          <div className="col-span-full rounded-3xl bg-white p-12 text-center shadow">
            لا توجد صور لهذا المشروع
          </div>

        ) : (

          project.images.map((image) => (
            <ProjectImageCard
              key={image.id}
              id={image.id}
              url={image.url}
              isCover={image.isCover}
            />
          ))

        )}

      </div>

    </div>
  );
}