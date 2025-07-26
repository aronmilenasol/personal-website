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
    { label: t("about"), href: "/about" },
    { label: t("projects"), href: "/projects" },
    { label: t("resume"), href: "/resume" },
    { label: t("blog"), href: "/blog" },
  ];

  const navLinkClasses =
    "font-bold text-xl mx-4 text-light hover:text-lighter transition duration-300 relative group";

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-dark text-ligher shadow-lg">
      <nav className="container mx-auto p-4">
        <div className="md:hidden flex justify-end">
          <button
            className="text-lighter focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <FaTimes className="h-8 w-8" />
            ) : (
              <FaBars className="h-8 w-8" />
            )}
          </button>
        </div>
        <ul
          className={`flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:justify-between ${
            menuOpen ? "block" : "hidden"
          } md:flex`}
        >
          <li className="md:flex-none">
            <Link
              href="/"
              locale={locale}
              className="text-3xl font-extrabold text-light hover:text-lighter transition-all duration-300 transform hover:scale-105 drop-shadow-xl flex items-center"
            >
              <span className="relative">
                Milena Sol Aron
                <span className="absolute -top-1 -right-6">
                  <FaLaptopCode className="h-4 w-4" />
                </span>
              </span>
            </Link>
          </li>
          <div className="flex flex-col md:flex-row justify-center items-center space-x-2 md:space-x-4 mx-auto">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  locale={locale}
                  className={navLinkClasses}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </div>
          <li className="md:flex-none">
            <button
              onClick={() => changeLocale(locale === "en" ? "es" : "en")}
              className="bg-light text-dark font-bold py-2 px-4 rounded-full shadow-md hover:bg-lighter hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              {locale === "en" ? "Español" : "English"}
            </button>
          </li>
          <li className="md:flex-none">
            <ThemeSwitcher />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
