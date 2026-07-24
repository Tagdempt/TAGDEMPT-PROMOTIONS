"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function createNews(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const image = formData.get("image") as string;

  const published =
    formData.get("published") === "true";

  await prisma.news.create({
    data: {
      title,
      content,
      image: image || null,
      published,
    },
  });

  revalidatePath("/admin/news");
  revalidatePath("/news");

  redirect("/admin/news");
}

export async function updateNews(
  id: string,
  formData: FormData
) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const image = formData.get("image") as string;

  const published =
    formData.get("published") === "true";

  await prisma.news.update({
    where: {
      id,
    },
    data: {
      title,
      content,
      image: image || null,
      published,
    },
  });

  revalidatePath("/admin/news");
  revalidatePath("/news");

  redirect("/admin/news");
}

export async function deleteNews(id: string) {
  await prisma.news.delete({
    where: {
      id,
    },
  });

  revalidatePath("/admin/news");
}