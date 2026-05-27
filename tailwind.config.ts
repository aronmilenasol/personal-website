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
            h1: { color: "var(--color-text)" },
            h2: { color: "var(--color-text)" },
            h3: { color: "var(--color-text)" },
            strong: { color: "var(--color-text)" },
            b: { color: "var(--color-text)" },
            a: { color: "var(--color-accent)" },
          },
        },
        dark: {
          css: {
            h1: { color: "var(--color-text)" },
            h2: { color: "var(--color-text)" },
            h3: { color: "var(--color-text)" },
            strong: { color: "var(--color-text)" },
            b: { color: "var(--color-text)" },
            a: { color: "var(--color-accent)" },
          },
        },
      },
      colors: {
        /* semantic tokens — used in JSX className strings */
        "c-bg":      "var(--color-bg)",
        "c-surface": "var(--color-surface)",
        "c-border":  "var(--color-border)",
        "c-text":    "var(--color-text)",
        "c-muted":   "var(--color-muted)",
        "c-faint":   "var(--color-faint)",
        "c-accent":  "var(--color-accent)",
        "c-accent2": "var(--color-accent-2)",
        "c-nav-bg":  "var(--color-nav-bg)",
        "c-nav":     "var(--color-nav-text)",
        /* legacy aliases kept for backward compat */
        light:   "var(--color-bg)",
        lighter: "var(--color-surface)",
        base:    "var(--color-muted)",
        dark:    "var(--color-text)",
        darker:  "var(--color-text)",
      },
    },
  },
  plugins: [typography],
} as Config;
