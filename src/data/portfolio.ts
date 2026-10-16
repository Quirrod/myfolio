export interface Project {
  title: string;
  kind: "Product" | "Personal project" | "Client work" | "Side project";
  context?: string;
  problem?: string;
  description: string;
  link?: string;
  linkLabel?: string;
  repo?: string;
  img?: string;
  tags: string[];
  year: string;
  featured?: boolean;
  proprietary?: boolean;
  diagram?: "crates" | "invoicing" | "modular" | "integrations";
}

const BASE = "/myfolio";

export const projects: Project[] = [
  {
    title: "Kipu — parcel-tracking SaaS for Bolivian terminal couriers",
    kind: "Product",
    context: "My own product · React, NestJS, PostgreSQL · in staging",
    problem:
      "Parcel companies at Bolivian bus terminals still track shipments in notebooks and receipt books, and their customers have to call to find out where a parcel is. Counter staff work in a hurry, on phones or old computers, often without signal.",
    description:
      "I am building it end to end: three React apps (the company panel as an offline-capable PWA, the superadmin panel, and a public tracking page that takes each company's branding) over a NestJS API on Fastify and PostgreSQL, with row-level security isolating every company. It covers the whole parcel cycle: priced registration, labels, dispatch manifests, receiving at destination, WhatsApp notices with a pickup PIN, payment and the daily cash close. 50 architecture decision records, 40 Playwright end-to-end flows and 92 unit-test files keep it honest.",
    link: "https://137-184-226-175.sslip.io/",
    linkLabel: "Live demo (staging)",
    img: `${BASE}/kipu.webp`,
    tags: ["React", "TypeScript", "NestJS", "PostgreSQL", "PWA", "Playwright"],
    year: "2026 — present",
    featured: true,
  },
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
    title: "SubLab Bolivia — website, catalog and quotes",
    kind: "Client work",
    context: "Freelance · sublimation and custom-products business",
    description:
      "I built the business's site in Astro: product lines, ordering process, gallery and quote requests, with SEO metadata, Open Graph and structured data. Then a digital catalog driven by one JSON product database, a Canva app for editing designs from that catalog, quotation PDFs rendered with Puppeteer, and online payment for quotes through Polar.",
    link: "https://www.sublabbolivia.com",
    img: `${BASE}/sublab.webp`,
    tags: ["Astro", "TypeScript", "Freelance", "Payments"],
    year: "2025 — 2026",
  },
  {
    title: "ChildFund Bolivia — National Climate Agenda 2025–2030",
    kind: "Client work",
    context: "Freelance, direct for ChildFund Bolivia · WordPress and Elementor",
    description:
      "I built the page presenting Bolivia's National Sustainability and Climate Action Agenda 2025–2030, written by young people from ChildFund's PACTO program at a national meeting in Tarija. It walks through the agenda's seven strategic axes and its 2025 to 2030 route, the mission and vision with video, the national goals, and animated counters for the meeting's participation, inside ChildFund Bolivia's existing site.",
    link: "https://childfundbolivia.org/agenda/",
    img: `${BASE}/childfund-agenda.webp`,
    tags: ["WordPress", "Elementor", "Freelance", "Nonprofit"],
    year: "2025",
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
    tags: ["Java 21", "Spring", "Integrations", "REST"],
    year: "2023 — 2026",
    proprietary: true,
  },
  {
    title: "Bugabooo",
    kind: "Side project",
    context: "Team of two · I wrote 97 of 134 commits, most of the front end",
    description:
      "Developers share code and get feedback on specific lines. I built the CodeMirror code viewer, comments anchored to a line and shown in a modal, upvotes and downvotes on code and comments, file upload, a My Codes page, pagination and the sign-up and login flow. Next.js, React Query and react-hook-form over a Strapi and PostgreSQL backend.",
    link: "https://bugaboo-kohl.vercel.app",
    img: `${BASE}/bugaboo-page.webp`,
    tags: ["React", "Next.js", "TypeScript"],
    year: "2023",
  },
  {
    title: "Extension Ticket",
    kind: "Side project",
    context: "Team of three · I built the events pages",
    description:
      "Event creation and ticket sales on the Internet Computer, with a Motoko backend and a React front end. My part was the events experience: the responsive upcoming-events grid, the event page's opening section, image components with blur and gradient overlays, image upload types, event routes and the not-found page. TanStack Router, React Query and NextUI.",
    link: "https://pr27f-vqaaa-aaaan-qmhqa-cai.icp0.io/",
    img: `${BASE}/extension_ticket.webp`,
    tags: ["React", "Front end", "Web3"],
    year: "2024",
  },
  {
    title: "Knock Note",
    kind: "Side project",
    context: "Solo · technical challenge for Ensolvers",
    description:
      "A full-stack notes app: create, edit, archive and delete notes, tag them, and search by tag across active and archived notes, with pagination. React with React Query, React Router and react-hook-form, over a NestJS REST API with TypeORM and PostgreSQL, plus a one-command run script.",
    link: "https://ensolver-challenge.vercel.app",
    img: `${BASE}/ensolver.webp`,
    tags: ["React", "TypeScript", "NestJS", "PostgreSQL"],
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
      "Full-stack work on a US ad-tracking and attribution SaaS: Java 21 and Spring monorepo with a React and TypeScript front end over MySQL, on AWS, working remote with a US team for 2.5 years.",
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
      "Built full-stack applications with React, Angular, NestJS and TypeScript, including reusable UI components wired to REST APIs.",
      "Took over production systems built by other teams: reconstructed the data model, API contracts and business flow before changing anything.",
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Front end",
    items: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Angular", "Tailwind", "Astro"],
  },
  {
    group: "Backend",
    items: ["TypeScript", "Node.js", "NestJS", "Express", "Java 21", "Spring Boot", "REST", "GraphQL"],
  },
  {
    group: "Data",
    items: ["PostgreSQL", "MySQL", "MongoDB", "TypeORM", "Hibernate/JPA", "Query optimisation"],
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
  { value: 5, suffix: "", label: "business domains moved to a modular NestJS API" },
  { value: 20, suffix: "+", label: "external platforms integrated" },
  { value: 12, suffix: "", label: "crates in my board-game engine" },
];

export const marquee = [
  "React", "TypeScript", "JavaScript", "Node.js", "NestJS", "Java 21", "Spring",
  "PostgreSQL", "MySQL", "GraphQL", "REST", "Docker", "AWS", "Rust",
  "TypeORM", "Claude Code", "Linux",
];

export const roles = [
  "React interfaces",
  "full-stack products",
  "third-party integrations",
  "systems that stay correct",
  "board-game engines",
];
