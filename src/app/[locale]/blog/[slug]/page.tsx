import { getPost } from "../../../../../lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, ArrowLeft } from "lucide-react";

interface Params {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export default async function BlogPost({ params }: Params) {
  const { locale, slug } = await params;

  try {
    const post = await getPost(locale, slug);
    return (
      <section className="bg-light text-dark px-6 py-16 md:py-20 transition-colors duration-300">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 fade-in-up fade-in-up-1">
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center gap-2 text-sm opacity-50 hover:opacity-100 hover:text-[var(--color-accent)] transition-all link-retro"
            >
              <ArrowLeft size={14} />
              Back to blog
            </Link>
          </div>

          {/* Article */}
          <article className="fade-in-up fade-in-up-2 terminal-card bg-lighter rounded-md p-8 md:p-12">
            {/* Date */}
            <div className="flex items-center gap-1.5 text-xs opacity-50 mb-4">
              <Calendar size={11} />
              {post.date}
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8 leading-snug">
              {post.title}
            </h1>

            <div className="border-t border-dark/10 mb-8" />
            <div
              className="prose prose-sm max-w-none
                [&_h1]:font-semibold [&_h1]:text-xl [&_h1]:tracking-tight [&_h1]:mt-8 [&_h1]:mb-4
                [&_h2]:font-semibold [&_h2]:text-lg [&_h2]:tracking-tight [&_h2]:mt-6 [&_h2]:mb-3
                [&_h3]:font-medium [&_h3]:mt-5 [&_h3]:mb-2
                [&_p]:text-sm [&_p]:leading-loose [&_p]:opacity-80 [&_p]:mb-4
                [&_ul]:space-y-1.5 [&_ul]:text-sm [&_ul]:opacity-75
                [&_li]:flex [&_li]:gap-2 [&_li]:before:content-['›'] [&_li]:before:text-[var(--color-accent)] [&_li]:before:flex-shrink-0
                [&_code]:text-xs [&_code]:bg-dark/10 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded-sm [&_code]:font-mono
                [&_pre]:bg-dark/10 [&_pre]:p-4 [&_pre]:rounded-md [&_pre]:overflow-x-auto [&_pre]:text-xs [&_pre]:my-4
                [&_a]:text-[var(--color-accent)] [&_a]:underline-offset-4 [&_a]:opacity-80 hover:[&_a]:opacity-100
                [&_blockquote]:border-l-2 [&_blockquote]:border-[var(--color-accent)] [&_blockquote]:pl-4 [&_blockquote]:opacity-70 [&_blockquote]:italic"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
          </article>
        </div>
      </section>
    );
  } catch {
    return notFound();
  }
}
