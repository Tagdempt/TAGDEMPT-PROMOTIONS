import { prisma } from "@/lib/prisma";
import { connection } from "next/server";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  await connection();

  const [
    projectsCount,
    newsCount,
    messagesCount,
    investorsCount,
  ] = await Promise.all([
    prisma.project.count(),
    prisma.news.count(),
    prisma.contactMessage.count(),
    prisma.investor.count(),
  ]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black text-[#08152B]">
          Dashboard
        </h1>

        <p className="mt-2 text-gray-500">
          Welcome to the administration dashboard.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-gray-500">
            Projects
          </p>

          <p className="mt-3 text-4xl font-black text-[#08152B]">
            {projectsCount}
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-gray-500">
            News
          </p>

          <p className="mt-3 text-4xl font-black text-[#08152B]">
            {newsCount}
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-gray-500">
            Contact Messages
          </p>

          <p className="mt-3 text-4xl font-black text-[#08152B]">
            {messagesCount}
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-gray-500">
            Investors
          </p>

          <p className="mt-3 text-4xl font-black text-[#08152B]">
            {investorsCount}
          </p>
        </div>
      </div>
    </div>
  );
}