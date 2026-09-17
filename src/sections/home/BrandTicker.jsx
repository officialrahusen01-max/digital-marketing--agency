import { motion } from "framer-motion";

const items = [
  "Strategy with teeth",
  "Design with feeling",
  "Growth with purpose",
  "Performance that compounds",
];

export default function BrandTicker() {
  return (
    <div className="relative overflow-hidden border-y border-ink/20 bg-coral py-5 text-ink shadow-[0_20px_60px_rgba(215,255,63,0.14)]" aria-label="Northstar principles">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),transparent_55%)]" />
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 24, ease: "linear", repeat: Infinity }}
        className="relative flex w-max items-center whitespace-nowrap"
      >
        {[...Array(2)].map((_, copy) => (
          <div key={copy} className="flex items-center">
            {items.map((item) => (
              <span key={`${copy}-${item}`} className="mx-5 flex items-center text-[11px] font-semibold uppercase tracking-[0.25em] sm:text-sm">
                {item}
                <span className="mx-4 inline-flex h-2 w-2 rounded-full bg-ink/80" />
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}