import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    let visitorCounter = await prisma.siteVisit.findFirst();

    if (!visitorCounter) {
      visitorCounter = await prisma.siteVisit.create({
        data: {
          count: 1,
        },
      });
    } else {
      visitorCounter = await prisma.siteVisit.update({
        where: {
          id: visitorCounter.id,
        },
        data: {
          count: {
            increment: 1,
          },
        },
      });
    }

    return NextResponse.json({
      count: visitorCounter.count,
    });
  } catch (error) {
    console.error("Visitor counter error:", error);

    return NextResponse.json(
      {
        error: "Failed to update visitor counter",
      },
      {
        status: 500,
      }
    );
  }
}