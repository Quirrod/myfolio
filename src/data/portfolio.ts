export interface Project {
  title: string;
  kind: "Personal project" | "Client work" | "Side project";
  context?: string;
  problem?: string;
  description: string;
  link?: string;
  repo?: string;
  img?: string;
  tags: string[];
  year: string;
  featured?: boolean;
  proprietary?: boolean;
  diagram?: "crates" | "invoicing" | "modular" | "integrations";
}

const BASE = "https://quirrod.github.io/myfolio";

export const projects: Project[] = [
  {
    title: "BGG — digital board-game engine",
    kind: "Personal project",
    context: "Rust, in progress",
    problem:
      "Every hobby board-game engine I looked at hard-coded one game's rules into its UI and networking, so a second title meant forking the whole thing.",
    description:
      "A 12-crate workspace with explicit boundaries between rules core, presentation, networking and game definitions, so adding a title is writing a definition rather than forking the engine. Rules execute on a virtual machine deliberately split into two VMs, one for setup and one for play, and a visual graph editor compiles a designed graph into executable rules. The master plan, VM specification and game-definition format live in-repo as decision records.",
    repo: "https://github.com/Quirrod/bgg",
    diagram: "crates",
    tags: ["Rust", "Architecture", "VM design", "Game engine"],
    year: "2026 — present",
    featured: true,
  },
  {
    title: "Electronic tax-invoicing integration",
    kind: "Client work",
    context: "Breick-Incadex · Bolivian SIN via Emizor",
    problem:
      "Invoices must be filed with the national tax authority in real time. When their service is unreachable, the sale still has to happen and the document still has to file eventually. Losing one is a legal problem, not a bug.",
    description:
      "I designed the API and XML contracts, service authentication, an offline contingency mode that queues and automatically resubmits, and alerting on rejected or incomplete documents. The governing decision was that no fiscal document is ever lost when the provider goes down.",
    diagram: "invoicing",
    tags: ["NestJS", "TypeScript", "Integrations", "Compliance"],
    year: "2023 — 2026",
    proprietary: true,
  },
  {
    title: "Monolith to domain-modular API",
    kind: "Client work",
    context: "Breick-Incadex · ERP platform",
    problem:
      "A single Express application had grown to cover sales, stock, billing, pricing and promotions at once, and every change risked the other four.",
    description:
      "I led the decomposition into a domain-modular NestJS architecture, defining the code boundaries and integration contracts before any code moved, with TypeORM, JWT authentication and a GraphQL layer over the same services. Those domains still deploy as one unit, which was right at that size; the contracts are what would make extracting one later a deployment change rather than a rewrite.",
    diagram: "modular",
    tags: ["NestJS", "Architecture", "PostgreSQL", "GraphQL"],
    year: "2023 — 2026",
    proprietary: true,
  },
  {
    title: "20+ platform integrations at scale",
    kind: "Client work",
    context: "Ensolvers · client product Hyros, a US ad-attribution SaaS",
    problem:
      "Revenue attribution depended on data arriving correctly from payment processors, CRMs, marketing tools and ad networks, none of which I controlled, all of which failed differently.",
    description:
      "I built and maintained integrations across Stripe, PayPal, Shopify, WooCommerce, HubSpot, Klaviyo, Zapier, Google Ads and more, covering webhook ingestion, OAuth connection flows, API pagination and event mapping. I also fixed the revenue-correctness defects those pipelines produced: mispriced imports, uncounted discounts and refunds, duplicated sales, currency mismatches and rounding errors.",
    diagram: "integrations",
    tags: ["Java 21", "Spring Boot", "Integrations", "REST"],
    year: "2023 — 2026",
    proprietary: true,
  },
  {
    title: "Bugabooo",
    kind: "Side project",
    description: "A web app for developers to collaborate, share code and get feedback on it.",
    link: "https://bugaboo-kohl.vercel.app",
    img: `${BASE}/bugaboo-page.png`,
    tags: ["React", "TypeScript", "Full-stack"],
    year: "2024",
  },
  {
    title: "Extension Ticket",
    kind: "Side project",
    description: "Front end for a ticket-selling platform, deployed on the Internet Computer.",
    link: "https://pr27f-vqaaa-aaaan-qmhqa-cai.icp0.io/",
    img: `${BASE}/extension_ticket.png`,
    tags: ["React", "Front end", "Web3"],
    year: "2024",
  },
  {
    title: "Knock Note",
    kind: "Side project",
    description: "A small, fast note-taking app.",
    link: "https://ensolver-challenge.vercel.app",
    img: `${BASE}/ensolver.png`,
    tags: ["React", "TypeScript"],
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

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 4, suffix: "", label: "years building production systems" },
  { value: 120, suffix: "", label: "merged pull requests on one US SaaS" },
  { value: 20, suffix: "+", label: "external platforms integrated" },
  { value: 12, suffix: "", label: "crates in my board-game engine" },
];

export const marquee = [
  "TypeScript", "NestJS", "Node.js", "React", "Java 21", "Spring Boot",
  "PostgreSQL", "MySQL", "GraphQL", "REST", "Docker", "AWS", "Rust",
  "TypeORM", "Claude Code", "Linux",
];

export const roles = [
  "backend systems",
  "third-party integrations",
  "data correctness",
  "board-game engines",
];
