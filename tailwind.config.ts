import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7f3dff",
        neon: "#9b6cff",
        "primary-dark": "#4b1fb8",
        bg: "#0b0b0f",
      },

      background: {
        "gradient-primary": "linear-gradient(135deg,#4b1fb8,#7f3dff,#9b6cff)",
      },

      boxShadow: {
        neon: "0 0 20px rgba(127,61,255,0.6)",
      },

      fontFamily: {
        title: ["var(--font-poppins)"],
        body: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};

export default config;
