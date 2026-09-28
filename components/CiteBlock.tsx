"use client";

import { useState } from "react";

export default function CiteBlock({ bibtex }: { bibtex: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(bibtex);
    } catch {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className="rounded-md border border-line bg-panel p-4">
      <pre className="overflow-x-auto whitespace-pre text-[12.5px] leading-relaxed text-dim">
        {bibtex}
      </pre>
      <div className="mt-3 border-t border-line pt-3">
        <button
          type="button"
          onClick={copy}
          className="cursor-pointer rounded-full border border-line px-4 py-1.5 text-[13px] text-dim transition-colors duration-350 hover:border-bone hover:bg-bone hover:text-ink"
        >
          {copied ? "Copied" : "Copy BibTeX"}
        </button>
      </div>
    </div>
  );
}
