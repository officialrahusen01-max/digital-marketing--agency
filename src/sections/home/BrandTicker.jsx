// Strip of platforms we work on (names only — not partnership claims).
const platforms = ["Google Search", "Google Ads", "Meta Ads", "Instagram", "YouTube", "LinkedIn", "WordPress", "Shopify", "React", "Android & iOS"];

export default function BrandTicker() {
  return (
    <section className="border-y border-white/10 bg-night py-8" aria-label="Platforms we work on">
      <div className="container-x flex flex-col items-center gap-6 lg:flex-row lg:gap-10">
        <p className="shrink-0 text-center text-sm font-semibold text-slate-500 lg:text-left">
          Platforms we <br className="hidden lg:block" />work on every day
        </p>
        <div className="mask-fade-x relative w-full overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-12 hover:[animation-play-state:paused]">
            {[...platforms, ...platforms].map((name, index) => (
              <span key={`${name}-${index}`} className="whitespace-nowrap text-xl font-bold tracking-tight text-slate-600 transition hover:text-brand-300" aria-hidden={index >= platforms.length}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
