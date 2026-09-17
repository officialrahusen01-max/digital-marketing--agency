import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const stats = [
  { value: "90+", label: "launches shipped" },
  { value: "12", label: "markets activated" },
  { value: "4.8x", label: "avg. ROAS lift" },
];

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-cream px-6 py-24 text-ink sm:px-10 lg:px-[6vw] lg:py-36" aria-labelledby="about-title">
      <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(255,90,54,0.12),transparent_60%)]" />
      <div className="mx-auto grid max-w-[1600px] gap-14 lg:grid-cols-[0.68fr_1.32fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-between gap-8"
        >
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-ink/55">01 / The point of view</p>
            <div className="h-px w-20 bg-coral" />
          </div>

          <div className="premium-panel space-y-5 p-6 sm:p-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-end justify-between gap-4 border-b border-ink/10 pb-4 last:border-b-0 last:pb-0">
                <span className="text-3xl font-medium tracking-[-0.06em] text-ink sm:text-4xl">{stat.value}</span>
                <span className="max-w-[120px] text-right text-[10px] uppercase tracking-[0.16em] text-ink/60">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-ink/10 bg-ink px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-cream">
            <span className="h-2 w-2 rounded-full bg-coral" />
            Built for ambitious brands
          </div>
          <h2 id="about-title" className="max-w-5xl text-[clamp(2.6rem,5.6vw,6.4rem)] leading-[0.92] tracking-[-0.07em]">
            We make brands feel <em className="font-display font-normal text-coral">alive</em> in the real world.
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-ink/70">
            Northstar is an independent digital agency for ambitious teams. We find the human truth in your business and turn it into work people remember, share and choose.
          </p>

          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
            <Link
              to="/about"
              data-cursor="View"
              className="group inline-flex items-center gap-4 rounded-full bg-ink px-6 py-3 text-[10px] uppercase tracking-[0.18em] text-cream transition duration-500 hover:-translate-y-1 hover:bg-coral hover:text-ink"
            >
              More about Northstar
              <span className="text-lg transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
            </Link>
            <span className="text-[10px] uppercase tracking-[0.2em] text-ink/55">Strategy • Creative • Performance</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
