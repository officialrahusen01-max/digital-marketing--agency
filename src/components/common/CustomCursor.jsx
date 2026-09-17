import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useMousePosition } from "../../hooks/useMousePosition.js";

export default function CustomCursor() {
  const { x, y } = useMousePosition();
  const [label, setLabel] = useState("");
  const cursorX = useSpring(useMotionValue(x), { stiffness: 500, damping: 35, mass: 0.2 });
  const cursorY = useSpring(useMotionValue(y), { stiffness: 500, damping: 35, mass: 0.2 });

  useEffect(() => {
    cursorX.set(x);
    cursorY.set(y);
  }, [cursorX, cursorY, x, y]);

  useEffect(() => {
    const handleOver = (event) => setLabel(event.target.closest("[data-cursor]")?.dataset.cursor || "");
    document.addEventListener("mouseover", handleOver);
    return () => document.removeEventListener("mouseover", handleOver);
  }, []);

  return (
    <motion.div className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-coral text-[9px] uppercase text-ink mix-blend-difference md:flex" style={{ x: cursorX, y: cursorY }} animate={{ scale: label ? 5 : 1 }} transition={{ type: "spring", stiffness: 300, damping: 24 }}>
      {label && <span className="scale-[0.2] whitespace-nowrap font-bold tracking-normal">{label}</span>}
    </motion.div>
  );
}
