import { projects } from "../../data/projects.js";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";

const projectImages = [
  "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1600&q=85",
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=85",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=85",
];

function ScrollImage({ src, alt, index }) {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: imageRef, offset: ["start end", "end start"] });
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.18, 1.06, 1.18]);
  const imageY = useTransform(scrollYProgress, [0, 1], index % 2 === 0 ? [28, -28] : [-28, 28]);

  return (
    <motion.img
      ref={imageRef}
      style={{ scale: imageScale, y: imageY }}
      src={src}
      alt={alt}
      className="absolute inset-0 h-full w-full object-cover mix-blend-overlay opacity-45 transition-opacity duration-1000 group-hover:opacity-65"
    />
  );
}

export default function WorkShowcase() {
  return (
    <section className="bg-[#151518] px-6 py-24 text-cream sm:px-10 lg:px-[6vw] lg:py-36" aria-labelledby="work-title">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16 flex items-end justify-between gap-6">
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-mist">03 / Selected work</p>
            <h2 id="work-title" className="text-[clamp(2.8rem,6vw,7rem)] leading-[0.88] tracking-[-0.07em]">
              Proof, not <em className="font-display font-normal text-coral">promises.</em>
            </h2>
          </div>
          <span className="hidden text-xs uppercase tracking-[0.15em] text-mist sm:block">Scroll / 03 projects</span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              className={index === 0 ? "md:col-span-2" : ""}
            >
              <Link to="/work" data-cursor="View" className="group block">
                <div className={`relative aspect-[16/9] overflow-hidden bg-gradient-to-br ${project.color} p-6 text-ink transition duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_35px_80px_rgba(0,0,0,0.22)] sm:p-10`}>
                  <ScrollImage src={projectImages[index]} alt={`${project.title} project`} index={index} />
                  <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_20%,rgba(255,255,255,.3),transparent_45%)] opacity-0 transition duration-700 group-hover:translate-x-full group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,9,9,0.72),transparent_65%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.35),transparent_30%)]" />
                  <div className="absolute right-8 top-8 h-24 w-24 rounded-full border border-ink/25 transition-transform duration-700 group-hover:scale-150" />
                  <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-ink/75">{project.category}</p>
                    <h3 className="mt-3 text-3xl tracking-[-0.06em] text-ink sm:text-5xl">{project.title}</h3>
                  </div>
                  <span className="absolute right-6 top-6 text-3xl transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2 sm:right-10 sm:top-10">↗</span>
                </div>
                <div className="flex items-center justify-between gap-4 pt-4 text-[10px] uppercase tracking-[0.16em] text-mist">
                  <span>{project.result}</span>
                  <span className="inline-flex items-center gap-2 text-coral">View case study <span>→</span></span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
