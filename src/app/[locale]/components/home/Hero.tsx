import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("Homepage");

  return (
    <section className="bg-light text-dark flex items-center justify-center px-6 py-24 transition-colors duration-300">
      <div className="max-w-3xl w-full bg-lighter rounded-2xl border border-dark/20 px-8 py-16 flex flex-col items-center text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
          {t("welcome")}
        </h1>

        <h2 className="text-2xl sm:text-3xl font-medium opacity-90">
          {t("name")}
        </h2>

        <h3 className="text-lg sm:text-xl opacity-70 max-w-xl">{t("role")}</h3>
      </div>
    </section>
  );
};

export default Hero;
