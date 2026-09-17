import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useMousePosition } from "../../hooks/useMousePosition.js";

export default function CustomCursor() {
  const { x, y } = useMousePosition();
  const [label, setLabel] = useState("");
  const cursorX = useSpring(useMotionValue(0), { stiffness: 700, damping: 42, mass: 0.16 });
  const cursorY = useSpring(useMotionValue(0), { stiffness: 700, damping: 42, mass: 0.16 });
  const ringX = useSpring(useMotionValue(0), { stiffness: 180, damping: 24, mass: 0.4 });
  const ringY = useSpring(useMotionValue(0), { stiffness: 180, damping: 24, mass: 0.4 });

  useEffect(() => {
    cursorX.set(x);
    cursorY.set(y);
    ringX.set(x);
    ringY.set(y);
  }, [cursorX, cursorY, ringX, ringY, x, y]);

  useEffect(() => {
    const handleOver = (event) => {
      const target = event.target instanceof Element ? event.target.closest("[data-cursor]") : null;
      setLabel(target?.dataset.cursor || "");
    };

    document.addEventListener("mouseover", handleOver, { passive: true });
    return () => document.removeEventListener("mouseover", handleOver);
  }, []);

  return (
    <div className="custom-cursor" aria-hidden="true">
      <motion.span className="custom-cursor__ring" style={{ x: ringX, y: ringY }} animate={{ scale: label ? 1.3 : 1, opacity: label ? 0.9 : 0.55 }} />
      <motion.span className="custom-cursor__dot" style={{ x: cursorX, y: cursorY }} animate={{ scale: label ? 1.35 : 1 }} />
      <motion.span className="custom-cursor__label" style={{ x: cursorX, y: cursorY }} animate={{ opacity: label ? 1 : 0 }}>
        <span>{label}</span>
      </motion.span>
    </div>
  );
}
