import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "../../data/testimonials.js";
import { SectionHeader } from "../../components/ui/primitives.jsx";
import { IconArrowRight, IconStar } from "../../components/ui/Icons.jsx";

const AUTOPLAY_MS = 6500;

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const item = testimonials[index];

  const goTo = (next, dir) => {
    setDirection(dir);
    setIndex((next + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (paused || testimonials.length < 2) return undefined;
    const timer = setTimeout(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % testimonials.length);
    }, AUTOPLAY_MS);
    return () => clearTimeout(timer);
  }, [index, paused]);

  return (
    <section
      className="relative isolate overflow-hidden bg-night-900 py-20 sm:py-28"
      aria-labelledby="testimonial-title"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-400/10 blur-[140px]" />
      <div className="container-x">
        <SectionHeader eyebrow="Client stories" id="testimonial-title" title="What our clients say" />

        <div className="relative mx-auto mt-14 max-w-4xl rounded-[2rem] border border-white/10 bg-night-800/70 p-8 backdrop-blur sm:p-14">
          <span className="pointer-events-none absolute -top-8 left-8 font-brand text-[9rem] leading-none text-brand-400/30" aria-hidden="true">&ldquo;</span>

          <div className="relative min-h-[240px]" aria-live="polite">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.figure
                key={item.id}
                initial={{ opacity: 0, x: direction * 60, filter: "blur(8px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: direction * -60, filter: "blur(8px)" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex gap-1 text-amber-400" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.span key={i} initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 0.15 + i * 0.07, type: "spring", stiffness: 400, damping: 14 }}>
                      <IconStar className="h-5 w-5 fill-current" />
                    </motion.span>
                  ))}
                </div>
                <blockquote className="mt-6 text-2xl font-semibold leading-snug tracking-tight text-white sm:text-4xl">&ldquo;{item.quote}&rdquo;</blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-brand-300 to-brand-600 text-lg font-extrabold text-night">
                    {item.name.split(" ").map((part) => part[0]).join("")}
                  </span>
                  <span>
                    <span className="block text-lg font-bold text-white">{item.name}</span>
                    <span className="block text-sm text-slate-400">{item.company}</span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-between gap-6 border-t border-white/10 pt-6">
            <div className="flex flex-1 gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => goTo(i, i > index ? 1 : -1)}
                  aria-label={`Show testimonial ${i + 1}`}
                  aria-current={i === index}
                  className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-white/10"
                >
                  {i === index && (
                    <motion.span
                      key={`${index}-${paused}`}
                      className="absolute inset-y-0 left-0 rounded-full bg-brand-400"
                      initial={{ width: paused ? "100%" : "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: paused ? 0 : AUTOPLAY_MS / 1000, ease: "linear" }}
                    />
                  )}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button type="button" onClick={() => goTo(index - 1, -1)} aria-label="Previous testimonial" className="grid h-12 w-12 place-items-center rounded-full border border-white/15 text-white transition hover:border-brand-400 hover:bg-brand-400 hover:text-night">
                <IconArrowRight className="h-5 w-5 rotate-180" />
              </button>
              <button type="button" onClick={() => goTo(index + 1, 1)} aria-label="Next testimonial" className="grid h-12 w-12 place-items-center rounded-full border border-white/15 text-white transition hover:border-brand-400 hover:bg-brand-400 hover:text-night">
                <IconArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
