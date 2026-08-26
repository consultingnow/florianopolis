import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#12224A",
          deep: "#0B1730",
          light: "#1C3263",
          soft: "#22396E",
        },
        accent: {
          DEFAULT: "#2E5EEA",
          dark: "#2249C4",
          light: "#5C83F0",
        },
        cloud: "#EEF1F7",
        ink: {
          DEFAULT: "#1B2340",
          soft: "#45506E",
          muted: "#6B7693",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(18, 34, 74, 0.18)",
        lift: "0 22px 50px -20px rgba(18, 34, 74, 0.28)",
      },
      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
      },
    },
  },
  plugins: [],
};

export default config;