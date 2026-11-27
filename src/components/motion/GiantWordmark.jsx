import { motion } from "framer-motion";

// Huge edge-to-edge wordmark: letters rise in on scroll and bounce + light up on hover.
export default function GiantWordmark({ text = "NEXT LIFE" }) {
  const letters = text.split("");

  return (
    <div className="relative select-none overflow-hidden" aria-hidden="true">
      <motion.div
        className="flex justify-between font-brand text-[17.5vw] font-bold leading-[0.8] tracking-tighter xl:text-[15.5rem]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ show: { transition: { staggerChildren: 0.06 } } }}
      >
        {letters.map((letter, index) =>
          letter === " " ? (
            <span key={index} className="w-[4vw]" />
          ) : (
            <motion.span
              key={index}
              variants={{
                hidden: { y: "100%", opacity: 0 },
                show: { y: "0%", opacity: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
              }}
              whileHover={{ y: "-12%", color: "#00DDCC", transition: { type: "spring", stiffness: 400, damping: 10 } }}
              className="inline-block bg-gradient-to-b from-white/20 to-white/[0.02] bg-clip-text text-transparent"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.12)" }}
            >
              {letter}
            </motion.span>
          ),
        )}
      </motion.div>
    </div>
  );
}
