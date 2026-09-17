import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ServiceCard({ service, index }) {
  return (
    <motion.article initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: index * 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }} className="group">
      <Link to={`/services/${service.id}`} data-cursor="View service" className="relative block min-h-[390px] overflow-hidden rounded-[1.75rem] border border-cream/10 bg-[#111413] p-6 transition duration-700 hover:-translate-y-2 hover:border-coral/70 hover:shadow-[0_30px_80px_rgb(0_221_204_/_12%)] sm:p-8">
        <span className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-coral/20 transition duration-1000 group-hover:scale-150 group-hover:border-coral/50" />
        <div className="relative flex h-full flex-col justify-between">
          <div>
            <div className="mb-12 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-mist">
              <span>{service.shortLabel}</span>
              <span className="text-coral">0{index + 1}</span>
            </div>
            <h2 className="max-w-xs text-4xl leading-[0.92] tracking-[-0.07em] transition duration-500 group-hover:text-coral sm:text-5xl">{service.title}</h2>
            <p className="mt-6 max-w-sm text-sm leading-6 text-mist">{service.description}</p>
          </div>
          <div className="flex items-end justify-between gap-4 border-t border-cream/10 pt-5 text-[10px] uppercase tracking-[0.15em]">
            <span className="max-w-[220px] text-mist">{service.result}</span>
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-cream/20 text-xl text-coral transition duration-500 group-hover:rotate-45 group-hover:bg-coral group-hover:text-ink">↗</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
