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

    const cover = await prisma.projectImage.findFirst({
      where: {
        projectId,
        isCover: true,
      },
    });

    const image = await prisma.projectImage.create({
      data: {
        projectId,
        url,
        isCover: !cover,
      },
    });

    return NextResponse.json(image);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Server Error" },
      { status: 500 }
    );
  }
}