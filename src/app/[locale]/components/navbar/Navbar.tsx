"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "navbar-scrolled shadow-md" : ""}`}
      style={{
        backgroundColor: "var(--color-nav-bg)",
        color: "var(--color-nav-text)",
        borderBottom: "1px solid var(--color-nav-border)",
      }}
    >
      <nav className="max-w-5xl mx-auto px-6 py-4">
        <div className="md:hidden flex items-center justify-between">
          <Link
            href="/"
            locale={locale}
            className="text-sm font-semibold tracking-widest uppercase transition-opacity"
            style={{ color: "var(--color-nav-text)" }}
          >
            <span style={{ color: "var(--color-accent)" }}>~/</span>milena.sol
          </Link>
          <button
            style={{ color: "var(--color-nav-text)" }}
            className="p-1 transition-colors hover:opacity-80"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>

        <ul
          className={`flex-col md:flex-row items-center gap-6 md:gap-8 ${menuOpen ? "flex mt-4 md:mt-0" : "hidden"
            } md:flex`}
        >
          <li className="hidden md:block mr-auto">
            <Link
              href="/"
              locale={locale}
              className="text-sm font-semibold tracking-widest uppercase transition-opacity hover:opacity-80 flex items-center gap-1"
              style={{ color: "var(--color-nav-text)" }}
            >
              <span style={{ color: "var(--color-accent)", fontWeight: 700 }}>~/</span>
              milena.sol
            </Link>
          </li>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                locale={locale}
                className="text-sm tracking-wide transition-colors link-retro"
                style={{
                  color: isActive(link.href)
                    ? "var(--color-accent)"
                    : "var(--color-nav-text)",
                  opacity: isActive(link.href) ? 1 : 0.75,
                }}
              >
                {isActive(link.href) && (
                  <span style={{ color: "var(--color-accent)", marginRight: "4px" }}>›</span>
                )}
                {link.label}
              </Link>
            </li>
          ))}
          <li className="hidden md:block h-4 w-px" style={{ background: "var(--color-nav-border)" }} />
          <li>
            <button
              onClick={() => changeLocale(locale === "en" ? "es" : "en")}
              className="text-xs tracking-widest transition-all rounded-sm px-2 py-1 hover:opacity-100"
              style={{
                color: "var(--color-nav-text)",
                opacity: 0.6,
                border: "1px solid var(--color-nav-border)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--color-accent)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--color-accent)";
                (e.currentTarget as HTMLElement).style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--color-nav-text)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--color-nav-border)";
                (e.currentTarget as HTMLElement).style.opacity = "0.6";
              }}
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
