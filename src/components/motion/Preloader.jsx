import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { INTRO_DURATION, markIntroDone, shouldShowIntro } from "./intro.js";

const tiles = [
  { d: "M0 0 H46 V46 H0 Z", fill: "#ffffff", from: { x: -60, y: -60 } },
  { d: "M54 0 H60 A40 40 0 0 1 100 40 V46 H54 Z", fill: "#00DDCC", from: { x: 60, y: -60 } },
  { d: "M0 54 H46 V100 H40 A40 40 0 0 1 0 60 Z", fill: "#00A99D", from: { x: -60, y: 60 } },
  { d: "M54 54 H100 V100 H54 Z", fill: "#86F0E6", from: { x: 60, y: 60 } },
];

// Brand intro shown once per browser session: logo tiles fly together, wordmark reveals, curtain lifts.
export default function Preloader() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(() => shouldShowIntro());

  useEffect(() => {
    if (!visible) return undefined;
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      markIntroDone();
      setVisible(false);
    }, reduceMotion ? 400 : INTRO_DURATION * 1000);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [visible, reduceMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-night"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          initial={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden="true"
        >
          <motion.div
            className="absolute h-[520px] w-[520px] rounded-full bg-brand-400/20 blur-[120px]"
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <div className="relative flex items-center gap-4">
            <motion.svg viewBox="0 0 100 100" className="h-16 w-16 sm:h-20 sm:w-20" initial={{ rotate: -90 }} animate={{ rotate: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
              {tiles.map((tile, index) => (
                <motion.path
                  key={tile.d}
                  d={tile.d}
                  fill={tile.fill}
                  initial={{ ...tile.from, opacity: 0, scale: 0.3 }}
                  animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 + index * 0.08, type: "spring", stiffness: 220, damping: 14 }}
                />
              ))}
            </motion.svg>
            <div className="overflow-hidden">
              <motion.p
                className="whitespace-nowrap font-brand text-3xl leading-none sm:text-5xl"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.65, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="font-bold text-white">Next Life</span> <span className="text-brand-400">Digital</span>
              </motion.p>
            </div>
          </div>
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-brand-600 to-brand-300"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.7, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
