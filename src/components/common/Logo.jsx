import { site } from "../../config/site.js";

// Brand mark: four tiles forming a leaf / quarter shape.
export function LogoMark({ className = "h-10 w-10", tone = "dark" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <rect x="0" y="0" width="46" height="46" fill={tone === "dark" ? "#ffffff" : "#050607"} />
      <path d="M54 0 H60 A40 40 0 0 1 100 40 V46 H54 Z" fill="#00DDCC" />
      <path d="M0 54 H46 V100 H40 A40 40 0 0 1 0 60 Z" fill="#00A99D" />
      <rect x="54" y="54" width="46" height="46" fill="#86F0E6" />
    </svg>
  );
}

// Full lockup: mark + "Next Life" (bold) + "Digital" (teal).
// tone="dark" for dark backgrounds (white text), tone="light" for light backgrounds.
export default function Logo({ size = "md", tone = "dark", className = "" }) {
  const sizes = {
    sm: { mark: "h-8 w-8", text: "text-xl", gap: "gap-2.5" },
    md: { mark: "h-9 w-9", text: "text-[1.6rem]", gap: "gap-3" },
    lg: { mark: "h-12 w-12", text: "text-[2rem]", gap: "gap-3.5" },
  }[size];

  return (
    <span className={`inline-flex items-center ${sizes.gap} ${className}`} aria-label={site.name}>
      <LogoMark className={`${sizes.mark} shrink-0`} tone={tone} />
      <span className={`font-brand ${sizes.text} whitespace-nowrap leading-none tracking-[-0.01em]`}>
        <span className={`font-bold ${tone === "dark" ? "text-white" : "text-night"}`}>Next Life</span>{" "}
        <span className={`font-normal ${tone === "dark" ? "text-brand-400" : "text-brand-600"}`}>Digital</span>
      </span>
    </span>
  );
}
