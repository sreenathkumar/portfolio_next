import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: '#0A192F',
      secodary: '#112240',
      accent: '#64FFDA',
      neutral: {
        0: '#e6f1ff',
        100: '#8892b0',
      }

    }
  },
  plugins: [],
};
export default config;
