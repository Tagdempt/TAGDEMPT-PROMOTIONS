"use client";

import { useState } from "react";
import { createNews, updateNews } from "@/app/actions/news";
import ImageUploader from "./upload/ImageUploader";

interface News {
  id: string;
  title: string;
  content: string;
  image: string | null;
  published: boolean;
}

interface Props {
  news?: News;
}

export default function NewsForm({ news }: Props) {
  const [image, setImage] = useState(news?.image || "");

  return (
    <form
      action={
        news
          ? updateNews.bind(null, news.id)
          : createNews
      }
      className="mx-auto max-w-5xl rounded-xl bg-white p-8 shadow"
    >
      <h2 className="mb-8 text-3xl font-bold">
        {news ? "Edit Article" : "New Article"}
      </h2>

      <div className="space-y-6">

        <div>
          <label className="mb-2 block font-semibold">
            Title
          </label>

          <input
            name="title"
            defaultValue={news?.title}
            required
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            Content
          </label>

          <textarea
            name="content"
            rows={8}
            defaultValue={news?.content}
            required
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            Status
          </label>

          <select
            name="published"
            defaultValue={news?.published ? "true" : "false"}
            className="w-full rounded-lg border p-3"
          >
            <option value="false">
              Draft
            </option>

            <option value="true">
              Published
            </option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            Cover Image
          </label>

          <ImageUploader
            onUpload={(url) => setImage(url)}
          />

          <input
            type="hidden"
            name="image"
            value={image}
          />

          {image && (
            <img
              src={image}
              alt="Preview"
              className="mt-4 h-64 w-full rounded-xl border object-cover"
            />
          )}
        </div>

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700"
        >
          {news ? "Update Article" : "Create Article"}
        </button>

      </div>
    </form>
  );
}