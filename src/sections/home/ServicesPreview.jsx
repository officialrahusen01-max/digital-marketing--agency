import { services } from "../../data/services.js";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const accentMap = ["rgb(0 221 204)", "#f0d8b5", "#84d7ff"];

export default function ServicesPreview() {
  return (
    <section className="bg-ink px-6 py-24 text-cream sm:px-10 lg:px-[6vw] lg:py-36" aria-labelledby="services-title">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-mist">02 / What we do</p>
            <h2 id="services-title" className="text-[clamp(2.8rem,6vw,7rem)] leading-[0.88] tracking-[-0.07em]">
              Built for <em className="font-display font-normal text-coral">momentum.</em>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-mist">
            One senior team across strategy, creative and the channels that move your business forward.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08, duration: 0.7 }}
              className="group relative overflow-hidden rounded-[2rem] border border-cream/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-6 transition duration-500 hover:-translate-y-2 hover:border-coral/60 hover:shadow-[0_30px_80px_rgba(255,90,54,0.18)]"
            >
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100" style={{ background: `radial-gradient(circle at top right, ${accentMap[index]}33, transparent 45%)` }} />
              <div className="relative">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-coral">0{index + 1}</span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/10 text-lg" style={{ color: accentMap[index] }}>
                    ↗
                  </div>
                </div>

                <h3 className="text-3xl tracking-[-0.05em] text-cream">{service.title}</h3>
                <p className="mt-4 max-w-sm text-sm leading-7 text-mist">{service.description}</p>

                <ul className="mt-8 space-y-3 text-[10px] uppercase tracking-[0.18em] text-mist">
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-coral" /> Strategy</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-coral" /> Creative</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-coral" /> Growth</li>
                </ul>

                <Link
                  to={`/services/${service.id}`}
                  data-cursor="Open"
                  aria-label={`Open ${service.title}`}
                  className="mt-8 inline-flex items-center gap-3 border-b border-cream/20 pb-2 text-[10px] uppercase tracking-[0.18em] text-cream transition-colors hover:border-coral hover:text-coral"
                >
                  Explore service
                  <span className="text-lg transition-transform duration-500 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
