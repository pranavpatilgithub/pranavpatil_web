"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/content";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          timeZone: site.timezone,
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    tick();
    const id = setInterval(tick, 20000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="page-x mx-auto flex max-w-[1240px] flex-wrap justify-between gap-3.5 border-t border-line pb-10 pt-6 text-[13px] text-dim">
      <span>Built from scratch, 2026</span>
      <span>
        {site.city} — {time}
      </span>
    </footer>
  );
}
