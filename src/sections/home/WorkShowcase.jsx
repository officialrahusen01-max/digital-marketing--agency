import { projects } from "../../data/projects.js";
import ProjectCard from "../../components/ui/ProjectCard.jsx";
import { Button, SectionHeader } from "../../components/ui/primitives.jsx";

export default function WorkShowcase() {
  return (
    <section className="bg-night py-20 sm:py-28" aria-labelledby="work-title">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader align="left" eyebrow="Our work" id="work-title" title="Real projects. Measurable growth." subtitle="A look at the brands we've helped grow online." />
          <Button to="/work" variant="outline" className="shrink-0 self-start md:self-auto" arrow>
            View all work
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} featured={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
