import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <section className="container-custom py-20">
      <h1 className="text-5xl font-bold mb-10">Projects</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <ProjectCard
          title="Ronda Market"
          description="Marketplace platform designed for small entrepreneurs."
          stack={["Next.js", "Supabase", "PostgreSQL", "TypeScript"]}
          href="/projects/ronda"
        />

        <ProjectCard
          title="MercadoChat"
          description="Real-time second-hand buying and selling app."
          stack={["Next.js", "Supabase", "Tailwind CSS", "TypeScript"]}
          href="/projects/chat"
        />
      </div>
    </section>
  );
}