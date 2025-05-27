import { useTranslations } from "next-intl";

const paragraphClasses =
  "text-base sm:text-lg md:text-xl leading-relaxed text-darker";
const titleClasses =
  "font-bold text-2xl sm:text-3xl md:text-4xl mb-4 text-darker flex items-center";
const educationAreaClasses = "font-bold text-lg sm:text-xl text-darker mb-2";
const institutionClasses = "font-bold text-2xl sm:text-2xl text-darker mt-4";
const timelineClasses = "italic text-base sm:text-lg text-darker";

const ResumeEducation = () => {
  const t = useTranslations("Resume");
  return (
    <div className="mt-6 sm:mt-10">
      <h3 className={titleClasses}>{t("education-title")}</h3>
      <div className="bg-lighter rounded-2xl mb-4 sm:mb-6">
        {/* UTN */}
        <p className={institutionClasses}>{t("education1-institution")}</p>
        <p className={educationAreaClasses}>{t("education1-area")}</p>
        <p className={timelineClasses}>{t("education1-timeline")}</p>
        <p className={paragraphClasses}>{t("education1-description")}</p>
      </div>
    </div>
  );
};

export default ResumeEducation;
