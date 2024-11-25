import { useTranslations } from "next-intl";
import { Heart, Star, Sparkles } from "lucide-react";

export default function Resume() {
  const t = useTranslations("Resume");
  const paragraphClasses = "text-lg md:text-xl leading-relaxed text-pink-800";
  const titleClasses =
    "font-bold text-3xl md:text-4xl mb-4 text-pink-600 flex items-center";
  const jobTitleClasses = "font-bold text-2xl md:text-2xl text-pink-500 mt-4";
  const jobRoleClasses = "font-bold text-xl md:text-xl text-pink-500 mb-2";
  const timelineClasses = "italic text-lg md:text-lg text-pink-500";
  const responsibilityClasses =
    "font-medium text-lg md:text-lg mt-2 text-pink-700";

  return (
    <section className="bg-gradient-to-r from-orange-50 to-pink-100 font-lato flex flex-col justify-center items-center p-8 text-pink-900 min-h-screen">
      <h1 className="font-bold text-5xl md:text-7xl text-pink-600 text-center mb-12 font-cursive">
        {t("resume-title")}
      </h1>
      <div className="space-y-8 max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-2xl border-4 border-pink-300">
        {/* About */}
        <div className="bg-pink-100 p-8 rounded-2xl border-2 border-pink-200">
          <h2 className={titleClasses}>
            <Heart className="mr-2 text-pink-500" /> {t("about-title")}
          </h2>
          <p className={paragraphClasses}>{t("about-1")}</p>
          <p className={paragraphClasses}>{t("about-2")}</p>
          <p className={paragraphClasses}>{t("about-3")}</p>
        </div>

        {/* Work Experience */}
        <div className="mt-10">
          <h2 className={titleClasses}>
            <Star className="mr-2 text-pink-500" /> {t("experience-title")}
          </h2>
          {/* Founder at CarreraIT */}
          <div className="bg-pink-50 p-6 rounded-2xl mb-8 border-2 border-pink-200">
            <p className={jobTitleClasses}>{t("job3-company")}</p>
            <p className={jobRoleClasses}>{t("job3-role")}</p>
            <p className={timelineClasses}>{t("job3-timeline")}</p>
            <p className="font-medium text-lg md:text-xl mt-4 text-pink-600">
              {t("job3-clarification")}
            </p>
            <ul className="list-none ml-4 mt-4">
              {[
                "job3-responsibility-1",
                "job3-responsibility-2",
                "job3-responsibility-3",
                "job3-responsibility-4",
              ].map((resp, index) => (
                <li
                  key={index}
                  className={`${responsibilityClasses} flex items-start`}
                >
                  <Sparkles className="mr-2 text-pink-400 flex-shrink-0 mt-1" />
                  <span>{t(resp)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Full Stack Developer at bitbug */}
          <div className="bg-pink-50 p-6 rounded-2xl mb-8 border-2 border-pink-200">
            <p className={jobTitleClasses}>{t("job2-company")}</p>
            <p className={jobRoleClasses}>{t("job2-role")}</p>
            <p className={timelineClasses}>{t("job2-timeline")}</p>
            <ul className="list-none ml-4 mt-4">
              {[
                "job2-responsibility-1",
                "job2-responsibility-2",
                "job2-responsibility-3",
              ].map((resp, index) => (
                <li
                  key={index}
                  className={`${responsibilityClasses} flex items-start`}
                >
                  <Sparkles className="mr-2 text-pink-400 flex-shrink-0 mt-1" />
                  <span>{t(resp)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Front End Developer at Bigger */}
          <div className="bg-pink-50 p-6 rounded-2xl mb-8 border-2 border-pink-200">
            <p className={jobTitleClasses}>{t("job1-company")}</p>
            <p className={jobRoleClasses}>{t("job1-role")}</p>
            <p className={timelineClasses}>{t("job1-timeline")}</p>
            <ul className="list-none ml-4 mt-4">
              {[
                "job1-responsibility-1",
                "job1-responsibility-2",
                "job1-responsibility-3",
                "job1-responsibility-4",
              ].map((resp, index) => (
                <li
                  key={index}
                  className={`${responsibilityClasses} flex items-start`}
                >
                  <Sparkles className="mr-2 text-pink-400 flex-shrink-0 mt-1" />
                  <span>{t(resp)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="mt-10">
          <h3 className={titleClasses}>
            <Star className="mr-2 text-pink-500" /> {t("education-title")}
          </h3>
          <div className="bg-pink-50 p-6 rounded-2xl mb-6 border-2 border-pink-200">
            {/* OSSU */}
            <p className={jobTitleClasses}>{t("education2-institution")}</p>
            <p className={jobRoleClasses}>{t("education2-area")}</p>
            <p className={timelineClasses}>{t("education2-timeline")}</p>
          </div>
          <div className="bg-pink-50 p-6 rounded-2xl mb-6 border-2 border-pink-200">
            {/* UTN */}
            <p className={jobTitleClasses}>{t("education1-institution")}</p>
            <p className={jobRoleClasses}>{t("education1-area")}</p>
            <p className={timelineClasses}>{t("education1-timeline")}</p>
          </div>
        </div>

        {/* Languages */}
        <div className="mt-10">
          <h4 className={titleClasses}>
            <Star className="mr-2 text-pink-500" /> {t("languages-title")}
          </h4>
          <div className="bg-pink-50 p-6 rounded-2xl border-2 border-pink-200">
            <ul className="list-none ml-4 mt-2">
              {["english", "spanish"].map((lang, index) => (
                <li
                  key={index}
                  className={`${responsibilityClasses} flex items-center`}
                >
                  <Sparkles className="mr-2 text-pink-400" />
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
