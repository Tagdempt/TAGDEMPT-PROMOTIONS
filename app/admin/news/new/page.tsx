import NewsForm from "@/components/NewsForm";

export default function NewNewsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          New Article
        </h1>

        <p className="text-gray-500">
          Create a news article
        </p>
      </div>

      <NewsForm />
    </div>
  );
}