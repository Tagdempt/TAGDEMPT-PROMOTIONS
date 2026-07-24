export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma";

export default async function MessagesPage() {
  const messages = await prisma.contactMessage.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Contact Messages
        </h1>

        <p className="text-gray-500">
          Messages received from the website
        </p>
      </div>

      <div className="overflow-x-auto rounded-xl border bg-white shadow-sm">
        {messages.length === 0 ? (
          <p className="p-8 text-center text-gray-500">
            No messages found.
          </p>
        ) : (
          <table className="w-full">
            <thead className="border-b bg-gray-50">
              <tr>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Company</th>
                <th className="p-4 text-left">Message</th>
                <th className="p-4 text-left">Date</th>
              </tr>
            </thead>

            <tbody>
              {messages.map((message) => (
                <tr
                  key={message.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-4 font-semibold">
                    {message.name}
                  </td>

                  <td className="p-4">
                    {message.email}
                  </td>

                  <td className="p-4">
                    {message.company ?? "-"}
                  </td>

                  <td className="max-w-md p-4">
                    {message.message}
                  </td>

                  <td className="p-4">
                    {message.createdAt.toLocaleDateString()}
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