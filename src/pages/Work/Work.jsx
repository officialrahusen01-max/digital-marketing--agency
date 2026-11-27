import { projects } from "../../data/projects.js";
import ProjectCard from "../../components/ui/ProjectCard.jsx";
import { Button, PageHero } from "../../components/ui/primitives.jsx";
import TestimonialSection from "../../sections/home/TestimonialSection.jsx";

export default function Work() {
  return (
    <main>
      <PageHero
        crumbs={[{ label: "Work" }]}
        eyebrow="Our work"
        title="Work that gets results"
        subtitle="Brand launches, e-commerce growth, social campaigns and websites — a selection of projects we're proud of."
      >
        <Button to="/enquirisubmit" arrow>Start your project</Button>
      </PageHero>

      <section className="bg-night-900 py-20 sm:py-24" aria-label="Selected projects">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} featured={index === 0} />
          ))}
        </div>
      </section>

      <TestimonialSection />
    </main>
  );
}
