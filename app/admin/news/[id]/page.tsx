import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import NewsForm from "@/components/NewsForm";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditNewsPage({
  params,
}: Props) {
  const { id } = await params;

  const news = await prisma.news.findUnique({
    where: {
      id,
    },
  });

  if (!news) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Edit Article
        </h1>

        <p className="text-gray-500">
          Update news article
        </p>
      </div>

      <NewsForm news={news} />
    </div>
  );
}