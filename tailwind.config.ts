import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "var(--color-light)",
        lighter: "var(--color-lighter)",
        base: "var(--color-base)",
        dark: "var(--color-dark)",
        darker: "var(--color-darker)",
      },
    },
  },
  plugins: [],
} satisfies Config;
