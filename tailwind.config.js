/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0f",
        cream: "#f3f0ff",
        coral: "#c8ff42",
        mist: "#a29db5",
      },
      fontFamily: {
        sans: ["Helvetica Neue", "Arial", "sans-serif"],
        display: ["Georgia", "serif"],
      },
      keyframes: {
        "soft-pulse": {
          "0%, 100%": { opacity: "0.35", transform: "scale(0.96)" },
          "50%": { opacity: "1", transform: "scale(1)" },
        },
        "draw-line": {
          from: { strokeDashoffset: "800" },
          to: { strokeDashoffset: "0" },
        },
        orbit: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) rotate(0deg)" },
          "50%": { transform: "translate3d(-18px, 22px, 0) rotate(12deg)" },
        },
      },
      animation: {
        "soft-pulse": "soft-pulse 2.5s ease-in-out infinite",
        "draw-line": "draw-line 2.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        orbit: "orbit 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
