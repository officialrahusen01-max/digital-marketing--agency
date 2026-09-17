/**
 * Clamp a number between min and max.
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Simple linear interpolation, handy for animation calculations.
 */
export function lerp(start, end, t) {
  return start + (end - start) * t;
}
