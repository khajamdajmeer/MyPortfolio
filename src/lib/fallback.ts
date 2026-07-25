import type {
  Education,
  Experience,
  Profile,
  Project,
  Skill,
} from "./types";

/**
 * Content the site renders before anything has been entered in the admin
 * panel. It doubles as the seed payload for a fresh database, so the
 * portfolio is never blank — even on a cold, empty deployment.
 *
 * Employer and client names are deliberately generic: the work is described
 * by what was built, not by who it was built for.
 */

export const RESUME_FILE = "/MD-Ajmeer-Khaja-Resume.pdf";

export const fallbackProfile: Profile = {
  name: "MD Ajmeer Khaja",
  headline: "AI Engineer & Full Stack Developer",
  location: "Hyderabad, Telangana, India",
  email: "khajamdajmeer@gmail.com",
  phone: "+91 63002 07822",
  bio: "I build AI systems and the products that carry them — agentic RAG pipelines, LLM tooling and MCP servers on one side, the FastAPI services, React front-ends and AWS infrastructure that put them in front of real users on the other.",
  objective:
    "I work on agentic systems for healthcare and recruitment: natural-language querying over SQL and graph databases, LLM-driven dashboard generation, and multi-agent orchestration with LangGraph. I came to it through full stack work and never left it behind — I still own the FastAPI microservices, the RBAC and observability, the CI/CD and the interfaces. I'm interested in teams where the AI work and the product work aren't treated as separate jobs.",
  github_url: "https://github.com/khajamdajmeer",
  linkedin_url: "https://linkedin.com/in/md-ajmeer-khaja",
  avatar_url: "/images/profile.jpg",
};

export const fallbackProjects: Omit<Project, "id">[] = [
  {
    title: "Healthcare Agentic AI Platform",
    subtitle: "Agentic analytics",
    year: "2025",
    summary:
      "Agentic system turning plain-English questions into SQL and graph queries, with LLM-generated dashboards on top.",
    description:
      "An end-to-end agentic platform for healthcare analytics. Natural language becomes SQL or Cypher, so people who don't write queries can still reach the data. An LLM-driven engine emits structured JSON visualisation specs that render as dashboards in real time, and a contract intelligence pipeline extracts entities and their relationships from unstructured documents for downstream analysis.",
    highlights: [
      "Modelled complex healthcare relationships in Neo4j behind an MCP server exposing 20+ modular tools",
      "Built a context layer — session memory, retrieval cache and embeddings — for multi-turn conversation",
      "Served it from FastAPI microservices on AWS EKS with RBAC, tracing and fault-tolerant workflows",
      "Treated latency, token usage and retrieval accuracy as explicit, measured targets",
    ],
    tech: ["LangChain", "MCP", "Neo4j", "FastAPI", "AWS EKS", "PostgreSQL"],
    live_url: "",
    repo_url: "",
    image_url: "",
    featured: true,
    sort_order: 1,
  },
  {
    title: "Agentic Resume Screening",
    subtitle: "Multi-agent orchestration",
    year: "2025",
    summary:
      "Multi-agent LangGraph architecture for automated resume evaluation and candidate communication.",
    description:
      "The second phase of a recruitment assistant, extending a working RAG system into a multi-agent architecture built on LangGraph that covers evaluation and candidate communication end to end.",
    highlights: [
      "Built task-specific agents for resume comparison, review insights, recommendations and email handling",
      "Coordinated them with a supervisor agent managing task flow and fallback paths",
      "Added short and long-term memory so context survives across sessions",
      "Tightened output consistency through iterative prompt tuning and structured responses",
    ],
    tech: ["LangGraph", "LangChain", "AWS Bedrock", "Python", "FastAPI"],
    live_url: "",
    repo_url: "",
    image_url: "",
    featured: true,
    sort_order: 2,
  },
  {
    title: "Hybrid-Retrieval Talent Assistant",
    subtitle: "RAG at scale",
    year: "2024",
    summary:
      "Retrieval assistant matching 10K+ resumes to job descriptions, cutting manual screening by around 40%.",
    description:
      "A retrieval-augmented assistant for recruiter workflows. Resumes are matched to job descriptions on skills, experience and location, with every answer traceable back to the document it came from.",
    highlights: [
      "Indexed 10,000+ documents through an S3, Lambda and dead-letter-queue pipeline",
      "Combined Sentence Transformer vectors in Milvus with keyword search, raising match accuracy 25%",
      "Cut turnaround per search by 30% with LangChain and Bedrock query refinement",
      "Added citation generation so recruiters could verify every claim",
    ],
    tech: ["LangChain", "AWS Bedrock", "Milvus", "AWS Lambda", "Docker"],
    live_url: "",
    repo_url: "",
    image_url: "",
    featured: true,
    sort_order: 3,
  },
  {
    title: "Learning Platform Backend",
    subtitle: "Backend architecture",
    year: "2024",
    summary:
      "Async FastAPI backend for a multi-role learning platform, on autoscaled Kubernetes.",
    description:
      "Backend systems for a learning management platform serving administrators, staff and learners, built for read-heavy traffic and strict role separation.",
    highlights: [
      "Built async REST APIs with FastAPI and tuned the queries behind them",
      "Cut database load with Redis caching on high-read endpoints",
      "Implemented RBAC with JWT authentication and middleware-based access control",
      "Shipped through GitHub Actions CI/CD onto AWS EKS with autoscaling and rolling updates",
    ],
    tech: ["FastAPI", "PostgreSQL", "Redis", "Docker", "AWS EKS"],
    live_url: "",
    repo_url: "",
    image_url: "",
    featured: true,
    sort_order: 4,
  },
  {
    title: "MHB Services",
    subtitle: "Full stack MERN",
    year: "2024",
    summary:
      "Service-business platform — client requests, manager dispatch and technician workflows, live end to end.",
    description:
      "An independent freelance project, front-end and back-end both. Clients raise service requests; managers triage them, assign technicians and track progress; technicians work their queue and report completion.",
    highlights: [
      "JWT auth with role-based middleware separating admin, manager and technician",
      "Full request lifecycle: intake, assignment, escalation, completion and review",
      "Express and Mongoose API documented with Swagger",
      "Deployed as a serverless API with a connection cached across warm invocations",
    ],
    tech: ["React", "Redux", "Node.js", "Express", "MongoDB", "JWT"],
    live_url: "https://mhb-web-aka-2930.vercel.app",
    repo_url: "https://github.com/khajamdajmeer/clientMHB",
    image_url: "",
    featured: false,
    sort_order: 5,
  },
  {
    title: "Minimal Ecommerce",
    subtitle: "Storefront",
    year: "2023",
    summary:
      "Storefront with category browsing, product pages and a Redux-managed cart.",
    description:
      "A pared-back shopping experience built around Redux Toolkit — category navigation, product detail pages and a cart that keeps its state as you move through the store.",
    highlights: [
      "Cart state modelled in Redux Toolkit and preserved across navigation",
      "Category and best-seller browsing with horizontally scrollable rails",
    ],
    tech: ["React", "Redux Toolkit", "React Router"],
    live_url: "https://ecomerce-aka-2930.vercel.app",
    repo_url: "https://github.com/khajamdajmeer/Ecomerce",
    image_url: "/projects/MinimalEcomerce.jpeg",
    featured: false,
    sort_order: 6,
  },
  {
    title: "Car Rental",
    subtitle: "Booking front-end",
    year: "2023",
    summary: "Rental front-end for browsing, comparing and booking vehicles.",
    description:
      "A front-end aimed at making car rental less tedious: browsing that surfaces the right vehicle quickly, side-by-side comparison, and a trip-planning flow that suits both individual and business customers.",
    highlights: [
      "Vehicle comparison and filtering across the rental fleet",
      "Trip planning and booking flow built with React Router and Sass",
    ],
    tech: ["React", "React Router", "Sass"],
    live_url: "https://carrental-aka-2930.vercel.app",
    repo_url: "https://github.com/khajamdajmeer/CarRental",
    image_url: "/projects/carproject.jpeg",
    featured: false,
    sort_order: 7,
  },
  {
    title: "Car Dealers",
    subtitle: "Motion-led landing",
    year: "2023",
    summary:
      "Scroll-driven dealership landing page built with GSAP and Lenis smooth scrolling.",
    description:
      "An animation-led marketing page for a car dealership. GSAP drives the sequenced section reveals while Lenis smooths the scroll, giving the page a continuous feel rather than a series of static blocks.",
    highlights: [
      "Sequenced scroll-triggered reveals choreographed with GSAP",
      "Lenis smooth scrolling tied to the animation timeline",
    ],
    tech: ["React", "GSAP", "Lenis"],
    live_url: "https://cardealers-aka-2930.vercel.app",
    repo_url: "https://github.com/khajamdajmeer/CarDealers",
    image_url: "",
    featured: false,
    sort_order: 8,
  },
];

export const fallbackExperience: Omit<Experience, "id">[] = [
  {
    role: "Senior AI Engineer",
    company: "AI Products Company",
    location: "Hyderabad",
    period: "Jun 2025 — Present",
    description:
      "Designed and deployed an AI-driven analytics platform that answers natural language questions against SQL and graph databases, widening data access well beyond the technical team. Built an LLM engine converting queries into structured JSON visualisation configs rendered in real time, plus a document pipeline on AWS that extracts entities and relationships from unstructured contracts. Architected the FastAPI microservices behind it on AWS EKS with RBAC, logging and Prometheus/Grafana monitoring.",
    sort_order: 1,
  },
  {
    role: "AI Engineer",
    company: "AI Products Company",
    location: "Hyderabad",
    period: "Feb 2024 — May 2025",
    description:
      "Built a retrieval-augmented assistant that shortlists candidates by matching resumes to job descriptions on skills, experience and location, cutting manual screening by roughly 40%. Designed an ingestion pipeline on AWS S3, Lambda and dead-letter queues to index more than 10,000 documents reliably, and implemented hybrid search pairing Sentence Transformer vectors in Milvus with keyword retrieval — 25% more accurate than keyword-only.",
    sort_order: 2,
  },
  {
    role: "AI/ML Engineer Intern",
    company: "AI Products Company",
    location: "Hyderabad",
    period: "Sep 2023 — Jan 2024",
    description:
      "Developed REST APIs with FastAPI for ML model integration, contributed to GitHub Actions CI/CD for automated testing and deployment, added Redis caching on frequently hit endpoints, and worked with Docker containers on AWS EKS deployments.",
    sort_order: 3,
  },
];

export const fallbackEducation: Omit<Education, "id">[] = [
  {
    institution: "Osmania University",
    degree: "Bachelor of Computer Science",
    location: "Hyderabad, Telangana",
    period: "Jul 2020 — Jul 2023",
    sort_order: 1,
  },
  {
    institution: "State Board of Technical Education & Training",
    degree: "Diploma, Electrical and Electronics Engineering",
    location: "Mahabubnagar, Telangana",
    period: "Jun 2017 — Apr 2020",
    sort_order: 2,
  },
];

export const fallbackSkills: Omit<Skill, "id">[] = [
  { name: "LangChain", category: "AI Engineering", sort_order: 1 },
  { name: "LangGraph", category: "AI Engineering", sort_order: 2 },
  { name: "LlamaIndex", category: "AI Engineering", sort_order: 3 },
  { name: "RAG", category: "AI Engineering", sort_order: 4 },
  { name: "Agentic systems", category: "AI Engineering", sort_order: 5 },
  { name: "MCP servers", category: "AI Engineering", sort_order: 6 },
  { name: "Hugging Face", category: "AI Engineering", sort_order: 7 },
  { name: "PyTorch", category: "AI Engineering", sort_order: 8 },
  { name: "MLflow", category: "AI Engineering", sort_order: 9 },

  { name: "Anthropic Claude", category: "LLMs", sort_order: 10 },
  { name: "OpenAI", category: "LLMs", sort_order: 11 },
  { name: "AWS Bedrock", category: "LLMs", sort_order: 12 },
  { name: "LLaMA", category: "LLMs", sort_order: 13 },
  { name: "Mistral", category: "LLMs", sort_order: 14 },
  { name: "BERT", category: "LLMs", sort_order: 15 },

  { name: "Python", category: "Backend", sort_order: 16 },
  { name: "FastAPI", category: "Backend", sort_order: 17 },
  { name: "Node.js", category: "Backend", sort_order: 18 },
  { name: "Express.js", category: "Backend", sort_order: 19 },
  { name: "REST APIs", category: "Backend", sort_order: 20 },
  { name: "RBAC / JWT", category: "Backend", sort_order: 21 },

  { name: "JavaScript", category: "Frontend", sort_order: 22 },
  { name: "React.js", category: "Frontend", sort_order: 23 },
  { name: "Redux", category: "Frontend", sort_order: 24 },
  { name: "HTML", category: "Frontend", sort_order: 25 },
  { name: "CSS", category: "Frontend", sort_order: 26 },

  { name: "PostgreSQL", category: "Data", sort_order: 27 },
  { name: "MongoDB", category: "Data", sort_order: 28 },
  { name: "Neo4j", category: "Data", sort_order: 29 },
  { name: "Milvus", category: "Data", sort_order: 30 },
  { name: "Redis", category: "Data", sort_order: 31 },

  { name: "AWS", category: "Cloud & DevOps", sort_order: 32 },
  { name: "Docker", category: "Cloud & DevOps", sort_order: 33 },
  { name: "Kubernetes", category: "Cloud & DevOps", sort_order: 34 },
  { name: "GitHub Actions", category: "Cloud & DevOps", sort_order: 35 },
  { name: "Grafana", category: "Cloud & DevOps", sort_order: 36 },
  { name: "Git", category: "Cloud & DevOps", sort_order: 37 },
];
