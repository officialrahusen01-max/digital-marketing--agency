import { motion } from "framer-motion";

// Word-by-word "rise from a mask" reveal. Screen readers get the full text once.
export default function SplitText({ text, className = "", delay = 0, stagger = 0.06, onMount = false, highlightFrom = -1, highlightClass = "text-gradient" }) {
  const words = text.split(" ");
  const trigger = onMount ? { animate: "show" } : { whileInView: "show", viewport: { once: true, amount: 0.5 } };

  return (
    <motion.span
      className={className}
      aria-label={text}
      initial="hidden"
      {...trigger}
      variants={{ show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    >
      {words.map((word, index) => (
        <span key={`${word}-${index}`} aria-hidden="true" className="inline-block overflow-hidden pb-[0.12em] align-bottom -mb-[0.12em]">
          <motion.span
            className={`inline-block will-change-transform ${highlightFrom > -1 && index >= highlightFrom ? highlightClass : ""}`}
            variants={{
              hidden: { y: "110%", rotate: 8, opacity: 0 },
              show: { y: "0%", rotate: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            {word}
          </motion.span>
          {index < words.length - 1 && " "}
        </span>
      ))}
    </motion.span>
  );
}
