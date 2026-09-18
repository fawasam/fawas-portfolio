import { projects } from "@/data/projects";

// Collapses near-duplicate stack entries (version-specific or casing
// variants) down to one canonical skill name.
const NORMALIZE: Record<string, string> = {
  "Next.js 14": "Next.js",
  "Next.js 15": "Next.js",
  "Next.js 16": "Next.js",
  "React 18": "React",
  "React 19": "React",
  Kafka: "Apache Kafka",
  ElasticSearch: "Elasticsearch",
  "Strapi v5": "Strapi",
  "GitLab CI/CD": "GitLab CI",
};

// Feature/business tags from early project entries — not technologies,
// so they're excluded from the skills list.
const EXCLUDE = new Set(["Insurance", "Payments", "CRM"]);

const CATEGORY_ORDER = [
  "Languages & Frontend",
  "3D, Animation & Creative",
  "Backend & CMS",
  "Real-Time & Communication",
  "Databases & Messaging",
  "AI & Search",
  "Cloud & DevOps",
  "Observability",
  "Payments & Security",
  "Geospatial & Maps",
  "Messaging & Email",
  "Other",
];

const CATEGORY_MAP: Record<string, string> = {
  TypeScript: "Languages & Frontend",
  "Next.js": "Languages & Frontend",
  React: "Languages & Frontend",
  "Tailwind CSS": "Languages & Frontend",
  Zustand: "Languages & Frontend",
  "Redux Toolkit": "Languages & Frontend",
  "TanStack Query": "Languages & Frontend",
  "TanStack Table": "Languages & Frontend",
  SWR: "Languages & Frontend",
  "Framer Motion": "Languages & Frontend",
  "Radix UI": "Languages & Frontend",
  Sonner: "Languages & Frontend",
  Vite: "Languages & Frontend",

  "Three.js": "3D, Animation & Creative",
  "React Three Fiber": "3D, Animation & Creative",
  GSAP: "3D, Animation & Creative",

  "Node.js": "Backend & CMS",
  Bun: "Backend & CMS",
  Express: "Backend & CMS",
  Strapi: "Backend & CMS",
  Prisma: "Backend & CMS",
  GraphQL: "Backend & CMS",
  FastAPI: "Backend & CMS",

  "Socket.IO": "Real-Time & Communication",
  Agora: "Real-Time & Communication",

  MongoDB: "Databases & Messaging",
  PostgreSQL: "Databases & Messaging",
  MySQL: "Databases & Messaging",
  MariaDB: "Databases & Messaging",
  Redis: "Databases & Messaging",
  "Upstash Redis": "Databases & Messaging",
  "Apache Kafka": "Databases & Messaging",
  BullMQ: "Databases & Messaging",

  "Google Gemini": "AI & Search",
  Qdrant: "AI & Search",
  Elasticsearch: "AI & Search",
  "CLIP (ViT-B/32)": "AI & Search",

  "AWS EC2": "Cloud & DevOps",
  "AWS ECS": "Cloud & DevOps",
  "AWS Lightsail": "Cloud & DevOps",
  "AWS CloudFront": "Cloud & DevOps",
  "AWS CodePipeline": "Cloud & DevOps",
  "AWS CodeBuild": "Cloud & DevOps",
  "Amazon ECR": "Cloud & DevOps",
  CloudWatch: "Cloud & DevOps",
  ElastiCache: "Cloud & DevOps",
  S3: "Cloud & DevOps",
  Docker: "Cloud & DevOps",
  "GitLab CI": "Cloud & DevOps",
  Jenkins: "Cloud & DevOps",
  SonarQube: "Cloud & DevOps",
  Nginx: "Cloud & DevOps",
  Coolify: "Cloud & DevOps",

  Sentry: "Observability",
  Prometheus: "Observability",
  "Grafana Loki": "Observability",
  Winston: "Observability",

  Razorpay: "Payments & Security",
  Stripe: "Payments & Security",
  Cashfree: "Payments & Security",
  PayTabs: "Payments & Security",
  OTPless: "Payments & Security",
  "RSA-Encryption": "Payments & Security",

  "Google Maps API": "Geospatial & Maps",
  "Turf.js": "Geospatial & Maps",

  "Firebase FCM": "Messaging & Email",
  Resend: "Messaging & Email",
};

export type SkillCategory = {
  category: string;
  skills: string[];
};

/** Loops through every project's tech stack to build a deduplicated,
 * categorized skills list — stays in sync automatically as projects change. */
function getSkillCategories(): SkillCategory[] {
  const seen = new Set<string>();
  const byCategory = new Map<string, string[]>();

  for (const project of projects) {
    for (const raw of project.stack) {
      const canonical = NORMALIZE[raw] ?? raw;
      if (EXCLUDE.has(canonical) || seen.has(canonical)) continue;
      seen.add(canonical);

      const category = CATEGORY_MAP[canonical] ?? "Other";
      if (!byCategory.has(category)) byCategory.set(category, []);
      byCategory.get(category)!.push(canonical);
    }
  }

  return CATEGORY_ORDER.filter((category) => byCategory.has(category)).map((category) => ({
    category,
    skills: byCategory.get(category)!.sort((a, b) => a.localeCompare(b)),
  }));
}

export const skillCategories = getSkillCategories();

/** Ranks skills by how many distinct projects use them, for a compact
 * "most-used" preview (e.g. on the homepage) instead of the full
 * category breakdown. */
function getTopSkills(limit: number): string[] {
  const counts = new Map<string, number>();

  for (const project of projects) {
    const uniqueInProject = new Set(
      project.stack.map((raw) => NORMALIZE[raw] ?? raw).filter((s) => !EXCLUDE.has(s)),
    );
    for (const skill of uniqueInProject) {
      counts.set(skill, (counts.get(skill) ?? 0) + 1);
    }
  }

  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit)
    .map(([skill]) => skill);
}

export const TOP_SKILLS_COUNT = 12;
export const topSkills = getTopSkills(TOP_SKILLS_COUNT);
