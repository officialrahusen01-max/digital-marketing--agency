// Shared state for the once-per-session brand intro, so page animations can wait for it.
const SEEN_KEY = "nld_intro_seen";
export const INTRO_DURATION = 1.9; // seconds

let pending = null;

export function shouldShowIntro() {
  if (pending === null) {
    try {
      pending = !sessionStorage.getItem(SEEN_KEY);
    } catch {
      pending = false;
    }
  }
  return pending;
}

export function markIntroDone() {
  pending = false;
  try {
    sessionStorage.setItem(SEEN_KEY, "1");
  } catch {
    /* storage unavailable */
  }
}

// Extra delay (seconds) for entrance animations while the intro is still on screen.
export function introDelay() {
  return shouldShowIntro() ? INTRO_DURATION - 0.2 : 0;
}
