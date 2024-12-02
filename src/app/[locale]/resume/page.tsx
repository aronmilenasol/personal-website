import { useTranslations } from "next-intl";
import { Star, Sparkles } from "lucide-react";
import ResumeAbout from "../components/ResumeAbout";
import ResumeExperience from "../components/ResumeExperience";
import ResumeEducation from "../components/ResumeEducation";
import ResumeSkills from "../components/ResumeSkills";
import ResumeLanguages from "../components/ResumeLanguages";

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
        <ResumeAbout />
        <ResumeExperience />
        <ResumeEducation />
        <ResumeSkills />
        <ResumeLanguages />
      </div>
    </section>
  );
}
