import { useTranslations } from "next-intl";
import { Star } from "lucide-react";

const paragraphClasses =
  "text-base sm:text-lg md:text-xl leading-relaxed text-pink-800";
const titleClasses =
  "font-bold text-2xl sm:text-3xl md:text-4xl mb-4 text-pink-600 flex items-center";
const jobTitleClasses = "font-bold text-xl sm:text-2xl text-pink-500 mt-4";
const jobRoleClasses = "font-bold text-lg sm:text-xl text-pink-500 mb-2";
const timelineClasses = "italic text-base sm:text-lg text-pink-500";

const ResumeEducation = () => {
  const t = useTranslations("Resume");
  return (
    <div className="mt-6 sm:mt-10">
      <h3 className={titleClasses}>
        <Star className="mr-2 text-pink-500 w-6 h-6 sm:w-8 sm:h-8" />{" "}
        {t("education-title")}
      </h3>
      <div className="bg-pink-50 p-4 sm:p-6 rounded-2xl mb-4 sm:mb-6 border-2 border-pink-200">
        {/* OSSU */}
        <p className={jobTitleClasses}>{t("education2-institution")}</p>
        <p className={jobRoleClasses}>{t("education2-area")}</p>
        <p className={timelineClasses}>{t("education2-timeline")}</p>
        <p className={paragraphClasses}>{t("education2-description")}</p>
      </div>
      <div className="bg-pink-50 p-4 sm:p-6 rounded-2xl mb-4 sm:mb-6 border-2 border-pink-200">
        {/* UTN */}
        <p className={jobTitleClasses}>{t("education1-institution")}</p>
        <p className={jobRoleClasses}>{t("education1-area")}</p>
        <p className={timelineClasses}>{t("education1-timeline")}</p>
        <p className={paragraphClasses}>{t("education1-description")}</p>
      </div>
    </div>
  );
};

export default ResumeEducation;
