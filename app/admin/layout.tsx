import AdminSidebar from "@/components/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F5F7FA]">

      <div className="mx-auto flex max-w-[1700px]">

        {/* Sidebar */}

        <aside className="hidden w-[300px] border-l border-gray-200 bg-[#08152B] shadow-2xl lg:block">

          <AdminSidebar />

        </aside>

        {/* Content */}

        <main className="min-h-screen flex-1">

          <div className="border-b border-gray-200 bg-white px-10 py-8 shadow-sm">

            <h1 className="text-3xl font-black text-[#08152B]">
              لوحة إدارة TAGDEMPT PROMOTIONS
            </h1>

            <p className="mt-2 text-gray-500">
              إدارة المشاريع والأخبار والاستثمارات والعملاء.
            </p>

          </div>

          <div className="p-8 lg:p-10">

            {children}

          </div>

        </main>

      </div>

    </div>
  );
}