import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");
  const paragraphClasses =
    "text-left text-lg md:text-xl leading-relaxed pb-2 text-pink-800";

  return (
    <section className="font-lato flex flex-col justify-center items-center p-4 min-h-screen bg-gradient-to-r from-orange-50 to-pink-100 text-pink-800">
      <h1 className="font-bold text-center text-4xl md:text-6xl m-8 text-pink-600">
        {t("about-title")}
      </h1>
      <div className="max-w-2xl mx-auto bg-pink-100 border-4 border-pink-300 rounded-lg p-6 shadow-lg relative mb-8">
        <div className="text-center space-y-4">
          <p className={paragraphClasses}>{t("introduction")}</p>
          <p className={paragraphClasses}>{t("website")}</p>
          <p className={paragraphClasses}>{t("carrerait")}</p>
          <p className={paragraphClasses}>{t("studying")}</p>
        </div>
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-pink-300 rounded-full flex items-center justify-center">
          <span className="text-white text-xl">♥</span>
        </div>
        <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-pink-300 rounded-full flex items-center justify-center">
          <span className="text-white text-xl">♥</span>
        </div>
      </div>
    </section>
  );
}
