/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand palette (from the Next Life Digital logo)
        brand: {
          50: "#E8FCFA",
          100: "#C6F7F2",
          200: "#86F0E6",
          300: "#4BE8DA",
          400: "#00DDCC",
          500: "#00C4B4",
          600: "#00A99D",
          700: "#00857C",
          800: "#0A615B",
          900: "#0B3F3B",
        },
        night: {
          DEFAULT: "#050607",
          900: "#07090A",
          800: "#0D1112",
          700: "#141A1B",
          600: "#1D2526",
        },
        // Legacy tokens (admin panel)
        ink: "#050607",
        cream: "#f3f0ff",
        coral: "rgb(0 221 204)",
        mist: "#a29db5",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "Inter", "system-ui", "Arial", "sans-serif"],
        brand: ["Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(5,6,7,0.04), 0 8px 24px -12px rgba(5,6,7,0.12)",
        lift: "0 2px 4px rgba(5,6,7,0.04), 0 24px 48px -20px rgba(5,6,7,0.22)",
        glow: "0 0 0 1px rgba(0,221,204,0.25), 0 20px 60px -15px rgba(0,221,204,0.45)",
      },
      keyframes: {
        shine: {
          "0%": { transform: "translateX(-120%) skewX(-20deg)" },
          "60%, 100%": { transform: "translateX(220%) skewX(-20deg)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
      },
      animation: {
        shine: "shine 3.2s ease-in-out infinite",
        "gradient-x": "gradient-x 6s ease infinite",
        "spin-slow": "spin-slow 18s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.2, 0.6, 0.4, 1) infinite",
      },
    },
  },
  plugins: [],
};
