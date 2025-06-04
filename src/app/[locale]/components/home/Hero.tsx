import { useTranslations } from "next-intl";
import Image from "next/image";
import homeImage from "@/app/[locale]/assets/home-image.png";

const Hero = () => {
  const t = useTranslations("Homepage");

  return (
    <section className="bg-light text-dark flex items-center justify-center px-4 py-10 md:py-16 transition-colors duration-300">
      <div className="relative max-w-5xl w-full bg-lighter rounded-3xl shadow-2xl overflow-hidden px-6 py-10 md:px-16 md:py-14 flex flex-col md:flex-row items-center gap-10">
        <div className="w-48 h-72 relative shrink-0 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={homeImage}
            alt="A drawing of me, working with my two cats"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-heading leading-tight tracking-tight drop-shadow-md text-balance">
            {t("welcome")}
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary drop-shadow-sm">
            {t("name")}
          </h2>
          <h3 className="text-xl sm:text-2xl font-medium text-muted">
            {t("role")}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;
