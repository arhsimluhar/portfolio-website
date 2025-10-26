// Centralized sample content. Replace with your own.
// You can also split these into JSON files and fetch() when served over HTTP.

const SITE = {
  name: "Rahul Mishra",
  title: "Principal Software Engineer",
};

const PROJECTS = [
  {
    id: "event-platform",
    name: "Event Platform Modernization",
    summary: "Migrated monolith to event-driven platform (Kafka), enabled product teams to self-serve",
    tags: ["platform", "distributed", "kafka", "go", "aws"],
    year: 2023,
    link: "#",
    featured: true,
  },
  {
    id: "payments-scale",
    name: "Payments at 10k TPS",
    summary: "High-throughput payment processing with idempotency, SLOs, and observability",
    tags: ["distributed", "data", "postgres", "sre"],
    year: 2021,
    link: "#",
    featured: true,
  },
  {
    id: "devex-paved-road",
    name: "Paved Road for Services",
    summary: "Golden paths, templates, and CI/CD enabling faster, safer delivery",
    tags: ["devex", "platform", "typescript"],
    year: 2022,
    link: "#",
    featured: true,
  },
  {
    id: "observability-overhaul",
    name: "Observability Overhaul",
    summary: "Unified tracing/metrics/logs, reduced MTTR by 35%",
    tags: ["sre", "platform", "observability"],
    year: 2020,
    link: "#",
  },
];

const POSTS = [
  {
    slug: "hello-world",
    title: "Hello, World",
    date: "2025-01-01",
    tags: ["Leadership", "Systems"],
    description: "A quick hello and what to expect from this blog.",
    href: "posts/hello-world.html",
  },
  {
    slug: "system-design-tradeoffs",
    title: "System Design is Choosing Constraints",
    date: "2024-09-12",
    tags: ["Architecture", "Tradeoffs"],
    description: "Frameworks for making design decisions that age well.",
    href: "#",
  },
];

