"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <div className="p-2">
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        type="button"
        className="bg-dark text-light font-bold py-2 px-4 rounded-full shadow-md hover:bg-darker hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
        aria-label="Toggle Theme"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
