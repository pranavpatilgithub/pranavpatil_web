"use client";

import { useState } from "react";
import { site, socials } from "@/lib/content";
import Eyebrow from "./Eyebrow";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
    } catch {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  const pill =
    "cursor-pointer rounded-full border border-line px-5 py-2.5 text-sm text-dim transition-colors duration-350 hover:border-bone hover:bg-bone hover:text-ink";

  return (
    <section id="contact" className="page-x mx-auto max-w-[1240px] py-[clamp(80px,14vh,170px)]">
      <Eyebrow>Contact</Eyebrow>

      <a
        href={`mailto:${site.email}`}
        className="reveal group relative inline-block font-display text-[clamp(2.1rem,9vw,7rem)] font-normal leading-[0.95] tracking-[-0.04em]"
      >
        {site.email}
        <span className="absolute bottom-[0.08em] left-0 h-0.5 w-full origin-right scale-x-0 bg-accent transition-transform duration-550 ease-soft group-hover:origin-left group-hover:scale-x-100" />
      </a>

      <div className="reveal mt-[clamp(34px,6vh,56px)] flex flex-wrap gap-3">
        <button type="button" onClick={copy} className={pill}>
          {copied ? "Copied" : "Copy email"}
        </button>
        {socials.map((s) => (
          <a key={s.label} href={s.href} className={pill}>
            {s.label}
          </a>
        ))}
      </div>
    </section>
  );
}
