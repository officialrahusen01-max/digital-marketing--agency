import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink px-6 pb-8 pt-20 text-cream sm:px-10 lg:px-[6vw] lg:pt-28">
      <div className="pointer-events-none absolute -right-24 top-12 h-72 w-72 rounded-full border border-coral/20 sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute -right-8 top-28 h-44 w-44 rounded-full bg-coral/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1600px]">
        <div className="flex flex-col justify-between gap-12 border-b border-cream/15 pb-16 lg:flex-row lg:items-end lg:gap-20 lg:pb-24">
          <div className="max-w-3xl">
            <p className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-coral">
              <span className="h-2 w-2 rounded-full bg-coral shadow-[0_0_18px_rgb(0_221_204)]" />
              Have a good idea?
            </p>
            <h2 className="max-w-4xl text-[clamp(3.5rem,9vw,9rem)] font-medium leading-[0.82] tracking-[-0.08em]">
              Let&apos;s make it <em className="font-display font-normal text-coral">impossible</em> to ignore.
            </h2>
          </div>

          <div className="w-full max-w-md rounded-[1.5rem] border border-coral/30 bg-coral p-6 text-ink shadow-[0_24px_80px_rgb(0_221_204_/_14%)] sm:p-8">
            <p className="mb-7 text-[10px] uppercase tracking-[0.2em] text-ink/60">Start a conversation</p>
            <div className="space-y-3">
              <a href="tel:+919772609110" className="group flex items-center justify-between border-b border-ink/20 pb-3 text-lg tracking-[-0.03em] transition-transform duration-300 hover:translate-x-2">
                <span>+91 97726 09110</span>
                <span aria-hidden="true" className="text-xl transition-transform duration-300 group-hover:rotate-45">↗</span>
              </a>
              <a href="tel:+919660439686" className="group flex items-center justify-between border-b border-ink/20 pb-3 text-lg tracking-[-0.03em] transition-transform duration-300 hover:translate-x-2">
                <span>+91 96604 39686</span>
                <span aria-hidden="true" className="text-xl transition-transform duration-300 group-hover:rotate-45">↗</span>
              </a>
              <a href="mailto:officialrahusen01@gmail.com" className="group flex items-center justify-between gap-4 pt-1 text-sm tracking-[-0.02em] transition-transform duration-300 hover:translate-x-2 sm:text-base">
                <span className="break-all">officialrahusen01@gmail.com</span>
                <span aria-hidden="true" className="shrink-0 text-xl transition-transform duration-300 group-hover:rotate-45">↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-10 py-10 text-sm sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr] lg:py-14">
          <div>
            <Link to="/" data-cursor="Home" className="group inline-flex items-center gap-3 text-2xl font-semibold tracking-[-0.07em]">
              <span className="grid h-10 w-10 place-items-center rounded-[12px] bg-coral text-2xl font-black leading-none text-ink transition-transform duration-500 group-hover:rotate-12">N</span>
              Northstar<span className="text-coral">.</span>
            </Link>
            <p className="mt-5 max-w-xs leading-6 text-mist">Strategy, creative and performance for brands ready to move forward.</p>
          </div>
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-mist">Explore</p>
            <div className="flex flex-col items-start gap-3 text-cream/80">
              <Link to="/about" data-cursor="About" className="transition-colors hover:text-coral">About us</Link>
              <Link to="/services" data-cursor="Services" className="transition-colors hover:text-coral">Services</Link>
              <Link to="/services" data-cursor="Work" className="transition-colors hover:text-coral">Selected work</Link>
            </div>
          </div>
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-mist">Follow along</p>
            <div className="flex flex-col items-start gap-3 text-cream/80">
              <a href="mailto:officialrahusen01@gmail.com" className="transition-colors hover:text-coral">Email us</a>
              <a href="tel:+919772609110" className="transition-colors hover:text-coral">Call the studio</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 border-t border-cream/15 pt-6 text-[10px] uppercase tracking-[0.15em] text-mist sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Northstar Studio. Built for the brave.</p>
          <p>Made with intent / Available worldwide</p>
        </div>
      </div>
    </footer>
  );
}
