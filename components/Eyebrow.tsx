export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="reveal rule mb-[clamp(32px,6vh,60px)] flex items-center gap-3 text-[13px] text-dim">
      {children}
    </p>
  );
}
