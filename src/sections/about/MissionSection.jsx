import { motion } from "framer-motion";

const principles = [
  ["01", "Find the signal", "We look past the noise to find the human truth that makes a brand worth choosing."],
  ["02", "Make it visible", "We turn that truth into a distinctive system people can see, feel and remember."],
  ["03", "Keep it moving", "We learn from the live world and keep improving the work long after launch."],
];

export default function MissionSection() {
  return (
    <section className="relative overflow-hidden bg-cream px-6 py-24 text-ink sm:px-10 lg:px-[6vw] lg:py-36" aria-labelledby="mission-title">
      <div className="mx-auto grid max-w-[1600px] gap-16 lg:grid-cols-[0.62fr_1.38fr] lg:gap-24">
        <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.8 }} className="lg:sticky lg:top-32 lg:self-start">
          <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-ink/55">Our point of view</p>
          <h2 id="mission-title" className="max-w-md text-[clamp(3rem,5.8vw,6.5rem)] leading-[0.88] tracking-[-0.075em]">Clarity is a <em className="font-display font-normal text-coral">competitive edge.</em></h2>
          <p className="mt-8 max-w-sm text-sm leading-7 text-ink/65">The best work does not shout for attention. It earns it by making something true impossible to miss.</p>
          <div className="mt-12 grid max-w-sm grid-cols-3 gap-3 border-t border-ink/15 pt-5">
            {[['90+', 'launches'], ['12', 'markets'], ['4.8x', 'avg. lift']].map(([value, label], index) => (
              <motion.div key={label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.6 }}>
                <strong className="block text-2xl tracking-[-0.06em] sm:text-3xl">{value}</strong>
                <span className="text-[9px] uppercase tracking-[0.14em] text-ink/55">{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="space-y-4">
          {principles.map(([number, title, copy], index) => (
            <motion.article key={number} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ delay: index * 0.12, duration: 0.75, ease: [0.16, 1, 0.3, 1] }} className="group grid gap-6 border-t border-ink/15 py-7 sm:grid-cols-[70px_0.8fr_1.2fr] sm:items-start sm:gap-8 sm:py-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/20 text-[10px] transition duration-500 group-hover:border-coral group-hover:bg-coral">{number}</span>
              <h3 className="text-3xl tracking-[-0.06em] transition duration-500 group-hover:translate-x-2 group-hover:text-coral sm:text-4xl">{title}</h3>
              <p className="max-w-md text-sm leading-7 text-ink/60">{copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
