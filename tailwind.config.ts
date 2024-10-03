import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "800px",
      lg: "1024px",
      // xl: "1280px",
      // "2xl": "1480px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        exq: ["var(--font-exq)", "sans-serif"],
        zombie: ["var(--font-zombie)", "sans-serif"],
        shlop: ["var(--font-shlop)", "sans-serif"],
        mickey: ["var(--font-mickey)", "sans-serif"],
        acme: ["var(--font-acme)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
