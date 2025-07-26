import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: { color: "var(--color-darker)" },
            h2: { color: "var(--color-darker)" },
            h3: { color: "var(--color-darker)" },
            strong: { color: "var(--color-darker)" },
            b: { color: "var(--color-darker)" },
          },
        },
        dark: {
          css: {
            h1: { color: "var(--color-darker)" },
            h2: { color: "var(--color-darker)" },
            h3: { color: "var(--color-darker)" },
            strong: { color: "var(--color-darker)" },
            b: { color: "var(--color-darker)" },
          },
        },
      },
      colors: {
        light: "var(--color-light)",
        lighter: "var(--color-lighter)",
        base: "var(--color-base)",
        dark: "var(--color-dark)",
        darker: "var(--color-darker)",
      },
    },
  },
  plugins: [typography],
} as Config;
