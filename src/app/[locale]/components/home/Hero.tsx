import { useTranslations } from "next-intl";
import { Mail, ArrowRight } from "lucide-react";

const Hero = () => {
  const t = useTranslations("Homepage");

  return (
    <section className="bg-light text-dark text-center flex items-center justify-center p-6 md:p-12">
      <div className="max-w-6xl w-full bg-lighter rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-3xl">
        <div className="p-10 md:p-16 flex flex-col justify-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-extrabold text-heading leading-tight tracking-tight drop-shadow-lg">
              {t("welcome")}
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-heading/80 tracking-wide">
              {t("name")}
            </h2>
            <h3 className="text-2xl md:text-3xl font-medium text-heading/70">
              {t("role")}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
