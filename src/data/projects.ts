export interface Project {
  slug: string;
  title: string;
  shortDesc: string;
  overview: string;
  features: string[];
  tech: Record<string, string>;
  diagrams: {
    label: string;
    image: string;
  }[];
  challenges: {
    problem: string;
    solution: string;
  }[];
  github: string;
  category?: string;
  image?: string;
  live?: string | null;
}

export const projects: Project[] = [
  {
    slug: "SME",
    title: "SME Credit Scoring & Invoice Finance",
    shortDesc: "Automated risk evaluation and invoice financing platform for small businesses.",
    category: "FINTECH PLATFORM",
    image: "https://media.base44.com/images/public/6a3819d607ebb1ba908853c0/58583fc06_generated_18860c4a.png",
    github: "https://github.com/Nathi776/SME",
    live: null,
    overview:
      "A full-stack fintech platform designed to bridge the gap between small-to-medium enterprises (SMEs) and lenders. SMEs can register, manage invoices, and request short-term funding against unpaid invoices, while lenders can perform credit reviews and manage loan distributions based on automated risk fees computed on the backend.",
    features: [
      "Secure user registration & authentication with role-based dashboard states (SME vs. Lender)",
      "Invoice ledger creation, storage, and loan financing requests submission",
      "FastAPI backend algorithm calculating credit risk scores and dynamic lending fee rates",
      "Lender workspace for processing loan approvals, rejections, and viewing financial diagnostics",
    ],
    tech: {
      Frontend: "React, TypeScript, Material UI",
      Backend: "FastAPI, Python, SQLAlchemy, Uvicorn",
      Database: "PostgreSQL, Alembic",
    },
    diagrams: [
      {
        label: "Invoice Finance Processing Lifecycle",
        image: "https://media.base44.com/images/public/6a3819d607ebb1ba908853c0/58583fc06_generated_18860c4a.png",
      },
    ],
    challenges: [
      {
        problem:
          "Creating a reliable database schema to track complex invoice financing lifecycles (pending, approved, cleared, defaulted) and ensuring proper calculations of dynamic fee rates.",
        solution:
          "Engineered robust SQLAlchemy models paired with Alembic migrations, implementing transaction isolation checks and unit test coverages for mathematical risk evaluations.",
      },
    ],
  },
  {
    slug: "satellite-tracker",
    title: "ISS & Satellite Orbit Tracker",
    shortDesc: "Orbital projection tracker that calculates ISS passes over African regions.",
    category: "SCIENTIFIC UTILITY",
    image: "https://media.base44.com/images/public/6a3819d607ebb1ba908853c0/3526bfc23_generated_8ef141e9.png",
    github: "https://github.com/Nathi776/satellite-tracker",
    live: null,
    overview:
      "An orbital tracking application designed to track the International Space Station (ISS) and various other satellites orbiting over the African continent. The system utilizes orbital mechanics calculations to predict exactly when a satellite will pass over the user's current geo-coordinates.",
    features: [
      "Real-time geographical satellite tracking plotted on interactive maps",
      "Pass prediction system based on client location inputs",
      "Multi-satellite catalog selection with automatic telemetry updates",
      "Visual alerts notifying users of upcoming visible passes over Africa",
    ],
    tech: {
      Frontend: "HTML, CSS, JavaScript (Leaflet.js Maps)",
      Backend: "Python, Flask, Orbit Telemetry APIs",
    },
    diagrams: [
      {
        label: "Real-time Telemetry Calculation Pipeline",
        image: "https://media.base44.com/images/public/6a3819d607ebb1ba908853c0/3526bfc23_generated_8ef141e9.png",
      },
    ],
    challenges: [
      {
        problem:
          "Accurately calculating satellite coordinates in real-time and predicting visibility windows based on spherical earth calculations.",
        solution:
          "Integrated standard orbital prediction libraries on the backend and mapped the resulting visual vectors using front-end canvas and mapping libraries.",
      },
    ],
  },
  {
    slug: "CounterScam",
    title: "Counter Scam Safeguard",
    shortDesc: "Protection platform utilizing rule-based checks and machine learning.",
    category: "SECURITY PLATFORM",
    image: "/projects/CounterScam/arch.png",
    github: "https://github.com/Nathi776/CounterScam",
    live: null,
    overview:
      "A multi-layered fraud prevention platform designed to shield financial clients and customers from scam activities. It analyzes URLs, metadata, and messaging scripts to identify phishing layouts, suspicious hosting domains, and financial trap templates.",
    features: [
      "ML-powered scam pattern detection classifying threat levels",
      "Real-time domain scans and rule-based pre-filtering checks",
      "Persistent logs of reported scammers and scam URLs for lookup",
      "Cross-platform client interface supporting incident reporting on-the-go",
    ],
    tech: {
      Frontend: "React Native, Expo, TypeScript, MUI",
      Backend: "Python, FastAPI",
      Database: "PostgreSQL",
      ML: "Scikit-learn, Rule-based detection engine",
      DevOps: "Docker",
    },
    diagrams: [
      {
        label: "System Design & Prediction Pipeline",
        image: "/projects/CounterScam/arch.png",
      },
    ],
    challenges: [
      {
        problem: "Combining rule-based pre-filters with machine learning predictions without introducing heavy latency.",
        solution:
          "Implemented a weighted risk-scoring engine where static rules run fast pre-scans, letting the ML model process deeper text parsing asynchronously.",
      },
    ],
  },
  {
    slug: "StudentAttendanceTrackingSystem",
    title: "Student Attendance Tracker",
    shortDesc: "A lightweight tracking portal to automate attendance record management.",
    category: "MANAGEMENT PORTAL",
    image: "https://media.base44.com/images/public/6a3819d607ebb1ba908853c0/6a3819d607ebb1ba908853c0_generated_6a3819d607ebb1ba908853c0.png",
    github: "https://github.com/Nathi776/StudentAttendanceTrackingSystem",
    live: null,
    overview:
      "An educational utility system developed to automate classroom attendance logging. Teachers can track student registry lists, record daily presence/absence records, and generate weekly or monthly attendance summary logs to eliminate paper record sheets.",
    features: [
      "Student attendance register lists with easy status toggling (Present/Absent/Excused)",
      "Aggregated attendance summary logs and percentage indicators per student",
      "Bulk action records for fast classroom roster submissions",
      "Clean, responsive grid designs matching mobile tablet sizes",
    ],
    tech: {
      Frontend: "HTML, CSS, JavaScript (Bootstrap Grid)",
      Backend: "Node.js, Express",
      Database: "PostgreSQL",
    },
    diagrams: [
      {
        label: "Roster Management Architecture",
        image: "https://media.base44.com/images/public/6a3819d607ebb1ba908853c0/6a3819d607ebb1ba908853c0_generated_6a3819d607ebb1ba908853c0.png",
      },
    ],
    challenges: [
      {
        problem:
          "Handling daily attendance logs reliably without complex, high-latency database operations on shared mobile connections.",
        solution:
          "Created flat relational layouts with pre-computed attendance sums, enabling fast roster saves and offline client caching.",
      },
    ],
  },
];
