import { projects } from "@/data/projects";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="max-w-6xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="border p-5 rounded hover:shadow"
          >
            <h2 className="font-semibold text-xl">{p.title}</h2>
            <p className="text-gray-600 mt-2">{p.shortDesc}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
