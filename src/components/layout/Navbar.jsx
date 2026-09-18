import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo/logo1.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cream/10 bg-ink/90 text-cream backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1600px] items-center justify-between px-6 sm:px-10 lg:px-[6vw]">
        <Link to="/" data-cursor="Home" onClick={closeMenu} className="group flex items-center gap-3 text-base font-semibold tracking-[-0.05em] sm:text-xl">
          <img src={logo} alt="Vertexo" className="h-10 w-auto transition-transform duration-500 group-hover:scale-105" />
        </Link>
        <nav className="hidden items-center gap-8 text-xs text-mist md:flex lg:gap-10">
          <Link to="/about" data-cursor="About" className="transition-colors hover:text-coral">About</Link>
          <Link to="/services" data-cursor="Services" className="transition-colors hover:text-coral">Services</Link>
          <Link to="/work" data-cursor="Work" className="transition-colors hover:text-coral">Work</Link>
          <Link to="/contact" data-cursor="Talk" className="rounded-full border border-coral px-5 py-3 text-[10px] uppercase tracking-[0.14em] text-coral transition-colors hover:bg-coral hover:text-ink">Start a project <span aria-hidden="true">↗</span></Link>
        </nav>
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="grid h-10 w-10 place-items-center rounded-full border border-cream/15 text-lg text-cream transition-colors hover:border-coral hover:text-coral md:hidden"
        >
          {isMenuOpen ? "×" : "≡"}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-cream/10 px-6 pb-6 pt-4 text-sm text-mist sm:px-10 md:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-1">
            <Link to="/about" onClick={closeMenu} className="border-b border-cream/10 py-4 transition-colors hover:text-coral">About</Link>
            <Link to="/services" onClick={closeMenu} className="border-b border-cream/10 py-4 transition-colors hover:text-coral">Services</Link>
            <Link to="/work" onClick={closeMenu} className="border-b border-cream/10 py-4 transition-colors hover:text-coral">Work</Link>
            <Link to="/contact" onClick={closeMenu} className="mt-4 inline-flex w-fit rounded-full border border-coral px-5 py-3 text-[10px] uppercase tracking-[0.14em] text-coral transition-colors hover:bg-coral hover:text-ink">Start a project <span aria-hidden="true" className="ml-2">↗</span></Link>
          </div>
        </nav>
      )}
    </header>
  );
}
