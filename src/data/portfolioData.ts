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
  company?: string;
  description: string;
}

export interface ProjectItem {
  name?: string;
  title: string;
  description: string;
  image?: string;
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
  location: "Tacloban City, Leyte",
  locationFull: "Tacloban City, Leyte, Philippines",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Tacloban+City,+Leyte,+Philippines&t=&z=13&ie=UTF8&iwloc=&output=embed",
  googleMapsUrl: "https://maps.google.com/?q=Tacloban+City,+Leyte,+Philippines",
  email: "astaniojoshuan@gmail.com",
  phone: "09285695894",
  phoneFormatted: "+63 928 569 5894",
  currentRole: "IT Staff",
  commissionStatus: "Open for Commission",
  status: "Currently working as IT Staff · Open for commission",
  roles: [
    "IT Staff",
    "MERN Stack Developer",
    "Full-Stack Web & Systems",
    "Python & PHP Developer",
  ],
  headline: {
    line1: "Hi, I’m Josh.",
    line2: "I build reliable IT solutions.",
  },
  lead: "Currently working as IT Staff based in Tacloban City, Leyte. I design, build, and support secure, high-performance web systems and databases. Open for freelance & commission projects.",
  experienceTag: "3+ years",
  experienceSubtag: "in IT",
  marqueeSkills: [
    "MERN Stack",
    "PHP",
    "MySQL",
    "Python",
    "JavaScript",
    "HTML & CSS",
    "IT Infrastructure",
    "Database Architecture",
    "REST APIs",
  ],
  commissionServices: [
    "Web App Development (MERN / PHP)",
    "Database Design (MySQL / MongoDB)",
    "IT Systems & Support",
    "API & Automation Scripting",
  ],
  about: {
    tag: "/about",
    title: "Systems that just work.",
    leadParagraph:
      "Currently working as IT Staff in Tacloban City, Leyte. I care about the details behind the screen: clean setups, clear documentation and honest communication when something breaks.",
    subParagraph:
      "Specialized in MERN stack, PHP, Python, and MySQL. Open for freelance commissions and custom IT projects.",
    terminal: {
      userHost: "josh@portfolio: ~",
      items: [
        { cmd: "whoami", response: "josh — IT Staff & Full-Stack Developer" },
        {
          cmd: "cat stack.txt",
          bullets: [
            "MERN (MongoDB, Express, React, Node)",
            "PHP & MySQL database systems",
            "Python scripting & automation",
            "HTML5, CSS3, & Modern JavaScript",
          ],
        },
        { cmd: "location", response: "Tacloban City, Leyte, PH", comment: "UTC+8" },
        { cmd: "status", response: "IT Staff · Open for commission" },
      ],
    },
    stats: [
      { number: 3, suffix: "+", label: "Years in IT" },
      { number: 12, suffix: "+", label: "Projects" },
      { number: 99, suffix: "%", label: "Uptime mindset" },
      { number: 100, suffix: "%", label: "Commission focus" },
    ] as StatItem[],
  },
  stack: [
    {
      title: "MERN & Frontend",
      icon: "Code2",
      skills: ["React", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "Backend & Systems",
      icon: "Server",
      skills: ["Node.js", "Express.js", "PHP", "Python"],
    },
    {
      title: "Databases & Storage",
      icon: "Database",
      skills: ["MySQL", "MongoDB", "REST APIs"],
    },
    {
      title: "Tools & DevOps",
      icon: "Terminal",
      skills: ["Git", "Linux", "Docker", "Vite"],
    },
  ] as StackCategory[],
  experience: [
    {
      period: "2025 — present",
      role: "IT Staff",
      company: "Current Employment · Tacloban City",
      description:
        "Managing day-to-day IT operations, hardware/software infrastructure, user technical support, network troubleshooting, and local database systems.",
    },
    {
      period: "2024 — 2025",
      role: "IT Intern / On-the-Job Training",
      company: "Overseas Workers Welfare Administration (OWWA)",
      description:
        "Supported government data management, beneficiary record verification, digital archiving, and internal systems operations.",
    },
    {
      period: "2022 — 2024",
      role: "Computer & IT Education",
      company: "Tacloban City, Leyte",
      description:
        "Rigorous coursework in software engineering, MERN web development, relational database modeling (MySQL), and systems administration.",
    },
  ] as ExperienceItem[],
  projects: [
    {
      name: "josh-portfolio",
      title: "Josh IT Portfolio",
      description:
        "Interactive IT portfolio with 60 FPS head-tracking 3D avatar rig, real-time HUD, and cybernetic styling.",
      image: "/projects/josh-portfolio.svg",
      url: "https://github.com/KuysJosh/josh-portfolio",
      tags: ["React", "TypeScript", "Vite", "CSS"],
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
      image: "/projects/owwa-ims.svg",
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
        "Event portal for marathon runners with route maps, registration system, and schedule info.",
      image: "/projects/tacloban-run.svg",
      url: "https://github.com/KuysJosh/Tacloban-Community-Run",
      tags: ["HTML", "CSS", "JS", "Event Portal"],
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
        "Secure document archiving and record-keeping system with categorized file storage and search.",
      image: "/projects/archiving.svg",
      url: "https://github.com/KuysJosh/archiving",
      tags: ["PHP", "MySQL", "Archiving"],
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
        "Web-based photobooth app designed for events, with real-time camera preview, filter engine, and capture.",
      image: "/projects/photobooth.svg",
      url: "https://github.com/KuysJosh/photobooth",
      tags: ["JS", "HTML", "CSS", "MediaStream"],
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
      image: "/projects/rmmtc.svg",
      url: "https://github.com/KuysJosh/rmmtc",
      tags: ["PHP", "MySQL", "Web App"],
      terminal: {
        command: "$ docker compose up -d",
        output: ["✓ 3 services running", "✓ healthcheck: healthy"],
        glowColor: "rgba(74,91,255,.4)",
      },
    },
  ] as ProjectItem[],
  certifications: [
    { title: "OWWA (OJT)", issuerYear: "Overseas Workers Welfare Administration · Certified OJT" },
    { title: "Dev8", issuerYear: "Dev8 Regional Tech Conference" },
    { title: "Start-up Conference", issuerYear: "Philippine Tech & Innovation Conference" },
    { title: "UDEMY (MERN Stack)", issuerYear: "Udemy · Full-Stack Web Development" },
    { title: "Python (UDEMY)", issuerYear: "Udemy · Python Programming Masterclass" },
  ] as CertificationItem[],
  socials: [
    { label: "GitHub", url: "https://github.com/KuysJosh" },
    { label: "Call / SMS", url: "tel:09285695894" },
    { label: "Email", url: "mailto:astaniojoshuan@gmail.com" },
  ] as SocialLink[],
};
