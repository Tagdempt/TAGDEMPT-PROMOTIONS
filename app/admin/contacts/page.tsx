export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma";

export default async function ContactsPage() {
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

      <div className="overflow-hidden rounded-xl border bg-white">
        <table className="w-full">
          <thead className="bg-gray-100">
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
                className="border-t"
              >
                <td className="p-4">{message.name}</td>

                <td className="p-4">
                  {message.email}
                </td>

                <td className="p-4">
                  {message.company || "-"}
                </td>

                <td className="max-w-md p-4">
                  {message.message}
                </td>

                <td className="p-4">
                  {new Date(
                    message.createdAt
                  ).toLocaleDateString()}
                </td>
              </tr>
            ))}

            {messages.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="p-8 text-center text-gray-500"
                >
                  No messages yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}