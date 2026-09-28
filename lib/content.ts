export const site = {
  name: "Pranav Patil",
  first: "Pranav",
  last: "Patil",
  email: "010pranavcode@gmail.com",
  timezone: "Asia/Kolkata",
  city: "Pune",
  status: "Open to internships and full-time roles",
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

/* ------------------------------------------------------------------ */
/* PROJECTS                                                            */
/* `slug` becomes the URL: /work/loomi                                 */
/* ------------------------------------------------------------------ */

export type Project = {
  slug: string;
  title: string;
  peek: string;
  color: string;
  tags: { label: string; ai?: boolean }[];
  year: string;
  role: string;
  timeline: string;
  summary: string;
  problem: string;
  approach: string[];
  outcome: string;
  stack: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "loomi",
    title: "Loomi",
    peek: "Semantic search over 40k docs",
    color: "#B3A9FF",
    tags: [{ label: "RAG", ai: true }, { label: "PyTorch", ai: true }, { label: "Next.js" }],
    year: "2026",
    role: "Solo — research, backend, interface",
    timeline: "Nine weeks",
    summary:
      "A retrieval system that answers questions across a 40,000-document internal archive, with every answer traceable back to the paragraph it came from.",
    problem:
      "Keyword search fails the moment someone phrases a question differently from the document that answers it. The archive I was working with had a decade of unevenly written reports, so exact-match search returned either nothing or everything.",
    approach: [
      "Chunked documents on semantic boundaries rather than fixed token counts, which cut mid-sentence splits substantially.",
      "Embedded chunks with a sentence-transformer model and stored vectors in Postgres using pgvector, avoiding a second database entirely.",
      "Added a reranking pass over the top 50 candidates before generation — the single biggest quality jump in the whole project.",
      "Built the interface so every generated sentence carries an inline citation that scrolls the source pane to the exact chunk.",
    ],
    outcome:
      "Answer relevance, judged on a hand-labelled set of 200 questions, rose from 61% with plain vector search to 88% after reranking. Median response time stayed under two seconds.",
    stack: ["Next.js", "TypeScript", "Python", "PyTorch", "sentence-transformers", "Postgres + pgvector", "FastAPI"],
    links: [
      { label: "Live demo", href: "https://example.com" },
      { label: "Source", href: "https://github.com" },
    ],
  },
  {
    slug: "slatehouse",
    title: "Slatehouse",
    peek: "Realtime collaborative whiteboard",
    color: "#9FE3C6",
    tags: [{ label: "WebSockets" }, { label: "Canvas" }, { label: "Node" }],
    year: "2025",
    role: "Two-person team — I owned sync and rendering",
    timeline: "Six weeks",
    summary:
      "A multiplayer whiteboard where strokes from every participant land in the right order without a central lock, built to understand conflict resolution properly rather than reach for a library.",
    problem:
      "Naive realtime drawing breaks the moment two people edit the same region on a slow connection — strokes reorder, undo undoes someone else's work, and reconnecting wipes local state.",
    approach: [
      "Modelled the document as an append-only operation log with Lamport timestamps, so ordering never depends on arrival time.",
      "Separated the render loop from the network loop; incoming operations queue and flush once per animation frame.",
      "Scoped undo per-client by tagging operations with an origin id instead of walking a shared global stack.",
      "Persisted a compacted snapshot every 200 operations so reconnects replay seconds of history, not hours.",
    ],
    outcome:
      "Held twelve simultaneous editors in testing with no divergence, and kept drawing at 60fps on a four-year-old laptop.",
    stack: ["React", "TypeScript", "Canvas API", "Node", "ws", "Redis"],
    links: [{ label: "Source", href: "https://github.com" }],
  },
  {
    slug: "leafcheck",
    title: "Leafcheck",
    peek: "Crop disease detection, 94% F1",
    color: "#F2C57C",
    tags: [{ label: "CNN", ai: true }, { label: "Vision", ai: true }, { label: "FastAPI" }],
    year: "2025",
    role: "Solo — model and deployment",
    timeline: "Four months, on and off",
    summary:
      "An image classifier that identifies seven common crop diseases from a phone photo, small enough to run on a mid-range Android device offline.",
    problem:
      "Published models for this task are trained on clean lab images against uniform backgrounds. Photographs taken in an actual field — uneven light, overlapping leaves, soil in frame — drop their accuracy sharply.",
    approach: [
      "Collected and labelled 3,200 field photographs to supplement the public lab dataset, then trained on the mixture.",
      "Fine-tuned an EfficientNet-B0 backbone, chosen deliberately for its size rather than its leaderboard position.",
      "Used aggressive augmentation for shadow, blur and occlusion, which mattered more than any architecture change I tried.",
      "Quantised the final model to int8 and exported to TFLite, bringing it to 4.1MB on device.",
    ],
    outcome:
      "94% macro F1 on a held-out field set, against 71% for the same architecture trained on lab images alone. Inference runs in roughly 180ms on device with no network.",
    stack: ["PyTorch", "EfficientNet", "TFLite", "FastAPI", "Docker"],
    links: [{ label: "Source", href: "https://github.com" }],
  },
  {
    slug: "quadrangle",
    title: "Quadrangle",
    peek: "Campus event platform, 1.2k users",
    color: "#E6A0C4",
    tags: [{ label: "React" }, { label: "Postgres" }, { label: "Auth" }],
    year: "2024",
    role: "Lead developer, team of three",
    timeline: "One semester, still maintained",
    summary:
      "The event platform my campus actually uses — listings, RSVPs, check-in via QR, and a dashboard clubs can run without asking anyone for help.",
    problem:
      "Event information lived across four WhatsApp groups and a noticeboard. Attendance was guessed, clashes were constant, and nobody could find anything more than a day old.",
    approach: [
      "Started by watching three club secretaries plan an event, then built only what they were already doing manually.",
      "Modelled recurring events as rules rather than duplicated rows, which kept the calendar query simple.",
      "Issued signed QR tokens for check-in so the scanner works offline and syncs later.",
      "Shipped the club dashboard before the student-facing app, because organisers had to want it first.",
    ],
    outcome:
      "About 1,200 registered students and 40 active clubs. Check-in replaced paper sheets for every major event last year.",
    stack: ["React", "TypeScript", "Node", "Postgres", "Prisma", "Auth.js"],
    links: [
      { label: "Live site", href: "https://example.com" },
      { label: "Source", href: "https://github.com" },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

/* ------------------------------------------------------------------ */
/* RESEARCH PAPERS                                                     */
/* Put the PDF at public/papers/<file> — then it is served at /papers/<file> */
/* ------------------------------------------------------------------ */

export type Paper = {
  slug: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  status?: string;
  abstract: string;
  file: string;
  external: { label: string; href: string };
  bibtex: string;
};

export const papers: Paper[] = [
  {
    slug: "field-robust-crop-classification",
    title: "Field-Robust Crop Disease Classification on Commodity Hardware",
    authors: "R. Kulkarni, A. Deshpande",
    venue: "ICVGIP Workshop on Agriculture and Vision",
    year: "2026",
    status: "Accepted",
    abstract:
      "Crop disease classifiers trained on laboratory imagery degrade sharply under field conditions. We quantify this gap across seven disease classes and show that a modest amount of in-situ data, combined with occlusion-aware augmentation, recovers most of the lost accuracy without increasing model size. Our quantised EfficientNet-B0 reaches 94% macro F1 on field photographs at 4.1MB, making offline inference practical on entry-level Android hardware.",
    file: "/papers/field-robust-crop-classification.pdf",
    external: { label: "View on arXiv", href: "https://arxiv.org" },
    bibtex: `@inproceedings{kulkarni2026field,
  title     = {Field-Robust Crop Disease Classification on Commodity Hardware},
  author    = {Kulkarni, Rohan and Deshpande, Aditi},
  booktitle = {ICVGIP Workshop on Agriculture and Vision},
  year      = {2026}
}`,
  },
  {
    slug: "reranking-small-corpora",
    title: "Does Reranking Still Help on Small Corpora? A Controlled Study",
    authors: "R. Kulkarni",
    venue: "Preprint",
    year: "2026",
    status: "Under review",
    abstract:
      "Cross-encoder reranking is standard in retrieval pipelines, but most evidence comes from web-scale benchmarks. We evaluate reranking across corpora from 1k to 100k documents and find the benefit holds — and in fact widens — below 50k documents, where embedding models have fewer near-duplicates to exploit. We release the evaluation harness and a hand-labelled question set.",
    file: "/papers/reranking-small-corpora.pdf",
    external: { label: "View on arXiv", href: "https://arxiv.org" },
    bibtex: `@article{kulkarni2026reranking,
  title   = {Does Reranking Still Help on Small Corpora? A Controlled Study},
  author  = {Kulkarni, Rohan},
  journal = {arXiv preprint},
  year    = {2026}
}`,
  },
];

export const getPaper = (slug: string) => papers.find((p) => p.slug === slug);

export const toolkit = [
  { title: "Interface", items: ["React, Next.js", "TypeScript", "Tailwind, CSS", "Framer Motion"] },
  { title: "Machine learning", items: ["PyTorch", "scikit-learn", "Transformers, RAG", "Pandas, NumPy"] },
  { title: "Backend", items: ["Node, Express", "FastAPI", "Postgres, Redis", "REST, WebSockets"] },
  { title: "Practice", items: ["Git, CI", "Docker", "Figma", "Vercel, AWS"] },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/pranavpatilgithub" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/thepranavpatil/" },
  { label: "Résumé", href: "#" },
];
