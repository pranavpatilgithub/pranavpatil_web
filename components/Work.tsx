"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/lib/content";
import Eyebrow from "./Eyebrow";
import Papers from "./Papers";

export default function Work() {
  const peek = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const pos = useRef({ x: 0, y: 0, gx: 0, gy: 0 });
  const on = useRef(false);

  useEffect(() => {
    let frame = 0;
    const move = (e: MouseEvent) => {
      pos.current.x = e.clientX + 28;
      pos.current.y = e.clientY - 100;
    };
    const loop = () => {
      const p = pos.current;
      if (on.current && peek.current) {
        p.gx += (p.x - p.gx) * 0.12;
        p.gy += (p.y - p.gy) * 0.12;
        peek.current.style.transform = `translate(${p.gx}px, ${p.gy}px)`;
      }
      frame = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move);
    frame = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    on.current = active !== null;
  }, [active]);

  const current = active !== null ? projects[active] : null;

  return (
    <section id="work" className="page-x mx-auto max-w-[1240px] py-[clamp(80px,14vh,170px)]">
      <Eyebrow>Selected work</Eyebrow>

      <div
        ref={peek}
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 z-70 grid h-[200px] w-[290px] place-items-center overflow-hidden rounded-[10px] border border-line font-display text-sm text-ink transition-opacity duration-300 max-[900px]:hidden ${
          current ? "opacity-100" : "opacity-0"
        }`}
        style={{ background: current?.color ?? "transparent" }}
      >
        {current?.peek}
      </div>

      {projects.map((p, i) => (
        <Link
          key={p.slug}
          href={`/work/${p.slug}`}
          onMouseEnter={() => setActive(i)}
          onMouseLeave={() => setActive(null)}
          className="reveal group relative isolate grid grid-cols-[auto_1fr] items-baseline gap-5 border-t border-line py-[clamp(24px,3.4vw,38px)] last:border-b sm:grid-cols-[auto_1fr_auto]"
        >
          <span className="absolute inset-y-0 -inset-x-6 -z-10 rounded-md bg-panel opacity-0 transition-opacity duration-450 group-hover:opacity-100" />

          <span className="text-xs tabular-nums text-dim">{String(i + 1).padStart(2, "0")}</span>

          <span>
            <h3 className="m-0 font-display text-[clamp(1.5rem,4.6vw,3.3rem)] font-normal leading-[1.02] tracking-[-0.035em] transition-[transform,color] duration-500 ease-soft sm:group-hover:translate-x-[18px] sm:group-hover:text-accent">
              {p.title}
            </h3>
            <span className="mt-2.5 flex flex-wrap gap-2 text-[13px] text-dim">
              {p.tags.map((t) => (
                <i
                  key={t.label}
                  className={`not-italic rounded-full border px-2.5 py-0.5 ${
                    t.ai ? "border-mint/40 text-mint" : "border-line"
                  }`}
                >
                  {t.label}
                </i>
              ))}
            </span>
          </span>

          <span className="hidden -translate-x-2.5 text-[13px] text-dim opacity-0 transition-[opacity,transform] duration-400 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
            View case ↗
          </span>
        </Link>
      ))}

      <Papers />
    </section>
  );
}
