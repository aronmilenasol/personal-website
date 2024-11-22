import { useTranslations } from "next-intl";

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
    </section>
  );
}
