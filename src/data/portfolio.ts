export interface Project {
  title: string;
  description: string;
  link?: string;
  repo?: string;
  img?: string;
  tags: string[];
  year: string;
  featured?: boolean;
  accent?: string;
}

const BASE = "https://quirrod.github.io/myfolio";

export const projects: Project[] = [
  {
    title: "BGG — digital board-game engine",
    description:
      "A board-game engine architected so one engine runs many titles instead of hard-coding a single game. 12-crate Rust workspace with explicit boundaries between rules core, presentation, networking and game definitions. Rules execute on a virtual machine split into separate VMs for setup and play, and a visual graph editor compiles a designed graph into executable rules. Architecture decisions are kept in-repo.",
    repo: "https://github.com/Quirrod/bgg",
    tags: ["Rust", "Architecture", "VM design", "Game engine"],
    year: "2026 — present",
    featured: true,
    accent: "from-orange-500/20 to-amber-500/5",
  },
  {
    title: "Bugabooo",
    description:
      "A web application for developers to collaborate, share code and get feedback on it.",
    link: "https://bugaboo-kohl.vercel.app",
    img: `${BASE}/bugaboo-page.png`,
    tags: ["React", "TypeScript", "Full-stack"],
    year: "2024",
  },
  {
    title: "Extension Ticket",
    description:
      "Front end for a ticket-selling platform, deployed on the Internet Computer.",
    link: "https://pr27f-vqaaa-aaaan-qmhqa-cai.icp0.io/",
    img: `${BASE}/extension_ticket.png`,
    tags: ["React", "Front end", "Web3"],
    year: "2024",
  },
  {
    title: "Knock Note",
    description: "A small, fast note-taking app.",
    link: "https://ensolver-challenge.vercel.app",
    img: `${BASE}/ensolver.png`,
    tags: ["React", "TypeScript"],
    year: "2023",
  },
  {
    title: "Movie Log",
    description: "A simple, clean directory for browsing films.",
    img: `${BASE}/movielog.png`,
    tags: ["React", "REST API"],
    year: "2023",
  },
];

export interface Role {
  company: string;
  title: string;
  period: string;
  location: string;
  points: string[];
  current?: boolean;
}

export const experience: Role[] = [
  {
    company: "Breick-Incadex SRL",
    title: "Software Consultant",
    period: "Mar 2023 — present",
    location: "La Paz, Bolivia",
    current: true,
    points: [
      "Promoted Developer to Team Lead to Software Consultant. I define how the billing, accounting, inventory and sales systems get built, and mentor the team.",
      "Led the decomposition of a monolithic Express backend into a domain-modular NestJS architecture across five business domains, defining boundaries and integration contracts first.",
      "Designed the SIN electronic tax-invoicing integration with offline contingency and automatic resubmission, so a fiscal document is never lost when the provider goes down.",
    ],
  },
  {
    company: "Ensolvers — client product Hyros",
    title: "Software Engineer",
    period: "Dec 2023 — Jul 2026",
    location: "Remote",
    points: [
      "Full-stack work on a US ad-tracking and attribution SaaS: Java 21 and Spring monorepo with a React and TypeScript front end over MySQL, on AWS. Roughly 120 merged pull requests.",
      "Built and maintained integrations with 20+ external platforms, covering webhook ingestion, OAuth flows, API pagination and event mapping.",
      "Fixed revenue-data correctness defects: mispriced imports, uncounted discounts and refunds, duplicated sales, currency mismatches and rounding errors.",
    ],
  },
  {
    company: "Shigong Bolivia SRL",
    title: "Web Developer",
    period: "Jan 2023 — Aug 2024",
    location: "Remote",
    points: [
      "Built full-stack applications with React, Angular, NestJS and TypeScript.",
      "Took over production systems built by other teams: reconstructed the data model, API contracts and business flow before changing anything.",
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Backend",
    items: ["TypeScript", "Node.js", "NestJS", "Express", "Java 21", "Spring Boot", "REST", "GraphQL"],
  },
  {
    group: "Data",
    items: ["PostgreSQL", "MySQL", "MongoDB", "TypeORM", "Hibernate/JPA", "Query optimisation"],
  },
  {
    group: "Front end",
    items: ["React", "Angular", "TypeScript", "Tailwind", "Astro"],
  },
  {
    group: "Ways of working",
    items: ["Docker", "Linux", "Git", "AWS", "New Relic", "Claude Code", "Code review", "ADRs"],
  },
];

export const roles = [
  "backend systems",
  "third-party integrations",
  "data correctness",
  "board-game engines",
];
