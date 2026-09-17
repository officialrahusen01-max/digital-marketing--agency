import { motion } from "framer-motion";

const steps = [
  ["01", "Find the signal", "We get curious about your audience, your category and the tension hiding in plain sight."],
  ["02", "Make it matter", "We shape the idea, identity and experience until it feels unmistakably yours."],
  ["03", "Keep it moving", "We launch, learn and optimise with the same care we brought to the first sketch."],
];

export default function ProcessSection() {
  return (
    <section className="bg-ink px-6 py-24 text-cream sm:px-10 lg:px-[6vw] lg:py-36" aria-labelledby="process-title">
      <div className="mx-auto grid max-w-[1600px] gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-mist">04 / How we work</p>
          <h2 id="process-title" className="max-w-md text-[clamp(2.8rem,5vw,6rem)] leading-[0.9] tracking-[-0.07em]">
            Small team. <em className="font-display font-normal text-coral">Big energy.</em>
          </h2>
          <p className="mt-8 max-w-sm text-sm leading-6 text-mist">
            No layers of handoffs. No black boxes. Just thoughtful collaboration from first question to final result.
          </p>
        </div>

        <div className="space-y-5">
          {steps.map(([number, title, copy], index) => (
            <motion.article
              key={number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.12, duration: 0.7 }}
              className="group grid gap-5 rounded-[1.75rem] border border-cream/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] p-6 sm:grid-cols-[70px_1fr_1fr] sm:gap-8 sm:p-8"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-coral/40 bg-coral/10 text-xs font-medium text-coral">
                {number}
              </span>
              <h3 className="text-2xl tracking-[-0.04em] transition-colors group-hover:text-coral sm:text-3xl">{title}</h3>
              <p className="max-w-sm text-sm leading-6 text-mist">{copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}