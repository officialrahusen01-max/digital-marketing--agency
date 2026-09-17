import gsap from "gsap";

/**
 * Simple reusable fade-up entrance animation.
 * Usage: fadeUp(".hero-title")
 */
export function fadeUp(target, options = {}) {
  return gsap.from(target, {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    ...options,
  });
}

/**
 * Stagger children in on scroll — good for grids of cards.
 */
export function staggerIn(target, options = {}) {
  return gsap.from(target, {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.12,
    ease: "power3.out",
    ...options,
  });
}
