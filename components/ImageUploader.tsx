"use client";

import { CldUploadWidget } from "next-cloudinary";
import { useRouter } from "next/navigation";

interface Props {
  projectId: string;
}

export default function ImageUploader({ projectId }: Props) {
  const router = useRouter();

  async function saveImage(url: string) {
    await fetch("/api/projects/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        projectId,
        url,
      }),
    });

    router.refresh();
  }

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl">
      <h2 className="mb-6 text-2xl font-black text-[#08152B]">
        إضافة صور جديدة
      </h2>

      <CldUploadWidget
        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!}
        onSuccess={(result: any) => {
          if (result?.info?.secure_url) {
            saveImage(result.info.secure_url);
          }
        }}
      >
        {({ open }) => (
          <button
            type="button"
            onClick={() => open()}
            className="rounded-2xl bg-[#08152B] px-8 py-4 font-bold text-white transition hover:bg-yellow-500 hover:text-[#08152B]"
          >
            رفع صورة
          </button>
        )}
      </CldUploadWidget>

      <p className="mt-4 text-sm text-gray-500">
        سيتم إضافة الصورة مباشرة إلى المشروع.
      </p>
    </div>
  );
}