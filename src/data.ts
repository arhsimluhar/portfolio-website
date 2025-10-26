export const SITE = {
  name: 'Rahul Mishra',
  title: 'Principal Software Engineer',
  social: {
    email: 'rahul.mishra2003@gmail.com',
    github: 'https://github.com/arhsimluhar',
    linkedin: 'https://www.linkedin.com/in/arhsimluhar',
    twitter: 'https://twitter.com/arhsimluhar',
  },
  location: 'Delhi, India',
  phone: '+91 9953 666 534',
}

export type Skills = {
  languages: string[]
  cloudDevOps: string[]
  databases: string[]
  frameworksTools: string[]
}

export const SKILLS: Skills = {
  languages: ['C/C++', 'Go', 'Python', 'Rust'],
  cloudDevOps: ['AWS', 'Docker', 'Jenkins', 'Terraform'],
  databases: ['PostgreSQL', 'Hive', 'Redis', 'DynamoDB'],
  frameworksTools: ['Django', 'Gin', 'Grafana', 'Looker', 'OpenTelemetry', 'Jira', 'CMake', 'Bash'],
}

export type Project = {
  id: string
  name: string
  summary: string
  tags: string[]
  year: number
  link?: string
  featured?: boolean
}

export const PROJECTS: Project[] = [
  {
    id: 'license-compliance-platform',
    name: 'License Compliance Platform',
    summary: 'Designed and led an internal security/compliance platform that detected 1M+ non‑compliant users; recovered over $16M in revenue.',
    tags: ['security', 'platform', 'aws', 'go'],
    year: 2023,
    link: '#',
    featured: true,
  },
  {
    id: 'secure-delivery-pipeline',
    name: 'Secure Delivery Pipeline Overhaul',
    summary: 'Instituted secure SDLC practices and paved‑road pipelines; 40% fewer post‑deploy incidents and 50% faster releases.',
    tags: ['devex', 'devsecops', 'jenkins', 'terraform'],
    year: 2024,
    link: '#',
    featured: true,
  },
  {
    id: 'scalable-data-access',
    name: 'Scalable Data Access Layer',
    summary: 'Introduced staged validation and canary rollout; enabled 3× scale with ~25% lower cost.',
    tags: ['distributed', 'data', 'aws', 'postgresql'],
    year: 2022,
    link: '#',
    featured: true,
  },
  {
    id: 'modular-service-migration',
    name: 'Modular Service Migration',
    summary: 'Led the move from a monolith to modular services with robust testing and CI/CD; improved developer productivity and reliability.',
    tags: ['architecture', 'microservices', 'testing'],
    year: 2020,
    link: '#',
  },
]

export type Post = {
  slug: string
  title: string
  date: string
  tags?: string[]
  description?: string
  href?: string
}

export const POSTS: Post[] = [
  {
    slug: 'hello-world',
    title: 'Hello, World',
    date: '2025-01-01',
    tags: ['Leadership', 'Systems'],
    description: 'A quick hello and what to expect from this blog.',
    href: '/posts/hello-world.html',
  },
  {
    slug: 'system-design-tradeoffs',
    title: 'System Design is Choosing Constraints',
    date: '2024-09-12',
    tags: ['Architecture', 'Tradeoffs'],
    description: 'Frameworks for making design decisions that age well.',
    href: '#',
  },
]
