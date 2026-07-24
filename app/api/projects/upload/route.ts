import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { projectId, url } = await req.json();

    if (!projectId || !url) {
      return NextResponse.json(
        { error: "Missing data" },
        { status: 400 }
      );
    }

    const hasCover = await prisma.projectImage.findFirst({
      where: {
        projectId,
        isCover: true,
      },
    });

    await prisma.projectImage.create({
      data: {
        projectId,
        url,
        isCover: !hasCover,
      },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Upload failed" },
      { status: 500 }
    );
  }
}