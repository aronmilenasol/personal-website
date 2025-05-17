import { useTranslations } from "next-intl";
import Image from "next/image";
import { Mail, ArrowRight } from "lucide-react";
import homeImage from "@/app/[locale]/assets/home-image.webp";

const Hero = () => {
  const t = useTranslations("Homepage");

  return (
    <section className="bg-light text-dark flex items-center justify-center p-6 md:p-12">
      <div className="max-w-6xl w-full bg-lighter rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-3xl">
        <div className="grid md:grid-cols-2 gap-10 items-center">
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
            <a
              className="group inline-flex items-center justify-center bg-base hover:bg-dark text-light font-semibold py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl w-full md:w-auto"
              href="mailto:aronmilena.it@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="w-6 h-6 mr-3" />
              <span>{t("button")}</span>
              <ArrowRight className="w-6 h-6 ml-3 transition-transform duration-300 transform group-hover:translate-x-2" />
            </a>
          </div>

          <div className="relative h-96 md:h-full overflow-hidden rounded-b-3xl md:rounded-l-none md:rounded-r-3xl shadow-inner">
            <Image
              src={homeImage}
              alt="A laptop on a table in a cozy environment."
              className="w-full h-full object-cover"
              priority={true}
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
