import Link from "next/link";
import Shell from "@/components/Shell";

export default function NotFound() {
  return (
    <Shell>
      <section className="page-x mx-auto grid min-h-svh max-w-[1240px] content-center">
        <p className="text-[13px] text-dim">404</p>
        <h1 className="mt-4 font-display text-[clamp(2.4rem,9vw,6rem)] font-normal leading-[0.92] tracking-[-0.045em]">
          Nothing here<span className="text-accent">.</span>
        </h1>
        <Link
          href="/"
          className="mt-8 w-fit rounded-full border border-line px-5 py-2.5 text-sm text-dim transition-colors duration-350 hover:border-bone hover:bg-bone hover:text-ink"
        >
          Back home
        </Link>
      </section>
    </Shell>
  );
}
