import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Eyebrow } from "../../components/ui/primitives.jsx";

const text =
  "We don't just run ads or post on social. We build growth engines — search, ads, content and websites working as one — that give your business its next life online. More visibility. More trust. More customers.";
const highlight = new Set(["growth", "engines", "next", "life", "online.", "More", "visibility.", "trust.", "customers."]);

function Word({ word, progress, range }) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  const y = useTransform(progress, range, [8, 0]);
  return (
    <motion.span style={{ opacity, y }} className={`mr-[0.25em] inline-block ${highlight.has(word) ? "text-brand-400" : "text-white"}`}>
      {word}
    </motion.span>
  );
}

// Words light up one by one as the visitor scrolls through the section.
export default function Manifesto() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.75", "end 0.6"] });
  const words = text.split(" ");
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-night py-24 sm:py-36" aria-label="Our approach">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-400/10 blur-[140px]" />
      <div className="container-x grid gap-10 lg:grid-cols-[200px_1fr]">
        <div className="flex items-start gap-4 lg:flex-col">
          <Eyebrow dark>Our approach</Eyebrow>
          <div className="hidden h-40 w-[2px] overflow-hidden rounded-full bg-white/10 lg:block">
            <motion.div style={{ scaleY: lineScale }} className="h-full w-full origin-top bg-gradient-to-b from-brand-300 to-brand-600" />
          </div>
        </div>
        <p className="text-[1.9rem] font-extrabold leading-[1.2] tracking-tight sm:text-5xl lg:text-[3.6rem]" aria-label={text}>
          <span aria-hidden="true">
            {words.map((word, i) => {
              const start = i / words.length;
              return <Word key={`${word}-${i}`} word={word} progress={scrollYProgress} range={[start, start + 1 / words.length]} />;
            })}
          </span>
        </p>
      </div>
    </section>
  );
}
