import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TiltCard from "../motion/TiltCard.jsx";
import { IconArrowRight, IconCheck, serviceIcons } from "./Icons.jsx";

export default function ServiceCard({ service, index = 0 }) {
  const Icon = serviceIcons[service.id];

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 80, rotateX: -25, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay: (index % 3) * 0.12, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformPerspective: 1000 }}
    >
      <TiltCard className="rounded-3xl">
        <Link
          to={`/services/${service.id}`}
          data-cursor="Open"
          className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-night-800 p-7 shadow-card transition-[border-color,box-shadow] duration-300 hover:border-brand-400/50 hover:shadow-[0_30px_60px_-20px_rgba(0,169,157,0.45)] sm:p-8"
        >
          {/* animated corner glow + top accent line */}
          <span className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-brand-400/0 blur-3xl transition duration-500 group-hover:bg-brand-400/30" />
          <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-600 via-brand-400 to-brand-200 transition-transform duration-500 group-hover:scale-x-100" />

          <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-brand-400/10 text-brand-300 ring-1 ring-brand-400/20 transition duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-brand-400 group-hover:text-night group-hover:shadow-glow group-hover:ring-brand-400">
            <Icon className="h-7 w-7" />
          </span>

          <h3 className="relative mt-6 text-xl font-bold text-white">{service.title}</h3>
          <p className="relative mt-3 text-[15px] leading-7 text-slate-400">{service.description}</p>

          <ul className="relative mt-5 space-y-2.5">
            {service.deliverables.slice(0, 3).map((item, i) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300 transition-transform duration-300 group-hover:translate-x-1" style={{ transitionDelay: `${i * 50}ms` }}>
                <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                {item}
              </li>
            ))}
          </ul>

          <span className="relative mt-auto flex items-center gap-2 pt-7 text-sm font-semibold text-brand-300">
            Learn more
            <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-400/10 transition duration-300 group-hover:translate-x-1 group-hover:bg-brand-400 group-hover:text-night">
              <IconArrowRight className="h-4 w-4" />
            </span>
          </span>
        </Link>
      </TiltCard>
    </motion.div>
  );
}
