import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // dùng class để switch dark/light
  theme: {
    extend: {
      screens: {
        xs: { max: "374px" },
      },
      fontFamily: {
        sans: ["SF Pro Display", "sans-serif"],
      },
      colors: {
        light: {
          primary: "#10A469",
          "primary-100": "#f0f0f0",
          text: "#000000",
          "neutral-1": "#FFFFFF",
          "neutral-2": "#E2E2E2",
          "neutral-3": "#9E9E9F",
          "neutral-4": "#575D61",
          "neutral-5": "#212125",
          "bg-1": "#0D0D0E",
          "bg-2": "#0A0F0D",
          "bg-3": "#101613",
        },
        dark: {
          "primary-00": "#000000",
          "primary-100": "#1a1a1a",
          text: "#ffffff",
          "neutral-1": "#212125",
          "neutral-2": "#323232",
          "neutral-3": "#9E9E9E",
          "neutral-4": "#DEDEDE",
          "neutral-5": "#FFFFFF",
          "bg-1": "#F0F0F0",
          "bg-2": "#DFDFDF",
          "bg-3": "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
export default config;
