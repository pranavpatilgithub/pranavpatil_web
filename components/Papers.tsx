"use client";

import Link from "next/link";
import { useState } from "react";
import { papers } from "@/lib/content";

function DownloadIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3v12" />
      <path d="m7 11 5 5 5-5" />
      <path d="M4 20h16" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 7H5.5A1.5 1.5 0 0 0 4 8.5V12h5V7Z" />
      <path d="M9 7v5a5 5 0 0 1-5 5" />
      <path d="M20 7h-3.5A1.5 1.5 0 0 0 15 8.5V12h5V7Z" />
      <path d="M20 7v5a5 5 0 0 1-5 5" />
    </svg>
  );
}

const action =
  "inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-line px-3.5 py-1.5 text-[13px] text-dim transition-colors duration-350 hover:border-bone hover:bg-bone hover:text-ink";

export default function Papers() {
  const [open, setOpen] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  if (papers.length === 0) return null;

  return (
    <div className="mt-[clamp(70px,11vh,130px)]">
      <p className="reveal rule mb-[clamp(28px,5vh,48px)] flex items-center gap-3 text-[13px] text-dim">
        Research
      </p>

      {papers.map((paper) => (
        <article key={paper.slug} className="reveal border-t border-line py-[clamp(24px,3.2vw,34px)] last:border-b">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[13px] text-dim">
            <span>{paper.year}</span>
            <span className="h-px w-4 bg-line" />
            <span>{paper.venue}</span>
            {paper.status && (
              <span className="rounded-full border border-mint/40 px-2.5 py-0.5 text-mint">
                {paper.status}
              </span>
            )}
          </div>

          <h3 className="mt-3 max-w-[28ch] font-display text-[clamp(1.25rem,2.9vw,2.1rem)] font-normal leading-[1.14] tracking-[-0.03em]">
            {paper.title}
          </h3>

          <p className="mt-2 text-[13px] text-dim">{paper.authors}</p>

          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            <Link href={`/papers/${paper.slug}`} className={action}>
              View paper
            </Link>

            <a
              href={paper.file}
              download
              aria-label={`Download ${paper.title} as PDF`}
              title="Download PDF"
              className={action}
            >
              <DownloadIcon />
              PDF
            </a>

            <button
              type="button"
              onClick={() => setOpen(open === paper.slug ? null : paper.slug)}
              aria-expanded={open === paper.slug}
              className={action}
            >
              <QuoteIcon />
              Cite
            </button>
          </div>

          {open === paper.slug && (
            <div className="mt-4 rounded-md border border-line bg-panel p-4">
              <pre className="overflow-x-auto whitespace-pre text-[12.5px] leading-relaxed text-dim">
                {paper.bibtex}
              </pre>
              <div className="mt-3 flex flex-wrap gap-2.5 border-t border-line pt-3">
                <button type="button" onClick={() => copy(paper.bibtex)} className={action}>
                  {copied ? "Copied" : "Copy BibTeX"}
                </button>
                <a href={paper.external.href} target="_blank" rel="noreferrer" className={action}>
                  {paper.external.label} ↗
                </a>
              </div>
            </div>
          )}
        </article>
      ))}
    </div>
  );
}
