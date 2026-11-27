import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center bg-ink px-6 py-24 text-cream sm:px-10 lg:px-[6vw]">
      <div className="mx-auto w-full max-w-[1600px]">
        <p className="mb-6 text-[10px] uppercase tracking-[0.24em] text-coral">404 / Page not found</p>
        <h1 className="max-w-4xl text-[clamp(3rem,8vw,8rem)] leading-[0.88] tracking-[-0.08em]">
          This page needs a <em className="font-display font-normal text-coral">next life.</em>
        </h1>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/" className="rounded-full bg-coral px-6 py-4 text-xs uppercase tracking-[0.14em] text-ink transition hover:bg-cream">Back to home ↗</Link>
          <Link to="/services" className="rounded-full border border-cream/20 px-6 py-4 text-xs uppercase tracking-[0.14em] transition hover:border-coral hover:text-coral">Our services</Link>
        </div>
      </div>
    </main>
  );
}
