import { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform, useVelocity } from "framer-motion";

function wrap(min, max, value) {
  const range = max - min;
  return ((((value - min) % range) + range) % range) + min;
}

// A row of big text that scrolls on its own and speeds up / reverses / skews with page scroll.
function Row({ items, baseVelocity, outline = false }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { damping: 50, stiffness: 400 });
  const factor = useTransform(smooth, [0, 1000], [0, 5], { clamp: false });
  const skew = useTransform(smooth, [-2000, 2000], [12, -12]);
  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);
  const direction = useRef(1);
  const reduceMotion = useReducedMotion();

  useAnimationFrame((_, delta) => {
    if (reduceMotion) return;
    let move = direction.current * baseVelocity * (delta / 1000);
    if (factor.get() < 0) direction.current = -1;
    else if (factor.get() > 0) direction.current = 1;
    move += direction.current * move * factor.get();
    baseX.set(baseX.get() + move);
  });

  return (
    <div className="flex overflow-hidden whitespace-nowrap">
      <motion.div style={{ x, skewX: skew }} className="flex shrink-0">
        {[0, 1, 2, 3].map((copy) => (
          <span key={copy} className="flex shrink-0 items-center" aria-hidden={copy > 0}>
            {items.map((item) => (
              <span key={`${copy}-${item}`} className="flex items-center">
                <span className={`px-6 text-5xl font-extrabold uppercase tracking-tight sm:text-7xl lg:text-8xl ${outline ? "text-outline" : "text-white"}`}>{item}</span>
                <span className="text-4xl text-brand-400 sm:text-6xl">✦</span>
              </span>
            ))}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function VelocityMarquee() {
  return (
    <section className="relative overflow-hidden bg-night py-12 sm:py-16" aria-label="Our services">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-night to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-night to-transparent" />
      <div className="-rotate-2 space-y-3">
        <Row items={["SEO", "Google Ads", "Social Media", "Websites", "Mobile Apps"]} baseVelocity={-3} />
        <Row items={["More leads", "More sales", "More growth", "Next life"]} baseVelocity={3} outline />
      </div>
    </section>
  );
}
