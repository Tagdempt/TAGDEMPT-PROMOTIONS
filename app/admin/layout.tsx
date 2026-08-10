import AdminSidebar from "@/components/AdminSidebar";
import Link from "next/link";
import {
  LayoutDashboard,
  Building2,
  BadgeDollarSign,
  Newspaper,
  Mail,
} from "lucide-react";
import LogoutButton from "@/components/LogoutButton";

const mobileLinks = [
  {
    href: "/admin/dashboard",
    label: "الرئيسية",
    icon: LayoutDashboard,
  },
  {
    href: "/admin/projects",
    label: "المشاريع",
    icon: Building2,
  },
  {
    href: "/admin/investment",
    label: "الاستثمار",
    icon: BadgeDollarSign,
  },
  {
    href: "/admin/news",
    label: "الأخبار",
    icon: Newspaper,
  },
  {
    href: "/admin/contacts",
    label: "الرسائل",
    icon: Mail,
  },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F6F8FB]">

      <div className="mx-auto flex min-h-screen max-w-[1700px]">

        {/* ================= DESKTOP SIDEBAR ================= */}

        <aside className="hidden w-[300px] shrink-0 border-l border-gray-200 bg-[#08152B] shadow-2xl lg:block">
          <AdminSidebar />
        </aside>

        {/* ================= CONTENT ================= */}

        <main className="min-w-0 flex-1">

          {/* ================= MOBILE NAVIGATION ================= */}

          <div className="sticky top-0 z-50 border-b border-white/10 bg-[#08152B] shadow-xl lg:hidden">

            <div className="flex items-center justify-between px-4 py-4">

              <div className="flex items-center gap-3">

                <img
                  src="/logo.png"
                  alt="TAGDEMPT"
                  className="h-10 w-10 object-contain"
                />

                <div>
                  <p className="text-sm font-black text-yellow-400">
                    TAGDEMPT
                  </p>

                  <p className="text-[10px] text-gray-300">
                    PROMOTIONS
                  </p>
                </div>

              </div>

              <div className="w-[120px]">
                <LogoutButton />
              </div>

            </div>

            <nav className="flex gap-2 overflow-x-auto px-3 pb-3">

              {mobileLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex shrink-0 items-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-xs font-bold text-white transition hover:bg-yellow-500 hover:text-[#08152B]"
                  >
                    <Icon size={16} />
                    {item.label}
                  </Link>
                );
              })}

            </nav>

          </div>

          {/* ================= HEADER ================= */}

          <div className="border-b border-gray-200 bg-white px-5 py-6 shadow-sm sm:px-8 lg:px-10 lg:py-8">

            <h1 className="text-2xl font-black text-[#08152B] sm:text-3xl">
              لوحة إدارة TAGDEMPT PROMOTIONS
            </h1>

            <p className="mt-2 text-sm leading-7 text-gray-500 sm:text-base">
              إدارة المشاريع والأخبار والاستثمارات والعملاء.
            </p>

          </div>

          {/* ================= PAGE ================= */}

          <div className="w-full min-w-0 p-4 sm:p-6 lg:p-10">
            {children}
          </div>

        </main>

      </div>

    </div>
  );
}