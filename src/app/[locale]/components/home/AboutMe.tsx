import { useTranslations } from "next-intl";

const AboutMe = () => {
  const t = useTranslations("About");

  return (
    <section className="bg-light text-dark">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-medium mb-12 text-center tracking-tight">
          {t("about-title")}
        </h1>
        <div className="bg-lighter border border-dark/20 p-8 md:p-10 rounded-md space-y-6">
          <p className="text-base leading-relaxed opacity-90">
            {t("introduction")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
