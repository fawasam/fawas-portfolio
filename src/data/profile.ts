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
  {
    label: "Next.js",
    bg: "bg-[#eef5fd]",
    text: "text-[#2563eb]",
    border: "border-[#cbe0fb]",
  },
  {
    label: "Kafka",
    bg: "bg-[#f2eefd]",
    text: "text-[#6339cc]",
    border: "border-[#dcd1f9]",
  },
  {
    label: "Agora",
    bg: "bg-[#e6f7f6]",
    text: "text-[#0f766e]",
    border: "border-[#bfe8e4]",
  },
  {
    label: "Google Gemini",
    bg: "bg-[#eefaf3]",
    text: "text-[#15803d]",
    border: "border-[#c4ebd3]",
  },
];

// Skills are derived automatically from every project's tech stack —
// see src/lib/skills.ts.
