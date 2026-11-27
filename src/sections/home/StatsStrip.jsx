import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";

// Honest numbers only — each reflects how we work, not invented client results.
const stats = [
  { from: 0, to: 6, suffix: "", label: "Core digital services", sub: "SEO, ads, social, web & apps" },
  { from: 0, to: 1, suffix: "", label: "Team from strategy to launch", sub: "No juggling vendors" },
  { from: 0, to: 24, suffix: "h", label: "Reply to every enquiry", sub: "Real people, not bots" },
  { from: 12, to: 0, suffix: "", label: "Lock-in contracts", sub: "Month to month after 3 months" },
];

function Counter({ from, to, suffix, start }) {
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!start) return undefined;
    const controls = animate(from, to, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [start, from, to]);

  return (
    <span className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}

export default function StatsStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section ref={ref} className="relative overflow-hidden bg-night py-16 sm:py-20" aria-label="How we work in numbers">
      <div className="container-x">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-night-900 p-8 transition-colors duration-500 hover:bg-night-700"
            >
              <p className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-6xl font-extrabold tracking-tight text-transparent transition-all duration-500 group-hover:from-brand-300 group-hover:to-brand-500 sm:text-7xl">
                <Counter from={stat.from} to={stat.to} suffix={stat.suffix} start={inView} />
              </p>
              <p className="mt-3 text-base font-bold text-white transition-colors duration-500 group-hover:text-white">{stat.label}</p>
              <p className="mt-1 text-sm text-slate-500 transition-colors duration-500 group-hover:text-slate-400">{stat.sub}</p>
              <span className="absolute bottom-0 left-0 h-1 w-0 bg-brand-400 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
