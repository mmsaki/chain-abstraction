import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    dropShadow: {
      glow: ["0 0px 20px rgba(255,255, 255, 0.0)", "0 0px 65px rgba(255, 255,255, 0.9)"],
    },
    screens: {
      xs: "200px",
      sm: "576px",
      md: "960px",
      lg: "1440px",
    },
  },
  plugins: [],
};
export default config;
