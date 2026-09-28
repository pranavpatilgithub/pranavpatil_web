import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Shell from "@/components/Shell";
import CiteBlock from "@/components/CiteBlock";
import { getPaper, papers } from "@/lib/content";

export function generateStaticParams() {
  return papers.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const paper = getPaper(slug);
  if (!paper) return { title: "Not found" };
  return { title: `${paper.title} — Rohan Kulkarni`, description: paper.abstract.slice(0, 155) };
}

export default async function PaperPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const paper = getPaper(slug);
  if (!paper) notFound();

  return (
    <Shell>
      <article className="page-x mx-auto max-w-[1240px] pb-[clamp(60px,10vh,120px)] pt-[clamp(120px,20vh,200px)]">
        <Link href="/#work" className="text-[13px] text-dim transition-colors duration-300 hover:text-bone">
          ← Back to research
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] text-dim">
          <span>{paper.year}</span>
          <span className="h-px w-4 bg-line" />
          <span>{paper.venue}</span>
          {paper.status && (
            <span className="rounded-full border border-mint/40 px-2.5 py-0.5 text-mint">
              {paper.status}
            </span>
          )}
        </div>

        <h1 className="mt-5 max-w-[22ch] font-display text-[clamp(1.9rem,6vw,4.2rem)] font-normal leading-[1.02] tracking-[-0.04em]">
          {paper.title}
        </h1>

        <p className="mt-5 text-[15px] text-dim">{paper.authors}</p>

        <div className="mt-8 flex flex-wrap gap-2.5">
          <a
            href={paper.file}
            download
            className="rounded-full border border-line px-4 py-2 text-[13px] text-dim transition-colors duration-350 hover:border-bone hover:bg-bone hover:text-ink"
          >
            Download PDF
          </a>
          <a
            href={paper.external.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line px-4 py-2 text-[13px] text-dim transition-colors duration-350 hover:border-bone hover:bg-bone hover:text-ink"
          >
            {paper.external.label} ↗
          </a>
        </div>

        <section className="mt-[clamp(44px,7vh,80px)] max-w-[64ch]">
          <h2 className="mb-4 font-display text-[clamp(1.3rem,2.4vw,1.75rem)] font-normal tracking-[-0.025em]">
            Abstract
          </h2>
          <p className="text-dim">{paper.abstract}</p>
        </section>

        <section className="mt-[clamp(44px,7vh,80px)]">
          <h2 className="mb-4 font-display text-[clamp(1.3rem,2.4vw,1.75rem)] font-normal tracking-[-0.025em]">
            Full paper
          </h2>
          <object
            data={`${paper.file}#view=FitH`}
            type="application/pdf"
            className="h-[min(85vh,900px)] w-full rounded-lg border border-line bg-panel"
            aria-label={`PDF of ${paper.title}`}
          >
            <div className="grid h-full place-items-center p-8 text-center text-[14px] text-dim">
              <p>
                Your browser cannot display the PDF inline.{" "}
                <a href={paper.file} className="text-accent underline underline-offset-4">
                  Open it in a new tab
                </a>
                .
              </p>
            </div>
          </object>
        </section>

        <section className="mt-[clamp(44px,7vh,80px)] max-w-[64ch]">
          <h2 className="mb-4 font-display text-[clamp(1.3rem,2.4vw,1.75rem)] font-normal tracking-[-0.025em]">
            Cite this paper
          </h2>
          <CiteBlock bibtex={paper.bibtex} />
        </section>
      </article>
    </Shell>
  );
}
