import { stats } from "@/lib/content";
import Eyebrow from "./Eyebrow";

export default function About() {
  return (
    <section
      id="about"
      className="page-x mx-auto max-w-[1240px] py-[clamp(80px,14vh,170px)]"
    >
      <Eyebrow>About</Eyebrow>

      <div className="grid items-start gap-[clamp(30px,6vw,80px)] md:grid-cols-2">
        <h2 className="reveal m-0 max-w-[16ch] font-display text-[clamp(1.65rem,3.6vw,2.9rem)] font-normal leading-[1.18] tracking-[-0.03em]">
          Two halves of the same habit —{" "}
          <span className="text-accent">make it work, then make it feel right.</span>
        </h2>

        <div className="reveal">
          <p className="mb-4 max-w-[52ch] text-dim">
            I started with HTML at 15 because I wanted a place to put things. That turned into
            React, then into wondering how the recommendation feed on the other tab actually worked
            — which is how the machine learning half began.
          </p>
          <p className="max-w-[52ch] text-dim">
            Now I spend most weeks somewhere between the two: shipping interfaces where the
            interaction is the product, and training models where the evaluation matters more than
            the accuracy screenshot. I like problems that stay unsolved for a few days.
          </p>

          <div className="mt-9 flex flex-wrap gap-8 border-t border-line pt-7">
            {stats.map((s) => (
              <div key={s.label}>
                <strong className="block font-display text-[clamp(1.9rem,4vw,2.7rem)] font-normal leading-none tracking-[-0.03em]">
                  {s.value}
                </strong>
                <span className="text-[13px] text-dim">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
