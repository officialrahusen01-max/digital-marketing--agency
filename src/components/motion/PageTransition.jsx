import { motion } from "framer-motion";
import { LogoMark } from "../common/Logo.jsx";

const ease = [0.76, 0, 0.24, 1];

// Two-layer curtain: covers the screen on exit, then wipes away to reveal the new page.
export default function PageTransition({ children, reveal = true }) {
  return (
    <>
      {children}

      {/* Exit: sweep up from bottom */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[80] origin-bottom bg-brand-400"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.45, ease }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[81] flex origin-bottom items-center justify-center bg-night"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.45, delay: 0.08, ease }}
      >
        <LogoMark className="h-14 w-14" />
      </motion.div>

      {/* Enter: lift away to the top (skipped on first load) */}
      {reveal && (
        <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[81] flex origin-top items-center justify-center bg-night"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5, ease }}
      >
        <LogoMark className="h-14 w-14" />
      </motion.div>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[80] origin-top bg-brand-400"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease }}
      />
        </>
      )}
    </>
  );
}
