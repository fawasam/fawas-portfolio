export type Role = {
  title: string;
  period: string;
  tag: string;
  bullets: string[];
};

export type Company = {
  slug: string;
  name: string;
  location: string;
  folderColor: "blue" | "amber";
  roles: Role[];
};

export const experience: Company[] = [
  {
    slug: "webcastle-media",
    name: "WebCastle Media Pvt Ltd",
    location: "Ernakulam, India",
    folderColor: "blue",
    roles: [
      {
        title: "Team Lead, Software Development Engineer II",
        period: "Jul 2025 – Present",
        tag: "Current",
        bullets: [
          "Lead architecture and end-to-end delivery of 5+ enterprise platforms across financial services, healthcare, logistics, and e-commerce, consistently shipping on schedule with cross-functional teams of 8–12.",
          "Own system design for distributed applications supporting 10,000+ concurrent users, defining microservices architecture, caching strategy, and cloud-native deployment models on AWS and OCI.",
          "Architect event-driven systems using Apache Kafka, Redis Pub/Sub, and BullMQ, reducing async workflow processing latency by over 60% under peak transaction loads.",
          "Design and manage cloud infrastructure using Docker, ECS, EC2, S3, and Load Balancers with automated CI/CD pipelines, cutting manual release effort by 70% and improving deployment reliability.",
          "Mentor a team of 4 engineers, conduct architecture and code reviews, and establish engineering standards that reduced critical production incidents by 40%.",
        ],
      },
      {
        title: "Software Development Engineer II",
        period: "Aug 2024 – Jun 2025",
        tag: "Fintech & AI",
        bullets: [
          "Architected and delivered enterprise fintech web applications using Next.js, Node.js, TypeScript, MongoDB, PostgreSQL, and Redis, supporting thousands of concurrent users across production environments.",
          "Built scalable backend services with microservices patterns, distributed caching, and BullMQ-based async job pipelines, improving system throughput by 3x under sustained load.",
          "Developed AI-powered features including RAG pipelines, semantic vector search, recommendation engines, and multi-agent workflows using Google Gemini APIs and Qdrant, reducing support query resolution time by 50%.",
          "Implemented CI/CD pipelines with GitLab CI/CD, Jenkins, and Docker, reducing deployment cycle time from hours to under 15 minutes.",
        ],
      },
      {
        title: "Full Stack Developer",
        period: "Aug 2022 – Jul 2024",
        tag: "Web platforms",
        bullets: [
          "Developed 10+ production-grade web applications using Next.js, React, Node.js, Express.js, and MongoDB serving enterprise clients across India and the Middle East.",
          "Integrated payment gateways (Razorpay, Cashfree, PayTabs), third-party APIs, and ERP systems supporting complex financial workflows processing millions of transactions.",
          "Optimized API response times by up to 45% and reduced DB query latency by 35% through strategic caching, connection pooling, and index tuning.",
        ],
      },
    ],
  },
  {
    slug: "markaz-knowledge-city",
    name: "Markaz Knowledge City",
    location: "Calicut, India",
    folderColor: "amber",
    roles: [
      {
        title: "Software Development Engineer I",
        period: "May 2022 – Aug 2022",
        tag: "Part-time / Contract",
        bullets: [
          "Built and maintained enterprise web applications and internal management systems using Next.js, Node.js, PHP, MySQL, and AWS, supporting 5+ organizational departments.",
          "Designed RESTful APIs, authentication workflows, and third-party integrations; managed AWS infrastructure deployments, improving platform uptime to 99.5%.",
          "Optimized database queries, reducing average page load times by 30% across production platforms.",
        ],
      },
    ],
  },
];
