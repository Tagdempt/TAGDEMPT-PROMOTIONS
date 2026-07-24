"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    async function registerVisit() {
      try {
        const response = await fetch("/api/visitors", {
          method: "GET",
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch visitor count");
        }

        const data = await response.json();

        setCount(data.count);
      } catch (error) {
        console.error("Visitor counter error:", error);
      }
    }

    registerVisit();
  }, []);

  return (
    <div className="flex items-center gap-3 rounded-2xl bg-[#08152B] px-5 py-3 text-white shadow-lg">
      <Eye size={20} className="text-yellow-400" />

      <div>
        <p className="text-xs text-slate-300">
          عدد الزوار
        </p>

        <p className="text-lg font-black">
          {count !== null ? count.toLocaleString("ar-DZ") : "..."}
        </p>
      </div>
    </div>
  );
}