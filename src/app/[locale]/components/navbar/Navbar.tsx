"use client";

import { useState } from "react";
import { FaBars, FaTimes, FaLaptopCode } from "react-icons/fa";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const t = useTranslations("Navbar");
  const locale = useLocale();

  const changeLocale = (newLocale: string) => {
    const currentPath = window.location.pathname;
    const newPath = `/${newLocale}${currentPath.replace(`/${locale}`, "")}`;
    window.location.href = newPath;
  };

  const navLinks = [
    { label: t("projects"), href: "/projects" },
    { label: t("resume"), href: "/resume" },
    { label: t("blog"), href: "/blog" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-dark text-light border-b border-light/20">
      <nav className="max-w-5xl mx-auto px-6 py-4">
        <div className="md:hidden flex justify-end">
          <button
            className="text-light"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <ul
          className={`flex flex-col md:flex-row items-center gap-8 md:gap-10 ${
            menuOpen ? "flex" : "hidden"
          } md:flex`}
        >
          <li>
            <Link
              href="/"
              locale={locale}
              className="text-xl font-medium tracking-wide flex items-center gap-2 hover:opacity-80"
            >
              Milena Sol Aron
              <FaLaptopCode className="text-sm opacity-70" />
            </Link>
          </li>
          <div className="flex flex-col md:flex-row items-center gap-6 mx-auto">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  locale={locale}
                  className="relative opacity-90 hover:opacity-100 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-px after:bg-light after:transition-all hover:after:w-full"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </div>
          <li>
            <button
              onClick={() => changeLocale(locale === "en" ? "es" : "en")}
              className="opacity-80 hover:opacity-100 underline-offset-4 hover:underline"
            >
              {locale === "en" ? "ES" : "EN"}
            </button>
          </li>
          <li>
            <ThemeSwitcher />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
