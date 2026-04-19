import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { notFound } from "next/navigation";

export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  published?: boolean;
};

export type BlogPostSummary = BlogFrontmatter & {
  slug: string;
};

const postsDirectory = path.join(process.cwd(), "content", "blog");

const readPostFilenames = (): string[] => {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".mdx"));
};

const toSlug = (fileName: string): string => fileName.replace(/\.mdx$/, "");

export const getAllPosts = (): BlogPostSummary[] =>
  readPostFilenames()
    .map((fileName) => {
      const source = fs.readFileSync(path.join(postsDirectory, fileName), "utf8");
      const { data } = matter(source);
      const frontmatter = data as BlogFrontmatter;

      return {
        slug: toSlug(fileName),
        ...frontmatter,
      };
    })
    .filter((post) => post.published !== false)
    .sort((left, right) => +new Date(right.date) - +new Date(left.date));

export const getRecentPosts = (limit = 3): BlogPostSummary[] =>
  getAllPosts().slice(0, limit);

export const getPostSlugs = (): string[] => getAllPosts().map((post) => post.slug);

export const getPostBySlug = async (slug: string) => {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    notFound();
  }

  const source = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(source);
  const frontmatter = data as BlogFrontmatter;

  const { content: compiledContent } = await compileMDX<BlogFrontmatter>({
    source: content,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  return {
    slug,
    frontmatter,
    content: compiledContent,
  };
};
