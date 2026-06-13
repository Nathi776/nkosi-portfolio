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
}

export const projects: Project[] = [
  {
    slug: "CounterScam",
    title: "Counter Scam",
    shortDesc: "Rule-based and ML-powered phishing detection platform.",
    overview:
      "The system combines machine learning models with rule-based security checks to identify phishing patterns, suspicious domains, and scam language.",
    features: [
      "Phishing URL detection",
      "Real-time scanning",
      "Threat logging",
      "History tracking",
    ],
    tech: {
      Frontend: "React Native/Expo, TypeScript, MUI",
      Backend: "Python, FastAPI",
      Database: "PostgreSQL",
      ML: "Scikit-learn, Rule-based detection engine",
      DevOps: "Docker",
    },
    diagrams: [
      {
        label: "System Architecture",
        image: "/projects/CounterScam/arch.png",
      },
      {
        label: "Detection Pipeline",
        image: "/projects/CounterScam/pipeline.png",
      },
    ],
    challenges: [
      {
        problem: "Combining rule-based logic with ML predictions.",
        solution:
          "Implemented weighted scoring where rules act as pre-filters and ML refines final risk score.",
      },
    ],
    github: "https://github.com/Nathi776/CounterScam",
  },
];
