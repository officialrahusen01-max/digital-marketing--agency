import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-ink px-6 py-10 text-cream sm:px-10 lg:px-[6vw]">
      <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-8 border-t border-cream/15 pt-6 text-xs text-mist sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} Northstar Studio. Built for the brave.</p>
        <div className="flex gap-6 uppercase tracking-[0.15em]"><Link to="/about" className="transition-colors hover:text-coral">Instagram</Link><Link to="/about" className="transition-colors hover:text-coral">LinkedIn</Link><Link to="/about" className="transition-colors hover:text-coral">Email</Link></div>
      </div>
    </footer>
  );
}
