import { Raleway } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        raleway: ["Raleway", "serif"],
        lato: ["Lato", "serif"],
      },
      backgroundColor: {
        blue: "#111826",
        green: "#A9D3A9",
        lighGreen: "#f8faf7",
      },
      textColor: {
        green: "#A9D3A9"
      },
      borderColor: {
        green: "#A9D3A9"
      }
    },
  },
  plugins: [],
};
