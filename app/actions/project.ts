"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
}

async function generateUniqueSlug(title: string) {
  const baseSlug = slugify(title);

  let slug = baseSlug;
  let counter = 1;

  while (true) {
    const exists = await prisma.project.findUnique({
      where: { slug },
    });

    if (!exists) return slug;

    slug = `${baseSlug}-${counter}`;
    counter++;
  }
}

export async function createProject(formData: FormData) {
  const title = String(formData.get("title") ?? "");
  const description = String(formData.get("description") ?? "");
  const shortDescription = String(formData.get("shortDescription") ?? "");

  const location = String(formData.get("location") ?? "");
  const city = String(formData.get("city") ?? "");
  const state = String(formData.get("state") ?? "");

  const type = String(formData.get("type") ?? "");
  const category = String(formData.get("category") ?? "");

  const status = String(formData.get("status") ?? "");

  const price = String(formData.get("price") ?? "");
  const area = String(formData.get("area") ?? "");

  const unitsValue = formData.get("units");
  const units =
    unitsValue && String(unitsValue) !== ""
      ? Number(unitsValue)
      : null;

  const deliveryDateValue = formData.get("deliveryDate");
  const deliveryDate =
    deliveryDateValue && String(deliveryDateValue) !== ""
      ? new Date(String(deliveryDateValue))
      : null;

  const mapUrl = String(formData.get("mapUrl") ?? "");
  const videoUrl = String(formData.get("videoUrl") ?? "");
  const brochureUrl = String(formData.get("brochureUrl") ?? "");

  const featured = formData.get("featured") === "on";

  const imageUrl = String(formData.get("imageUrl") ?? "");

  const slug = await generateUniqueSlug(title);

  const project = await prisma.project.create({
    data: {
      title,
      slug,

      shortDescription: shortDescription || null,
      description,

      location,
      city,
      state,

      type,
      category: category || null,

      status,

      price: price || null,
      area: area || null,
      units,

      deliveryDate,

      mapUrl: mapUrl || null,
      videoUrl: videoUrl || null,
      brochureUrl: brochureUrl || null,

      featured,
    },
  });

  if (imageUrl) {
    await prisma.projectImage.create({
      data: {
        url: imageUrl,
        isCover: true,
        projectId: project.id,
      },
    });
  }

  revalidatePath("/admin/projects");
  revalidatePath("/projects");

  redirect("/admin/projects");
}

export async function updateProject(
  id: string,
  formData: FormData
) {
  const title = String(formData.get("title") ?? "");
  const description = String(formData.get("description") ?? "");
  const shortDescription = String(formData.get("shortDescription") ?? "");

  const location = String(formData.get("location") ?? "");
  const city = String(formData.get("city") ?? "");
  const state = String(formData.get("state") ?? "");

  const type = String(formData.get("type") ?? "");
  const category = String(formData.get("category") ?? "");

  const status = String(formData.get("status") ?? "");

  const price = String(formData.get("price") ?? "");
  const area = String(formData.get("area") ?? "");

  const unitsValue = formData.get("units");
  const units =
    unitsValue && String(unitsValue) !== ""
      ? Number(unitsValue)
      : null;

  const deliveryDateValue = formData.get("deliveryDate");
  const deliveryDate =
    deliveryDateValue && String(deliveryDateValue) !== ""
      ? new Date(String(deliveryDateValue))
      : null;

  const mapUrl = String(formData.get("mapUrl") ?? "");
  const videoUrl = String(formData.get("videoUrl") ?? "");
  const brochureUrl = String(formData.get("brochureUrl") ?? "");

  const featured = formData.get("featured") === "on";

  await prisma.project.update({
    where: {
      id,
    },
    data: {
      title,

      shortDescription: shortDescription || null,
      description,

      location,
      city,
      state,

      type,
      category: category || null,

      status,

      price: price || null,
      area: area || null,
      units,

      deliveryDate,

      mapUrl: mapUrl || null,
      videoUrl: videoUrl || null,
      brochureUrl: brochureUrl || null,

      featured,
    },
  });

  revalidatePath("/admin/projects");
  revalidatePath("/projects");

  redirect("/admin/projects");
}