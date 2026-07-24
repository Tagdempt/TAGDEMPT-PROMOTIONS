"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
  url: string;
  isCover: boolean;
}

export default function ProjectImageCard({
  id,
  url,
  isCover,
}: Props) {
  const router = useRouter();

  async function makeCover() {
    await fetch(`/api/projects/images/${id}`, {
      method: "PATCH",
    });

    router.refresh();
  }

  async function removeImage() {
    if (!confirm("هل تريد حذف الصورة؟")) return;

    await fetch(`/api/projects/images/${id}`, {
      method: "DELETE",
    });

    router.refresh();
  }

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
      <div className="relative aspect-square">
        <Image
          src={url}
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-3 p-5">
        {isCover ? (
          <div className="rounded-xl bg-yellow-500 py-2 text-center font-bold text-[#08152B]">
            الصورة الرئيسية
          </div>
        ) : (
          <button
            onClick={makeCover}
            className="w-full rounded-xl bg-blue-600 py-2 font-bold text-white"
          >
            جعلها رئيسية
          </button>
        )}

        <button
          onClick={removeImage}
          className="w-full rounded-xl bg-red-600 py-2 font-bold text-white"
        >
          حذف الصورة
        </button>
      </div>
    </div>
  );
}