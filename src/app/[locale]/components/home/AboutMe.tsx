import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const AboutMe = () => {
  const t = useTranslations("About");

  return (
    <section
      className="px-6 py-16 transition-colors duration-300"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="fade-in-up fade-in-up-1">
          <h2 className="section-title mb-6">{t("about-title")}</h2>
          <div className="terminal-card rounded-md p-8 space-y-4">
            {t("introduction")
              .split("\n\n")
              .map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base leading-loose"
                  style={{ color: "var(--color-text)" }}
                >
                  {paragraph}
                </p>
              ))}
          </div>
        </div>
        <div className="fade-in-up fade-in-up-3 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="section-title mb-6">{t("contact")}</h2>
            <div className="terminal-card rounded-md p-6 space-y-4">
              <p className="text-sm" style={{ color: "var(--color-muted)" }}>
                {t("contact-description")}
              </p>
              <a
                href="https://www.linkedin.com/in/milenasaron/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm link-retro"
                style={{ color: "var(--color-muted)" }}
              >
                <FaLinkedin size={14} />
                linkedin.com/in/milenasaron
              </a>
              <a
                href="https://github.com/aronmilenasol"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm link-retro"
                style={{ color: "var(--color-muted)" }}
              >
                <FaGithub size={14} />
                github.com/aronmilenasol
              </a>
              <a
                href="mailto:aronmilena.it@gmail.com"
                className="flex items-center gap-2 text-sm link-retro"
                style={{ color: "var(--color-muted)" }}
              >
                <FiMail size={14} />
                aronmilena.it@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h2 className="section-title mb-6">{t("about-website-title")}</h2>
            <div className="terminal-card rounded-md p-6 space-y-4">
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-muted)" }}
              >
                {t("about-website-technologies")}
              </p>
              <a
                href="https://github.com/aronmilenasol/personal-website"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm link-retro"
                style={{ color: "var(--color-muted)" }}
              >
                <FaGithub size={14} />
                {t("about-website-repository")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
