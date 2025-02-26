import { useTranslations } from "next-intl";
import { Briefcase, Rocket } from "lucide-react";

const CareerGoal = () => {
  const t = useTranslations("About");

  return (
    <div className="mt-6 md:mt-8 max-w-5xl w-full bg-white text-dark rounded-3xl shadow-2xl overflow-hidden">
      <div className="p-8 md:p-12">
        <h1 className="text-darker text-4xl md:text-5xl font-bold mb-8 leading-tight text-center">
          {t("goal-title")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center text-center">
            <Briefcase className="w-16 h-16 mb-4" />
            <p className="text-lg md:text-xl leading-relaxed">
              {t("goal-paragraph-1")}
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Rocket className="w-16 h-16 mb-4" />
            <p className="text-lg md:text-xl leading-relaxed">
              {t("goal-paragraph-2")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerGoal;
