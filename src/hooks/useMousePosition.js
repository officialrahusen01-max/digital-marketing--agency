import { useEffect, useState } from "react";

/**
 * Tracks mouse position for custom cursor effects.
 */
export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let frameId = 0;
    let nextPosition = { x: 0, y: 0 };

    const handleMove = (event) => {
      nextPosition = { x: event.clientX, y: event.clientY };

      if (frameId) return;

      frameId = window.requestAnimationFrame(() => {
        setPosition(nextPosition);
        frameId = 0;
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return position;
}
