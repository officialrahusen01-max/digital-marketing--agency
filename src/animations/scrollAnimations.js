import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Reveals an element when it scrolls into view.
 * Usage: revealOnScroll(".section-title")
 */
export function revealOnScroll(target, options = {}) {
  return gsap.from(target, {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: target,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    ...options,
  });
}

export { ScrollTrigger };
