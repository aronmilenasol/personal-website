import { useTranslations } from "next-intl";

const technologiesClasses =
  "text-center text-lg md:text-xl leading-relaxed mb-4";

const AboutWebsite = () => {
  const t = useTranslations("About");
  return (
    <div className="text-darker bg-lighter mt-6 md:mt-8 max-w-5xl w-full rounded-3xl shadow-2xl overflow-hidden mb-8">
      <div className="p-8 md:p-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-center">
          {t("about-website-title")}
        </h2>
        <div className="text-center space-y-4">
          <p className={technologiesClasses}>
            {t("about-website-technologies")}
          </p>
          <div className="mt-8 flex flex-col items-center">
            <a
              className="text-center bg-dark hover:bg-darker text-lighter font-semibold py-3 px-6 rounded-full shadow-md transition-colors duration-300 w-full md:w-auto"
              href="https://github.com/aronmilenait/personal-website"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("about-website-repository")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWebsite;
