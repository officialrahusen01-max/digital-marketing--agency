import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const headlineWords = ["Designing", "the", "future,", "powering", "attention"];

const springConfig = { stiffness: 90, damping: 22, mass: 0.7 };

export default function HeroSection() {
  const heroRef = useRef(null);
  const pointerX = useSpring(useMotionValue(0), springConfig);
  const pointerY = useSpring(useMotionValue(0), springConfig);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.16]);

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left - bounds.width / 2) / 34);
    pointerY.set((event.clientY - bounds.top - bounds.height / 2) / 34);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section ref={heroRef} onPointerMove={handlePointerMove} onPointerLeave={resetPointer} className="relative isolate overflow-hidden bg-ink px-6 pb-8 pt-24 text-cream sm:px-10 lg:px-[6vw] lg:pb-10 lg:pt-32" aria-labelledby="hero-title">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_8%,rgb(0_221_204_/_10%),transparent_26%),linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.025),transparent_70%)]" />
      <div className="pointer-events-none absolute -right-40 top-0 -z-10 h-[min(55vw,720px)] w-[min(55vw,720px)] rounded-full border border-coral/20" />

      <div className="relative mx-auto max-w-[1600px]">
        <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } } }}>
          <motion.p variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="mb-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-mist">
            <span className="h-2.5 w-2.5 animate-soft-pulse rounded-full bg-coral shadow-[0_0_18px_rgb(0_221_204)]" />
            Vertexo Digital Solutions / Delhi — Worldwide
          </motion.p>

          <h1 id="hero-title" className="max-w-[1150px] text-[clamp(3.4rem,8.3vw,9.3rem)] font-medium leading-[0.86] tracking-[-0.075em]">
            {headlineWords.map((word, index) => (
              <motion.span key={word} variants={{ hidden: { opacity: 0, y: "100%", rotateX: -70 }, visible: { opacity: 1, y: 0, rotateX: 0 } }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className={`mr-[0.18em] inline-block origin-bottom ${index === 4 ? "relative font-display font-normal text-coral" : ""}`}>
                {word}
                {index === 2 && <br />}
                {index === 4 && <span className="absolute -right-8 -top-5 text-3xl sm:-right-12 sm:-top-8 sm:text-5xl">✦</span>}
              </motion.span>
            ))}
          </h1>

          <motion.p variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="mt-9 max-w-lg text-base leading-7 text-mist sm:text-lg">
            We turn sharp strategy, expressive design and performance marketing into brands people notice, remember and choose.
          </motion.p>

          <motion.div variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="mt-10 flex flex-wrap items-center gap-6">
            <a href="/work" className="group inline-flex min-h-12 items-center gap-5 rounded-full bg-coral px-6 text-xs uppercase tracking-[0.12em] text-ink transition duration-500 hover:-translate-y-1 hover:bg-cream">
              Explore our work
              <span aria-hidden="true" className="text-lg transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
            </a>
            <a href="/about" className="group inline-flex min-h-12 items-center gap-4 text-xs uppercase tracking-[0.12em] text-mist transition duration-500 hover:translate-x-1 hover:text-cream">
              Meet the agency
              <span aria-hidden="true" className="text-lg transition-transform duration-500 group-hover:translate-y-1">↓</span>
            </a>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="mt-12 flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.18em] text-mist">
            {[
              "Brand strategy",
              "Paid media",
              "SEO growth",
              "Creative systems",
            ].map((tag) => (
              <span key={tag} className="rounded-full border border-cream/10 bg-white/3 px-3 py-2">
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div style={{ x: pointerX, y: pointerY }} initial={{ opacity: 0, y: 70, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.45, duration: 1.3, ease: [0.16, 1, 0.3, 1] }} className="group relative mt-16 overflow-hidden rounded-[2rem] border border-cream/15 bg-[#151817] shadow-[0_35px_100px_rgba(0,0,0,0.4)] sm:rounded-[3rem]" aria-label="Team collaborating in a bright studio">
          <motion.img style={{ y: imageY, scale: imageScale }} src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=85" alt="Creative team collaborating around a table" className="h-[min(58vw,620px)] min-h-[310px] w-full object-cover opacity-90 grayscale-[15%] transition duration-1000 group-hover:opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-[10px] uppercase tracking-[0.18em] text-cream sm:bottom-8 sm:left-8 sm:right-8">
            <span>Strategy / Creative / Growth</span>
            <span className="text-coral">Scroll to explore ↓</span>
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-8 flex max-w-[1600px] justify-between border-t border-cream/15 pt-4 text-[10px] uppercase tracking-[0.16em] text-mist">
        <span>01 — 06</span>
        <span className="hidden sm:inline">Vertexo / Digital solutions</span>
        <span>Est. 2024</span>
      </div>
    </section>
  );
}
