import { useTranslations } from "next-intl";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function About() {
  const t = useTranslations("About");
  const paragraphClasses = "text-lg md:text-xl leading-relaxed pb-2";

  return (
    <section className="font-lato flex flex-col justify-center items-center p-4 min-h-screen bg-gradient-to-r from-orange-50 to-pink-100 text-pink-800">
      <h1 className="font-bold text-center text-4xl md:text-6xl m-8">
        {t("about-title")}
      </h1>
      <div className="space-y-6 max-w-2xl bg-white p-6 rounded-lg shadow-lg">
        <p className={paragraphClasses}>{t("introduction")}</p>
        <p className={paragraphClasses}>{t("website")}</p>
        <p className={paragraphClasses}>{t("carrerait")}</p>
        <p className={paragraphClasses}>{t("studying")}</p>
      </div>
      <div className="max-w-md mx-auto bg-pink-100 border-4 border-pink-300 rounded-lg p-6 shadow-lg relative">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-pink-600 mb-4 font-cursive">
            ♥ {t("contact")} ♥
          </h2>
          <p className="text-pink-800 mb-6">{t("contact-description")} ✨</p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/milenasaron/"
              className="text-pink-600 hover:text-pink-800 transition-colors"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="https://github.com/aronmilenait"
              className="text-pink-600 hover:text-pink-800 transition-colors"
            >
              <FaGithub size={32} />
            </a>
            <a
              href="mailto:aronmilena.it@gmail.com"
              className="text-pink-600 hover:text-pink-800 transition-colors"
            >
              <MdEmail size={32} />
            </a>
          </div>
        </div>
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-pink-300 rounded-full flex items-center justify-center">
          <span className="text-white text-xl">★</span>
        </div>
        <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-pink-300 rounded-full flex items-center justify-center">
          <span className="text-white text-xl">★</span>
        </div>
      </div>
    </section>
  );
}
