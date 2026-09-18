import { motion } from "framer-motion";

const serviceImages = {
  "Digital Marketing": "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=85",
  SEO: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=85",
  "Social Media Marketing": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1800&q=85",
  "Google Ads": "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1800&q=85",
  "Web Development": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1800&q=85",
  "Mobile App Development": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1800&q=85",
};

export default function ServiceHero({ title }) {
  return (
    <section className="relative isolate overflow-hidden bg-ink px-6 pb-12 pt-28 text-cream sm:px-10 lg:px-[6vw] lg:pb-16 lg:pt-36" aria-labelledby="service-title">
      <div className="pointer-events-none absolute -right-40 top-0 -z-10 h-[min(60vw,760px)] w-[min(60vw,760px)] rounded-full border border-coral/15" />
      <div className="mx-auto max-w-[1600px]">
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-8 text-[10px] uppercase tracking-[0.22em] text-mist">Vertexo / Digital solution</motion.p>
        <motion.h1 id="service-title" initial={{ opacity: 0, y: 45 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="max-w-[1100px] text-[clamp(4rem,10vw,10rem)] font-medium leading-[0.82] tracking-[-0.085em]">{title}</motion.h1>
        <div className="mt-12 border-t border-cream/15 pt-6">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <span className="text-[10px] uppercase tracking-[0.2em] text-coral">Built to compound</span>
            <span className="max-w-xs text-sm leading-6 text-mist">A sharper digital system for the next stage of your business.</span>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.9 }} className="group relative mt-12 overflow-hidden rounded-[2rem] border border-cream/15 sm:rounded-[3rem]">
          <img src={serviceImages[title]} alt={`${title} service`} className="h-[min(42vw,500px)] min-h-[260px] w-full object-cover opacity-70 grayscale-[15%] transition duration-1000 group-hover:scale-105 group-hover:opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-5 text-[10px] uppercase tracking-[0.18em] sm:bottom-8 sm:left-8 sm:right-8">
            <span>Vertexo / Digital growth system</span>
            <span className="text-coral">Reach Your Digital Peak ↗</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
