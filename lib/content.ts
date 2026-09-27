/**
 * Everything you need to edit lives in this file.
 * Anything still in [brackets] is a placeholder — the photos and the one-line
 * notes on the lab repos are the only ones left.
 */

export const site = {
  name: "Fawas",
  fullName: "Fawas A M",
  wordmark: "fawas",
  role: "Senior Full-Stack Engineer & Technical Lead",
  description:
    "Senior SDE II and technical lead. Three years building high-concurrency e-commerce, fintech and logistics platforms for the UAE and India.",
  url: "https://fawasam.in",
  city: "Ernakulam, India",
  timezone: "UTC+5:30",
  email: "fawasmundakkottil@gmail.com",
  resumeUrl: "/fawas-am-resume.pdf",
  githubHandle: "fawasam",
  repoCount: "127",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Lab", href: "#lab" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  greeting: "hello!",
  lead: {
    before: "I build platforms that stay ",
    markOne: "fast",
    between: " under load and ",
    markTwo: "scale",
    after: " past 10,000 users at once.",
  },
  bio: "Senior SDE II and team lead at WebCastle Media — full-stack and backend systems for UAE e-commerce, fintech and logistics.",
  buildingNow: { initials: "MC", name: "Muthoot Capital Loan Assistant" },
  shippedBefore: [
    { initials: "ME", name: "Muthoot Exim" },
    { initials: "YT", name: "Yateem Opticians" },
  ],
  status: "OPEN TO UAE / GCC RELOCATION",
  photo: {
    src: "/fawas.jpg",
    alt: "Fawas, standing on a plant-lined deck",
    /** Which part survives the crop into the polaroid's 4:5 frame. */
    position: "50% 40%",
  },
  photoCaption: "ernakulam, between deploys",
  asideTop: "that’s me!",
  asideBottom: "fuelled by ☕ × ∞",
};

export const about = {
  eyebrow: "About me",
  headingBefore: "Engineering systems that ",
  headingUnderlined: "hold up",
  aside: "(the long & short of it)",
  story: [
    {
      step: "01 — The start",
      body: "Computer Science at the University of Calicut — a B.Sc. at Mamo College, then an M.Sc. at Farook College finished at 3.9/4.0 while already working full time. My first engineering job was building admin portals and departmental apps at Markaz Knowledge City in 2022.",
    },
    {
      step: "02 — Alongside the code",
      body: "I joined WebCastle Media as a full-stack developer and spent two years shipping 10+ production platforms for clients across the UAE and Middle East, tuning queries and API response times by up to 45% along the way.",
    },
    {
      step: "03 — Connecting the dots",
      body: "Now I lead architecture and delivery for enterprise platforms in e-commerce, healthcare, logistics and fintech, running teams of 8–12 engineers — and increasingly building the AI layer on top: RAG assistants, semantic search, agent orchestration.",
    },
  ],
  bits: [
    { label: "Based in", value: "Ernakulam, India" },
    { label: "Experience", value: "3+ years" },
    { label: "Leading", value: "Teams of 8–12" },
    { label: "Day to day", value: "Node.js · Next.js · AWS" },
    { label: "Exploring", value: "RAG, vector search, agents" },
    { label: "Open to", value: "UAE / GCC relocation" },
  ],
  path: [
    {
      year: "2019 — 2022",
      title: "B.Sc. Computer Science",
      note: "Mamo College, University of Calicut.",
    },
    {
      year: "2022",
      title: "First engineering role",
      note: "Admin applications and departmental portals at Markaz Knowledge City, then joined WebCastle Media as a full-stack developer.",
    },
    {
      year: "2022 — 2024",
      title: "M.Sc. Computer Science",
      note: "Farook College, University of Calicut — 3.9/4.0, finished alongside full-time work.",
    },
    {
      year: "2024",
      title: "Software Development Engineer II",
      note: "Enterprise fintech platforms, RAG support assistants, and CI/CD that took release builds from hours to under 15 minutes.",
    },
    {
      year: "2025 — today",
      title: "Senior SDE II · Team Lead",
      note: "Leading 8–12 engineers across 5+ enterprise platforms, with a 40% drop in critical production incidents.",
    },
  ],
  toolboxAside: "what’s in my toolbox",
  tools: [
    "TypeScript",
    "Node.js",
    "Next.js",
    "React",
    "Express",
    "Bun",
    "FastAPI",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Apache Kafka",
    "BullMQ",
    "Prisma",
    "Qdrant",
    "Docker",
    "AWS",
  ],
  cameraRollAside: "a few pages from my camera roll",
  cameraRoll: [
    { caption: "[caption one]", rotate: "-4deg", lift: "12px", z: 2 },
    { caption: "[caption two]", rotate: "2.5deg", lift: "-16px", z: 4 },
    { caption: "[caption three]", rotate: "-2deg", lift: "24px", z: 1 },
    { caption: "[caption four]", rotate: "3.5deg", lift: "-4px", z: 3 },
  ],
};

export type ProcessStep = {
  eyebrow: string;
  before: string;
  marked: string;
  after: string;
  /** How the marked word is emphasised. The highlighter only reads on paper. */
  emphasis: "circle" | "marker" | "none";
  /** The panel tone behind this step. The section ends on paper. */
  tone: "night" | "paper";
  script: string;
  body: string;
  art: "discover" | "design" | "ship";
};

export const process: ProcessStep[] = [
  {
    eyebrow: "01 — Discover",
    before: "First, I ",
    marked: "wander",
    after: " around the problem.",
    emphasis: "circle",
    tone: "night",
    script: "(before a single line of code)",
    body: "API boundaries, data shape, failure modes, and what actually happens at ten thousand concurrent users. I would rather find the bottleneck on a whiteboard than in production at 2am.",
    art: "discover",
  },
  {
    eyebrow: "02 — Design",
    before: "Then I sketch it out.",
    marked: "",
    after: "",
    emphasis: "none",
    tone: "night",
    script: "(every pixel, justified)",
    body: "Schemas, indexes and queue topology first, then the interface. Every endpoint gets a contract before it gets an implementation, and every screen gets a reason for existing.",
    art: "design",
  },
  {
    eyebrow: "03 — Build & ship",
    before: "Build it. ",
    marked: "Ship it.",
    after: " Learn. Repeat.",
    emphasis: "marker",
    tone: "paper",
    script: "(then do it again, better)",
    body: "Typed end to end, containerised, behind CI that finishes in under fifteen minutes. Then load tests, monitoring, and an honest post-mortem on anything that surprised us.",
    art: "ship",
  },
];

export const work = {
  eyebrow: "Work",
  headingBefore: "Things I’ve ",
  headingCircled: "shipped",
  headingAfter: " end to end",
  body: "Enterprise platforms for the UAE and India — e-commerce, fintech, logistics and healthcare. Mostly the kind where the hard part is what happens under load, not what happens on the happy path.",
};

export type Project = {
  slug: string;
  initials: string;
  name: string;
  domain: string;
  dates: string;
  tagline: string;
  body: string;
  aside: string;
  badges: { label: string; tone: "featured" | "achieve" }[];
  wins?: string[];
  explainer?: { title: string; body: string };
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  /** Shown when there is nothing public to link to. */
  privateNote?: string;
  terminal: { file: string; lines: { text: string; tone?: "accent" | "green" | "amber" }[] };
};

export const projects: Project[] = [
  {
    slug: "muthoot-exim",
    initials: "ME",
    name: "Muthoot Exim",
    domain: "digital gold platform",
    dates: "2025",
    tagline: "Buy gold, redeem it from a vault, and keep the ledger honest.",
    body: "A digital gold transaction platform covering purchases, vault redemptions and ERP ledger synchronisation. Built as a TypeScript monorepo on Bun, Next.js and Express, with Kafka and BullMQ carrying the event load.",
    aside: "50,000 a day",
    badges: [
      { label: "Featured project", tone: "featured" },
      { label: "50,000+ transactions daily", tone: "achieve" },
    ],
    wins: [
      "Kafka and BullMQ event queues processing 50,000+ financial transactions a day.",
      "An AI support bot on Google Gemini and Qdrant vector search, automating 60% of customer enquiries.",
      "ERP ledger synchronisation, so the vault and the books never disagree.",
    ],
    stack: ["Bun", "Next.js", "Node.js", "Prisma", "MariaDB", "Kafka", "BullMQ", "Qdrant"],
    privateNote: "Client platform · private source",
    terminal: {
      file: "~/muthoot-exim",
      lines: [
        { text: "$ git log --format=%s -4", tone: "accent" },
        { text: "feat(vault): redemption + ERP ledger sync" },
        { text: "perf(queue): kafka partitions for txn fan-out" },
        { text: "feat(ai): gemini + qdrant support bot" },
        { text: "$ bun run build  ✓ done in 2.1s", tone: "green" },
      ],
    },
  },
  {
    slug: "yateem-opticians",
    initials: "YT",
    name: "Yateem Opticians",
    domain: "yateem.com/ae-en",
    dates: "2025",
    tagline: "Luxury eyewear e-commerce, built for how the UAE actually pays.",
    body: "Full-stack features for a major UAE optical retailer: product discovery across luxury eyewear, contact lenses and prescription orders, plus the commerce workflows around them — wishlist, store locator, prescription validation and home try-on booking.",
    aside: "my current obsession",
    badges: [
      { label: "UAE e-commerce", tone: "featured" },
      { label: "Apple Pay · Tabby · Tamara", tone: "achieve" },
    ],
    stack: ["Next.js", "Node.js", "Tabby", "Tamara", "Apple Pay", "Google Pay"],
    liveUrl: "https://yateem.com/ae-en",
    terminal: {
      file: "yateem/checkout.config.ts",
      lines: [
        { text: "export const gateways = [" },
        { text: '  "apple_pay", "google_pay",', tone: "amber" },
        { text: '  "samsung_pay",', tone: "amber" },
        { text: '  "tabby",   // BNPL', tone: "green" },
        { text: '  "tamara",  // BNPL', tone: "green" },
        { text: "];" },
      ],
    },
  },
  {
    slug: "laundry-hub",
    initials: "LH",
    name: "Laundry Hub",
    domain: "thelaundryhub.ae",
    dates: "2024",
    tagline: "Multi-tenant logistics across UAE cities, in Arabic and English.",
    body: "A multi-tenant logistics platform with fully bilingual interfaces and RTL layout support throughout. Drivers are dispatched geospatially, tracked live, and paid through a regional gateway.",
    aside: "right to left, properly",
    badges: [
      { label: "Arabic / English RTL", tone: "featured" },
      { label: "40% faster dispatch", tone: "achieve" },
    ],
    wins: [
      "Geospatial driver dispatch and delivery-zone management with Turf.js and MongoDB geospatial indexes, cutting assignment latency by 40%.",
      "Socket.IO for live driver tracking and status alerts.",
      "PayTabs regional payment processing, Redux Toolkit and TanStack Query on the front.",
    ],
    explainer: {
      title: "how the RTL actually works",
      body: "Mirroring a layout is the easy half. The hard half is everything that assumes left-to-right — icon direction, number formatting, date order, carousel gestures, and the dozens of places a hard-coded margin-left quietly breaks the page for half your users.",
    },
    stack: ["Next.js", "Express", "MongoDB", "Redux Toolkit", "TanStack Query", "Socket.IO", "PayTabs"],
    liveUrl: "https://thelaundryhub.ae/en/",
    terminal: {
      file: "~/laundry-hub",
      lines: [
        { text: "$ git log --format=%s | grep ^feat", tone: "accent" },
        { text: "feat(i18n): full RTL pass, ar + en" },
        { text: "feat(dispatch): turf.js zone matching" },
        { text: "feat(track): socket.io driver channel" },
        { text: "$ assignment latency  -40%", tone: "green" },
      ],
    },
  },
  {
    slug: "talkiyo",
    initials: "TK",
    name: "Talkiyo",
    domain: "real-time communication",
    dates: "2025",
    tagline: "Two thousand simultaneous calls, billed by the minute.",
    body: "A high-concurrency audio and video platform with pay-per-minute billing on top. The interesting problem was never the calls — it was keeping a double-entry wallet reconciled across more than 100,000 transactions while they were happening.",
    aside: "2,000 at once",
    badges: [{ label: "2,000+ concurrent calls", tone: "achieve" }],
    stack: ["TypeScript", "Express", "MongoDB", "Agora RTC", "Socket.IO", "Redis"],
    privateNote: "Client platform · private source",
    terminal: {
      file: "~/talkiyo",
      lines: [
        { text: "$ k6 run load/calls.js", tone: "accent" },
        { text: "  vus............: 2000" },
        { text: "  rtc_connect....: p(95)=210ms", tone: "green" },
        { text: "  wallet_recon...: 100,000+ txns ✓", tone: "green" },
      ],
    },
  },
  {
    slug: "muthoot-capital-loan-assistant",
    initials: "MC",
    name: "Muthoot Capital Loan Assistant",
    domain: "RAG fintech assistant",
    dates: "2026 — Present",
    tagline: "A loan and KYC assistant that refuses to make things up.",
    body: "A full-stack retrieval-augmented support platform for loan and KYC queries, streaming answers in real time. Most of the engineering went into the guardrails rather than the generation.",
    aside: "what I’m on now",
    badges: [
      { label: "Featured project", tone: "featured" },
      { label: "RAGAS-evaluated", tone: "achieve" },
    ],
    wins: [
      "Real-time streaming responses grounded strictly in retrieved documents.",
      "PII redaction and prompt-injection guardrails on every inbound message.",
      "RAGAS quality evaluation in the loop, so regressions are caught before users see them.",
    ],
    explainer: {
      title: "why guardrails, not vibes",
      body: "A support bot in lending cannot improvise. Every answer is grounded in retrieved policy documents, personal data is redacted before it reaches the model, injected instructions are stripped, and answer quality is scored with RAGAS rather than judged by eye.",
    },
    stack: ["FastAPI", "Qdrant", "OpenAI", "BullMQ", "PostgreSQL"],
    privateNote: "Client platform · private source",
    terminal: {
      file: "~/loan-assistant",
      lines: [
        { text: "$ uvicorn main:app --reload", tone: "accent" },
        { text: "INFO  qdrant collection ready" },
        { text: "INFO  pii redactor  ✓", tone: "green" },
        { text: "INFO  injection guard ✓", tone: "green" },
        { text: "INFO  ragas eval    ✓", tone: "green" },
      ],
    },
  },
];

export const lab = {
  eyebrow: "The lab",
  headingBefore: "Side quests & weekend ",
  headingUnderlined: "builds",
  body: "Where I go to learn something before it shows up in production — mostly AI infrastructure lately.",
  aside: "no tutorials were harmed",
  experiments: [
    {
      repo: "~/rag-production",
      year: "2026",
      name: "rag-production",
      note: "[One line: what you were working out about production RAG here.]",
      lang: "Python",
      dot: "#3572a5",
      repoUrl: "https://github.com/fawasam/rag-production",
    },
    {
      repo: "~/agentic-ai-mastery",
      year: "2026",
      name: "agentic-ai-mastery",
      note: "[One line: which agent patterns you were pulling apart.]",
      lang: "Python",
      dot: "#3572a5",
      repoUrl: "https://github.com/fawasam/agentic-ai-mastery",
    },
    {
      repo: "~/AI-powered-Commercial-Real-Estate",
      year: "2026",
      name: "AI-powered Commercial Real Estate",
      note: "[One line: what this one does and why you built it.]",
      lang: "Python",
      dot: "#3572a5",
      repoUrl: "https://github.com/fawasam/AI-powered-Commercial-Real-Estate",
    },
    {
      repo: "~/Linkedln-content-automation",
      year: "2026",
      name: "LinkedIn content automation",
      note: "[One line: the bit of your own workflow this automates.]",
      lang: "TypeScript",
      dot: "#3178c6",
      repoUrl: "https://github.com/fawasam/Linkedln-content-automation",
    },
    {
      repo: "~/FYUGP",
      year: "2024",
      name: "FYUGP",
      note: "[One line: what it does for whoever uses it.]",
      lang: "TypeScript",
      dot: "#3178c6",
      liveUrl: "https://fyugp.vercel.app",
      repoUrl: "https://github.com/fawasam/FYUGP",
    },
  ],
  offKeyboard: {
    headingBefore: "Off the ",
    headingUnderlined: "keyboard",
    body: "[What you do when you are not building — the walking, the reading, the photos.]",
    // Heights drive the masonry rhythm. Swap for real images at the same ratios.
    gallery: [240, 180, 300, 200, 260, 170, 190, 250, 210],
  },
};

export const fun = {
  eyebrow: "Easter egg",
  headingBefore: "You found the ",
  headingCircled: "fun",
  headingAfter: " part.",
  aside: "try me!",
  body: "An old CRT wired to a dot-matrix printer. Every press prints a photo or a number from something I shipped. Completely useless. Absolutely essential.",
  fortunes: [
    { kind: "real number · muthoot exim", text: "50,000+ financial transactions a day" },
    { kind: "quote", text: "“Find the bottleneck on a whiteboard, not at 2am.”" },
    { kind: "real number · laundry hub", text: "assignment latency: -40%" },
    { kind: "real number · release pipeline", text: "build times: hours → under 15 minutes" },
    { kind: "joke", text: "[The programming joke you tell too often.]" },
    { kind: "real number · talkiyo", text: "2,000 concurrent calls, one wallet ledger" },
  ],
};

export const contact = {
  eyebrow: "Contact",
  headingBefore: "Let’s build something ",
  headingUnderlined: "remarkable",
  aside: "I reply faster than my code compiles ⚡",
  body: "I am open to UAE and GCC relocation, remote and hybrid roles, and interesting problems generally. Tell me what you are building.",
  reasons: [
    "Full-time role",
    "Freelance project",
    "Collaboration",
    "Just saying hello",
    "Other",
  ],
};

export const socials = [
  { label: "GitHub", href: "https://github.com/fawasam", icon: "github" as const },
  { label: "LinkedIn", href: "https://linkedin.com/in/fawas-am", icon: "linkedin" as const },
  { label: "Email", href: "mailto:fawasmundakkottil@gmail.com", icon: "mail" as const },
];

export const footer = {
  aside: "say hi whenever ✌︎",
  madeWith: "Made with ♥ & lots of coffee",
};

export type Slip =
  | { kind: "photo"; caption: string }
  | { kind: "quote"; quote: string; attribution: string };

export const memoryPrinter = {
  aside: "psst — press the button",
  headingBefore: "The ",
  headingSquiggle: "memory printer",
  body: "An old CRT hooked up to a dot-matrix printer. Every press prints a photo from [your camera roll] or a number from something I shipped. Completely useless. Absolutely essential.",
  slips: [
    { kind: "photo", caption: "[caption from your camera roll]" },
    { kind: "quote", quote: "“50,000+ transactions a day.”", attribution: "— muthoot exim" },
    { kind: "photo", caption: "[somewhere you went]" },
    { kind: "quote", quote: "“Coffee consumed: ∞”", attribution: "— a very real stat" },
    { kind: "photo", caption: "[the one you always show people]" },
    { kind: "quote", quote: "“Critical incidents, down 40%.”", attribution: "— worth the on-call" },
  ] as Slip[],
};
