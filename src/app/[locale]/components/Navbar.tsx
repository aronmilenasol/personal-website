"use client";

import { useState } from "react";
import { FaBars, FaTimes, FaHeart } from "react-icons/fa";
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
  "font-bold text-xl mx-4 text-white hover:text-pink-200 transition duration-300 relative group";

const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu = () => {
  setMenuOpen(!menuOpen);
};

return (
  <header className="bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 text-white shadow-lg">
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
            className="text-3xl font-extrabold text-white hover:text-pink-200 transition-transform transform hover:scale-105 drop-shadow-xl"
          >
            <span className="relative">
              Milena Sol Aron
              <span className="absolute -top-2 -right-4 text-pink-200 animate-bounce">
                <FaHeart />
              </span>
            </span>
          </Link>
        </li>
        <div className="flex flex-col md:flex-row justify-center items-center space-x-2 md:space-x-4 mx-auto">
          <li>
            <Link href="/about" locale={locale} className={navLinkClasses}>
              {t("about")}
              <span className="absolute inset-x-0 bottom-0 h-1 bg-pink-200 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
          </li>
          <li>
            <Link href="/resume" locale={locale} className={navLinkClasses}>
              {t("resume")}
              <span className="absolute inset-x-0 bottom-0 h-1 bg-pink-200 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
          </li>
        </div>
        <li className="md:flex-none">
          <button
            onClick={() => changeLocale(locale === "en" ? "es" : "en")}
            className="bg-white text-pink-500 font-bold py-2 px-4 rounded-full shadow-md hover:bg-pink-100 hover:text-pink-600 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 border-2 border-pink-300"
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
