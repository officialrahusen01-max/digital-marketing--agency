import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Eyebrow, GlowOrbs, Button } from "../../components/ui/primitives.jsx";
import SplitText from "../../components/motion/SplitText.jsx";
import { IconPhone, IconSearch, IconRocket, IconReport } from "../../components/ui/Icons.jsx";

const processSteps = [
  { Icon: IconPhone, title: "Discovery call", text: "A free call to understand your business, customers, goals and budget. No sales pitch — just the right questions.", tag: "Day 1" },
  { Icon: IconSearch, title: "Audit & strategy", text: "We review your website, competitors and channels, then share a clear plan with priorities, timeline and a fixed quote.", tag: "Week 1" },
  { Icon: IconRocket, title: "Launch", text: "We build, set up tracking and launch campaigns — fast, without cutting corners on quality.", tag: "Week 2–4" },
  { Icon: IconReport, title: "Optimise & report", text: "Weekly improvements and a simple monthly report on leads, rankings and spend. Then we do it better.", tag: "Every month" },
];

function StepCard({ step, index, total, progress }) {
  const target = 1 - (total - index) * 0.05;
  const scale = useTransform(progress, [index / total, 1], [1, target]);
  const dim = useTransform(progress, [index / total, 1], [0, 0.5]);
  const { Icon } = step;

  return (
    <div className="sticky h-[340px] sm:h-[300px]" style={{ top: `calc(110px + ${index * 28}px)` }}>
      <motion.article
        style={{ scale }}
        className="group relative h-full origin-top overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-night-700 via-night-800 to-night p-8 shadow-[0_-20px_60px_-20px_rgba(0,0,0,0.8)] sm:p-10"
      >
        <motion.div style={{ opacity: dim }} className="pointer-events-none absolute inset-0 bg-night" />
        <span className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-400/10 blur-3xl transition duration-700 group-hover:bg-brand-400/25" />
        <span className="pointer-events-none absolute -bottom-8 right-6 text-[9rem] font-extrabold leading-none text-white/[0.04] sm:text-[12rem]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="relative flex h-full flex-col">
          <div className="flex items-center justify-between">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-400 text-night shadow-glow">
              <Icon className="h-7 w-7" />
            </span>
            <span className="rounded-full border border-brand-400/30 bg-brand-400/10 px-3 py-1 text-xs font-semibold text-brand-300">{step.tag}</span>
          </div>
          <h3 className="mt-auto text-2xl font-extrabold text-white sm:text-3xl">
            <span className="mr-3 text-brand-400">{String(index + 1).padStart(2, "0")}.</span>
            {step.title}
          </h3>
          <p className="mt-3 max-w-lg leading-7 text-slate-400">{step.text}</p>
        </div>
      </motion.article>
    </div>
  );
}

export default function ProcessSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section className="relative isolate bg-night py-20 text-white sm:py-28" aria-labelledby="process-title">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="bg-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,#000,transparent_70%)]" />
        <GlowOrbs />
      </div>
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Eyebrow dark>How we work</Eyebrow>
          <h2 id="process-title" className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
            <SplitText text="A simple process with clear results" highlightFrom={4} />
          </h2>
          <p className="mt-5 max-w-md text-lg leading-8 text-slate-400">No jargon, no guesswork. Here&apos;s exactly what happens after you reach out.</p>
          <Button to="/enquirisubmit" className="mt-8" shine arrow>Start with step one</Button>
        </div>

        <div ref={ref} className="relative space-y-8 pb-10">
          {processSteps.map((step, index) => (
            <StepCard key={step.title} step={step} index={index} total={processSteps.length} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}
