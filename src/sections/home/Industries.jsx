import { useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { SectionHeader } from "../../components/ui/primitives.jsx";
import { IconArrowUpRight } from "../../components/ui/Icons.jsx";

const industries = [
  { name: "Real Estate", text: "Lead-gen campaigns and landing pages for projects, brokers and builders.", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80" },
  { name: "Healthcare & Clinics", text: "Local SEO and Google Ads that fill appointment calendars.", image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=800&q=80" },
  { name: "Education & Coaching", text: "Admissions campaigns, webinars and content that builds trust.", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80" },
  { name: "Restaurants & Cafés", text: "Instagram reels, Google Maps and offers that bring people in.", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" },
  { name: "E-commerce & D2C", text: "Shopify stores, catalogue ads and retention that grow sales.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80" },
  { name: "Local Services", text: "From salons to CA firms — more calls from people nearby.", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80" },
];

export default function Industries() {
  const [active, setActive] = useState(null);
  const x = useSpring(useMotionValue(0), { stiffness: 250, damping: 26, mass: 0.5 });
  const y = useSpring(useMotionValue(0), { stiffness: 250, damping: 26, mass: 0.5 });

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  };

  return (
    <section className="relative bg-night-900 py-20 sm:py-28" aria-labelledby="industries-title">
      <div className="container-x">
        <SectionHeader align="left" eyebrow="Industries we serve" id="industries-title" title="Built for businesses like yours" subtitle="Every industry wins customers differently. We bring playbooks that already fit yours." />

        <div className="relative mt-14" onPointerMove={handleMove} onPointerLeave={() => setActive(null)}>
          {/* cursor-following image preview (desktop) */}
          <motion.div style={{ x, y }} className="pointer-events-none absolute left-0 top-0 z-20 hidden lg:block">
            <AnimatePresence>
              {active !== null && (
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.6, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="-translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl shadow-[0_30px_80px_-20px_rgba(0,221,204,0.5)] ring-1 ring-brand-400/40"
                >
                  <img src={industries[active].image} alt="" className="h-52 w-72 object-cover" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <ul className="border-t border-white/10">
            {industries.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: index * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                onPointerEnter={() => setActive(index)}
                className="group relative border-b border-white/10"
              >
                <Link to="/enquirisubmit" data-cursor="Talk" className="relative flex items-center gap-6 overflow-hidden py-6 sm:py-8">
                  <span className="absolute inset-0 origin-bottom scale-y-0 bg-brand-400 transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] group-hover:scale-y-100" />
                  <span className="relative w-10 text-sm font-semibold text-slate-500 transition-colors group-hover:text-night">{String(index + 1).padStart(2, "0")}</span>
                  <span className="relative flex-1">
                    <span className="block text-2xl font-extrabold tracking-tight text-white transition-all duration-500 group-hover:translate-x-3 group-hover:text-night sm:text-4xl lg:text-5xl">{item.name}</span>
                    <span className="mt-1 block text-sm text-slate-400 transition-colors group-hover:text-night/70 sm:text-base lg:hidden">{item.text}</span>
                  </span>
                  <span className="relative hidden max-w-xs text-sm text-slate-400 transition-colors group-hover:text-night/75 lg:block">{item.text}</span>
                  <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/15 text-white transition duration-500 group-hover:rotate-45 group-hover:border-night group-hover:bg-night group-hover:text-brand-400">
                    <IconArrowUpRight className="h-5 w-5" />
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
