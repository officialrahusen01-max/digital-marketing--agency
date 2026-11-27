import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";

// Desktop-only cursor follower: a dot + lagging ring that grows over links
// and shows a label from data-cursor="…". The native cursor stays visible.
export default function Cursor() {
  const [enabled] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [state, setState] = useState({ hover: false, label: "", down: false, hidden: true });

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 380, damping: 30, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 380, damping: 30, mass: 0.5 });

  useEffect(() => {
    if (!enabled) return undefined;

    const onMove = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setState((prev) => (prev.hidden ? { ...prev, hidden: false } : prev));
    };
    const onOver = (event) => {
      const target = event.target.closest?.("[data-cursor], a, button, [role='tab'], summary");
      const label = target?.getAttribute?.("data-cursor") || "";
      setState((prev) => (prev.hover === Boolean(target) && prev.label === label ? prev : { ...prev, hover: Boolean(target), label }));
    };
    const onDown = () => setState((prev) => ({ ...prev, down: true }));
    const onUp = () => setState((prev) => ({ ...prev, down: false }));
    const onLeave = () => setState((prev) => ({ ...prev, hidden: true }));

    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerover", onOver);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const size = state.label ? 88 : state.hover ? 56 : 34;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[120]" style={{ opacity: state.hidden ? 0 : 1, transition: "opacity .2s" }}>
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="absolute left-0 top-0"
      >
        <motion.div
          animate={{ width: size, height: size, scale: state.down ? 0.8 : 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full ${
            state.label ? "grid place-items-center bg-brand-400 text-night" : state.hover ? "bg-brand-400/20 ring-1 ring-brand-400" : "ring-1 ring-brand-400/70"
          }`}
        >
          <AnimatePresence>
            {state.label && (
              <motion.span
                key={state.label}
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.4 }}
                className="text-[11px] font-extrabold uppercase tracking-[0.12em]"
              >
                {state.label}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
      <motion.div style={{ x, y }} className="absolute left-0 top-0">
        <div className={`h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-400 transition-opacity ${state.label ? "opacity-0" : "opacity-100"}`} />
      </motion.div>
    </div>
  );
}
