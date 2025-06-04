import { useTranslations } from "next-intl";
import NowReading from "../components/currently/NowReading";
import WorkingOn from "../components/currently/WorkingOn";

export default function Currently() {
  const t = useTranslations("Now");

  return (
    <section className="bg-light text-darker min-h-screen flex flex-col justify-center items-center p-8 md:p-12">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-darker leading-tight text-center">
          {t("now-title")}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-4 md:mb-6 text-center max-w-3xl mx-auto">
          {t("now-description")}
        </p>
        <NowReading />
        <WorkingOn />
      </div>
    </section>
  );
}
