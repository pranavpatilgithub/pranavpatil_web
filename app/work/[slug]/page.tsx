import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Shell from "@/components/Shell";
import { getProject, projects } from "@/lib/content";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Not found" };
  return { title: `${project.title} — Rohan Kulkarni`, description: project.summary };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <Shell>
      <article className="page-x mx-auto max-w-[1240px] pb-[clamp(60px,10vh,120px)] pt-[clamp(120px,20vh,200px)]">
        <Link href="/#work" className="text-[13px] text-dim transition-colors duration-300 hover:text-bone">
          ← Back to work
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] text-dim">
          <span>{project.year}</span>
          <span className="h-px w-4 bg-line" />
          {project.tags.map((t) => (
            <span
              key={t.label}
              className={`rounded-full border px-2.5 py-0.5 ${
                t.ai ? "border-mint/40 text-mint" : "border-line"
              }`}
            >
              {t.label}
            </span>
          ))}
        </div>

        <h1 className="mt-5 font-display text-[clamp(2.6rem,10vw,7rem)] font-normal leading-[0.9] tracking-[-0.045em]">
          {project.title}
          <span style={{ color: project.color }}>.</span>
        </h1>

        <p className="mt-7 max-w-[54ch] text-[clamp(16px,1.7vw,19px)] text-bone">{project.summary}</p>

        <div
          className="mt-[clamp(40px,7vh,70px)] h-[clamp(160px,28vh,300px)] rounded-lg border border-line"
          style={{
            background: `linear-gradient(140deg, ${project.color}, color-mix(in srgb, ${project.color} 25%, var(--panel)))`,
          }}
        />

        <div className="mt-[clamp(40px,7vh,70px)] grid gap-x-[clamp(30px,6vw,80px)] gap-y-12 md:grid-cols-[260px_1fr]">
          <aside className="space-y-7 text-[14px] md:sticky md:top-28 md:self-start">
            <div>
              <p className="mb-1 text-[12px] uppercase tracking-wider text-dim">Role</p>
              <p>{project.role}</p>
            </div>
            <div>
              <p className="mb-1 text-[12px] uppercase tracking-wider text-dim">Timeline</p>
              <p>{project.timeline}</p>
            </div>
            <div>
              <p className="mb-2 text-[12px] uppercase tracking-wider text-dim">Built with</p>
              <ul className="flex flex-wrap gap-1.5 text-[13px] text-dim">
                {project.stack.map((s) => (
                  <li key={s} className="rounded-full border border-line px-2.5 py-0.5">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            {project.links.length > 0 && (
              <div className="flex flex-wrap gap-2.5 border-t border-line pt-6">
                {project.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-line px-4 py-2 text-[13px] text-dim transition-colors duration-350 hover:border-bone hover:bg-bone hover:text-ink"
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>
            )}
          </aside>

          <div className="max-w-[62ch] space-y-12">
            <section>
              <h2 className="mb-4 font-display text-[clamp(1.3rem,2.4vw,1.75rem)] font-normal tracking-[-0.025em]">
                The problem
              </h2>
              <p className="text-dim">{project.problem}</p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-[clamp(1.3rem,2.4vw,1.75rem)] font-normal tracking-[-0.025em]">
                What I did
              </h2>
              <ul className="space-y-4">
                {project.approach.map((step, i) => (
                  <li key={i} className="grid grid-cols-[auto_1fr] gap-4 border-t border-line pt-4">
                    <span className="text-xs tabular-nums text-dim">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-dim">{step}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-display text-[clamp(1.3rem,2.4vw,1.75rem)] font-normal tracking-[-0.025em]">
                Outcome
              </h2>
              <p className="text-dim">{project.outcome}</p>
            </section>
          </div>
        </div>

        <Link
          href={`/work/${next.slug}`}
          className="group mt-[clamp(70px,12vh,140px)] flex items-baseline justify-between gap-6 border-t border-line pt-8"
        >
          <span className="text-[13px] text-dim">Next project</span>
          <span className="font-display text-[clamp(1.6rem,5vw,3rem)] font-normal tracking-[-0.035em] transition-colors duration-400 group-hover:text-accent">
            {next.title} ↗
          </span>
        </Link>
      </article>
    </Shell>
  );
}
