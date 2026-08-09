import Image from "next/image";
import Link from "next/link";
import { ProjectShowcase } from "@/components/project-showcase";
import {
  currentFocusItems,
  experiences,
  galleryItems,
  navItems,
  projects,
  socialLinks,
} from "@/data/site";

export default function Home() {
  return (
    <div className="pb-16">
      <header className="section-shell sticky top-0 z-50 pt-4">
        <div className="glass-card flex flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="text-lg font-semibold tracking-[0.2em] text-gb-fg0" style={{ fontFamily: "var(--font-marker)" }}>
            JC
          </Link>
          <nav className="flex flex-wrap gap-1">
            {navItems.map((item) =>
              item.href.startsWith("#") ? (
                <a key={item.href} href={item.href} className="nav-link">
                  {item.label}
                </a>
              ) : (
                <Link key={item.href} href={item.href} className="nav-link">
                  {item.label}
                </Link>
              )
            )}
            <a href={socialLinks.resume} className="nav-link">
              Resume
            </a>
          </nav>
        </div>
      </header>

      <main>        <section id="about" className="section-shell section-gap">
          <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_0.8fr]">
            <div>
              <h1 className="text-5xl font-semibold tracking-tight text-gb-fg0 sm:text-6xl">
                Welcome 🗿
              </h1>
              <div className="mt-6 max-w-3xl rounded-3xl border border-gb-fg4/15 bg-gb-bg1/60 p-6 text-lg leading-8 text-gb-fg2 sm:text-xl">
                <p className="font-semibold text-gb-fg0">My general vibe:</p>
                <ul className="mt-4 space-y-3">
                  <li className="flex gap-3"><span className="text-gb-orange-l">•</span><span>AI power user. Zellij, Pi, Claude, Zed, and too many agent windows open at once.</span></li>
                  <li className="flex gap-3"><span className="text-gb-orange-l">•</span><span>Into AI infra, full-stack stuff, and making systems robust enough to just work.</span></li>
                  <li className="flex gap-3"><span className="text-gb-orange-l">•</span><span>Quite studious and active.</span></li>
                </ul>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={socialLinks.resume}
                  className="rounded-full bg-gb-orange px-5 py-3 font-medium text-gb-bg0 hover:bg-gb-orange-l"
                >
                  View resume
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-gb-fg4/20 px-5 py-3 font-medium text-gb-fg0 hover:bg-gb-fg4/10"
                >
                  Connect on LinkedIn
                </a>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-gb-fg4/20 px-5 py-3 font-medium text-gb-fg0 hover:bg-gb-fg4/10"
                >
                  See the code
                </a>
              </div>
            </div>

            <div className="mx-auto w-full max-w-sm">
              <div className="glass-card overflow-hidden p-4">
                <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-gb-fg4/15">
                  <Image
                    src="/assets/img/julian.jpg"
                    alt="Portrait of Julian Canales"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="glass-card grid gap-8 px-6 py-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <h2 className="text-3xl font-semibold text-gb-fg0">Lately</h2>
              <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-2xl border border-gb-fg4/15">
                <Image
                  src="/assets/img/casual_walking_good_background.JPG"
                  alt="Julian walking"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {currentFocusItems.map((item) => (
                <article key={item.title} className="rounded-2xl border border-gb-fg4/15 bg-gb-bg1/60 p-5">
                  <h3 className="text-lg font-semibold text-gb-fg0">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gb-fg2">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section-shell section-gap">
          <h2 className="section-heading">Work experience</h2>
          <div className="mt-10 space-y-4">
            {experiences.map((experience) => (
              <details key={`${experience.company}-${experience.title}`} className="glass-card group overflow-hidden">
                <summary className="flex cursor-pointer list-none items-center gap-4 px-6 py-5 marker:content-none">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-gb-fg4/15 bg-gb-bg1 text-sm font-semibold text-gb-orange-l">
                    {experience.logo ? (
                      <Image
                        src={experience.logo}
                        alt={experience.logoAlt ?? `${experience.company} logo`}
                        width={56}
                        height={56}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      experience.logoText
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gb-fg0">{experience.title}</h3>
                    <p className="text-sm text-gb-fg4">
                      {experience.company} · {experience.timeline}
                    </p>
                  </div>
                  <span className="text-gb-fg4 transition group-open:rotate-180">⌄</span>
                </summary>
                <div className="border-t border-gb-fg4/15 px-6 py-5 text-gb-fg2">
                  {experience.summary ? <p className="mb-4 leading-7">{experience.summary}</p> : null}
                  <ul className="space-y-3 text-sm leading-6 sm:text-base">
                    {experience.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-gb-orange-l" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section id="projects" className="section-shell section-gap">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="section-heading">Selected projects</h2>
              <p className="section-copy">
                A few things I&apos;ve built. Click any card for the full story.
              </p>
            </div>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-gb-fg4/20 px-4 py-2 text-sm font-medium text-gb-fg0 hover:bg-gb-fg4/10"
            >
              More on GitHub
            </a>
          </div>

          <ProjectShowcase projects={projects} />
        </section>

        <section className="section-shell section-gap">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="glass-card flex flex-col justify-center p-6 sm:p-8">
              <h2 className="text-3xl font-semibold text-gb-fg0">Writing</h2>
              <p className="mt-4 text-gb-fg2">
                Substack coming soon.
              </p>
            </article>

            <article id="hobbies" className="glass-card p-6 sm:p-8">
              <h2 className="text-3xl font-semibold text-gb-fg0">More pics 🤠</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {galleryItems.map((item) => (
                  <figure key={item.caption} className="overflow-hidden rounded-2xl border border-gb-fg4/15 bg-gb-bg1/60">
                    <div className="relative aspect-[4/5]">
                      <Image src={item.src} alt={item.alt} fill className="object-cover" />
                    </div>
                    <figcaption className="px-4 py-3 text-sm text-gb-fg2">{item.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="section-shell section-gap">
          <div className="glass-card grid gap-8 px-6 py-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="pill">Let&apos;s connect</p>
              <h2 className="mt-4 text-3xl font-semibold text-gb-fg0 sm:text-4xl">If you want to talk, feel free.</h2>
              <p className="mt-4 text-gb-fg2">
                AI infra, product engineering, projects, books, blog stuff, whatever.
              </p>
              <div className="mt-6 space-y-3 text-sm text-gb-fg2">
                <p>
                  Email: <a className="text-gb-orange-l hover:text-gb-orange-l" href={`mailto:${socialLinks.email}`}>{socialLinks.email}</a>
                </p>
                <p>
                  LinkedIn: <a className="text-gb-orange-l hover:text-gb-orange-l" href={socialLinks.linkedin} target="_blank" rel="noreferrer">juliancanales05</a>
                </p>
                <p>
                  GitHub: <a className="text-gb-orange-l hover:text-gb-orange-l" href={socialLinks.github} target="_blank" rel="noreferrer">juliancanaless</a>
                </p>
              </div>
            </div>

            <form
              action={socialLinks.formAction}
              method="POST"
              className="grid gap-4 rounded-3xl border border-gb-fg4/15 bg-gb-bg1/60 p-5"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm text-gb-fg2">
                  Your name
                  <input
                    name="name"
                    type="text"
                    required
                    className="rounded-2xl border border-gb-fg4/15 bg-gb-bg0 px-4 py-3 text-gb-fg0 outline-none ring-0 placeholder:text-gb-bg3 focus:border-gb-orange/40"
                  />
                </label>
                <label className="grid gap-2 text-sm text-gb-fg2">
                  Your email
                  <input
                    name="email"
                    type="email"
                    required
                    className="rounded-2xl border border-gb-fg4/15 bg-gb-bg0 px-4 py-3 text-gb-fg0 outline-none placeholder:text-gb-bg3 focus:border-gb-orange/40"
                  />
                </label>
              </div>
              <label className="grid gap-2 text-sm text-gb-fg2">
                Message
                <textarea
                  name="message"
                  rows={6}
                  required
                  className="rounded-2xl border border-gb-fg4/15 bg-gb-bg0 px-4 py-3 text-gb-fg0 outline-none placeholder:text-gb-bg3 focus:border-gb-orange/40"
                />
              </label>
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="_subject" value="Website contact — Julian Canales" />
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  type="submit"
                  className="rounded-full bg-gb-orange px-5 py-3 font-medium text-gb-bg0 hover:bg-gb-orange-l"
                >
                  Send message
                </button>
                <a
                  href={socialLinks.resume}
                  className="rounded-full border border-gb-fg4/20 px-5 py-3 font-medium text-gb-fg0 hover:bg-gb-fg4/10"
                >
                  View resume
                </a>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="section-shell pt-6">
        <div className="border-t border-gb-fg4/15 py-6 text-sm text-gb-fg4">
          © {new Date().getFullYear()} Julian Canales
        </div>
      </footer>
    </div>
  );
}
