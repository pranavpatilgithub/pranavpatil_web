"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ring = ref.current;
    if (!ring) return;
    const fine = window.matchMedia("(hover:hover) and (pointer:fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
    if (!fine || reduced) return;

    let rx = 0, ry = 0, tx = 0, ty = 0, frame = 0;

    const move = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      ring.style.opacity = "1";
    };
    const loop = () => {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      ring.style.transform = `translate(${rx - 17}px, ${ry - 17}px)`;
      frame = requestAnimationFrame(loop);
    };

    const grow = () => ring.classList.add("scale-[2.05]", "bg-bone", "border-transparent");
    const shrink = () => ring.classList.remove("scale-[2.05]", "bg-bone", "border-transparent");

    const targets = Array.from(document.querySelectorAll("a, button"));
    targets.forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    window.addEventListener("mousemove", move);
    frame = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(frame);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[95] size-[34px] rounded-full border border-bone opacity-0 mix-blend-difference transition-[opacity,transform,background-color] duration-300 ease-soft max-[900px]:hidden"
    />
  );
}
