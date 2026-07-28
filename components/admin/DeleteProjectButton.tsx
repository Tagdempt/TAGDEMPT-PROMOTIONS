"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteProject } from "@/app/actions/deleteProject";

type DeleteProjectButtonProps = {
  projectId: string;
};

export default function DeleteProjectButton({
  projectId,
}: DeleteProjectButtonProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "هل أنت متأكد من حذف هذا المشروع؟ سيتم حذف المشروع وجميع صوره المرتبطة به."
    );

    if (!confirmed) {
      return;
    }

    try {
      setLoading(true);

      const result = await deleteProject(projectId);

      if (!result.success) {
        alert(result.error || "حدث خطأ أثناء حذف المشروع.");
        return;
      }

      alert("تم حذف المشروع بنجاح.");

      router.refresh();
    } catch (error) {
      console.error("Delete project error:", error);

      alert("حدث خطأ غير متوقع أثناء حذف المشروع.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={loading}
      className="flex-1 rounded-xl bg-red-600 px-4 py-3 text-center font-bold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {loading ? "جاري الحذف..." : "حذف"}
    </button>
  );
}