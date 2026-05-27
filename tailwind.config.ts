import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        muted: "#4b5563",
        line: "#d7dde5",
        paper: "#ffffff",
        soft: "#f6f8fb",
        "soft-2": "#eef3f6",
        forest: "#0f4f47",
        teal: "#14766d",
        amber: "#b7791f",
        burgundy: "#7f1d1d"
      },
      boxShadow: {
        panel: "0 18px 45px rgba(17, 24, 39, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
