export default function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];
  return (
    <div
      aria-hidden
      className="group mt-[clamp(40px,9vh,90px)] overflow-hidden border-y border-line py-4"
    >
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {loop.map((item, i) => (
          <b
            key={i}
            className={`whitespace-nowrap px-[26px] font-display text-[clamp(15px,2vw,22px)] font-normal tracking-tight ${
              i % 2 ? "text-bone" : "text-dim"
            }`}
          >
            {item}
          </b>
        ))}
      </div>
    </div>
  );
}
