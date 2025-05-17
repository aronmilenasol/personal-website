import { useTranslations } from "next-intl";
import { BookOpen } from "lucide-react";

const NowReading = () => {
  const t = useTranslations("Now");

  const Book = ({
    title,
    author,
  }: {
    title: string;
    author: string;
  }): JSX.Element => {
    return (
      <div className="mb-4 bg-lighter shadow-md p-4 sm:p-6 rounded-2xl">
        <p className="font-semibold text-xl sm:text-2xl md:text-3xl mb-2">
          {title}
        </p>
        <p className="text-dark sm:text-lg md:text-xl italic">{author}</p>
      </div>
    );
  };

  return (
    <section className="bg-base p-6 sm:p-8 rounded-3xl shadow-lg">
      <div className="flex items-center mb-6 text-lighter">
        <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 mr-4" />
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl">
          {t("now-reading-title")}
        </h2>
      </div>
      <Book title={t("book1-title")} author={t("book1-author")} />
      <Book title={t("book2-title")} author={t("book2-author")} />
    </section>
  );
};

export default NowReading;
