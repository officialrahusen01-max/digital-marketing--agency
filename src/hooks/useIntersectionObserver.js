import { useEffect, useRef, useState } from "react";

/**
 * Returns [ref, isVisible] — attach ref to any element to know when it
 * enters the viewport (useful for scroll-reveal animations).
 */
export function useIntersectionObserver(options = { threshold: 0.2 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(node);
      }
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}
