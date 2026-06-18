export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  year: string;
  description: string;
  overview: string;
  challenge: string;
  process: string[];
  outcome: string;
  technologies: string[];
};

export const projects: Project[] = [
  {
    slug: "metrodocsync",
    number: "01",
    title: "MetroDocSync",
    category: "AI Infrastructure",
    year: "2025",
    description:
      "An intelligent document processing and synchronization platform designed for large-scale workflows.",
    overview:
      "MetroDocSync is a document intelligence layer built for organizations that move tens of thousands of files across teams, vendors, and regulatory archives. It ingests heterogeneous formats, normalizes structure, and keeps every downstream system in sync without manual intervention.",
    challenge:
      "Document workflows at scale break in ways that are hard to see: silent version drift, duplicated approvals, inconsistent metadata, and OCR pipelines that fail quietly on edge-case layouts. The brief was to design a system that treats documents as living state — not as files thrown over a wall.",
    process: [
      "Mapped the existing document lifecycle across five stakeholder groups and identified six points where state could diverge.",
      "Designed a typed event log as the single source of truth, with adapters for legacy storage backends.",
      "Built an extraction layer combining layout-aware parsers and language models, with confidence routing for human review.",
      "Shipped a synchronization engine that reconciles changes across destinations using deterministic merge rules.",
    ],
    outcome:
      "Early pilots reduced reconciliation work from days to hours and surfaced classes of errors the previous system never reported. The architecture is now the foundation for a broader document intelligence product.",
    technologies: [
      "Python", "FastAPI", "PostgreSQL", "Redis Streams", "LangChain", "Docker", "AWS S3", "Tesseract",
    ],
  },
  {
    slug: "enterprise-mcp-agents",
    number: "02",
    title: "Enterprise MCP Agents",
    category: "AI Automation",
    year: "2025",
    description:
      "Multi-agent systems that automate enterprise workflows using Model Context Protocol architectures.",
    overview:
      "A framework for composing specialist agents that share context through the Model Context Protocol — letting teams replace brittle RPA scripts with reasoning systems that hold state, negotiate, and recover from failure.",
    challenge:
      "Most enterprise automation projects collapse under the weight of exceptions. Each new edge case demands a new branch. The goal was an architecture where adding capability did not mean adding fragility.",
    process: [
      "Defined a contract layer for agents to advertise tools, scopes, and audit guarantees.",
      "Built a context router on top of MCP for typed, traceable handoffs between agents.",
      "Created a sandboxed execution environment with per-agent policy and observability hooks.",
      "Designed evaluation harnesses so every change can be measured against real workflow traces.",
    ],
    outcome:
      "A reference deployment automates three multi-step finance workflows end-to-end with full audit trails. The framework is being extended to support customer-support triage and internal IT operations.",
    technologies: [
      "TypeScript", "Node.js", "MCP", "OpenAI", "Anthropic", "Temporal", "PostgreSQL", "OpenTelemetry",
    ],
  },
  {
    slug: "infrastructure-automation",
    number: "03",
    title: "Infrastructure Automation",
    category: "DevOps & Systems",
    year: "2024",
    description:
      "Automation-first infrastructure systems focused on deployment, orchestration, and operational efficiency.",
    overview:
      "A set of opinionated tools and patterns for teams who want infrastructure that behaves like a product — versioned, tested, observable, and boring in the best way.",
    challenge:
      "Small teams keep paying the same tax: undocumented runbooks, drifting environments, deploys that work for one engineer. The work was to codify the parts that should never be improvised.",
    process: [
      "Audited deploy pipelines across three projects and extracted the recurring shape.",
      "Wrote a thin orchestration layer over standard tools so the same pipeline runs locally, in CI, and in production.",
      "Added health, drift, and cost signals as first-class outputs of every deploy.",
      "Documented the system as a playbook teams could adopt incrementally.",
    ],
    outcome:
      "Deploy time dropped meaningfully, on-call interruptions decreased, and environment drift became visible rather than invisible. The pattern is now the default starting point for new services.",
    technologies: [
      "Terraform", "GitHub Actions", "Docker", "Kubernetes", "Prometheus", "Grafana", "Bash", "AWS",
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
