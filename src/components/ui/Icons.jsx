// Lightweight stroke icon set (24px grid). Pass className for size/colour.
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

const make = (paths) =>
  function Icon({ className = "h-5 w-5" }) {
    return (
      <svg {...base} className={className}>
        {paths}
      </svg>
    );
  };

export const IconChart = make(<><path d="M3 3v18h18" /><path d="m7 15 4-4 3 3 6-7" /><path d="M16 7h4v4" /></>);
export const IconSearch = make(<><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /><path d="M8 11h6M11 8v6" /></>);
export const IconSocial = make(<><path d="M7 10a3 3 0 1 0 0-.01" /><circle cx="17" cy="6" r="2.5" /><circle cx="17" cy="18" r="2.5" /><path d="m9.6 8.7 5-2M9.6 11.3l5 5" /></>);
export const IconTarget = make(<><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>);
export const IconCode = make(<><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 8h18" /><path d="m10 12-2 2 2 2M14 12l2 2-2 2" /></>);
export const IconMobile = make(<><rect x="6" y="2.5" width="12" height="19" rx="2.5" /><path d="M11 18.5h2" /></>);
export const IconArrowRight = make(<><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>);
export const IconArrowUpRight = make(<><path d="M7 17 17 7" /><path d="M8 7h9v9" /></>);
export const IconCheck = make(<path d="m5 12.5 4.5 4.5L19 7.5" />);
export const IconPhone = make(<path d="M5 4h3.5l1.5 4.5-2.2 1.4a11 11 0 0 0 6.3 6.3l1.4-2.2L20 15.5V19a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />);
export const IconMail = make(<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 6.5 8.5 6 8.5-6" /></>);
export const IconPin = make(<><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></>);
export const IconClock = make(<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>);
export const IconShield = make(<><path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6Z" /><path d="m8.8 12 2.2 2.2 4.2-4.4" /></>);
export const IconUsers = make(<><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0" /><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.3a6.5 6.5 0 0 1 3.5 5.7" /></>);
export const IconReport = make(<><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 17v-3M12 17v-6M16 17V9" /></>);
export const IconSparkle = make(<path d="M12 3c.5 4.5 4 8 8.5 8.5-4.5.5-8 4-8.5 8.5-.5-4.5-4-8-8.5-8.5C8 11 11.5 7.5 12 3Z" />);
export const IconStar = make(<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9Z" />);
export const IconChevronDown = make(<path d="m6 9 6 6 6-6" />);
export const IconMenu = make(<><path d="M4 7h16M4 12h16M4 17h16" /></>);
export const IconClose = make(<><path d="M6 6l12 12M18 6 6 18" /></>);
export const IconRocket = make(<><path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2" /><path d="M9 15 6 12l3-6c2.5-3 6.5-4 12-3-.5 5.5-1.5 9.5-4.5 12l-6 3Z" /><circle cx="15" cy="9" r="1.6" /></>);
export const IconHandshake = make(<><path d="m11 17 2 2a1.4 1.4 0 0 0 2-2" /><path d="m14 14 2.5 2.5a1.4 1.4 0 0 0 2-2L15 11" /><path d="M2.5 11 6 7.5l4 1 3-1.5 8.5 4.5-3 3" /><path d="m2.5 11 6.5 6.5a1.4 1.4 0 0 0 2-2" /></>);

export function IconWhatsApp({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.98L2 22l5.17-1.5A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.07.9.9-2.99-.2-.31a8.2 8.2 0 1 1 6.85 3.73Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.97-.14.16-.29.18-.53.06a6.7 6.7 0 0 1-3.34-2.92c-.25-.43.25-.4.72-1.34.08-.16.04-.3-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.41-.56-.42h-.47a.9.9 0 0 0-.66.31 2.77 2.77 0 0 0-.86 2.06 4.8 4.8 0 0 0 1 2.56 11 11 0 0 0 4.21 3.72c1.57.68 2.19.74 2.97.62.48-.07 1.46-.6 1.67-1.18.2-.58.2-1.08.14-1.18-.06-.1-.22-.16-.47-.29Z" />
    </svg>
  );
}

// Service id → icon
export const serviceIcons = {
  "digital-marketing": IconChart,
  seo: IconSearch,
  "social-media-marketing": IconSocial,
  "google-ads": IconTarget,
  "web-development": IconCode,
  "mobile-app-development": IconMobile,
};
