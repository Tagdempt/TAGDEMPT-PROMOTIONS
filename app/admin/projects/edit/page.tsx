export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Projects</h1>

        <a
          href="/admin/projects/new"
          className="rounded-lg bg-blue-600 px-4 py-2 text-white"
        >
          + New Project
        </a>
      </div>

      <div className="rounded-xl border p-8">
        No projects found.
      </div>
    </div>
  );
}