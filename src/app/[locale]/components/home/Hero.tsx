"use client";

import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Hero = () => {
  const t = useTranslations("Homepage");

  return (
    <section
      className="scanlines px-6 py-20 md:py-28 transition-colors duration-300"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="fade-in-up fade-in-up-1 flex items-center gap-1.5 mb-1">
          <span className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
          <span className="w-3 h-3 rounded-full" style={{ background: "#FFBD2E" }} />
          <span className="w-3 h-3 rounded-full" style={{ background: "#28C840" }} />
          <span className="ml-3 text-xs" style={{ color: "var(--color-faint)", letterSpacing: "0.05em" }}>
            milena@portfolio ~ bash
          </span>
        </div>
        <div className="terminal-card rounded-lg p-8 md:p-12 space-y-6">
          <div className="fade-in-up fade-in-up-1 space-y-2">
            <p className="text-xs tracking-widest uppercase" style={{ color: "var(--color-faint)" }}>
              {t("welcome")}
            </p>
            <p className="text-xs" style={{ color: "var(--color-faint)" }}>
              <span style={{ color: "var(--color-accent)", fontWeight: 700 }}>milena@portfolio</span>
              <span style={{ color: "var(--color-faint)" }}>:~</span>
              <span style={{ color: "var(--color-accent-2)" }}> $ </span>
              <span>whoami</span>
            </p>
          </div>
          <div className="fade-in-up fade-in-up-2">
            <h1
              className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight cursor-blink"
              style={{ color: "var(--color-text)" }}
            >
              Milena Sol Aron
            </h1>
          </div>
          <div className="fade-in-up fade-in-up-3 space-y-2">
            <p className="text-xs" style={{ color: "var(--color-faint)" }}>
              <span style={{ color: "var(--color-accent)", fontWeight: 700 }}>milena@portfolio</span>
              <span style={{ color: "var(--color-faint)" }}>:~</span>
              <span style={{ color: "var(--color-accent-2)" }}> $ </span>
              <span>cat role.txt</span>
            </p>
            <h2
              className="text-xl font-medium"
              style={{ color: "var(--color-text)" }}
            >
              {t("role")}
            </h2>
          </div>
          <div
            className="fade-in-up fade-in-up-3 border-t"
            style={{ borderColor: "var(--color-border)" }}
          />
          <div className="fade-in-up fade-in-up-4 flex flex-wrap items-center gap-6 text-sm">
            <a
              href="https://github.com/aronmilenasol"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors link-retro"
              style={{ color: "var(--color-muted)" }}
              aria-label="GitHub"
            >
              <FaGithub size={15} />
              <span>github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/milenasaron/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors link-retro"
              style={{ color: "var(--color-muted)" }}
              aria-label="LinkedIn"
            >
              <FaLinkedin size={15} />
              <span>linkedin</span>
            </a>
            <a
              href="mailto:aronmilena.it@gmail.com"
              className="flex items-center gap-2 transition-colors link-retro"
              style={{ color: "var(--color-muted)" }}
              aria-label="Email"
            >
              <FiMail size={15} />
              <span>aronmilena.it@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
