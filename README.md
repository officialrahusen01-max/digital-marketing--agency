# Digital Marketing Agency — React Project

Structure inspired by Cuberto / NexGrow style agency sites: heavy scroll animation,
section-based composition, and reusable UI blocks.

## Frontend setup

```bash
npm install
npm run dev
```

Create a `.env.local` file in the project root:

```env
VITE_API_URL=http://localhost:5000
```

## Backend setup

```bash
cd server
npm install
npm run dev
```

Create a `.env` file inside the `server` folder:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/digital_marketing_agency
CLIENT_URL=http://localhost:5173
```

## Deployment notes

For Render or production deployment, frontend and backend should be deployed as separate services.

### Backend on Render
- Root directory: `server`
- Build command: `npm install`
- Start command: `npm start`
- Environment variables:
  - `PORT=10000`
  - `MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/digital_marketing_agency`
  - `CLIENT_URL=https://your-frontend-domain.com`

### Frontend on Render/Vercel/Netlify
- Root directory: project root
- Build command: `npm install && npm run build`
- Environment variable:
  - `VITE_API_URL=https://your-backend-render-url.onrender.com`

## API routes

- `GET /` → backend health check
- `GET /api/enquiries` → fetch all enquiries
- `POST /api/enquiries` → submit enquiry

## Folder guide

- `src/components` — small reusable pieces (buttons, cards, navbar, footer)
- `src/sections` — big visual blocks that make up a page (hero, showcase, cta)
- `src/pages` — route-level pages that assemble sections
- `src/animations` — GSAP timelines & Framer Motion variants
- `src/hooks` — custom hooks (smooth scroll, cursor tracking, intersection observer)
- `src/data` — static content (services, testimonials, projects)
- `src/router` — React Router route definitions
- `server` — Express + MongoDB backend
