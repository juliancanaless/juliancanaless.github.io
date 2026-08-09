export type NavItem = {
  href: string;
  label: string;
};

export type CurrentFocusItem = {
  title: string;
  description: string;
};

export type ExperienceItem = {
  company: string;
  logo?: string;
  logoAlt?: string;
  logoText?: string;
  title: string;
  timeline: string;
  summary?: string;
  bullets: string[];
};

export type ProjectItem = {
  title: string;
  githubUrl?: string;
  blogUrl?: string;
  image: string;
  imageAlt: string;
  motive: string;
  tags: string[];
  scope: string[];
  results: string[];
  lessons: string[];
};

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

export const navItems: NavItem[] = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const currentFocusItems: CurrentFocusItem[] = [
  {
    title: "Work",
    description:
      "AI engineer at Avathon. I own the agent platform behind the conversational AI product, the knowledge graph it reads, and the evaluation that keeps its answers correct.",
  },
  {
    title: "UT Austin OMSAI",
    description:
      "B.S. in CS & Math from UT Austin, now doing the online MS in AI part-time while working full-time. Currently taking AI in Astrophysics.",
  },
  {
    title: "Gym, tennis & cycling",
    description:
      "Usually try to be active 6× a week between lifting, tennis lessons, and cycling. Sometimes I go 6/6, other times I\'m at 1/6. I play it by ear.",
  },
  {
    title: "TV & reading",
    description:
      "Recently finished Snowfall and Succession — currently watching Shrinking. Book-wise, just read Stoner and How Machines Learn. Always something in rotation.",
  },
];

export const experiences: ExperienceItem[] = [
  {
    company: "Avathon",
    logo: "/assets/img/avathon.jpeg",
    logoAlt: "Avathon logo",
    title: "AI Engineer",
    timeline: "Oct 2025 – Present",
    summary:
      "I build the harness agents run inside: the tools they call, the enterprise knowledge graph they read, and the evaluation that keeps them correct — wired together into a multi-tenant platform running in production.",
    bullets: [
      "Built the knowledge-graph agent behind the Barrick Gold engagement, working directly with client leadership to shape what they valued. It anchored a multi-year enterprise contract now in production.",
      "Extracted the company's conversational AI from a product monolith into a standalone multi-tenant agent platform (Django async ASGI, LangGraph, LiteLLM gateway) and shipped it through dev, UAT and production for a Fortune-500 deployment. It's now the company's shared agent layer.",
      "Replaced config-trusted persona scoping with authorization enforced against live identity (Keycloak/OIDC), clearing the last blocker to general availability. Added drop-in MCP server support with per-server isolation and forwarded user tokens, so new tool servers go live by configuration with no code and no deploy.",
      "Designed and materialized the canonical ontology behind the agent's answers, modeling 28.7M rows of client data into an agent-queryable knowledge graph, plus the operations layer that verifies freshness and correctness and runs dependency-ordered recompute.",
      "Own agent quality with no dedicated QA function on the team: built the evaluation and observability stack (Langfuse, per-query cost/latency/token telemetry) and run continuous evals scoring answer correctness and tool-call trajectory across 16 identity-gated personas.",
      "Fine-tuned Qwen2.5-14B (QLoRA) for natural-language-to-graph-query translation on 1,232 execution-verified pairs, reaching parity with Claude Sonnet on single-query generation at a fraction of per-query API cost.",
      "Built the carrier scoring and tendering engine for the supply-chain product, separating metric computation from decision policy. Drove adoption of DBOS over Celery+Redis for crash recovery and audit trails.",
      "Rebuilt and shipped avathon.com in two weeks (Next.js, Sanity CMS) with the VPs of Strategic Sales and Marketing and a peer engineer.",
    ],
  },
  {
    company: "IBM",
    logo: "/assets/img/ibm.png",
    logoAlt: "IBM logo",
    title: "Data Science Intern",
    timeline: "May 2023 – Aug 2023",
    bullets: [
      "Built and deployed a Flask proof of concept integrating Watson Assistant with Db2, used in the pitch that won the client engagement.",
      "Shipped a Dash application on watsonx and Watson Discovery with a custom evaluation API for side-by-side LLM comparison.",
      "Owned backend API integration for a React and Flask onboarding MVP on IBM Cloud and OpenShift.",
    ],
  },
  {
    company: "UT Austin",
    logo: "/assets/img/utcs.png",
    logoAlt: "UT Austin Computer Science logo",
    title: "Undergraduate Researcher — Earthquake Modeling",
    timeline: "Jan 2024 – May 2024",
    bullets: [
      "Re-engineered a legacy Mathematica seismic-response solver into a multithreaded Python pipeline.",
      "Processed 29k+ NGA West2 records and ran 64-vCPU GCP sweeps, cutting runtime from roughly 3 years to about 2 weeks.",
      "Produced interactive Plotly dashboards and a seminar deck for faculty presentation.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Adaptive DQN Planner",
    githubUrl: "https://github.com/juliancanaless/adaptive-dqn-autonomous-driving",
    image: "/assets/img/roundabout.gif",
    imageAlt: "Adaptive DQN agent navigating a roundabout",
    motive:
      "Extend a research paper's results using statistical and ML methods learned from an advanced machine learning course.",
    tags: ["RL", "Robustness", "Model Eval"],
    scope: [
      "Built RL agents for autonomous driving in a roundabout sim.",
      "The idea was to pair DQN with adaptive error tracking so the planner could tighten its uncertainty on the fly instead of being uniformly cautious about everything.",
    ],
    results: [
      "0% collisions across all eval runs.",
      "Beat both deterministic and fixed-interval robust planners on safety without tanking reward.",
      "The agent learned to be careful where it was unsure and aggressive where it wasn't — which is kind of the whole point.",
    ],
    lessons: [
      "Safety-critical RL is a constant tug-of-war between 'don't crash' and 'actually get somewhere.'",
      "Data-driven uncertainty helps a lot. You don't have to be conservative everywhere if you know where you're uncertain.",
      "Got solid hands-on time with robust planning, CEM, and modern RL integration.",
    ],
  },
  {
    title: "Fantasy Draft RL Agent",
    githubUrl: "https://github.com/juliancanaless/fantasy-rl-draft",
    image: "/assets/img/fantasy_nanobanana.png",
    imageAlt: "Fantasy football RL draft board visualization",
    motive: "Spent a summer trying to teach an RL agent to draft better than me. It didn't.",
    tags: ["Python", "PyTorch", "Gymnasium"],
    scope: [
      "Full summer project. Built a custom Gymnasium environment from scratch — 12-team snake drafts, 300+ players, action masking, roster-aware observations, the whole thing.",
      "Trained Maskable-PPO across multiple seasons to see if RL could actually outdraft heuristic baselines.",
    ],
    results: [
      "Crushed baselines by 26–42% on 2021–2023 data. Felt great.",
      "Then 2024 happened and the model completely fell apart. Fantasy football shifts too much year-to-year for the agent to generalize. It just doesn't work.",
    ],
    lessons: [
      "Spent a whole summer on this and it didn't pan out. But I genuinely learned more about RL environment design, reward shaping, and opponent modeling than any project that 'worked.'",
      "Sometimes the best lesson is knowing when something fundamentally can't work — not just hasn't worked yet.",
    ],
  },
  {
    title: "CUDA K-Means",
    githubUrl: "https://github.com/juliancanaless/cuda-kmeans",
    image: "/assets/img/cuda_kmeans_nanobana.png",
    imageAlt: "CUDA K-Means GPU clustering visualization",
    motive: "Wanted to actually understand GPU programming instead of just nodding along when people say 'parallelize it.'",
    tags: ["CUDA", "C++", "GPU"],
    scope: [
      "Started from a CPU baseline and iterated through a bunch of CUDA kernels — shared memory versions, K-Means++ init, the works.",
      "Benchmarked everything on dual Quadro RTX 6000s to see where the speedups actually come from.",
    ],
    results: [
      "Best case hit about 14× speedup over CPU.",
      "But end-to-end gains were capped by context init, sync overhead, and CPU-side bottlenecks that theory conveniently ignores.",
    ],
    lessons: [
      "Theory and practice diverge fast once memory latency and synchronization show up.",
      "Shared memory helps, but occupancy and transfer costs still bite.",
      "GPU optimization is hardware-aware engineering, not just algorithm work.",
    ],
  },
  {
    title: "Crabs 🦀 AI Assistant",
    blogUrl: "/blog/crabs-ai-assistant",
    image: "/assets/img/crabs-arch.svg",
    imageAlt: "Crabs AI assistant architecture diagram",
    motive:
      "Wanted an AI assistant that actually knows what I'm working on — not another ChatGPT wrapper.",
    tags: ["OpenClaw", "LightRAG", "Self-Hosted"],
    scope: [
      "Self-hosted on a cheap Hetzner VPS with CouchDB syncing my Obsidian vault across devices in real-time.",
      "Two-tiered memory: short-term conversational recall via OpenClaw, long-term knowledge graph traversal via LightRAG.",
    ],
    results: [
      "The agent traverses a knowledge graph, cross-references personal notes with my questions, and synthesizes answers in seconds.",
      "Zero-guessing policy — it always searches my actual notes instead of hallucinating. That one rule changed everything.",
    ],
    lessons: [
      "Burned $20 in API costs by leaving heartbeat mode on. Lesson learned.",
      "The architecture matters more than the model. Gluing the right systems together well is its own skill.",
    ],
  },
  {
    title: "Black-Scholes Derivation Paper",
    githubUrl: "https://github.com/juliancanaless/BlackScholesPaper",
    image: "/assets/img/blackscholes.png",
    imageAlt: "Black-Scholes derivation paper screenshot",
    motive:
      "Wanted to actually derive Black-Scholes from scratch instead of just accepting the formula.",
    tags: ["Probability", "Measure Theory", "Stats"],
    scope: [
      "Wrote a full derivation of Black-Scholes for European call options from first principles.",
      "Covered probability, measure theory, stochastic processes, martingales, and Brownian motion — all self-contained in one paper.",
    ],
    results: [
      "Ended up with a step-by-step derivation that actually connects the math to why it matters for pricing.",
      "Tried to make abstract probability feel practical instead of just rigorous for the sake of it.",
    ],
    lessons: [
      "Stochastic calculus runs modern finance, but the assumptions that make models work also limit how far you can trust them.",
      "Translating dense math into something useful is one of the more transferable skills I've picked up.",
    ],
  },
  {
    title: "GPU Fine-Grained Sync for EM (GMM)",
    githubUrl:
      "https://github.com/juliancanaless/GPU-Fast-Fine-Grained-Global-Synchronization",
    image: "/assets/img/em.gif",
    imageAlt: "GPU fine-grained synchronization benchmark animation",
    motive:
      "Tried to recreate a research paper's fine-grained GPU sync ideas and see if they actually hold up.",
    tags: ["CUDA", "EM (GMM)", "Distributed Systems"],
    scope: [
      "Recreated and extended Wang et al. (ASPLOS '19) fine-grained GPU synchronization.",
      "Built a client-server design with shared-memory buffers, then benchmarked shared counters, hash tables, and EM for GMMs.",
    ],
    results: [
      "Counters worked correctly but performance wins were mixed and input-size dependent.",
      "For EM-GMM, sync overhead usually outweighed the benefits — and occasional deadlocks showed up. Global synchronization on GPUs is just hard.",
    ],
    lessons: [
      "GPU sync costs can erase theoretical gains fast.",
      "Race conditions and deadlocks need careful fences and kernel design. No shortcuts.",
      "Simple, well-partitioned kernels tend to beat clever synchronized ones.",
    ],
  },
];

export const education = {
  school: "UT Austin — B.S. in Computer Science & Mathematics",
  subtitle: "Now pursuing OMSAI while working full-time at Avathon.",
  coursework: [
    "Machine Learning (Graduate), Principles of ML",
    "Distributed Computing, Concurrency (Honors)",
    "Geometric Foundations of Data Science, Quantum Information Science",
    "Real Analysis I & II, Stochastic Processes I (Graduate), Predictive Analytics",
    "Online Learning and Optimization",
    "Deep Learning, Advances in Deep Learning",
    "Reinforcement Learning, AI in Astrophysics",
  ],
  statement:
    "Coursework still matters to me because it gives me sharper mental models for the engineering decisions I make in practice. I like being able to connect systems intuition with real theory instead of treating them as separate worlds.",
};

export const galleryItems: GalleryItem[] = [
  {
    src: "/assets/img/biking.JPG",
    alt: "Julian biking",
    caption: "Cycling",
  },
  {
    src: "/assets/img/spend_time_w_dogs.JPG",
    alt: "Spending time with dog",
    caption: "Spending time with friends",
  },
  {
    src: "/assets/img/travel.jpg",
    alt: "Travel photo",
    caption: "Traveling a bit",
  },
];

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/juliancanales05/",
  github: "https://github.com/juliancanaless",
  email: "juliancanales@utexas.edu",
  resume: "/assets/files/JulianCanales_Resume.pdf",
  formAction: "https://formspree.io/f/mkgvwwrw",
};
