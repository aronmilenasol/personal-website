import { useTranslations } from "next-intl";
import { Heart, Star, Sparkles } from "lucide-react";

export default function Resume() {
  const t = useTranslations("Resume");
  const paragraphClasses =
    "text-base sm:text-lg md:text-xl leading-relaxed text-pink-800";
  const titleClasses =
    "font-bold text-2xl sm:text-3xl md:text-4xl mb-4 text-pink-600 flex items-center";
  const jobTitleClasses = "font-bold text-xl sm:text-2xl text-pink-500 mt-4";
  const jobRoleClasses = "font-bold text-lg sm:text-xl text-pink-500 mb-2";
  const timelineClasses = "italic text-base sm:text-lg text-pink-500";
  const responsibilityClasses =
    "font-medium text-base sm:text-lg mt-2 text-pink-700";

  return (
    <section className="bg-gradient-to-r from-orange-50 to-pink-100 font-lato flex flex-col justify-center items-center p-4 sm:p-8 text-pink-900 min-h-screen">
      <h1 className="font-bold text-3xl sm:text-5xl md:text-7xl text-pink-600 text-center mb-6 sm:mb-12 font-cursive">
        {t("resume-title")}
      </h1>
      <div className="space-y-6 sm:space-y-8 w-full max-w-4xl mx-auto bg-white p-4 sm:p-8 md:p-10 rounded-3xl shadow-2xl border-4 border-pink-300">
        {/* About */}
        <div className="bg-pink-100 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-pink-200">
          <h2 className={titleClasses}>
            <Heart className="mr-2 text-pink-500 w-6 h-6 sm:w-8 sm:h-8" />{" "}
            {t("about-title")}
          </h2>
          <p className={paragraphClasses}>{t("about-1")}</p>
          <p className={`${paragraphClasses} mt-2`}>{t("about-2")}</p>
        </div>

        {/* Work Experience */}
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
              {[
                "job2-responsibility-1",
                "job2-responsibility-2",
                "job2-responsibility-3",
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

          {/* Full Stack Developer at Bigger */}
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

        {/* Education */}
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

        {/* Languages */}
        <div className="mt-6 sm:mt-10">
          <h4 className={titleClasses}>
            <Star className="mr-2 text-pink-500 w-6 h-6 sm:w-8 sm:h-8" />{" "}
            {t("languages-title")}
          </h4>
          <div className="bg-pink-50 p-4 sm:p-6 rounded-2xl border-2 border-pink-200">
            <ul className="list-none mt-2">
              {["english", "spanish"].map((lang, index) => (
                <li
                  key={index}
                  className={`${responsibilityClasses} flex items-center mb-2`}
                >
                  <Sparkles className="mr-2 text-pink-400 w-4 h-4 sm:w-5 sm:h-5" />
                  <span>{t(lang)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
