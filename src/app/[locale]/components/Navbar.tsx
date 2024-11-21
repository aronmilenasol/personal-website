"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";

const Navbar = () => {
  const t = useTranslations("Navbar");
  const locale = useLocale();

  const changeLocale = (newLocale: string) => {
    const currentPath = window.location.pathname;
    const newPath = `/${newLocale}${currentPath.replace(`/${locale}`, "")}`;
    window.location.href = newPath;
  };

  const navLinkClasses =
    "font-bold text-xl mx-4 text-white hover:text-yellow-100 transition duration-300";

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-pink-300 via-pink-400 to-yellow-200 text-white border-b-4 border-pink-400">
      <nav className="container mx-auto p-4">
        <div className="md:hidden flex justify-end">
          <button
            className="text-white focus:outline-none"
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
              className="text-3xl font-extrabold text-white hover:text-yellow-200 transition-transform transform hover:scale-105 drop-shadow-xl"
            >
              Milena Sol Aron
            </Link>
          </li>
          <div className="flex flex-col md:flex-row justify-center items-center space-x-2 md:space-x-4 mx-auto">
            <li>
              <Link href="/about" locale={locale} className={navLinkClasses}>
                {t("about")}
              </Link>
            </li>
            <li>
              <Link href="/resume" locale={locale} className={navLinkClasses}>
                {t("resume")}
              </Link>
            </li>
          </div>
          <li className="md:flex-none">
            <button
              onClick={() => changeLocale(locale === "en" ? "es" : "en")}
              className="bg-pink-500 text-white font-bold py-2 px-4 rounded-md shadow-md hover:bg-pink-600 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              {locale === "en" ? "Español" : "English"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
