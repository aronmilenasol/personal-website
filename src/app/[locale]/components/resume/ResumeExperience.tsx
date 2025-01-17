import { useTranslations } from "next-intl";
import { Star, Sparkles } from "lucide-react";

const titleClasses =
  "font-bold text-2xl sm:text-3xl md:text-4xl mb-4 text-pink-600 flex items-center";
const jobTitleClasses = "font-bold text-xl sm:text-2xl text-pink-500 mt-4";
const jobRoleClasses = "font-bold text-lg sm:text-xl text-pink-500 mb-2";
const timelineClasses = "italic text-base sm:text-lg text-pink-500";
const responsibilityClasses =
  "font-medium text-base sm:text-lg mt-2 text-pink-700";

const ResumeExperience = () => {
  const t = useTranslations("Resume");
  return (
    <div className="mt-6 sm:mt-10">
      <h2 className={titleClasses}>
        <Star className="mr-2 text-pink-500 w-6 h-6 sm:w-8 sm:h-8" />{" "}
        {t("experience-title")}
      </h2>

      {/* Full Stack Developer at bitbug */}
      <div className="bg-pink-50 p-4 sm:p-6 rounded-2xl mb-6 sm:mb-8 border-2 border-pink-200">
        <p className={jobTitleClasses}>{t("job2-company")}</p>
        <p className={jobRoleClasses}>{t("job2-role")}</p>
        <p className={timelineClasses}>{t("job2-timeline")}</p>
        <ul className="list-none mt-3">
          {["job2-responsibility-1", "job2-responsibility-2"].map(
            (resp, index) => (
              <li
                key={index}
                className={`${responsibilityClasses} flex items-start mb-2`}
              >
                <Sparkles className="mr-2 text-pink-400 flex-shrink-0 mt-1 w-4 h-4 sm:w-5 sm:h-5" />
                <span>{t(resp)}</span>
              </li>
            ),
          )}
        </ul>
      </div>

      {/* Full Stack Developer at bigger */}

      <div className="bg-pink-50 p-4 sm:p-6 rounded-2xl mb-6 sm:mb-8 border-2 border-pink-200">
        <p className={jobTitleClasses}>{t("job1-company")}</p>
        <p className={jobRoleClasses}>{t("job1-role")}</p>
        <p className={timelineClasses}>{t("job1-timeline")}</p>
        <ul className="list-none mt-3">
          {[
            "job1-responsibility-1",
            "job1-responsibility-2",
            "job1-responsibility-3",
            "job1-responsibility-4",
            "job1-responsibility-5",
            "job1-responsibility-6",
          ].map((resp, index) => (
            <li
              key={index}
              className={`${responsibilityClasses} flex items-start mb-2`}
            >
              <Sparkles className="mr-2 text-pink-400 flex-shrink-0 mt-1 w-4 h-4 sm:w-5 sm:h-5" />
              <span>{t(resp)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResumeExperience;
