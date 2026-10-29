// All portfolio content lives here — edit this file to update the site.

export const profile = {
  name: 'Rushikesh Naikwadi',
  initials: 'RN',
  role: '.NET Full Stack Developer',
  tagline:
    'I build and modernize enterprise insurance & billing systems with C#, ASP.NET Core, SQL Server, Azure and React.',
  location: 'Navi Mumbai, Maharashtra, India',
  experience: '3.4 years',
  openTo: 'Backend & full-stack .NET roles · On-site / Hybrid / Remote',
  email: 'rushin.mailme@gmail.com',
  // Free key from https://web3forms.com (enter the email above, the key is mailed to you).
  // It's safe to keep in the site code.
  contactFormKey: '1767bfa9-ed07-4de3-b9dd-b5c3ab6ea5ab',
  resumeUrl: '', // optional: put your resume PDF in /public (e.g. /resume.pdf) and set '/resume.pdf'
  links: {
    linkedin: 'https://www.linkedin.com/in/rnaikwadi/',
    github: 'https://github.com/rushin-gh',
    leetcode: 'https://leetcode.com/u/rushin_lc/',
    codeforces: 'https://codeforces.com/profile/rushin_cf',
  },
}

export const about = [
  'Full Stack .NET developer with 3+ years building and modernizing enterprise applications in the insurance and billing domains at Cogitate Technology Solutions.',
  'I enjoy backend work — REST API design, performance tuning, SQL optimization, event-driven design and production problem solving — with a solid grounding in Low-Level Design, design patterns and SOLID.',
  'Competitive programming background: 400+ LeetCode problems solved and Rank 1126 in Codeforces Round 754 (Div. 2).',
]

export const stats = [
  { value: '~75%', label: 'API latency cut', detail: '6–7s → 1–2s with a queue-triggered Azure Function' },
  { value: '30+', label: 'REST APIs shipped', detail: 'Across 8 clients — insurance, billing, documents' },
  { value: '93%', label: 'Faster deployments', detail: '30 Razor templates: 30 min → under 2 min' },
  { value: '400+', label: 'LeetCode problems', detail: 'Codeforces Round 754 (Div. 2) rank 1126' },
]

export const experience = [
  {
    company: 'Cogitate Technology Solutions',
    location: 'Navi Mumbai · On-site',
    span: 'Jul 2023 — Present',
    roles: [
      {
        title: 'Software Developer',
        period: 'Apr 2025 — Present',
        points: [
          'Cut policy projection API latency ~75% (6–7s → 1–2s) by precomputing results in a queue-triggered Azure Function.',
          'Led migration of a production ASP.NET Framework 4.6.2 app to ASP.NET Core 8 — shipped 3 modules in 6 months against an 8-month estimate (25% faster) using GitHub Copilot and Cursor; mentored 2 junior developers.',
          'Re-architected migrated modules with Clean Architecture, Repository/Unit of Work and DI — feature delivery 30% faster, onboarding cut from 2 weeks to 1; added xUnit tests (70%+ coverage), Azure DevOps CI/CD and centralized logging.',
          'Reduced bulk PDF check generation time ~60% by parallelizing C# processing across 1K+ checks per run.',
          'Built and maintained 30+ RESTful APIs across 8 clients, secured with JWT, documented via Swagger/OpenAPI and monitored in Application Insights.',
          'Fixed MICR (bank check) rendering failures on Azure-hosted environments caused by a host-level font dependency — zero recurrence since release.',
        ],
      },
      {
        title: 'Associate Software Developer',
        period: 'Jul 2023 — Mar 2025',
        points: [
          'Engineered a multithreaded C# tool to automate bulk CSHTML template deployments — 30 min → under 2 min (93%) across 30 templates per release, with zero manual errors.',
          'Owned the policy renewal module end-to-end, from requirements to production, processing 1.5K+ policies per month with SOLID principles, design patterns and retry handling.',
          'Developed insurance features with ASP.NET MVC, C#, SQL Server and stored procedures; resolved 60+ production issues across app and database layers with RCAs.',
        ],
      },
    ],
  },
]

export const projects = [
  {
    name: 'BookingOne',
    status: 'In progress',
    period: 'Oct 2026 — Present',
    summary:
      'Event ticketing platform on .NET 10, built as a modular monolith with Clean Architecture and CQRS, evolving to microservices. Orchestrates hold → payment → confirmation without double-booking.',
    highlights: [
      'Atomic conditional SQL updates, SQL-backed hold expiry and idempotent payments',
      'MassTransit saga, outbox and idempotent consumers over RabbitMQ / Azure Service Bus',
      'JWT + OAuth 2.0/OIDC, Key Vault with Managed Identity, Redis caching, App Insights tracing',
    ],
    tech: ['.NET 10', 'SQL Server', 'MassTransit', 'RabbitMQ', 'Azure Service Bus', 'Redis', 'Docker'],
    link: '',
  },
  {
    name: 'PremiumPay',
    status: 'In progress',
    period: 'Dec 2025 — Present',
    summary:
      'Insurance premium billing platform built from scratch on .NET 10 using real billing-domain knowledge, designed as microservices.',
    highlights: [
      'Clean Architecture, Repository Pattern and Unit of Work',
      'RESTful APIs with JWT authentication and centralized logging',
      'Azure integrations with a focus on database design and performance',
    ],
    tech: ['.NET 10', 'Microservices', 'Web API', 'JWT', 'SQL Server', 'Azure'],
    link: '',
  },
  {
    name: 'Xpenses',
    status: 'Shipped',
    period: 'Jan 2024 — Apr 2024',
    summary:
      'Full-stack expense management app with an ASP.NET Core Web API backend and a React frontend, deployed to Azure.',
    highlights: [
      'JWT authentication, custom middleware, DTO mapping and global error handling',
      'Deployed on Azure App Service with Azure SQL Database',
      'CI/CD pipeline, secure connections and cloud resource configuration',
    ],
    tech: ['ASP.NET Core 8', 'React', 'EF Core', 'SQL Server', 'Azure App Service'],
    link: '',
  },
  {
    name: 'TemplateJob',
    status: 'Production · Cogitate',
    period: 'Sep 2023 — Apr 2024',
    summary:
      'Multithreaded C# tool that automates bulk CSHTML template deployments for every release.',
    highlights: [
      'Deployment time ~30 min → under 2 min (~93%)',
      'Handles 30 templates per release in parallel',
      'Eliminated manual deployment errors',
    ],
    tech: ['C#', 'Multithreading', 'Razor', '.NET'],
    link: '',
  },
]

export const skills = [
  { group: 'Languages & Frameworks', items: ['C#', '.NET 8 / 10', 'ASP.NET Core Web API', 'ASP.NET MVC', 'Entity Framework Core', 'LINQ', 'JavaScript', 'React'] },
  { group: 'Data', items: ['SQL Server', 'T-SQL', 'Stored Procedures', 'Redis', 'Azure SQL'] },
  { group: 'Cloud & DevOps', items: ['Azure Functions', 'App Service', 'Service Bus', 'Key Vault', 'Blob Storage', 'Application Insights', 'Azure DevOps CI/CD', 'Docker', 'Git'] },
  { group: 'Architecture', items: ['Clean Architecture', 'Microservices', 'CQRS', 'Saga Pattern', 'Outbox', 'Repository / UoW', 'Design Patterns', 'SOLID', 'Multithreading & Concurrency'] },
  { group: 'APIs & Security', items: ['RESTful APIs', 'JWT', 'OAuth 2.0 / OIDC', 'Swagger / OpenAPI', 'Postman', 'xUnit'] },
]

export const education = [
  { title: 'B.Tech / B.E. — Computer Science', place: 'Pimpri Chinchwad College of Engineering, Pune', period: '2019 — 2023' },
  { title: 'Class XII', place: 'Maharashtra State Board', period: '2019' },
  { title: 'Class X', place: 'Maharashtra State Board', period: '2017' },
]
