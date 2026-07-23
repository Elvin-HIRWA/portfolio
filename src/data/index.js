export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Challenge', href: '#challenge' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { value: 3, suffix: '+', label: 'Years Experience', description: 'Building production systems' },
  { value: 10, suffix: '+', label: 'Projects', description: 'Shipped to production' },
  { value: 100, suffix: 'K+', label: 'API Requests', description: 'Processed daily' },
  { value: 20, suffix: '+', label: 'Technologies', description: 'In my toolbox' },
]

export const challengeItems = {
  title: 'Building Scalable Software Inside a Mature Codebase',
  subtitle: 'AcademicBridge Version 2 — A Case Study',
  challenges: [
    {
      icon: 'AlertCircle',
      title: 'Existing Codebase',
      description: 'A large, production codebase with years of accumulated technical debt and tightly coupled services.',
    },
    {
      icon: 'Users',
      title: 'Existing Users',
      description: 'Active users depending on the system 24/7 — zero tolerance for downtime or breaking changes.',
    },
    {
      icon: 'Zap',
      title: 'Performance Bottlenecks',
      description: 'Slow SQL queries and unoptimized data layers causing degraded user experience under load.',
    },
    {
      icon: 'Link',
      title: 'Backward Compatibility',
      description: 'Multiple mobile and web clients depending on stable, versioned API contracts.',
    },
    {
      icon: 'Wrench',
      title: 'Maintainability',
      description: 'Tangled business logic making new features slow and risky to ship.',
    },
  ],
  solutions: [
    {
      icon: 'Layers',
      title: 'Refactored Services',
      description: 'Decomposed monolithic controllers into focused service classes with clear responsibilities.',
    },
    {
      icon: 'Database',
      title: 'Optimized SQL',
      description: 'Rewrote N+1 queries, added strategic indexes, and tuned Eloquent relationships.',
    },
    {
      icon: 'Cpu',
      title: 'Redis Caching',
      description: 'Implemented intelligent cache layers for frequently accessed data, reducing DB load by 60%.',
    },
    {
      icon: 'Search',
      title: 'Laravel Scout + Meilisearch',
      description: 'Replaced slow LIKE queries with fast full-text search for instant results.',
    },
    {
      icon: 'Shield',
      title: 'API Compatibility',
      description: 'Introduced API versioning to evolve endpoints without breaking existing clients.',
    },
    {
      icon: 'CheckCircle',
      title: 'Automated Testing',
      description: 'Built a comprehensive test suite covering critical paths, enabling confident refactoring.',
    },
  ],
  results: [
    { icon: 'Layout', label: 'Cleaner Architecture', description: 'Modular, readable, testable codebase' },
    { icon: 'Rocket', label: 'Faster APIs', description: 'Response times improved by up to 4x' },
    { icon: 'Heart', label: 'Better DX', description: 'New features ship faster with less risk' },
    { icon: 'Shield', label: 'Reliable Deployments', description: 'CI/CD pipeline with automated testing' },
  ],
}

export const projects = [
  {
    id: 1,
    title: 'AcademicBridge',
    category: 'Education Platform',
    description:
      'Education management platform serving schools — handling student records, fee collection, exams, reporting, and multi-tenant school management.',
    longDescription:
      'A comprehensive SaaS platform built for educational institutions across Rwanda. Features multi-tenancy, role-based access control, real-time notifications, and detailed analytics dashboards.',
    technologies: ['Laravel', 'MySQL', 'Redis', 'Docker', 'React', 'Meilisearch'],
    color: 'brand',
    links: { github: '#', live: '#' },
    highlights: ['Multi-tenant architecture', 'Redis caching', 'Full-text search', 'REST API'],
  },
  {
    id: 2,
    title: 'Wedding Vendor Platform',
    category: 'SaaS / Marketplace',
    description:
      'A SaaS platform helping couples discover and book wedding venues in Rwanda — featuring subscriptions, booking calendars, payment integration, and vendor management.',
    longDescription:
      'Full-featured marketplace connecting couples with wedding vendors. Includes vendor onboarding, subscription billing, availability calendars, Paypack payment integration, and admin analytics.',
    technologies: ['Laravel', 'React', 'Tailwind', 'Paypack', 'MySQL', 'Redis'],
    color: 'accent',
    links: { github: '#', live: '#' },
    highlights: ['Payment integration', 'Subscription billing', 'Booking calendar', 'Vendor portal'],
  },
  {
    id: 3,
    title: 'API Platform',
    category: 'Backend Infrastructure',
    description:
      'Designed and built secure, scalable RESTful APIs for web and mobile applications with authentication, rate limiting, and comprehensive documentation.',
    longDescription:
      'A robust API platform serving multiple frontend clients. Features JWT authentication, OAuth2 support, request throttling, Swagger documentation, and automated testing.',
    technologies: ['Node.js', 'Laravel', 'REST API', 'Docker', 'PostgreSQL', 'Redis'],
    color: 'purple',
    links: { github: '#', live: '#' },
    highlights: ['JWT authentication', 'Rate limiting', 'API versioning', 'Swagger docs'],
  },
]

export const skillGroups = [
  {
    category: 'Backend',
    skills: [
      { name: 'PHP', level: 95 },
      { name: 'Laravel', level: 95 },
      { name: 'Node.js', level: 90 },
      { name: 'REST APIs', level: 95 },
      { name: 'SQL', level: 95 },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'JavaScript', level: 85 },
      { name: 'React', level: 80 },
      { name: 'CSS', level: 70 },
    ],
  },
  {
    category: 'DevOps & Tools',
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'Redis', level: 80 },
      { name: 'Git', level: 95 },
      { name: 'ElasticSearch', level: 65 },
    ],
  },
]

export const whyIBuild = {
  quote:
    'Technology gives me the opportunity to improve people\'s lives by solving real problems.',
  body:
    'I enjoy building products that simplify complex processes and help businesses become more efficient. Every system I build is a chance to create genuine value — not just working software, but software that works for people.',
  interests: [
    { icon: 'Lightbulb', label: 'Building startup ideas' },
    { icon: 'Music', label: 'Listening to music' },
    { icon: 'BookOpen', label: 'Learning new technologies' },
    { icon: 'Users', label: 'Helping developers' },
    { icon: 'FileText', label: 'Reading about software architecture' },
  ],
}

export const funCards = [
  {
    icon: 'Music',
    title: 'Favorite Coding Music',
    content: 'Lo-fi hip hop & ambient electronic — focus mode activated.',
    color: 'from-purple-500/10 to-brand/10',
  },
  {
    icon: 'Quote',
    title: 'Favorite Quote',
    content: '"Make it work, make it right, make it fast." — Kent Beck',
    color: 'from-accent/10 to-emerald-500/10',
  },
  {
    icon: 'BookOpen',
    title: 'Currently Learning',
    content: 'Event-driven architecture, CQRS patterns, and Go for high-performance microservices.',
    color: 'from-blue-500/10 to-cyan-500/10',
  },
  {
    icon: 'Rocket',
    title: 'Dream Startup',
    content: 'A dev-tools company building infrastructure that makes African startups scale globally.',
    color: 'from-orange-500/10 to-red-500/10',
  },
]

export const timelineItems = [
  {
    period: '2023 — Present',
    role: 'Software Engineer',
    company: 'AcademicBridge',
    type: 'Full-time',
    description:
      'Leading backend development for an education SaaS platform. Architected and shipped AcademicBridge v2 — a complete overhaul focused on performance, scalability, and developer experience.',
    achievements: [
      'Refactored core services into modular, testable architecture',
      'Reduced API response times by up to 4x through query optimization and Redis caching',
      'Implemented Laravel Scout + Meilisearch for instant full-text search',
      'Built internal tooling and reusable service libraries',
      'Introduced API versioning for backward-compatible evolution',
      'Established CI/CD pipeline with automated test suite',
    ],
    technologies: ['Laravel', 'React', 'Redis', 'Docker', 'MySQL', 'Node.js', 'Meilisearch'],
  },
  {
    period: '2022 — 2023',
    role: 'Backend Developer',
    company: 'Freelance',
    type: 'Contract',
    description:
      'Designed and delivered backend systems for startups and SMEs across Rwanda — from MVPs to production-grade APIs.',
    achievements: [
      'Built the Wedding Vendor Platform from zero to production',
      'Designed secure RESTful APIs for mobile applications',
      'Integrated payment gateways including Paypack',
      'Delivered projects on time across diverse industries',
    ],
    technologies: ['Laravel', 'Node.js', 'MySQL', 'React', 'Tailwind', 'Paypack'],
  },
]

export const techPills = [
  { label: 'Laravel', color: 'text-red-400 border-red-400/30 bg-red-400/5' },
  { label: 'PHP', color: 'text-violet-400 border-violet-400/30 bg-violet-400/5' },
  { label: 'Node.js', color: 'text-green-400 border-green-400/30 bg-green-400/5' },
  { label: 'React', color: 'text-cyan-400 border-cyan-400/30 bg-cyan-400/5' },
  { label: 'Docker', color: 'text-blue-400 border-blue-400/30 bg-blue-400/5' },
  { label: 'Redis', color: 'text-orange-400 border-orange-400/30 bg-orange-400/5' },
  { label: 'MySQL', color: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/5' },
  { label: 'Git', color: 'text-red-300 border-red-300/30 bg-red-300/5' },
  { label: 'Tailwind', color: 'text-sky-400 border-sky-400/30 bg-sky-400/5' },
  { label: 'TypeScript', color: 'text-blue-300 border-blue-300/30 bg-blue-300/5' },
  { label: 'REST API', color: 'text-brand border-brand/30 bg-brand/5' },
  { label: 'Linux', color: 'text-amber-400 border-amber-400/30 bg-amber-400/5' },
]
