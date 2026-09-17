# Digital Marketing Agency — React Project

Structure inspired by Cuberto / NexGrow style agency sites: heavy scroll animation,
section-based composition, and reusable UI blocks.

## Setup

```bash
npm install
npm run dev
```

## Folder guide

- `src/components` — small reusable pieces (buttons, cards, navbar, footer)
- `src/sections` — big visual blocks that make up a page (hero, showcase, cta)
- `src/pages` — route-level pages that assemble sections
- `src/animations` — GSAP timelines & Framer Motion variants
- `src/hooks` — custom hooks (smooth scroll, cursor tracking, intersection observer)
- `src/data` — static content (services, testimonials, projects)
- `src/router` — React Router route definitions
