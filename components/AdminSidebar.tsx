"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Building2,
  BadgeDollarSign,
  Newspaper,
  Mail,
  LogOut,
} from "lucide-react";
import LogoutButton from "./LogoutButton";

const links = [
  {
    href: "/admin/dashboard",
    label: "لوحة التحكم",
    icon: LayoutDashboard,
  },
  {
    href: "/admin/projects",
    label: "المشاريع",
    icon: Building2,
  },
  {
    href: "/admin/investment",
    label: "طلبات الاستثمار",
    icon: BadgeDollarSign,
  },
  {
    href: "/admin/news",
    label: "الأخبار",
    icon: Newspaper,
  },
  {
    href: "/admin/contacts",
    label: "رسائل التواصل",
    icon: Mail,
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex min-h-screen flex-col bg-[#08152B]">

      {/* Logo */}

      <div className="border-b border-white/10 p-8">

        <div className="flex items-center gap-4">

          <Image
            src="/logo.png"
            alt="TAGDEMPT"
            width={58}
            height={58}
          />

          <div>

            <h2 className="text-xl font-black text-yellow-400">
              TAGDEMPT
            </h2>

            <p className="text-sm text-gray-300">
              PROMOTIONS
            </p>

          </div>

        </div>

      </div>

      {/* Menu */}

      <nav className="flex-1 space-y-3 p-6">

        {links.map((item) => {
          const Icon = item.icon;

          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 ${
                active
                  ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-[#08152B] shadow-lg"
                  : "text-gray-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon size={22} />

              <span className="font-bold">
                {item.label}
              </span>

            </Link>
          );
        })}

      </nav>

      {/* Logout */}

      <div className="border-t border-white/10 p-6">

        <div className="mb-4 flex items-center gap-3 text-gray-400">

          <LogOut size={20} />

          <span className="font-semibold">
            تسجيل الخروج
          </span>

        </div>

        <LogoutButton />

      </div>

    </aside>
  );
}