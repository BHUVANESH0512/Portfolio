export type PROJECTS = {
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
  github?: string;
  githubLabel?: string;
  heroImage?: string;
  screenshots?: string[];
};

export const PROJECTS: PROJECTS[] = [
  {
    slug: "enterprise-mcp-agents",
    number: "01",
    title: "Enterprise MCP Agents",
    category: "AI Automation",
    year: "2026",
    heroImage: "/projects/enterprise-mcp-agents.png",
    github: "https://github.com/BHUVANESH0512/MCP_PR_REVIEWER.git",
    githubLabel: "Enterprise MCP Agents  Read Documentation on Github",
    screenshots: [
      "/projects/mcp-screenshot-1.jpg",
      "/projects/mcp-screenshot-2.jpg",
      "/projects/mcp-screenshot-3.jpg",
    ],
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
    number: "02",
    title: "Infrastructure Automation",
    category: "DevOps & Systems",
    year: "2026",
    github: "https://github.com/BHUVANESH0512/Infra_AUtomationn.git",
    githubLabel: "Infrastructure Automation  Read Documentation on Github",
    screenshots: [
      "/projects/infra-s1.png",
      "/projects/infra-s2.png",
      "/projects/infra-s3.png",
      "/projects/infra-s4.png",
      "/projects/infra-s5.png",
    ],
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

  {
    slug: "whatsapp-rag",
    number: "03",
    title: "WhatsApp RAG",
    category: "AI & Automation",
    year: "2025",
    github: "https://github.com/BHUVANESH0512/Whatsapp_RAG.git",
    githubLabel: "WhatsApp RAG  Read Documentation on Github",
    screenshots: [
      "/projects/whatsapp-rag-s1.png",
      "/projects/whatsapp-rag-s2.png",
      "/projects/whatsapp-rag-s3.png",
      "/projects/whatsapp-rag-s4.png",
    ],
    description:
      "An AI-powered WhatsApp HR assistant that answers employee queries using RAG — pulling answers directly from company knowledge bases, policies, and HR documents over WhatsApp.",
    overview:
      "WhatsApp RAG is an intelligent HR assistant built on a Retrieval-Augmented Generation pipeline. Employees ask questions via WhatsApp and receive accurate, document-grounded answers drawn from internal knowledge bases — no hallucinations, full source traceability.",
    challenge:
      "HR teams spend significant time answering repetitive policy questions. The challenge was building a system that retrieves precise answers from large unstructured document sets in real-time while maintaining a familiar WhatsApp-native experience.",
    process: [
      "Designed a multi-tenant knowledge base ingestion pipeline supporting PDF, DOCX, and Excel formats with automatic chunking and embedding.",
      "Built a RAG engine with semantic retrieval using vector embeddings and LLM-based answer synthesis with source citations.",
      "Integrated the WhatsApp Business API as the primary chat interface with a webhook-driven message routing layer.",
      "Developed an admin dashboard for document management, employee directory, conversation analytics, and access control.",
    ],
    outcome:
      "HR response time dropped significantly with employees getting instant, accurate answers 24/7. The platform surfaces conversation analytics and knowledge gaps, allowing HR teams to proactively improve documentation quality.",
    technologies: [
      "React", "TypeScript", "Node.js", "Supabase", "OpenRouter", "Groq", "WhatsApp Business API", "PostgreSQL", "pgvector",
    ],
  },

  {
    slug: "metrodocsync",
    number: "04",
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
    slug: "colabrey",
    number: "05",
    title: "Colabrey",
    category: "Web Application",
    year: "2025",
    github: "https://github.com/BHUVANESH0512/colabrey.git",
    githubLabel: "Colabrey  Read Documentation on Github",
    screenshots: [
      "/projects/colabrey-s1.png",
      "/projects/colabrey-s2.png",
      "/projects/colabrey-s3.png",
      "/projects/colabrey-s4.png",
    ],
    description:
      "A student networking website only for colleges and students can connect share thoughts same like linkedin",
    overview:
      "Colabrey is a dedicated networking platform built specifically for academic communities, enabling students and colleges to connect, collaborate on projects, share insights, and discuss academic topics in a professional, focused environment tailored to their educational needs.",
    challenge:
      "Standard professional networks like LinkedIn contain massive noise and lack targeted academic integrations (like class cohorts, university channels, and student project collaborations). Colabrey needed to solve the trust and validation barrier by verifying student enrollment while maintaining a clean, performant feed experience.",
    process: [
      "Researched student interactions and mapped key collaboration flows for project sharing, peer discovery, and academic discussions.",
      "Designed a custom college domain verification flow to ensure all network participants are real students or faculty.",
      "Built a real-time feed with support for media sharing, tag-based discovery, and student cohort directories.",
      "Integrated database indexes and caching layers to ensure fast load times and a responsive user interface.",
    ],
    outcome:
      "Colabrey created a safe and productive environment for thousands of students to showcase class projects, discover peer teams, and network directly with college organizations.",
    technologies: [
      "React", "Node.js", "Express", "MongoDB", "Socket.io", "TailwindCSS", "JWT", "Vite",
    ],
  },

  {
    slug: "resume-analyzer",
    number: "06",
    title: "Resume Analyzer",
    category: "AI & Machine Learning",
    year: "2025",
    github: "https://github.com/BHUVANESH0512/Resume_Analyzer-.git",
    githubLabel: "Resume Analyzer  Read Documentation on Github",
    screenshots: [
      "/projects/resume-s1.png",
      "/projects/resume-s2.png",
      "/projects/resume-s3.png",
      "/projects/resume-s4.png",
    ],
    description:
      "AI-powered resume analyzer that extracts and understands skills, projects, and experience from resumes. It compares resumes semantically to show how others have applied similar skills in real projects, helping students benchmark, learn, and improve beyond keyword-based matching.",
    overview:
      "Resume Analyzer is an intelligent analysis system that goes beyond simple keyword-based matching. It parses resumes semantically, mapping skills, projects, and experiences to real-world software engineering domains to show students how peer developers successfully apply similar concepts in industry projects.",
    challenge:
      "Most resume screening tools rely on simple keyword filtering, which penalizes students with non-standard project names. The goal was to build a system that understands context, identifies true expertise levels, and provides actionable recommendations to bridge skills gaps.",
    process: [
      "Implemented document ingestion and text extraction pipelines for PDF and DOCX formats.",
      "Built an NLP parsing layer using custom embeddings to map semantic concepts, skills, and tools mentioned in resumes.",
      "Designed a similarity matching engine to compare parsed resumes against verified software project datasets.",
      "Created an intuitive dashboard providing students with skill-gap heatmaps, benchmark metrics, and tailored recommendations.",
    ],
    outcome:
      "The analyzer provides high-accuracy matching and semantic suggestions, helping students optimize their profiles and understand the direct mapping between their academic work and industry requirements.",
    technologies: [
      "Python", "LangChain", "FastAPI", "OpenAI API", "Faiss", "PyPDF2", "NLTK", "React",
    ],
  },

];

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);
