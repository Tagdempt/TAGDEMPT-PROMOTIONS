import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ProjectForm from "@/components/ProjectForm";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditProjectPage({
  params,
}: Props) {
  const { id } = await params;

  const project = await prisma.project.findUnique({
    where: {
      id,
    },
  });

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-black text-[#08152B]">
          تعديل المشروع
        </h1>

        <p className="mt-2 text-gray-500">
          تحديث جميع بيانات المشروع
        </p>

      </div>

      <ProjectForm project={project} />

    </div>
  );
}