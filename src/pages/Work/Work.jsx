import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects.js";

const projectImages = [
  "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1600&q=85",
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=85",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=85",
];

export default function Work() {
  return (
    <main className="bg-ink text-cream">
      <section className="relative isolate overflow-hidden px-6 pb-24 pt-28 sm:px-10 lg:px-[6vw] lg:pb-36 lg:pt-36" aria-labelledby="work-page-title">
        <div className="pointer-events-none absolute -right-40 top-0 -z-10 h-[min(60vw,760px)] w-[min(60vw,760px)] rounded-full border border-coral/15" />
        <div className="mx-auto max-w-[1600px]">
          <p className="mb-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-mist">
            <span className="h-2 w-2 rounded-full bg-coral shadow-[0_0_16px_rgb(0_221_204)]" />
            03 / Vertexo projects
          </p>
          <h1 id="work-page-title" className="max-w-[1200px] text-[clamp(4rem,10vw,10rem)] font-medium leading-[0.82] tracking-[-0.085em]">
            Reach your <em className="font-display font-normal text-coral">digital peak.</em>
          </h1>
          <div className="mt-12 grid gap-10 border-t border-cream/15 pt-6 md:grid-cols-[0.55fr_1fr] md:gap-16">
            <p className="text-[10px] uppercase tracking-[0.18em] text-mist">Identity / Experience / Growth</p>
            <p className="max-w-2xl text-xl leading-8 text-cream/75 sm:text-2xl sm:leading-9">
              Vertexo helps brands reach their digital peak through sharper technology, marketing and innovation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#111217] px-6 py-20 sm:px-10 lg:px-[6vw] lg:py-28" aria-label="Selected projects">
        <div className="mx-auto grid max-w-[1600px] gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.75 }}
              className={index === 0 ? "md:col-span-2" : ""}
            >
              <Link to="/services" data-cursor="View case" className="group block">
                <div className={`relative overflow-hidden rounded-[2rem] border border-cream/10 bg-gradient-to-br ${project.color} ${index === 0 ? "aspect-[16/8]" : "aspect-[4/3]"}`}>
                  <img src={projectImages[index]} alt={`${project.title} project presentation`} className="absolute inset-0 h-full w-full object-cover mix-blend-overlay opacity-45 transition duration-1000 group-hover:scale-105 group-hover:opacity-65" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-white/5" />
                  <div className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full border border-ink/25 text-2xl text-ink transition duration-500 group-hover:rotate-45 sm:right-10 sm:top-10">↗</div>
                  <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-cream/75">{project.category}</p>
                    <h2 className="mt-3 text-4xl tracking-[-0.07em] text-cream sm:text-6xl">{project.title}</h2>
                    <p className="mt-4 text-sm uppercase tracking-[0.14em] text-coral">{project.result}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 px-1 pt-4 text-[10px] uppercase tracking-[0.16em] text-mist">
                  <span>Case study / 0{index + 1}</span>
                  <span className="text-coral transition-transform duration-300 group-hover:translate-x-2">Explore project →</span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="bg-coral px-6 py-24 text-ink sm:px-10 lg:px-[6vw] lg:py-36" aria-labelledby="work-cta-title">
        <div className="mx-auto max-w-[1600px]">
          <p className="mb-8 text-[10px] uppercase tracking-[0.2em]">Have a challenge worth solving?</p>
          <h2 id="work-cta-title" className="max-w-5xl text-[clamp(3.5rem,8vw,9rem)] leading-[0.84] tracking-[-0.08em]">Your next best case study starts here.</h2>
          <a href="mailto:officialrahusen01@gmail.com" className="mt-10 inline-flex items-center gap-5 rounded-full bg-ink px-6 py-4 text-xs uppercase tracking-[0.14em] text-cream transition duration-500 hover:-translate-y-1 hover:bg-cream hover:text-ink">
            Start a conversation <span className="text-lg">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}
