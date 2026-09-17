export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  stack: string[];
  highlights: string[];
  diagram: string;
};

export const projects: Project[] = [
  {
    slug: "yateem-optician",
    title: "Yateem Optician",
    tagline: "UAE E-Commerce & Optical Platform",
    category: "E-commerce",
    year: "2025",
    stack: ["Next.js", "Payments", "Insurance"],
    highlights: [
      "Contributed to a UAE-focused optical e-commerce platform supporting eyeglasses, sunglasses, contact lenses, accessories, brands, and online shopping workflows.",
      "Customer-facing commerce: product discovery, search, cart, wishlist, orders, store locator, home try-on.",
      "UAE-specific commerce: AED pricing, localized delivery, and optical insurance eligibility via Emirates ID.",
      "Payments across Visa, Mastercard, Apple Pay, Samsung Pay, Google Pay, Tabby, and Tamara.",
    ],
    diagram: `graph TD
  Customer["Customer (Web / Mobile)"] --> Storefront["Next.js Storefront"]
  Storefront --> API["Commerce API"]
  API --> Catalog["Catalog & Search"]
  API --> Cart["Cart, Wishlist & Orders"]
  API --> Insurance["Insurance Eligibility (Emirates ID)"]
  API --> Payments["Payments: Visa / Apple Pay / Tabby / Tamara"]
  API --> Store["Store Locator & Home Try-On"]`,
  },
  {
    slug: "laundry-hub",
    title: "Laundry Hub",
    tagline: "On-Demand Laundry & Logistics Platform (UAE)",
    category: "Logistics",
    year: "2025",
    stack: [
      "Next.js 14",
      "TypeScript",
      "Redux Toolkit",
      "TanStack Query",
      "Express",
      "Socket.IO",
      "MongoDB",
      "Turf.js",
      "PayTabs",
      "Firebase FCM",
    ],
    highlights: [
      "Architected a REST API gateway and real-time logistics engine serving 4 decoupled clients: customer web/PWA, driver app, admin dashboard, and mobile gateway.",
      "Built a real-time driver dispatch engine with Socket.IO — live location tracking, dynamic order status, and SLA countdown timers for pickup and delivery acceptance windows.",
      "Replaced fixed-radius delivery limits with custom polygon geofencing (Turf.js), matching customer addresses to branch operating zones in real time.",
      "Integrated PayTabs and Apple Pay tokenized checkout alongside cash-on-delivery and an in-app wallet ledger with automated refunds and cashback.",
      'Designed a tiered loyalty engine ("Washwards": Silver/Gold/Platinum) with a dynamic pricing and coupon system handling minimum-order overrides and point redemption.',
      "Shipped a bilingual, offline-capable PWA with full Arabic RTL support via next-intl, plus an admin dashboard with live geofencing maps and analytics.",
    ],
    diagram: `graph TD
  ClientWeb["Customer Web App / PWA<br/>(Next.js 14, Redux Toolkit, next-intl)"] -->|REST API + FCM| Backend["Core REST API & Real-Time Gateway<br/>(Node.js, Express, Socket.IO)"]
  ClientMobile["Driver App<br/>(Socket.IO, Push Notifications)"] -->|WebSockets + REST| Backend
  AdminDashboard["Admin & Ops Dashboard<br/>(Next.js 14, TanStack Table, Leaflet)"] -->|REST API| Backend
  Backend --> MongoDB["MongoDB<br/>(Mongoose ORM)"]
  Backend --> PayTabs["PayTabs & Apple Pay"]
  Backend --> FCM["Firebase FCM / WhatsApp / SMS"]
  Backend --> TurfJS["Turf.js Geofencing"]`,
  },
  {
    slug: "muthoot-exim",
    title: "Muthoot Exim",
    tagline: "Digital Gold Platform",
    category: "Fintech",
    year: "2025",
    stack: [
      "Next.js",
      "Node.js",
      "Prisma",
      "MariaDB",
      "Redis",
      "Kafka",
      "BullMQ",
      "Qdrant",
    ],
    highlights: [
      "Enterprise digital gold platform for purchases, sales, transfers, and redemptions with full ERP integration.",
      "Monorepo (TypeScript, Bun, Next.js, Express.js) with Adapter and Factory patterns for modular ERP integration, enabling zero-disruption legacy migrations.",
      "Kafka + BullMQ event system handling 50,000+ daily transactions with guaranteed ledger sync and reconciliation.",
      "RAG platform (Gemini, Qdrant, Elasticsearch) automating 60% of policy and order support queries via multi-agent orchestration.",
      "Validated performance under load with K6 and JMeter; optimized DB connection pools and API latency by 35%, stable at 5,000+ concurrent sessions.",
    ],
    diagram: `graph TD
  Client["Web Client (Next.js)"] --> API["Express API<br/>(Monorepo: Bun, TypeScript)"]
  API --> Adapter["Adapter / Factory Layer"]
  Adapter --> ERP["Legacy ERP Systems"]
  API --> Kafka["Kafka + BullMQ<br/>Event Bus"]
  Kafka --> Ledger["Transaction Ledger<br/>(Prisma, MariaDB)"]
  API --> RAG["RAG Support Engine"]
  RAG --> Gemini["Google Gemini"]
  RAG --> Qdrant["Qdrant Vector DB"]
  RAG --> ES["Elasticsearch"]`,
  },
  {
    slug: "muthoot-capital",
    title: "Muthoot Capital",
    tagline: "Digital Financial Services Platform (FD & Loans)",
    category: "Fintech",
    year: "2025 – Present",
    stack: [
      "Next.js 15",
      "TypeScript",
      "Zustand",
      "Strapi v5",
      "MySQL",
      "Redis",
      "Razorpay",
      "Tailwind CSS",
      "Sentry",
      "CRM",
      "RSA-Encryption",
    ],
    highlights: [
      "Engineered an end-to-end digital investment and loan platform for Muthoot — customer KYC onboarding, Fixed Deposit (FD) yield calculators, and instant payment processing.",
      "Built on Next.js 15 App Router with TypeScript, Zustand, Radix UI, and Tailwind CSS, backed by a Strapi v5 headless CMS (Node.js/Express, MySQL) for content and rate-card management.",
      "Integrated Razorpay payments with webhook reconciliation and Nelito Core Banking via RSA-encrypted payloads for secure financial transactions.",
      "Architected real-time lead ingestion into LeadSquared CRM, automating the sales pipeline from onboarding through conversion.",
      "Developed custom Strapi admin dashboard widgets (e.g. FdRazorpayStatsWidget) for FD statistics and content workflows.",
      "Hardened the platform with Google reCAPTCHA v3, JOSE JWT session encryption, Redis-based rate limiting, and Sentry monitoring across environments.",
    ],
    diagram: `graph TD
  Client["Next.js 15 App Router<br/>(TypeScript, Zustand, Tailwind, Radix UI)"] --> API["Internal Next.js APIs & Edge Proxies"]
  Client --> CMS["Strapi v5 CMS<br/>(Express, MySQL)"]
  API --> LeadSquared["LeadSquared CRM Sync"]
  API --> Razorpay["Razorpay Gateway<br/>(Webhooks & Payments)"]
  API --> Nelito["Nelito Core Banking<br/>(RSA Encryption)"]
  API --> Redis["Redis Cache & Sessions"]`,
  },
  {
    slug: "talkiyo",
    title: "Talkiyo",
    tagline: "Real-Time Communication Platform",
    category: "Communication",
    year: "2024",
    stack: [
      "TypeScript",
      "Express",
      "MongoDB",
      "Agora",
      "Socket.IO",
      "Redis",
      "BullMQ",
      "Docker",
    ],
    highlights: [
      "High-concurrency platform handling 2,000+ simultaneous audio/video calls with pay-per-minute billing.",
      "Distributed presence and matchmaking via Socket.IO and Redis Adapter at sub-100ms latency.",
      "Fault-tolerant double-entry wallet ledger for call billing, referral rewards, and payouts across 100,000+ transactions with zero revenue leakage.",
    ],
    diagram: `graph TD
  User["User (Caller / Callee)"] --> Client["Client App"]
  Client --> Agora["Agora WebRTC<br/>(Audio / Video)"]
  Client --> Signaling["Socket.IO Signaling"]
  Signaling --> RedisAdapter["Redis Adapter<br/>(Presence & Matchmaking)"]
  Signaling --> API["Express API"]
  API --> Wallet["Wallet Ledger<br/>(Billing & Payouts)"]
  API --> Mongo["MongoDB"]
  API --> Queue["BullMQ Async Jobs"]`,
  },
  {
    slug: "koot",
    title: "Koot",
    tagline: "Real-Time Audio/Video Consultation & Monetization Platform",
    category: "Communication",
    year: "2026 – Present",
    stack: [
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "Redis",
      "Agora",
      "React 18",
      "TypeScript",
      "Vite",
      "Razorpay",
      "AWS ECS",
    ],
    highlights: [
      "Architected a scalable real-time audio/video consultation and monetization platform using Node.js, Express, MongoDB, and Socket.IO within a monorepo (main-api, socket-service, shared).",
      "Engineered distributed real-time messaging with Socket.IO and a Redis Pub/Sub adapter, paired with Agora WebRTC for low-latency voice and video calls at scale.",
      "Built a virtual coin and wallet ledger engine — per-minute audio/chat billing, Razorpay top-ups, and automated staff payout calculations with audit logs.",
      "Developed a React 18, Vite, and TypeScript admin dashboard with TanStack Table, ApexCharts, and SWR for real-time telemetry and financial audit logs.",
      "Unified push notifications across Firebase FCM, iOS APNs, and Pushy for reliable call alerts across Android Doze and iOS background states.",
      "Deployed on AWS ECS with ElastiCache Redis and S3, instrumented with Sentry, Prometheus, and Grafana Loki for full observability.",
    ],
    diagram: `graph TD
  Admin["React 18 Admin Portal<br/>(Vite, TypeScript, Tailwind, TanStack, Zustand)"] -->|REST / SWR| API["Express Main API<br/>(Node.js Monorepo, Mongoose)"]
  Mobile["Mobile Clients<br/>(iOS & Android)"] -->|REST API| API
  Mobile -->|WebRTC| Agora["Agora Engine<br/>(Real-Time Audio/Video)"]
  API --> Socket["Socket.io Chat Service<br/>(Redis Adapter)"]
  API --> Cloud["Cloud Infrastructure<br/>(AWS ECS, Redis, S3, Razorpay, FCM/APNs)"]`,
  },
  {
    slug: "muthoot-capital-loan-assistant",
    title: "Muthoot Capital Loan Assistant",
    tagline: "RAG-Based Fintech Support System",
    category: "Fintech",
    year: "Personal project",
    stack: ["Next.js", "Qdrant", "Google Gemini", "PostgreSQL", "Kafka"],
    highlights: [
      "Full RAG-based loan/KYC support assistant, documented across all eight core RAG design pillars (retrieval, generation, evaluation, and security).",
      "Dual-lane architecture: synchronous query resolution alongside async Kafka-based data ingestion, backed by a PostgreSQL/Qdrant/Redis data model.",
      "Built-in PII redaction and prompt-injection defenses, with a RAGAS-based evaluation strategy for measuring retrieval accuracy and response quality.",
    ],
    diagram: `graph TD
  User["User Query"] --> Gateway["RAG Gateway"]
  Gateway --> Sync["Synchronous Lane"]
  Gateway --> Async["Async Lane<br/>(Kafka Ingestion)"]
  Sync --> Qdrant["Qdrant Vector Search"]
  Sync --> Gemini["Google Gemini"]
  Sync --> Security["PII Redaction &<br/>Prompt-Injection Defense"]
  Async --> Postgres["PostgreSQL"]
  Async --> Qdrant`,
  },
];
