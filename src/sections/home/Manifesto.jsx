import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Eyebrow } from "../../components/ui/primitives.jsx";
import { IconSearch, IconShield, IconUsers } from "../../components/ui/Icons.jsx";

const statement = "We don't just run ads or post on social. We build growth engines that give your business its next life online.";
const highlight = new Set(["growth", "engines", "next", "life", "online."]);

const pillars = [
  {
    Icon: IconSearch,
    title: "More visibility",
    text: "Get found where your customers are already looking.",
    tags: ["SEO", "Google Maps", "Content"],
  },
  {
    Icon: IconShield,
    title: "More trust",
    text: "Look like the obvious, credible choice the moment they land.",
    tags: ["Website", "Branding", "Reviews"],
  },
  {
    Icon: IconUsers,
    title: "More customers",
    text: "Turn that attention into calls, enquiries and sales.",
    tags: ["Google Ads", "Meta Ads", "WhatsApp"],
  },
];

function Word({ word, progress, range }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className={`mr-[0.25em] inline-block ${highlight.has(word) ? "text-brand-400" : "text-white"}`}>
      {word}
    </motion.span>
  );
}

// Short statement that lights up word by word on scroll, then three pillars that explain it.
export default function Manifesto() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "start 0.25"] });
  const words = statement.split(" ");

  return (
    <section className="relative isolate overflow-hidden bg-night pb-16 pt-10 sm:pb-20 sm:pt-14" aria-label="Our approach">
      <div className="absolute left-1/2 top-1/3 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-brand-400/10 blur-[140px]" />
      <div className="container-x">
        <div ref={ref} className="mx-auto max-w-4xl text-center">
          <Eyebrow dark>Our approach</Eyebrow>
          <p className="mt-6 text-2xl font-bold leading-[1.3] tracking-tight sm:text-3xl lg:text-[2.6rem] lg:leading-[1.25]" aria-label={statement}>
            <span aria-hidden="true">
              {words.map((word, i) => {
                const start = i / words.length;
                return <Word key={`${word}-${i}`} word={word} progress={scrollYProgress} range={[start, start + 1 / words.length]} />;
              })}
            </span>
          </p>
        </div>

        <div className="relative mt-10 grid gap-5 md:grid-cols-3">
          {/* connector line between pillars */}
          <motion.div
            aria-hidden="true"
            className="absolute left-[16%] right-[16%] top-[3.25rem] hidden h-px origin-left bg-gradient-to-r from-brand-600 via-brand-400 to-brand-600 md:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />
          {pillars.map(({ Icon, title, text, tags }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-3xl border border-white/10 bg-night-800/80 p-7 text-center backdrop-blur transition duration-500 hover:-translate-y-1.5 hover:border-brand-400/50"
            >
              <span className="relative mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-night-700 text-brand-400 ring-1 ring-brand-400/30 transition duration-500 group-hover:bg-brand-400 group-hover:text-night group-hover:shadow-glow">
                <Icon className="h-6 w-6" />
              </span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Step {String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 text-xl font-extrabold text-white">{title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-[15px] leading-6 text-slate-400">{text}</p>
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-slate-300 transition group-hover:border-brand-400/30 group-hover:text-brand-200">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
