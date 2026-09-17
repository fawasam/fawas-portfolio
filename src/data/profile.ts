export const profile = {
  name: "Fawas A M",
  role: "Software Engineer & Technical Lead",
  location: "Ernakulam, India",
  email: "mynamefawas@gmail.com",
  github: "https://github.com/fawasam",
  linkedin: "https://linkedin.com/in/fawas-am",
  site: "https://fawasam.in",
};

export const metrics = [
  { value: "3+", label: "years of experience" },
  { value: "10K+", label: "concurrent users" },
  { value: "50K+", label: "daily transactions" },
  { value: "5+", label: "platforms shipped" },
];

type Pill = {
  label: string;
  bg: string;
  text: string;
  border: string;
};

export const headlinePills: Pill[] = [
  { label: "Next.js", bg: "bg-[#eef5fd]", text: "text-[#2563eb]", border: "border-[#cbe0fb]" },
  { label: "Kafka", bg: "bg-[#f2eefd]", text: "text-[#6339cc]", border: "border-[#dcd1f9]" },
  { label: "Redis", bg: "bg-[#fdeeee]", text: "text-[#c0392b]", border: "border-[#f5c6c3]" },
  { label: "Google Gemini", bg: "bg-[#eefaf3]", text: "text-[#15803d]", border: "border-[#c4ebd3]" },
];

export const skills = [
  "TypeScript",
  "Next.js",
  "Node.js",
  "Apache Kafka",
  "BullMQ",
  "Redis",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "OCI",
  "Docker",
  "Google Gemini",
  "Qdrant",
  "Socket.IO",
  "Agora",
  "GraphQL",
  "Elasticsearch",
  "Prisma",
  "Jenkins",
  "K6",
];
