import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-coral px-6 py-28 text-ink sm:px-10 lg:px-[6vw] lg:py-44" aria-labelledby="cta-title">
      <div className="pointer-events-none absolute -right-16 top-8 h-72 w-72 rounded-full border border-ink/20" />
      <div className="pointer-events-none absolute left-8 top-12 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
      <div className="pointer-events-none absolute bottom-0 right-12 h-40 w-40 rounded-full border border-ink/10" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-[1600px]"
      >
        <p className="mb-8 text-[10px] uppercase tracking-[0.2em]">06 / Start a conversation</p>
        <h2 id="cta-title" className="max-w-5xl text-[clamp(3.5rem,8vw,9rem)] leading-[0.84] tracking-[-0.08em]">
          Your next big thing starts <em className="font-display font-normal">here.</em>
        </h2>

        <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center">
          <Link
            to="/about"
            data-cursor="Let&apos;s talk"
            className="group inline-flex items-center gap-5 rounded-full bg-ink px-7 py-3 text-[10px] uppercase tracking-[0.18em] text-cream transition duration-500 hover:-translate-y-1 hover:bg-cream hover:text-ink"
          >
            Let&apos;s make it real
            <span className="text-xl transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-1">↗</span>
          </Link>
          <span className="text-[10px] uppercase tracking-[0.2em] text-ink/70">Available for Q4 launches</span>
        </div>
      </motion.div>
    </section>
  );
}
