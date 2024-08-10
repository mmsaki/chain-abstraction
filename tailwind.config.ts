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
      colors: {
        gray: {
          "50": "#FFFFFF",
          "75": "#F5F5F5",
          "100": "#E6E6E6",
          "200": "#D5D5D5",
          "300": "#B1B1B1",
          "400": "#909090",
          "500": "#6D6D6D",
          "600": "#464646",
          "700": "#2C2C2C",
          "800": "#222222",
          "900": "#000000",
        },
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
    fontFamily: {
      sans: ["Poppins"],
    },
  },
  plugins: [],
};
export default config;
