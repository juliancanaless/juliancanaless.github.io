"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

type Project = {
  title: string;
  githubUrl?: string;
  blogUrl?: string;
  image: string;
  imageAlt: string;
  motive: string;
  tags: string[];
  scope: string[];
  results: string[];
  lessons: string[];
};

export function ProjectShowcase({ projects }: { projects: Project[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const close = useCallback(() => setSelectedIndex(null), []);

  useEffect(() => {
    if (selectedIndex === null) return;

    document.body.style.overflow = "hidden";
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [selectedIndex, close]);

  const active = selectedIndex !== null ? projects[selectedIndex] : null;

  return (
    <div>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {projects.map((project, i) => (
          <div
            key={project.title}
            role="button"
            tabIndex={0}
            onClick={() => setSelectedIndex(i)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedIndex(i);
              }
            }}
            className="glass-card cursor-pointer overflow-hidden transition hover:border-gb-orange-l/30"
          >
            <div className="relative aspect-[16/10] overflow-hidden border-b border-gb-fg4/15">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                unoptimized={project.image.endsWith(".svg") || project.image.endsWith(".gif")}
                className="pointer-events-none object-cover transition duration-300 hover:scale-[1.02]"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-gb-bg0 via-gb-bg0/60 to-transparent p-5">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-gb-orange/20 bg-gb-orange/10 px-3 py-1 text-xs font-medium text-gb-orange-l"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-gb-fg0">{project.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gb-fg2">{project.motive}</p>
                </div>
                <span className="rounded-full border border-gb-fg4/20 px-3 py-2 text-xs font-medium text-gb-fg0/80">
                  Open
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="absolute inset-0 bg-gb-bg0/80 backdrop-blur-sm" />
          <div className="glass-card relative z-10 max-h-[90vh] w-full max-w-5xl overflow-y-auto">
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gb-fg4/15 bg-gb-bg0/80 px-5 py-4 backdrop-blur sm:px-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gb-orange-l">Project</p>
                <h3 className="mt-1 text-2xl font-semibold text-gb-fg0 sm:text-3xl">{active.title}</h3>
              </div>
              <div className="flex items-center gap-3">
                {active.githubUrl ? (
                  <a
                    href={active.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-gb-fg4/20 px-4 py-2 text-sm font-medium text-gb-fg0 hover:bg-gb-fg4/10"
                  >
                    GitHub ↗
                  </a>
                ) : null}
                {active.blogUrl ? (
                  <a
                    href={active.blogUrl}
                    className="rounded-full border border-gb-fg4/20 px-4 py-2 text-sm font-medium text-gb-fg0 hover:bg-gb-fg4/10"
                  >
                    Read post ↗
                  </a>
                ) : null}
                <button
                  type="button"
                  onClick={close}
                  className="rounded-full border border-gb-fg4/20 px-4 py-2 text-sm font-medium text-gb-fg0 hover:bg-gb-fg4/10"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="grid gap-8 p-5 sm:p-6 lg:grid-cols-[1fr_1.1fr]">
              <div>
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-gb-fg4/15">
                  <Image src={active.image} alt={active.imageAlt} fill unoptimized={active.image.endsWith(".svg") || active.image.endsWith(".gif")} className="object-cover" />
                </div>
                <p className="mt-5 text-base leading-7 text-gb-fg2">{active.motive}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {active.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-gb-orange/20 bg-gb-orange/10 px-3 py-1 text-xs font-medium text-gb-orange-l"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-6">
                <DetailSection title="What I built" items={active.scope} />
                <DetailSection title="How it went" items={active.results} />
                <DetailSection title="Takeaways" items={active.lessons} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function DetailSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-gb-orange-l">{title}</h4>
      <ul className="mt-3 space-y-3 text-sm leading-6 text-gb-fg2 sm:text-base">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gb-orange-l" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
