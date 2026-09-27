"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Toolkit", href: "#toolkit" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`page-x fixed inset-x-0 top-0 z-80 flex items-center justify-between gap-4 border-b py-4 backdrop-blur-md transition-colors duration-500 ${
        stuck ? "border-line" : "border-transparent"
      }`}
      style={{ background: "color-mix(in srgb, var(--ink) 72%, transparent)" }}
    >
      <a href="#home" className="font-display text-[17px] font-medium tracking-tight">
        pranav<span className="text-accent">.</span>
      </a>

      <nav className="max-[720px]:hidden">
        <ul className="flex gap-7 text-sm text-dim">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative transition-colors duration-300 hover:text-bone"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-bone transition-[width] duration-350 ease-soft group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <ThemeToggle />
    </header>
  );
}
