import { motion } from "framer-motion";

export default function ServiceDetail({ service }) {
  if (!service) return null;

  return (
    <section className="bg-cream px-6 py-24 text-ink sm:px-10 lg:px-[6vw] lg:py-36" aria-labelledby="service-detail-title">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <motion.div initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.8 }}>
            <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-ink/55">The approach</p>
            <h2 id="service-detail-title" className="max-w-md text-[clamp(2.8rem,5.6vw,6rem)] leading-[0.88] tracking-[-0.075em]">
              Make the right <em className="font-display font-normal text-coral">move.</em>
            </h2>
          </motion.div>

          <div>
            <motion.p initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.8 }} className="max-w-3xl text-2xl leading-9 tracking-[-0.03em] text-ink/80 sm:text-4xl sm:leading-[1.08]">
              {service.overview}
            </motion.p>

            <div className="mt-14 border-t border-ink/15">
              {service.process.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12, duration: 0.65 }}
                  className="flex items-center justify-between gap-6 border-b border-ink/15 py-5"
                >
                  <span className="text-[10px] uppercase tracking-[0.18em] text-ink/55">0{index + 1}</span>
                  <div className="flex flex-1 items-center justify-between gap-6">
                    <strong className="text-xl tracking-[-0.04em]">{step.title}</strong>
                    <span className="max-w-xl text-sm leading-6 text-ink/70 sm:text-base">{step.text}</span>
                  </div>
                  <span className="text-coral">↗</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }} className="rounded-[2rem] border border-ink/10 bg-[#f5efe6] p-8 sm:p-10">
            <p className="mb-6 text-[10px] uppercase tracking-[0.2em] text-ink/55">What we deliver</p>
            <ul className="space-y-4">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 border-b border-ink/10 pb-4 text-lg tracking-[-0.03em] text-ink/80 last:border-b-0 last:pb-0">
                  <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-coral" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: 0.1 }} className="rounded-[2rem] bg-ink p-8 text-cream sm:p-10">
            <p className="text-[10px] uppercase tracking-[0.2em] text-mist">Outcome</p>
            <div className="mt-8 text-[clamp(2.8rem,6vw,5rem)] leading-[0.9] tracking-[-0.07em] text-coral">{service.stat}</div>
            <p className="mt-6 max-w-sm text-lg leading-7 text-cream/75">{service.result}</p>
            <div className="mt-10 border-t border-cream/10 pt-6">
              <p className="text-[10px] uppercase tracking-[0.2em] text-mist">Built for</p>
              <p className="mt-3 text-xl tracking-[-0.04em] text-cream">{service.statement}</p>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 flex flex-col justify-between gap-8 border-t border-ink/15 pt-8 sm:flex-row sm:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-ink/55">Ready for the next move?</p>
            <h3 className="mt-4 max-w-2xl text-[clamp(2.5rem,5vw,5.5rem)] leading-[0.88] tracking-[-0.07em]">Let&apos;s make this <em className="font-display font-normal text-coral">useful.</em></h3>
          </div>
          <a href="/contact" className="inline-flex shrink-0 items-center gap-5 rounded-full bg-ink px-6 py-4 text-xs uppercase tracking-[0.14em] text-cream transition duration-500 hover:-translate-y-1 hover:bg-coral hover:text-ink">
            Talk to Averixa <span className="text-lg">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
