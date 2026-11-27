import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../common/Logo.jsx";

const links = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const desktopLinkClass = ({ isActive }) => `transition-colors hover:text-coral ${isActive ? "text-coral" : ""}`;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cream/10 bg-ink/90 text-cream backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1600px] items-center justify-between px-6 sm:px-10 lg:px-[6vw]">
        <Link to="/" data-cursor="Home" onClick={closeMenu} className="group flex items-center" aria-label="Next Life Digital home">
          <Logo size="sm" className="transition-transform duration-500 group-hover:scale-[1.03] sm:hidden" />
          <Logo size="md" className="hidden transition-transform duration-500 group-hover:scale-[1.03] sm:inline-flex" />
        </Link>
        <nav className="hidden items-center gap-8 text-xs text-mist md:flex lg:gap-10">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} data-cursor={link.label} className={desktopLinkClass}>
              {link.label}
            </NavLink>
          ))}
          <Link to="/enquirisubmit" data-cursor="Talk" className="rounded-full border border-coral px-5 py-3 text-[10px] uppercase tracking-[0.14em] text-coral transition-colors hover:bg-coral hover:text-ink">
            Get a free quote <span aria-hidden="true">↗</span>
          </Link>
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
            {links.map((link) => (
              <Link key={link.to} to={link.to} onClick={closeMenu} className="border-b border-cream/10 py-4 transition-colors hover:text-coral">
                {link.label}
              </Link>
            ))}
            <Link to="/enquirisubmit" onClick={closeMenu} className="mt-4 inline-flex w-fit rounded-full border border-coral px-5 py-3 text-[10px] uppercase tracking-[0.14em] text-coral transition-colors hover:bg-coral hover:text-ink">
              Get a free quote <span aria-hidden="true" className="ml-2">↗</span>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
