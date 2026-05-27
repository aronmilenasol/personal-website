"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-8 h-8" />;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      type="button"
      className="w-8 h-8 flex items-center justify-center rounded-sm transition-all"
      style={{
        color: "var(--color-nav-text)",
        border: "1px solid var(--color-nav-border)",
        opacity: 0.65,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.color = "var(--color-accent)";
        (e.currentTarget as HTMLElement).style.borderColor = "var(--color-accent)";
        (e.currentTarget as HTMLElement).style.opacity = "1";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.color = "var(--color-nav-text)";
        (e.currentTarget as HTMLElement).style.borderColor = "var(--color-nav-border)";
        (e.currentTarget as HTMLElement).style.opacity = "0.65";
      }}
      aria-label="Toggle Theme"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun size={14} /> : <Moon size={14} />}
    </button>
  );
};

export default ThemeSwitcher;
