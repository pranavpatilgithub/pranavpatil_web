import { site, stack } from "@/lib/content";
import Marquee from "./Marquee";

export default function Hero() {
  return (
    <section
      id="home"
      className="page-x relative mx-auto flex min-h-svh max-w-[1240px] flex-col justify-end pb-[6vh]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-[8%] aspect-square w-[min(620px,80vw)] animate-drift rounded-full blur-2xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--accent) 28%, transparent), transparent 62%)",
        }}
      />

      <p className="mb-[clamp(28px,7vh,64px)] inline-flex items-center gap-2.5 text-[13px] text-dim">
        <span className="relative size-[7px] rounded-full bg-mint">
          <span className="absolute -inset-1 animate-ping-ring rounded-full border border-mint opacity-50" />
        </span>
        {site.status}
      </p>

      <h1 className="m-0 font-display text-[clamp(3.2rem,13.5vw,11.5rem)] font-normal leading-[0.86] tracking-[-0.045em]">
        <span className="overflow-hidden">
          <span className="block translate-y-full animate-rise">{site.first}</span>
        </span>
        <span className="overflow-hidden">
          <span className="block translate-y-full animate-rise [animation-delay:90ms]">
            {site.last}
            <em className="font-light not-italic text-accent">.</em>
          </span>
        </span>
      </h1>

      <div className="mt-[clamp(28px,5vh,52px)] flex flex-wrap items-end gap-x-[clamp(18px,5vw,90px)] gap-y-5 opacity-0 animate-fade">
        <p className="m-0 max-w-[44ch] text-[clamp(15px,1.5vw,17px)] text-dim">
          Final-year CS student in Pune. I build{" "}
          <b className="font-normal text-bone">fast, considered web interfaces</b> and train{" "}
          <b className="font-normal text-bone">machine learning models</b> that do something useful
          once the notebook closes.
        </p>
        <p className="flex items-center gap-2.5 whitespace-nowrap text-xs text-dim">
          Scroll
          <span className="relative block h-px w-11 overflow-hidden bg-line">
            <span className="absolute inset-0 -translate-x-full animate-sweep bg-bone" />
          </span>
          04 projects
        </p>
      </div>

      <Marquee items={stack} />
    </section>
  );
}
