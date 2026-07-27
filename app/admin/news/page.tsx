import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { deleteNews } from "@/app/actions/news";

export const dynamic = "force-dynamic";

export default async function NewsPage() {
  const news = await prisma.news.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            News
          </h1>

          <p className="text-gray-500">
            Manage company news
          </p>
        </div>

        <Link
          href="/admin/news/new"
          className="rounded-lg bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
        >
          + New Article
        </Link>
      </div>

      <div className="overflow-x-auto rounded-xl border bg-white shadow-sm">
        {news.length === 0 ? (
          <p className="p-8 text-center text-gray-500">
            No news articles found.
          </p>
        ) : (
          <table className="w-full">
            <thead className="border-b bg-gray-100">
              <tr>
                <th className="p-4 text-center">Image</th>
                <th className="p-4 text-left">Title</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Date</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {news.map((item) => (
                <tr
                  key={item.id}
                  className="border-b transition hover:bg-gray-50"
                >
                  <td className="p-4">
                    {item.image ? (
                      <div className="relative mx-auto h-16 w-24 overflow-hidden rounded-lg border">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="96px"
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="mx-auto flex h-16 w-24 items-center justify-center rounded-lg bg-gray-200 text-xs text-gray-500">
                        No Image
                      </div>
                    )}
                  </td>

                  <td className="p-4 font-semibold">
                    {item.title}
                  </td>

                  <td className="p-4">
                    <span
                      className={`rounded-full px-3 py-1 text-sm ${
                        item.published
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {item.published ? "Published" : "Draft"}
                    </span>
                  </td>

                  <td className="p-4">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </td>

                  <td className="p-4">
                    <div className="flex justify-center gap-4">
                      <Link
                        href={`/admin/news/${item.id}`}
                        className="rounded-lg bg-blue-600 px-3 py-2 text-sm text-white transition hover:bg-blue-700"
                      >
                        Edit
                      </Link>

                      <form action={deleteNews.bind(null, item.id)}>
                        <button
                          type="submit"
                          className="rounded-lg bg-red-600 px-3 py-2 text-sm text-white transition hover:bg-red-700"
                        >
                          Delete
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}