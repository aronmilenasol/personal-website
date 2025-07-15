import { useTranslations } from "next-intl";

const AboutMe = () => {
  const t = useTranslations("About");
  const paragraphClasses = "text-left text-lg md:text-xl leading-relaxed mb-4";

  return (
    <div className="mt-6 md:mt-8 max-w-5xl w-full bg-lighter text-darker rounded-3xl shadow-2xl overflow-hidden">
      <div className="max-w-5xl w-full rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-center">
            {t("about-title")}
          </h1>
          <div className="text-center space-y-4">
            <p className={paragraphClasses}>{t("introduction")}</p>
            <p className={paragraphClasses}>{t("linux")}</p>
            <p className={paragraphClasses}>{t("currently")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
