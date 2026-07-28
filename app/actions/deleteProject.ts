"use server";

import { prisma } from "@/lib/prisma";

export async function deleteProject(
  projectId: string
): Promise<{ success: boolean; error?: string }> {
  try {
    if (!projectId) {
      return {
        success: false,
        error: "معرّف المشروع غير صالح.",
      };
    }

    const project = await prisma.project.findUnique({
      where: {
        id: projectId,
      },
    });

    if (!project) {
      return {
        success: false,
        error: "المشروع غير موجود.",
      };
    }

    await prisma.project.delete({
      where: {
        id: projectId,
      },
    });

    return {
      success: true,
    };
  } catch (error) {
    console.error("Delete project error:", error);

    return {
      success: false,
      error: "حدث خطأ أثناء حذف المشروع.",
    };
  }
}