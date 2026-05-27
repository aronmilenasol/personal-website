import Link from "next/link";
import { getAllPostsMeta } from "../../../../lib/blog";
import { getTranslations } from "next-intl/server";
import { Calendar } from "lucide-react";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function Blog({ params }: Props) {
  const { locale } = await params;
  const posts = await getAllPostsMeta(locale);
  const t = await getTranslations("Blog");

  return (
    <section className="bg-light text-dark px-6 py-16 md:py-20 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-12 fade-in-up fade-in-up-1">
          <p className="text-xs opacity-40 mb-2 font-normal">
            <span className="text-[var(--color-accent)] font-bold">milena@portfolio</span>
            <span className="opacity-60">:~ $ </span>
            <span className="opacity-70">ls blog/</span>
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight section-title">
            {t("title")}
          </h1>
          <p className="text-sm opacity-60 mt-4">{t("description")}</p>
        </div>

        {/* Posts */}
        <div className="space-y-5">
          {posts.length === 0 && (
            <div className="terminal-card bg-lighter rounded-md p-8 text-center opacity-60">
              <p className="text-sm">No posts yet. Check back soon.</p>
            </div>
          )}
          {posts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/${locale}/blog/${post.slug}`}
              className="block group"
            >
              <div
                className={`fade-in-up fade-in-up-${Math.min(index + 2, 4)} terminal-card bg-lighter rounded-md p-6 md:p-8`}
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-base font-semibold leading-snug group-hover:text-[var(--color-accent)] transition-colors">
                    {post.title}
                  </h2>
                  <span className="text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity text-lg flex-shrink-0">
                    →
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs opacity-50 mt-2 mb-3">
                  <Calendar size={11} />
                  {post.date}
                </div>
                {post.description && (
                  <p className="text-sm opacity-70 leading-relaxed">{post.description}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
