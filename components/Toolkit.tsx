import { toolkit } from "@/lib/content";
import Eyebrow from "./Eyebrow";

export default function Toolkit() {
  return (
    <section id="toolkit" className="page-x mx-auto max-w-[1240px] py-[clamp(80px,14vh,170px)]">
      <Eyebrow>Toolkit</Eyebrow>

      <div className="reveal grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {toolkit.map((group) => (
          <article
            key={group.title}
            className="group bg-ink p-[clamp(24px,3vw,34px)] transition-colors duration-450 hover:bg-panel"
          >
            <h4 className="mb-3.5 font-display text-lg font-normal tracking-tight">
              {group.title}
            </h4>
            <ul className="text-[14.5px] text-dim">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="py-1 transition-colors duration-300 group-hover:text-bone"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
