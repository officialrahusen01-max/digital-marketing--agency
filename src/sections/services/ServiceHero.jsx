import { motion } from "framer-motion";

export default function ServiceHero({ title }) {
  return (
    <section className="relative isolate overflow-hidden bg-ink px-6 pb-20 pt-28 text-cream sm:px-10 lg:px-[6vw] lg:pb-28 lg:pt-36" aria-labelledby="service-title">
      <div className="pointer-events-none absolute -right-40 top-0 -z-10 h-[min(60vw,760px)] w-[min(60vw,760px)] rounded-full border border-coral/15" />
      <div className="mx-auto max-w-[1600px]">
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-8 text-[10px] uppercase tracking-[0.22em] text-mist">Northstar / Service</motion.p>
        <motion.h1 id="service-title" initial={{ opacity: 0, y: 45 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="max-w-[1100px] text-[clamp(4rem,10vw,10rem)] font-medium leading-[0.82] tracking-[-0.085em]">{title}</motion.h1>
        <div className="mt-12 border-t border-cream/15 pt-6">
          <span className="text-[10px] uppercase tracking-[0.2em] text-coral">Built to compound</span>
        </div>
      </div>
    </section>
  );
}
