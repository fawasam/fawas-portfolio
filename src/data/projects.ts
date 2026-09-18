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
    slug: "muthoot-exim",
    title: "Muthoot Exim",
    tagline: "Meghanté Fine Jewellery & eSwarna Digital Gold Platform",
    category: "Fintech",
    year: "2026 – Present",
    stack: [
      "Bun",
      "TypeScript",
      "Next.js",
      "Prisma",
      "MariaDB",
      "Redis",
      "Kafka",
      "BullMQ",
      "Qdrant",
      "Elasticsearch",
      "Google Gemini",
      "FastAPI",
      "CLIP (ViT-B/32)",
      "Docker",
      "Jenkins",
      "SonarQube",
    ],
    highlights: [
      "Architected an omnichannel luxury jewellery and digital gold e-commerce platform (Meghanté / eSwarna) on a high-throughput Bun, Express, and Prisma backend, backed by MariaDB.",
      "Engineered an AI-powered visual search pipeline — a dedicated Python/FastAPI microservice running CLIP (ViT-B/32) to convert customer photos into 512-dimensional embeddings, enabling instant reverse-image search against Qdrant.",
      "Built a multi-agent RAG orchestrator (Google Gemini + Qdrant) with intent routing across policy, product discovery, and order-tracking agents, backed by Redis-based conversational memory.",
      "Delivered hybrid search combining Elasticsearch (faceted, typo-tolerant catalog search) and Qdrant (semantic, embedding-based recommendations).",
      "Engineered a resilient ERP adapter layer (Adapter/Factory pattern) for real-time bullion pricing, inventory sync, and OTP-authenticated digital gold vouchers.",
      "Built an event-driven backend with Apache Kafka for real-time inventory/order sync and BullMQ + Redis for background jobs, monitored via Bull-Board.",
      "Led Core Web Vitals optimization on the Next.js storefront — CloudFront CDN caching, eliminating layout shift (CLS to 0.00), and faster TTFB.",
      "Shipped enterprise CI/CD with multi-stage Docker builds, Jenkins and GitLab CI pipelines, and SonarQube static analysis for automated, zero-downtime deployments.",
    ],
    diagram: `graph TD
  Storefront["Customer Storefront<br/>(Next.js, React)"] --> Proxy["Nginx / CloudFront CDN"]
  Admin["Admin Dashboard<br/>(Next.js, Tailwind, Shadcn)"] --> Proxy
  Proxy --> API["Core API<br/>(Bun, Express, TypeScript)"]
  API --> DB["MariaDB / MySQL<br/>(Prisma ORM)"]
  API --> Queue["BullMQ + Redis"]
  API --> Kafka["Apache Kafka<br/>Event Streaming"]
  API --> ES["Elasticsearch"]
  API --> Qdrant["Qdrant Vector DB"]
  API --> RAG["Multi-Agent RAG<br/>(Gemini / Ollama)"]
  API --> Vision["Visual Search<br/>(FastAPI, CLIP ViT-B/32)"]
  API --> ERP["Enterprise ERP<br/>(REST Adapter)"]`,
  },
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
    slug: "care-talk",
    title: "Care-Talk",
    tagline: "Real-Time Tele-Health & Consultation Platform",
    category: "Communication",
    year: "May 2026 – Aug 2026",
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
      "Docker",
      "AWS ECS",
      "ElastiCache",
      "Sentry",
      "S3",
      "ElasticSearch",
      "Prometheus",
      "Grafana Loki",
      "Winston",
      "AWS CodePipeline",
      "AWS CodeBuild",
      "Amazon ECR",
      "CloudWatch",
      "Jenkins",
      "AWS Lightsail",
    ],
    highlights: [
      "Architected a real-time tele-consultation and wellness platform using Node.js, Express, MongoDB, and Socket.IO within a monorepo (main-api, socket-service, shared).",
      "Engineered distributed real-time messaging with Socket.IO and a Redis Pub/Sub adapter, paired with Agora RTC for sub-second latency audio/video consultations.",
      "Built a coin-ledger micro-billing engine — per-minute call/chat debits, Razorpay wallet top-ups, and automated consultant payout calculations with audit logs.",
      "Built high-performance MongoDB aggregation pipelines for missed-call tracking, daily performance indices, and financial payouts across millions of transactional records.",
      "Developed a React 18, Vite, and TypeScript admin suite (TanStack Table, Zustand, ApexCharts) for real-time telemetry, staff moderation, and dispute auditing.",
      "Unified push notifications across Firebase FCM, Apple APNs, and Pushy with TTL delivery rules and automated fallback, achieving 99%+ delivery reliability.",
      "Engineered enterprise observability with Winston and Grafana Loki log aggregation, Prometheus metrics, Sentry tracing, and automatic in-flight PII redaction — cutting MTTR by 40%.",
      "Automated zero-downtime AWS deployments with CodeBuild, ECR, and ECS Fargate blue/green rollouts via dynamic task-definition revisions, alongside a parallel Jenkins pipeline and CloudWatch monitoring.",
    ],
    diagram: `graph TD
  Admin["React 18 Admin Portal<br/>(Vite, TypeScript, Tailwind, TanStack, Zustand)"] -->|REST / SWR| API["Express Main API<br/>(Node.js Monorepo, Mongoose)"]
  Mobile["Mobile Clients<br/>(iOS & Android)"] -->|REST API| API
  Mobile -->|WebRTC| Agora["Agora Engine<br/>(Real-Time Audio/Video)"]
  API --> Socket["Socket.io Chat Service<br/>(Redis Adapter)"]
  API --> Cloud["Cloud Infrastructure<br/>(AWS ECS, Redis, S3, Razorpay, FCM/APNs)"]
  Cloud --> CloudWatch["CloudWatch Monitoring"]
  Cloud --> Observability["Observability<br/>(Winston, Grafana Loki, Prometheus, Sentry)"]
  GitPush["Git Push"] --> CodePipeline["AWS CodePipeline"]
  GitPush --> Jenkins["Jenkins Pipeline"]
  CodePipeline --> CodeBuild["AWS CodeBuild"]
  CodeBuild --> ECR["Amazon ECR"]
  ECR --> Cloud
  Jenkins --> Lightsail["AWS Lightsail"]`,
  },
  {
    slug: "south-urban-agro",
    title: "South Urban Agro",
    tagline: "Enterprise Headless Web Platform for a Multi-State Agri Co-operative",
    category: "Fintech",
    year: "Jun 2026 – Sep 2026",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Strapi v5",
      "PostgreSQL",
      "Tailwind CSS",
      "Framer Motion",
      "Docker",
      "GitLab CI/CD",
      "Coolify",
    ],
    highlights: [
      "Architected an enterprise agri-fintech headless web platform for South Urban Agro (a multi-state cooperative society) using Next.js 16 (App Router), React 19, TypeScript, and Strapi v5 CMS.",
      "Engineered a resilient, tiered failover pipeline — Strapi API to direct database to static snapshot fallback — guaranteeing zero-500 uptime if the CMS or database becomes unreachable.",
      "Modeled 30+ CMS content schemas (hero carousels, leadership directories, financial schemes, agri-credit blogs, document notices) with zero-stale dynamic rendering for instant content propagation.",
      "Built a dual-layer image validation engine enforcing aspect-ratio and dimension constraints client- and server-side, eliminating layout shift across the media pipeline.",
      "Automated Docker-based CI/CD with GitLab pipelines pushing multi-arch images to Docker Hub and triggering zero-downtime deployments via Coolify on AWS.",
      "Delivered a responsive, animated UI — mega-menu navigation, fuzzy site search, and a multi-slide hero carousel — with Tailwind CSS v4 and Framer Motion.",
    ],
    diagram: `graph TD
  Client["Next.js 16 (React 19)<br/>App Router, Tailwind CSS v4, Framer Motion"] --> CMS["Strapi v5 Headless CMS<br/>(TypeScript, PostgreSQL)"]
  CMS -->|Primary| API["Strapi CMS API"]
  API -.->|Fallback| DB["Direct Database Engine"]
  DB -.->|Fallback| Static["Static Snapshot<br/>(data/site.ts)"]
  Client --> CI["GitLab CI/CD<br/>(Docker, Docker Hub)"]
  CI --> Coolify["Coolify PaaS<br/>(AWS EC2)"]`,
  },
  {
    slug: "arikil",
    title: "Arikil",
    tagline: "Real-Time Video, Voice & Executive Consultation Platform",
    category: "Communication",
    year: "Feb 2026 – Aug 2026",
    stack: [
      "Node.js",
      "Express",
      "Socket.IO",
      "Agora",
      "Redis",
      "MongoDB",
      "React 18",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Table",
      "SWR",
      "Zustand",
      "AWS EC2",
      "ElastiCache",
      "S3",
      "Docker",
      "Nginx",
      "GitLab CI",
      "Prometheus",
      "Grafana Loki",
      "Winston",
      "Sentry",
      "Razorpay",
      "Stripe",
      "Cashfree",
      "OTPless",
    ],
    highlights: [
      "Architected a distributed real-time communication platform using a Node.js/Express monorepo, Agora WebRTC, and Socket.IO, achieving sub-second signaling latency for concurrent audio/video calling.",
      "Engineered horizontally scalable WebSocket infrastructure backed by a Redis Pub/Sub adapter on AWS ElastiCache, enabling cross-instance message routing, state sync, and room management.",
      "Integrated multi-gateway payment orchestration (Razorpay, Stripe, Cashfree, Airpay, TransactBridge) with webhook verification, automated billing fallbacks, and a transactional coin ledger for executive session payouts.",
      "Built a multi-provider push notification pipeline (APNs, Firebase FCM, Pushy) with delivery receipts and device tracking to maximize incoming call answer rates.",
      "Implemented an enterprise observability stack exposing Prometheus metrics, shipping structured logs to Grafana Loki, and a custom 3-tier fallback monitoring API with live dashboards.",
      "Developed a modern enterprise admin console in React 18, Vite, TypeScript, and Tailwind CSS — TanStack virtualized tables, SWR caching, FullCalendar scheduling, and role-based access control.",
      "Configured AWS cloud infrastructure and CI/CD (Docker, EC2, S3, ElastiCache Redis, GitLab CI/CD) for zero-downtime deployments across isolated staging/production environments.",
    ],
    diagram: `graph TD
  Admin["React 18 Admin Console<br/>(Vite, TypeScript, Tailwind, TanStack, SWR)"] --> API["Express Main API<br/>(Node.js Monorepo)"]
  Mobile["Mobile / Web Clients"] --> API
  Mobile -->|WebRTC| Agora["Agora RTC Engine<br/>(Audio / Video)"]
  API --> Socket["Socket.IO Mesh<br/>(Redis Pub/Sub Adapter)"]
  API --> Payments["Payment Gateways<br/>(Razorpay, Stripe, Cashfree, Airpay, TransactBridge)"]
  API --> Push["Push Dispatcher<br/>(APNs, FCM, Pushy)"]
  API --> Cloud["AWS Infrastructure<br/>(EC2, ElastiCache, S3)"]
  Cloud --> Observability["Observability<br/>(Prometheus, Grafana Loki, Sentry)"]`,
  },
  {
    slug: "akore-formulations",
    title: "Akore Formulations",
    tagline: "Luxury Cosmeceutical & Ayurceutical Headless Web Experience",
    category: "E-commerce",
    year: "Nov 2025 – Jul 2026",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Strapi v5",
      "MySQL",
      "GSAP",
      "Tailwind CSS",
      "Radix UI",
      "AWS CloudFront",
      "Sonner",
    ],
    highlights: [
      "Architected a decoupled enterprise web platform for Akore Formulations using Next.js 16 (React 19), TypeScript, and Strapi v5, cutting content deployment time by 80% through server-driven dynamic page components.",
      "Engineered a 60 FPS scrollytelling canvas animation engine with GSAP and ScrollTrigger, streaming 1,150+ high-res WebP frames over AWS CloudFront with chunked preloading and auto-retry logic for stutter-free playback.",
      "Designed relational schemas and REST APIs in Strapi v5 on MySQL — dynamic zones, nested component repeaters, and secure automated enquiry/form processing across 20+ custom controllers.",
      "Maximized organic search and accessibility with automated JSON-LD structured data and OpenGraph meta generation, plus accessible UI primitives (Radix UI) — achieving sub-second LCP and zero layout shift.",
      "Built modular Strapi content components enabling the marketing team to assemble new landing pages, blogs, and product categories (Qzome, Fluidis, Ayurceuticals) without code changes.",
      "Hardened production reliability — mitigated CVE vulnerabilities, configured reverse proxy routing, and automated MySQL backup pipelines.",
    ],
    diagram: `graph TD
  Client["Client Browser"] --> Next["Next.js 16 App Router<br/>(React 19, GSAP, Tailwind CSS)"]
  Next -->|Preloaded Frames| CDN["AWS CloudFront CDN<br/>(1,150+ WebP Frames)"]
  Next -->|REST API| CMS["Strapi v5 Headless CMS<br/>(TypeScript)"]
  CMS --> MySQL["MySQL 8 Database"]`,
  },
  {
    slug: "molecules",
    title: "Molecules",
    tagline: "Deep-Tech Nanotechnology WebGL Experience",
    category: "E-commerce",
    year: "Sep 2025 – Aug 2026",
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Three.js",
      "React Three Fiber",
      "GSAP",
      "Strapi v5",
      "MySQL",
      "Tailwind CSS",
      "Radix UI",
    ],
    highlights: [
      "Architected a high-performance decoupled web platform for Molecules using Next.js 15 (React 19), TypeScript, and Strapi 5 CMS with MySQL.",
      "Engineered an immersive 3D WebGL scrollytelling experience with Three.js and React Three Fiber, driving GSAP-choreographed camera navigation synced to scroll velocity and cursor physics.",
      "Wrote custom GLSL vertex and fragment shaders for an icosahedron wireframe mesh, simulating molecular morphing and frequency oscillations via simplex noise deformation.",
      "Built an SVG-to-particle dispersion engine converting vector logos into thousands of interactive WebGL points with proximity-aware mouse magnetism and spring-damping physics.",
      "Structured 20+ Strapi collection types and REST APIs for technologies, product lines, certifications, and research blogs, streamlining editorial workflows.",
      "Implemented end-to-end technical SEO — JSON-LD structured schemas, dynamic OpenGraph metadata, and automated sitemaps — alongside isolated client-boundary WebGL rendering to protect Core Web Vitals.",
    ],
    diagram: `graph TD
  Client["Client Browser"] --> Next["Next.js 15 App Router<br/>(React 19, Server Components)"]
  Next --> WebGL["3D WebGL Engine<br/>(Three.js, React Three Fiber, GSAP)"]
  WebGL --> Shaders["Custom GLSL Shaders<br/>(Molecular Morphing)"]
  WebGL --> Particles["SVG-to-Particle Engine<br/>(Cursor Physics)"]
  Next -->|REST API| CMS["Strapi 5 Headless CMS<br/>(TypeScript)"]
  CMS --> MySQL["MySQL Database"]`,
  },
  {
    slug: "morgan-fuel-lubes",
    title: "Morgan Fuel Lubes",
    tagline: "Commercial Fleet Fuel & Geospatial Platform (UK & Ireland)",
    category: "Logistics",
    year: "2025 – Present",
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Strapi v5",
      "GraphQL",
      "PostgreSQL",
      "Google Maps API",
      "Tailwind CSS",
      "Upstash Redis",
      "Resend",
      "Docker",
    ],
    highlights: [
      "Architected a production-grade headless platform from scratch with Next.js 15 (App Router) and Strapi v5 CMS, serving commercial fleet operators across the UK and Ireland.",
      "Engineered a geospatial site locator with Google Maps API and Places Autocomplete, plus custom polyline route-finding (getDirectionsWithSites) to plot en-route fueling stops for HGVs and fleet drivers.",
      "Built multi-faceted GraphQL querying with custom Strapi controllers for instant filtering by geographic zone, vehicle class (HGV/LCV/Car), and site amenities.",
      "Designed an automated bulk data ingestion pipeline (xlsx, Node.js) to normalize and validate station metadata with zero production downtime.",
      "Hardened security with Upstash Redis rate limiting, Zod schema validation, and automated lead routing via the Resend API across multi-country enquiry forms.",
      "Containerized the multi-service architecture with Docker Compose and Nginx, with GitLab CI pipelines and CSP-hardened headers.",
    ],
    diagram: `graph TD
  Client["Next.js 15 (React 19)<br/>App Router, Turbopack, Tailwind CSS"] -->|GraphQL & REST| CMS["Strapi v5 Headless CMS<br/>(TypeScript, PostgreSQL)"]
  CMS --> Maps["Google Maps API<br/>(Places, Directions)"]
  CMS --> Email["Resend Email API"]
  CMS --> Redis["Upstash Redis<br/>(Rate Limiting)"]`,
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
