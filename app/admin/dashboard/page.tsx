import { prisma } from "@/lib/prisma";
import {
  Building2,
  Newspaper,
  Mail,
  Users,
} from "lucide-react";

export default async function Dashboard() {
  const [
    projects,
    news,
    contacts,
    investors,
  ] = await Promise.all([
    prisma.project.count(),
    prisma.news.count(),
   prisma.contactMessage.count(),
    prisma.investor.count(),
  ]);

  const cards = [
    {
      title: "المشاريع",
      value: projects,
      icon: Building2,
      color: "from-yellow-400 to-amber-600",
    },
    {
      title: "الأخبار",
      value: news,
      icon: Newspaper,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "رسائل التواصل",
      value: contacts,
      icon: Mail,
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "طلبات الاستثمار",
      value: investors,
      icon: Users,
      color: "from-purple-500 to-fuchsia-600",
    },
  ];

  return (
    <div className="space-y-10">

      <div>
        <h1 className="text-4xl font-black text-[#08152B]">
          لوحة التحكم
        </h1>

        <p className="mt-2 text-gray-500">
          مرحبًا بك في لوحة إدارة TAGDEMPT PROMOTIONS
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="rounded-3xl bg-white p-8 shadow-xl"
            >
              <div
                className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${card.color}`}
              >
                <Icon
                  size={30}
                  className="text-white"
                />
              </div>

              <h2 className="text-lg font-bold text-gray-500">
                {card.title}
              </h2>

              <p className="mt-3 text-5xl font-black text-[#08152B]">
                {card.value}
              </p>
            </div>
          );
        })}

      </div>

    </div>
  );
}