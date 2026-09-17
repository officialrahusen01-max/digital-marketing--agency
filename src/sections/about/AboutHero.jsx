import { motion } from "framer-motion";

const titleWords = ["We make", "brands", "matter."];

export default function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink px-6 pb-20 pt-28 text-cream sm:px-10 lg:px-[6vw] lg:pb-28 lg:pt-36" aria-labelledby="about-hero-title">
      <div className="pointer-events-none absolute -right-32 top-8 -z-10 h-[min(56vw,720px)] w-[min(56vw,720px)] rounded-full border border-coral/15" />
      <div className="pointer-events-none absolute right-[8%] top-[18%] -z-10 h-48 w-48 rounded-full border border-coral/10 animate-orbit" />
      <div className="mx-auto max-w-[1600px]">
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-mist">
          <span className="h-2 w-2 rounded-full bg-coral shadow-[0_0_16px_rgb(0_221_204)]" />
          02 / About Northstar
        </motion.p>

        <h1 id="about-hero-title" className="max-w-[1100px] text-[clamp(4rem,10vw,10rem)] font-medium leading-[0.82] tracking-[-0.085em]">
          {titleWords.map((word, index) => (
            <motion.span key={word} initial={{ opacity: 0, y: "100%", rotateX: -70 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} transition={{ delay: 0.12 + index * 0.12, duration: 1, ease: [0.16, 1, 0.3, 1] }} className={`mr-[0.2em] inline-block origin-bottom ${index === 2 ? "font-display font-normal text-coral" : ""}`}>
              {word}
            </motion.span>
          ))}
        </h1>

        <div className="mt-14 grid gap-10 border-t border-cream/15 pt-6 md:grid-cols-[0.55fr_1fr] md:gap-16">
          <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.55, duration: 0.8 }} className="text-[10px] uppercase tracking-[0.18em] text-mist">
            Independent digital agency<br />Delhi / Worldwide
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.62, duration: 0.8 }} className="max-w-2xl text-xl leading-8 text-cream/80 sm:text-2xl sm:leading-9">
            Northstar is a small, senior team building clear identities, sharp experiences and growth systems for companies ready to move with intent.
          </motion.p>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.96, y: 35 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: 0.7, duration: 1.1, ease: [0.16, 1, 0.3, 1] }} className="group relative mt-16 overflow-hidden rounded-[2rem] border border-cream/15 bg-[#151817] sm:rounded-[3rem]">
          <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=85" alt="Creative team working together in a bright studio" className="h-[min(48vw,540px)] min-h-[300px] w-full object-cover opacity-80 grayscale-[18%] transition duration-[1400ms] group-hover:scale-105 group-hover:opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-[10px] uppercase tracking-[0.18em] text-cream sm:bottom-8 sm:left-8 sm:right-8">
            <span>Curious by default</span>
            <span className="text-coral">Scroll to meet us ↓</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}