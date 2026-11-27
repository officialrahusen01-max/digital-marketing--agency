import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { IconArrowUpRight } from "./Icons.jsx";

export default function ProjectCard({ project, index = 0, featured = false }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <motion.div
      ref={ref}
      className={featured ? "md:col-span-2" : ""}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: (index % 2) * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to="/work" data-cursor="View" className="group block overflow-hidden rounded-3xl border border-white/10 bg-night-800 shadow-card transition duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-30px_rgba(5,6,7,0.45)]">
        <motion.div
          className={`relative overflow-hidden ${featured ? "aspect-[16/8]" : "aspect-[4/3]"}`}
          initial={{ clipPath: "inset(18% 18% 18% 18% round 24px)" }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0% round 0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
            <motion.img
              style={{ y: imageY }}
              src={project.image}
              alt={`${project.title} project`}
              loading="lazy"
              className="absolute inset-x-0 -top-[12%] h-[124%] w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-night/85 via-night/10 to-transparent" />
          <div className="absolute inset-0 bg-brand-400/0 mix-blend-overlay transition duration-500 group-hover:bg-brand-400/30" />
          <span className="absolute right-5 top-5 grid h-12 w-12 scale-75 place-items-center rounded-full bg-white/90 text-night opacity-0 transition duration-500 group-hover:rotate-45 group-hover:scale-100 group-hover:bg-brand-400 group-hover:opacity-100">
            <IconArrowUpRight className="h-5 w-5" />
          </span>
          <div className="absolute bottom-5 left-5 right-5 transition-transform duration-500 group-hover:-translate-y-2 sm:bottom-7 sm:left-7">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-300">{project.category}</p>
            <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">{project.title}</h3>
          </div>
        </motion.div>
        <div className="flex items-center justify-between px-6 py-4">
          <span className="text-sm font-bold text-white">{project.result}</span>
          <span className="text-sm font-semibold text-brand-300 transition-transform duration-300 group-hover:translate-x-1">View project →</span>
        </div>
      </Link>
    </motion.div>
  );
}
