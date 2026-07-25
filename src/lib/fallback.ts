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
    "Senior AI Engineer at INNOVAPATH, working on agentic systems for healthcare and recruitment: natural-language querying over SQL and graph databases, LLM-driven dashboard generation, and multi-agent orchestration with LangGraph. I came to it through full stack work and never left it behind — I still own the FastAPI microservices, the RBAC and observability, the CI/CD, and the interfaces. I'm interested in teams where the AI work and the product work aren't separate jobs.",
  github_url: "https://github.com/khajamdajmeer",
  linkedin_url: "https://linkedin.com/in/md-ajmeer-khaja",
  avatar_url: "/profile.jpg",
};

export const fallbackProjects: Omit<Project, "id">[] = [
  {
    title: "Healthcare Agentic AI Platform",
    summary:
      "Agentic system turning plain-English questions into SQL and graph queries, with LLM-generated dashboards on top.",
    description:
      "An end-to-end agentic platform for healthcare analytics. Natural language becomes SQL or Cypher, so non-technical users can reach data that previously needed an analyst. An LLM-driven engine emits structured JSON visualisation specs that render as dashboards in real time, removing most manual dashboard building. A contract intelligence pipeline ingests documents from S3 and extracts entities — contracts, amendments, payers — linking their relationships for downstream analytics. Healthcare relationships are modelled in Neo4j behind an MCP server exposing 20+ modular tools, and a context layer of session memory, retrieval cache and embeddings supports multi-turn conversation. Everything is served by FastAPI microservices on AWS EKS with RBAC, tracing and fault-tolerant workflows.",
    tech: [
      "LangChain",
      "MCP",
      "Neo4j",
      "FastAPI",
      "AWS EKS",
      "LookML",
      "PostgreSQL",
    ],
    live_url: "",
    repo_url: "",
    image_url: "",
    featured: true,
    sort_order: 1,
  },
  {
    title: "TalentScreen — Agentic RAG",
    summary:
      "Multi-agent LangGraph architecture for automated resume evaluation and candidate communication.",
    description:
      "The second phase of TalentScreen, extending a working RAG assistant into a multi-agent system built on LangGraph. Task-specific agents handle resume comparison, review insight generation, recommendations and automated email responses, coordinated by a supervisor agent that manages task flow and fallback paths. Short and long-term memory keep context across sessions so answers stay consistent, and prompt reliability was tightened through iterative tuning and structured response handling.",
    tech: ["LangGraph", "LangChain", "AWS Bedrock", "Python", "FastAPI"],
    live_url: "",
    repo_url: "",
    image_url: "",
    featured: true,
    sort_order: 2,
  },
  {
    title: "White-box Learning — LMS Backend",
    summary:
      "Backend for a US learning platform: async FastAPI APIs, RBAC across three roles, and autoscaled EKS deploys.",
    description:
      "Backend systems for a US-based learning management platform serving admins, staff and learners. REST APIs built with FastAPI using async handling and tuned queries, Redis caching on high-read endpoints to cut database load, and RBAC implemented with JWT authentication and middleware-based access control. Shipped through GitHub Actions CI/CD, containerised with Docker and deployed on AWS EKS with autoscaling and rolling updates.",
    tech: [
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS EKS",
      "GitHub Actions",
    ],
    live_url: "",
    repo_url: "",
    image_url: "",
    featured: true,
    sort_order: 3,
  },
  {
    title: "MHB Services",
    summary:
      "Full stack MERN platform for a service business — client requests, manager dispatch and technician workflows, live end to end.",
    description:
      "Conceived, designed and built as an independent freelance project, front-end and back-end both. Clients raise service requests; managers triage them, assign technicians and track progress; technicians work their queue and report completion. The Express and Mongoose API covers JWT auth with role-based middleware for admin, manager and technician, employee CRUD, request lifecycle handling and search, documented with Swagger.",
    tech: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Swagger",
    ],
    live_url: "https://clientmhb-aka-2930.vercel.app",
    repo_url: "https://github.com/khajamdajmeer/clientMHB",
    image_url: "",
    featured: true,
    sort_order: 4,
  },
  {
    title: "TalentScreen — RAG Assistant",
    summary:
      "Hybrid-retrieval assistant that matches 10K+ resumes to job descriptions, cutting manual screening by ~40%.",
    description:
      "A retrieval-augmented assistant for recruiter workflows. Resumes are matched to job descriptions on skills, experience and location, reducing manual screening effort by around 40%. A scalable ingestion pipeline on AWS S3, Lambda, Docker and dead-letter queues indexes over 10,000 documents reliably. Retrieval is hybrid — Sentence Transformer embeddings in Milvus combined with keyword search — which raised match accuracy by 25% over keyword-only. LangChain and AWS Bedrock orchestrate query refinement and generation, and citation generation keeps every answer traceable.",
    tech: [
      "LangChain",
      "AWS Bedrock",
      "Milvus",
      "Sentence Transformers",
      "AWS Lambda",
      "Docker",
    ],
    live_url: "",
    repo_url: "",
    image_url: "",
    featured: false,
    sort_order: 5,
  },
  {
    title: "Minimal Ecommerce",
    summary:
      "Storefront with category browsing, product pages and a Redux-managed cart.",
    description:
      "A pared-back shopping experience built around Redux Toolkit: category navigation, best-seller and item cards, product detail pages and a cart that keeps its state as you move through the store.",
    tech: ["React", "Redux Toolkit", "React Router"],
    live_url: "https://ecomerce-aka-2930.vercel.app",
    repo_url: "https://github.com/khajamdajmeer/Ecomerce",
    image_url: "/projects/MinimalEcomerce.jpeg",
    featured: false,
    sort_order: 6,
  },
  {
    title: "Car Rental",
    summary: "Rental front-end for browsing, comparing and booking vehicles.",
    description:
      "A front-end aimed at making car rental less tedious: browsing that surfaces the right vehicle quickly, side-by-side comparison, and a trip-planning and booking flow that suits both individual and business customers.",
    tech: ["React", "React Router", "Sass", "React Bootstrap"],
    live_url: "https://carrental-aka-2930.vercel.app",
    repo_url: "https://github.com/khajamdajmeer/CarRental",
    image_url: "/projects/carproject.jpeg",
    featured: false,
    sort_order: 7,
  },
  {
    title: "Car Dealers",
    summary:
      "Scroll-driven dealership landing page built with GSAP and Lenis smooth scrolling.",
    description:
      "An animation-led marketing page for a car dealership. GSAP drives the sequenced section reveals while Lenis smooths the scroll, giving the page a continuous, cinematic feel rather than a series of static blocks.",
    tech: ["React", "GSAP", "Lenis"],
    live_url: "https://cardealers-aka-2930.vercel.app",
    repo_url: "https://github.com/khajamdajmeer/CarDealers",
    image_url: "",
    featured: false,
    sort_order: 9,
  },
];

export const fallbackExperience: Omit<Experience, "id">[] = [
  {
    role: "Senior AI Engineer",
    company: "INNOVAPATH IT Solutions Pvt Ltd",
    location: "Hyderabad",
    period: "Jun 2025 — Present",
    description:
      "Designed and deployed an AI-driven analytics platform that answers natural language questions against SQL and graph databases, widening data access well beyond the technical team. Built an LLM dashboard engine that converts queries into structured JSON visualisation configs rendered in real time. Developed a contract processing pipeline on AWS — S3, Lambda, Textract and Comprehend — extracting entities and relationships from unstructured documents for healthcare analytics. Architected FastAPI microservices on AWS EKS with RBAC, logging and Prometheus/Grafana monitoring, tuning caching and queries for performance.",
    sort_order: 1,
  },
  {
    role: "AI Engineer",
    company: "INNOVAPATH IT Solutions Pvt Ltd",
    location: "Hyderabad",
    period: "Feb 2024 — May 2025",
    description:
      "Built a retrieval-augmented assistant that shortlists candidates by matching resumes to job descriptions on skills, experience and location, cutting manual screening by roughly 40%. Designed an ingestion pipeline on AWS S3, Lambda and DLQs with Docker to index more than 10,000 documents reliably. Implemented hybrid search pairing Sentence Transformer vectors in Milvus with keyword retrieval, raising match accuracy 25% over keyword-only. Developed LangChain and AWS Bedrock workflows for query refinement and source-backed responses, reducing turnaround per search by 30%.",
    sort_order: 2,
  },
  {
    role: "AI/ML Engineer Intern",
    company: "INNOVAPATH IT Solutions Pvt Ltd",
    location: "Hyderabad",
    period: "Sep 2023 — Jan 2024",
    description:
      "Developed REST APIs with FastAPI for ML model integration and backend services, contributed to GitHub Actions CI/CD for automated testing and deployment, added Redis caching on frequently hit endpoints, and worked with Docker containers on AWS EKS deployments.",
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
  { name: "Transformers", category: "AI Engineering", sort_order: 8 },
  { name: "PyTorch", category: "AI Engineering", sort_order: 9 },
  { name: "MLflow", category: "AI Engineering", sort_order: 10 },
  { name: "scikit-learn", category: "AI Engineering", sort_order: 11 },

  { name: "Anthropic Claude", category: "LLMs", sort_order: 12 },
  { name: "OpenAI", category: "LLMs", sort_order: 13 },
  { name: "AWS Bedrock", category: "LLMs", sort_order: 14 },
  { name: "LLaMA", category: "LLMs", sort_order: 15 },
  { name: "Mistral", category: "LLMs", sort_order: 16 },
  { name: "BERT", category: "LLMs", sort_order: 17 },

  { name: "Python", category: "Backend", sort_order: 18 },
  { name: "FastAPI", category: "Backend", sort_order: 19 },
  { name: "Node.js", category: "Backend", sort_order: 20 },
  { name: "Express.js", category: "Backend", sort_order: 21 },
  { name: "REST APIs", category: "Backend", sort_order: 22 },
  { name: "RBAC / JWT", category: "Backend", sort_order: 23 },

  { name: "JavaScript", category: "Frontend", sort_order: 24 },
  { name: "React.js", category: "Frontend", sort_order: 25 },
  { name: "Redux", category: "Frontend", sort_order: 26 },
  { name: "HTML & CSS", category: "Frontend", sort_order: 27 },

  { name: "PostgreSQL", category: "Data", sort_order: 28 },
  { name: "MongoDB", category: "Data", sort_order: 29 },
  { name: "Neo4j", category: "Data", sort_order: 30 },
  { name: "Milvus", category: "Data", sort_order: 31 },
  { name: "Redis", category: "Data", sort_order: 32 },

  { name: "AWS EKS", category: "Cloud & DevOps", sort_order: 33 },
  { name: "AWS Lambda", category: "Cloud & DevOps", sort_order: 34 },
  { name: "AWS S3", category: "Cloud & DevOps", sort_order: 35 },
  { name: "API Gateway", category: "Cloud & DevOps", sort_order: 36 },
  { name: "Docker", category: "Cloud & DevOps", sort_order: 37 },
  { name: "GitHub Actions", category: "Cloud & DevOps", sort_order: 38 },
  { name: "Prometheus / Grafana", category: "Cloud & DevOps", sort_order: 39 },
];
