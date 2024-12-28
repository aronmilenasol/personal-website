import { useTranslations } from "next-intl";
import { BookOpen } from "lucide-react";

const NowReading = () => {
  const t = useTranslations("Now");

  return (
    <section className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border-2 border-pink-200 transition-all duration-300 hover:shadow-xl hover:border-pink-300">
      <div className="flex items-center mb-6">
        <BookOpen className="text-pink-500 w-8 h-8 sm:w-10 sm:h-10 mr-4" />
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-pink-600">
          {t("now-reading-title")}
        </h2>
      </div>
      <div className="bg-pink-100 p-4 sm:p-6 rounded-2xl">
        <p className="font-semibold text-xl sm:text-2xl md:text-3xl mb-2 text-pink-700">
          {t("book1-title")}
        </p>
        <p className="text-base sm:text-lg md:text-xl text-pink-800 italic">
          {t("book1-author")}
        </p>
      </div>
    </section>
  );
};

export default NowReading;
