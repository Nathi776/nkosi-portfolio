import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <main className="max-w-5xl mx-auto p-10 space-y-10">
      <h1 className="text-3xl font-bold">{project.title}</h1>

      <section>
        <h2 className="text-xl font-semibold mb-2">Overview</h2>
        <p className="text-gray-700">{project.overview}</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">System Design</h2>
        <div className="space-y-6">
          {project.diagrams.map((d, i) => (
            <div key={i}>
              <p className="font-medium mb-2">{d.label}</p>
              <img src={d.image} alt={d.label} className="border rounded" />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Key Features</h2>
        <ul className="list-disc pl-6">
          {project.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
        <ul>
          {Object.entries(project.tech).map(([k, v]) => (
            <li key={k}>
              <strong>{k}:</strong> {v}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Challenges & Solutions</h2>
        {project.challenges.map((c, i) => (
          <div key={i} className="mb-4">
            <p>
              <strong>Problem:</strong> {c.problem}
            </p>
            <p>
              <strong>Solution:</strong> {c.solution}
            </p>
          </div>
        ))}
      </section>

      <section>
        <a
          href={project.github}
          target="_blank"
          className="text-blue-600 underline"
        >
          View on GitHub →
        </a>
      </section>
    </main>
  );
}
