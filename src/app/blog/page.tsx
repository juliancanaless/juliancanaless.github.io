import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog",
  description: "Writing, notes, and project reflections from Julian Canales.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main className="section-shell section-gap">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm text-gb-orange-l hover:text-gb-orange-l">
          ← Back home
        </Link>
        <div className="mt-6 glass-card p-8 sm:p-10">
          <p className="pill">Blog</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gb-fg0 sm:text-5xl">
            Writing, notes, and project reflections
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-gb-fg2">
            This is where I can think in public a bit more — project breakdowns, career notes,
            things I&apos;m learning, and whatever else feels worth writing down.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          {posts.map((post) => (
            <article key={post.slug} className="glass-card p-6 sm:p-8">
              <p className="text-sm text-gb-fg4">{post.date}</p>
              <h2 className="mt-2 text-2xl font-semibold text-gb-fg0">{post.title}</h2>
              <p className="mt-3 text-base leading-7 text-gb-fg2">{post.description}</p>
              {post.tags?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-gb-orange/20 bg-gb-orange/10 px-3 py-1 text-xs font-medium text-gb-orange-l">
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
              <Link
                href={`/blog/${post.slug}`}
                className="mt-6 inline-flex rounded-full border border-gb-fg4/20 px-4 py-2 text-sm font-medium text-gb-fg0 hover:bg-gb-fg4/10"
              >
                Read post
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
