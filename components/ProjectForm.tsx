"use client";

import { useState } from "react";
import { createProject, updateProject } from "@/app/actions/project";
import ImageUploader from "./upload/ImageUploader";

interface Project {
  id: string;
  title: string;
  slug: string;

  shortDescription: string | null;
  description: string;

  location: string;
  city: string;
  state: string;

  type: string;
  category: string | null;

  status: string;

  price: string | null;
  area: string | null;
  units: number | null;

  deliveryDate: Date | null;

  mapUrl: string | null;
  videoUrl: string | null;
  brochureUrl: string | null;

  featured: boolean;

  createdAt: Date;
  updatedAt: Date;
}

interface Props {
  project?: Project;
}

export default function ProjectForm({ project }: Props) {
  const [imageUrl, setImageUrl] = useState("");

  return (
    <form
      action={
        project
          ? updateProject.bind(null, project.id)
          : createProject
      }
      className="mx-auto max-w-6xl rounded-3xl bg-white p-10 shadow-xl"
    >
      <h2 className="mb-10 text-3xl font-black">
        {project ? "تعديل المشروع" : "إضافة مشروع جديد"}
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        <input
          name="title"
          defaultValue={project?.title}
          placeholder="اسم المشروع"
          className="rounded-xl border p-3"
          required
        />

        <input
          name="shortDescription"
          defaultValue={project?.shortDescription ?? ""}
          placeholder="وصف مختصر"
          className="rounded-xl border p-3"
        />

        <input
          name="location"
          defaultValue={project?.location}
          placeholder="العنوان"
          className="rounded-xl border p-3"
          required
        />

        <input
          name="city"
          defaultValue={project?.city}
          placeholder="المدينة"
          className="rounded-xl border p-3"
          required
        />

        <input
          name="state"
          defaultValue={project?.state}
          placeholder="الولاية"
          className="rounded-xl border p-3"
          required
        />

        <input
          name="type"
          defaultValue={project?.type}
          placeholder="نوع المشروع"
          className="rounded-xl border p-3"
          required
        />

        <input
          name="category"
          defaultValue={project?.category ?? ""}
          placeholder="التصنيف"
          className="rounded-xl border p-3"
        />

        <select
          name="status"
          defaultValue={project?.status ?? "AVAILABLE"}
          className="rounded-xl border p-3"
        >
          <option value="AVAILABLE">متاح</option>
          <option value="COMING_SOON">قريباً</option>
          <option value="SOLD_OUT">مباع</option>
        </select>

        <input
          name="price"
          defaultValue={project?.price ?? ""}
          placeholder="السعر"
          className="rounded-xl border p-3"
        />

        <input
          name="area"
          defaultValue={project?.area ?? ""}
          placeholder="المساحة"
          className="rounded-xl border p-3"
        />

        <input
          type="number"
          name="units"
          defaultValue={project?.units ?? undefined}
          placeholder="عدد الوحدات"
          className="rounded-xl border p-3"
        />

        <input
          type="date"
          name="deliveryDate"
          defaultValue={
            project?.deliveryDate
              ? new Date(project.deliveryDate)
                  .toISOString()
                  .split("T")[0]
              : ""
          }
          className="rounded-xl border p-3"
        />

        <input
          name="mapUrl"
          defaultValue={project?.mapUrl ?? ""}
          placeholder="رابط Google Maps"
          className="rounded-xl border p-3"
        />

        <input
          name="videoUrl"
          defaultValue={project?.videoUrl ?? ""}
          placeholder="رابط الفيديو"
          className="rounded-xl border p-3"
        />

        <input
          name="brochureUrl"
          defaultValue={project?.brochureUrl ?? ""}
          placeholder="رابط البروشور PDF"
          className="rounded-xl border p-3"
        />

      </div>

      <textarea
        name="description"
        defaultValue={project?.description}
        rows={7}
        placeholder="الوصف الكامل"
        className="mt-6 w-full rounded-xl border p-4"
        required
      />

      <label className="mt-6 flex items-center gap-3 text-lg font-semibold">
        <input
          type="checkbox"
          name="featured"
          defaultChecked={project?.featured}
        />
        مشروع مميز
      </label>

      {!project && (
        <div className="mt-8">

          <ImageUploader
            onUpload={(url) => setImageUrl(url)}
          />

          {imageUrl && (
            <>
              <input
                type="hidden"
                name="imageUrl"
                value={imageUrl}
              />

              <img
                src={imageUrl}
                alt=""
                className="mt-5 h-56 w-full rounded-2xl object-cover"
              />
            </>
          )}

        </div>
      )}

      <button
        type="submit"
        className="mt-10 rounded-2xl bg-[#08152B] px-10 py-4 font-bold text-white transition hover:bg-yellow-500 hover:text-[#08152B]"
      >
        {project ? "حفظ التعديلات" : "إضافة المشروع"}
      </button>

    </form>
  );
}