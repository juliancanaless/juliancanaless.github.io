import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getPostSlugs } from "@/lib/blog";

export const dynamicParams = false;

export const generateStaticParams = () =>
  getPostSlugs().map((slug) => ({
    slug,
  }));

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug).catch(() => null);

  if (!post) {
    return {};
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug).catch(() => null);

  if (!post) {
    notFound();
  }

  return (
    <main className="section-shell section-gap">
      <article className="mx-auto max-w-3xl">
        <Link href="/blog" className="text-sm text-gb-orange-l hover:text-gb-orange-l">
          ← Back to blog
        </Link>
        <header className="mt-6 glass-card p-8 sm:p-10">
          <p className="text-sm text-gb-fg4">{post.frontmatter.date}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-gb-fg0 sm:text-5xl">
            {post.frontmatter.title}
          </h1>
          <p className="mt-4 text-lg leading-8 text-gb-fg2">{post.frontmatter.description}</p>
          {post.frontmatter.tags?.length ? (
            <div className="mt-5 flex flex-wrap gap-2">
              {post.frontmatter.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-gb-orange/20 bg-gb-orange/10 px-3 py-1 text-xs font-medium text-gb-orange-l">
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </header>
        <div className="prose-blog glass-card mt-8 p-8 sm:p-10">{post.content}</div>
      </article>
    </main>
  );
}
