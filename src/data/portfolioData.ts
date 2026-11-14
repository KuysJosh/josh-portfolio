export interface StatItem {
  number: number;
  suffix: string;
  label: string;
}

export interface StackCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  description: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  terminal: {
    command: string;
    output: string[];
    glowColor: string;
  };
}

export interface CertificationItem {
  title: string;
  issuerYear: string;
}

export interface SocialLink {
  label: string;
  url: string;
}

export const portfolioData = {
  name: "Josh",
  location: "Cebu, Philippines",
  roles: [
    "IT professional",
    "Full-stack developer",
    "Systems & network support",
  ],
  headline: {
    line1: "Hi, I’m Josh.",
    line2: "I build reliable IT solutions.",
  },
  lead: "An IT professional from Cebu, Philippines. I design, build and support secure systems that teams can depend on.",
  status: "online · open to opportunities",
  experienceTag: "3+ years",
  experienceSubtag: "in IT",
  email: "hello@example.com",
  marqueeSkills: [
    "Networking",
    "Cloud",
    "Cybersecurity",
    "Web development",
    "Linux",
    "Databases",
    "Automation",
    "Tech support",
  ],
  about: {
    tag: "/about",
    title: "Systems that just work.",
    leadParagraph:
      "I care about the details behind the screen: clean setups, clear documentation and honest communication when something breaks.",
    subParagraph:
      "Replace this with your own story: what you studied, what you work on and where you want to grow.",
    terminal: {
      userHost: "josh@portfolio: ~",
      items: [
        { cmd: "whoami", response: "josh — IT professional" },
        {
          cmd: "cat focus.txt",
          bullets: [
            "web & systems dev",
            "networks & security",
            "troubleshooting",
          ],
        },
        { cmd: "location", response: "Cebu, PH", comment: "UTC+8" },
        { cmd: "status", response: "open to work" },
      ],
    },
    stats: [
      { number: 3, suffix: "+", label: "Years in IT" },
      { number: 20, suffix: "+", label: "Projects" },
      { number: 99, suffix: "%", label: "Uptime mindset" },
      { number: 10, suffix: "+", label: "Clients" },
    ] as StatItem[],
  },
  stack: [
    {
      title: "frontend",
      icon: "</>",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "backend",
      icon: "{ }",
      skills: ["Node.js", "Python", "PHP", "REST APIs"],
    },
    {
      title: "data & cloud",
      icon: "▤",
      skills: ["MySQL", "PostgreSQL", "AWS", "Firebase"],
    },
    {
      title: "ops & security",
      icon: "⌁",
      skills: ["Linux", "Git", "Networking", "Docker"],
    },
  ] as StackCategory[],
  experience: [
    {
      period: "2025 — present",
      role: "Your latest role",
      description:
        "Company name. Describe what you built or supported and the result, with numbers if you have them.",
    },
    {
      period: "2023 — 2025",
      role: "Previous role",
      description:
        "Company name. Describe your responsibilities and one achievement you’re proud of.",
    },
    {
      period: "2022",
      role: "Internship or education",
      description:
        "School or company name. Add your degree, course or training here.",
    },
  ] as ExperienceItem[],
  projects: [
    {
      title: "Project one",
      description: "One line on the problem, what you built and the result.",
      tags: ["Web app", "React", "Node.js"],
      terminal: {
        command: "$ npm run build",
        output: ["✓ compiled successfully", "✓ 42 tests passed"],
        glowColor: "rgba(123,140,255,.3)",
      },
    },
    {
      title: "Project two",
      description: "One line on the problem, what you built and the result.",
      tags: ["Network", "Linux"],
      terminal: {
        command: "$ ping 10.0.0.1",
        output: ["64 bytes: time=1.2 ms", "0% packet loss"],
        glowColor: "rgba(94,225,255,.25)",
      },
    },
    {
      title: "Project three",
      description: "One line on the problem, what you built and the result.",
      tags: ["Database", "MySQL"],
      terminal: {
        command: "$ SELECT * FROM users;",
        output: ["128 rows returned", "query time: 4 ms"],
        glowColor: "rgba(182,193,214,.2)",
      },
    },
    {
      title: "Project four",
      description: "One line on the problem, what you built and the result.",
      tags: ["DevOps", "Docker"],
      terminal: {
        command: "$ docker compose up",
        output: ["✓ 3 services running", "✓ healthcheck ok"],
        glowColor: "rgba(74,91,255,.4)",
      },
    },
  ] as ProjectItem[],
  certifications: [
    { title: "Certificate one", issuerYear: "Issuer · 2025" },
    { title: "Certificate two", issuerYear: "Issuer · 2024" },
    { title: "Certificate three", issuerYear: "Issuer · 2023" },
  ] as CertificationItem[],
  socials: [
    { label: "LinkedIn", url: "#" },
    { label: "GitHub", url: "#" },
    { label: "Facebook", url: "#" },
  ] as SocialLink[],
};

