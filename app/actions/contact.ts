"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createContact(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const company = formData.get("company") as string;
  const message = formData.get("message") as string;

  await prisma.contactMessage.create({
    data: {
      name,
      email,
      company: company || null,
      message,
    },
  });

 revalidatePath("/admin/contacts");

  return {
    success: true,
  };
}