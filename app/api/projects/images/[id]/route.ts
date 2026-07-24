import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface Params {
  params: Promise<{
    id: string;
  }>;
}

export async function PATCH(req: Request, { params }: Params) {
  const { id } = await params;

  const image = await prisma.projectImage.findUnique({
    where: { id },
  });

  if (!image) {
    return NextResponse.json({ error: "Image not found" }, { status: 404 });
  }

  await prisma.projectImage.updateMany({
    where: {
      projectId: image.projectId,
    },
    data: {
      isCover: false,
    },
  });

  await prisma.projectImage.update({
    where: {
      id,
    },
    data: {
      isCover: true,
    },
  });

  return NextResponse.json({ success: true });
}

export async function DELETE(req: Request, { params }: Params) {
  const { id } = await params;

  await prisma.projectImage.delete({
    where: {
      id,
    },
  });

  return NextResponse.json({ success: true });
}