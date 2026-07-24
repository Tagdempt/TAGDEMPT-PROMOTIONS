export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma";

export default async function InvestmentPage() {
  const investors = await prisma.investor.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold">
          Investment Requests
        </h1>

        <p className="text-gray-500">
          Manage investor requests
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border bg-white">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Company</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Investment</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Date</th>
            </tr>

          </thead>

          <tbody>

            {investors.map((item) => (

              <tr
                key={item.id}
                className="border-t"
              >

                <td className="p-4">
                  {item.name}
                </td>

                <td className="p-4">
                  {item.company || "-"}
                </td>

                <td className="p-4">
                  {item.email}
                </td>

                <td className="p-4">
                  {item.phone || "-"}
                </td>

                <td className="p-4">
                  {item.investment || "-"}
                </td>

                <td className="p-4">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                    {item.status}
                  </span>
                </td>

                <td className="p-4">
                  {new Date(item.createdAt).toLocaleDateString()}
                </td>

              </tr>

            ))}

            {investors.length === 0 && (

              <tr>

                <td
                  colSpan={7}
                  className="p-10 text-center text-gray-500"
                >
                  No investment requests yet.
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}