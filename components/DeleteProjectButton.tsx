"use client";

import { Trash2 } from "lucide-react";
import { deleteProject } from "@/app/actions/deleteProject";

export default function DeleteProjectButton({
  id,
}: {
  id: string;
}) {
  return (
    <button
      onClick={async () => {
        if (!confirm("هل تريد حذف المشروع؟")) return;

        await deleteProject(id);
      }}
      className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
    >
      <Trash2 size={18} />
    </button>
  );
}