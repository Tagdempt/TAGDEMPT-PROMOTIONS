"use client";

import { CldUploadWidget } from "next-cloudinary";

type Props = {
  onUpload: (url: string) => void;
};

export default function ImageUploader({ onUpload }: Props) {
  return (
    <CldUploadWidget
      uploadPreset="tagdempt_uploads"
      onSuccess={(result: any) => {
        const url = result?.info?.secure_url;

        if (url) {
          onUpload(url);
        }
      }}
    >
      {({ open }) => (
        <button
          type="button"
          onClick={() => open()}
          className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
        >
          Upload Image
        </button>
      )}
    </CldUploadWidget>
  );
}