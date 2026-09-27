export const site = {
  name: "Pranav Patil",
  first: "Pranav",
  last: "Patil",
  email: "hello@pranav.dev",
  timezone: "Asia/Kolkata",
  city: "Pune",
  status: "Open to internships — summer 2027",
  intro:
    "Final-year CS student in Pune. I build fast, considered web interfaces and train machine learning models that do something useful once the notebook closes.",
};

export const stack = [
  "React", "TypeScript", "PyTorch", "Next.js", "Transformers",
  "Node", "Tailwind", "scikit-learn", "Postgres", "FastAPI",
];

export const stats = [
  { value: "4", label: "shipped projects" },
  { value: "3", label: "years writing code" },
  { value: "2", label: "hackathon wins" },
];

export type Project = {
  title: string;
  peek: string;
  color: string;
  href: string;
  tags: { label: string; ai?: boolean }[];
};

export const projects: Project[] = [
  {
    title: "Loomi",
    peek: "Semantic search over 40k docs",
    color: "#B3A9FF",
    href: "#",
    tags: [{ label: "RAG", ai: true }, { label: "PyTorch", ai: true }, { label: "Next.js" }],
  },
  {
    title: "Slatehouse",
    peek: "Realtime collaborative whiteboard",
    color: "#9FE3C6",
    href: "#",
    tags: [{ label: "WebSockets" }, { label: "Canvas" }, { label: "Node" }],
  },
  {
    title: "Leafcheck",
    peek: "Crop disease detection, 94% F1",
    color: "#F2C57C",
    href: "#",
    tags: [{ label: "CNN", ai: true }, { label: "Vision", ai: true }, { label: "FastAPI" }],
  },
  {
    title: "Quadrangle",
    peek: "Campus event platform, 1.2k users",
    color: "#E6A0C4",
    href: "#",
    tags: [{ label: "React" }, { label: "Postgres" }, { label: "Auth" }],
  },
];

export const toolkit = [
  { title: "Interface", items: ["React, Next.js", "TypeScript", "Tailwind, CSS", "Framer Motion"] },
  { title: "Machine learning", items: ["PyTorch", "scikit-learn", "Transformers, RAG", "Pandas, NumPy"] },
  { title: "Backend", items: ["Node, Express", "FastAPI", "Postgres, Redis", "REST, WebSockets"] },
  { title: "Practice", items: ["Git, CI", "Docker", "Figma", "Vercel, AWS"] },
];

export const socials = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Résumé", href: "#" },
];
