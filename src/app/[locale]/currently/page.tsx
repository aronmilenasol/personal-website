import { useTranslations } from "next-intl";
import NowReading from "../components/NowReading";

export default function Currently() {
  const t = useTranslations("Now");

  return (
    <section className="bg-gradient-to-r from-pink-100 to-pink-200 text-pink-800 font-lato min-h-screen flex flex-col justify-center items-center p-8 md:p-12">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 text-pink-700 leading-tight text-center">
          {t("now-title")}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-pink-800 mb-8 md:mb-12 text-center max-w-3xl mx-auto">
          {t("now-description")}
        </p>
        <div className="space-y-8 md:space-y-12">
          <NowReading />
        </div>
      </div>
    </section>
  );
}
