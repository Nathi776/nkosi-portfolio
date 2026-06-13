export default function Home() {
  return (
    <main className="max-w-6xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-4">
        Computer Science Student | Software & Security Systems Developer
      </h1>

      <p className="text-gray-600 max-w-2xl">
        I build full-stack systems focused on security, machine learning, and
        real-world problem solving — from scam detection platforms to
        surveillance and training systems.
      </p>

      <div className="mt-6 space-x-4">
        <a href="/projects" className="bg-blue-600 text-white px-5 py-2 rounded">
          View Projects
        </a>
        <a
          href="/cv.pdf"
          className="border px-5 py-2 rounded"
        >
          Download CV
        </a>
      </div>
    </main>
  );
}
