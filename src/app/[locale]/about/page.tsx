import { useTranslations } from "next-intl";
import AboutWebsite from "../components/AboutWebsite";

export default function About() {
  const t = useTranslations("About");
  const paragraphClasses =
    "text-left text-lg md:text-xl leading-relaxed mb-4 text-pink-800";

  return (
    <section className="min-h-screen bg-gradient-to-r from-pink-100 to-pink-200 text-pink-800 flex items-center justify-center flex-col p-4 md:p-8">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-pink-700 leading-tight text-center">
            {t("about-title")}
          </h1>
          <div className="text-center space-y-4">
            <p className={paragraphClasses}>{t("introduction")}</p>
            <p className={paragraphClasses}>{t("website")}</p>
            <p className={paragraphClasses}>{t("carrerait")}</p>
            <p className={paragraphClasses}>{t("studying")}</p>
          </div>
        </div>
      </div>
      <AboutWebsite />
    </section>
  );
}
