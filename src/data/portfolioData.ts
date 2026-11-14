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
  name?: string;
  title: string;
  description: string;
  url?: string;
  tags: string[];
  stars?: number;
  forks?: number;
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
  githubUsername: "KuysJosh",
  githubUrl: "https://github.com/KuysJosh",
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
      name: "josh-portfolio",
      title: "Josh IT Portfolio",
      description:
        "Modern interactive portfolio built with React, TypeScript & Vite. Features 60 FPS 3D head-tracking, custom terminal UI, and cybernetic HUD styling.",
      url: "https://github.com/KuysJosh/josh-portfolio",
      tags: ["React", "TypeScript", "Vite", "CSS3"],
      terminal: {
        command: "$ npm run build",
        output: ["✓ compiled successfully", "✓ 39 modules transformed", "✓ ready for production"],
        glowColor: "rgba(123,140,255,.35)",
      },
    },
    {
      name: "owwa_ims",
      title: "OWWA IMS",
      description:
        "OWWA Information Management System — Web-based data management, record handling, and reporting platform.",
      url: "https://github.com/KuysJosh/owwa_ims",
      tags: ["PHP", "MySQL", "Information System"],
      terminal: {
        command: "$ php -S localhost:8000",
        output: ["✓ Database connected: MySQL", "✓ Session secure & active", "✓ Query response: 2ms"],
        glowColor: "rgba(94,225,255,.3)",
      },
    },
    {
      name: "Tacloban-Community-Run",
      title: "Tacloban Community Run",
      description:
        "Community sports event portal for participants, showcasing registration details, marathon schedules, and route maps.",
      url: "https://github.com/KuysJosh/Tacloban-Community-Run",
      tags: ["HTML5", "CSS3", "JavaScript", "Sports Portal"],
      terminal: {
        command: "$ ping tacloban-run.local",
        output: ["64 bytes: time=1.1 ms", "0% packet loss", "✓ CDN assets loaded"],
        glowColor: "rgba(74,222,128,.3)",
      },
    },
    {
      name: "archiving",
      title: "Digital Archiving System",
      description:
        "Secure document archiving and record-keeping system with categorized file storage, audit logs, and search capabilities.",
      url: "https://github.com/KuysJosh/archiving",
      tags: ["PHP", "Database", "Document Management"],
      terminal: {
        command: "$ SELECT COUNT(*) FROM archives;",
        output: ["2,450 records indexed", "Integrity check: PASS", "Query time: 3ms"],
        glowColor: "rgba(182,193,214,.25)",
      },
    },
    {
      name: "photobooth",
      title: "Interactive Photobooth",
      description:
        "Live web-based photobooth app designed for events, with real-time camera preview, filter engine, and instant photo capture.",
      url: "https://github.com/KuysJosh/photobooth",
      tags: ["JavaScript", "HTML5", "MediaStream API"],
      terminal: {
        command: "$ navigator.mediaDevices.getUserMedia()",
        output: ["✓ Camera: 1080p 60fps connected", "✓ Canvas filter pipeline ready"],
        glowColor: "rgba(254,188,46,.3)",
      },
    },
    {
      name: "rmmtc",
      title: "RMMTC Platform",
      description:
        "Enterprise platform for operational tracking, service records, and management workflows.",
      url: "https://github.com/KuysJosh/rmmtc",
      tags: ["PHP", "Web App", "Enterprise"],
      terminal: {
        command: "$ docker compose up -d",
        output: ["✓ 3 services running", "✓ healthcheck: healthy"],
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
    { label: "GitHub", url: "https://github.com/KuysJosh" },
    { label: "LinkedIn", url: "#" },
    { label: "Facebook", url: "#" },
  ] as SocialLink[],
};
