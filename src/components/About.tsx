import React from "react";
import { CheckCircle2, Laptop, Database, Cpu, Wrench } from "lucide-react";
import { useCardSpotlight } from "../hooks/useCardSpotlight";
import { useAnimatedCounter } from "../hooks/useAnimatedCounter";
import { portfolioData } from "../data/portfolioData";

interface StatCardProps {
  targetNumber: number;
  suffix: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ targetNumber, suffix, label }) => {
  const { onPointerMove } = useCardSpotlight();
  const { ref, display } = useAnimatedCounter(targetNumber, suffix);

  return (
    <div className="card b-s rv" ref={ref} onPointerMove={onPointerMove}>
      <b>{display}</b>
      <span>{label}</span>
    </div>
  );
};

export const About: React.FC = () => {
  const { onPointerMove } = useCardSpotlight();
  const { about } = portfolioData;

  const coreStrengths = [
    {
      icon: Laptop,
      title: "Full-Stack Web Engineering",
      desc: "Architecting interactive, responsive web applications using the MERN stack (React, Node, Express, MongoDB) alongside robust PHP systems.",
    },
    {
      icon: Database,
      title: "Database Administration",
      desc: "Designing normalized relational schemas in MySQL and document collections in MongoDB with security and efficient querying in mind.",
    },
    {
      icon: Wrench,
      title: "IT Operations & Infrastructure",
      desc: "Active IT Staff managing local hardware setups, operating systems, network connectivity, and daily technical operations.",
    },
    {
      icon: Cpu,
      title: "Automation & Scripting",
      desc: "Writing streamlined Python utilities and shell scripts to automate repetitive system tasks and data workflows.",
    },
  ];

  return (
    <section id="about" className="section-about">
      <div className="wrap">
        <div className="section-head rv">
          <span className="section-pill">About Joshua</span>
          <h2>Dependable IT craftsmanship &amp; practical engineering.</h2>
        </div>

        <div className="bento">
          {/* Main Story Card */}
          <div className="card b-intro rv" onPointerMove={onPointerMove}>
            <div className="b-badge">
              <span className="badge-dot" />
              <span>Tacloban City, Leyte</span>
            </div>
            <p className="big">{about.leadParagraph}</p>
            <p>{about.subParagraph}</p>

            <div className="about-tags">
              <span className="about-pill">
                <CheckCircle2 size={13} /> IT Staff (2025–Present)
              </span>
              <span className="about-pill">
                <CheckCircle2 size={13} /> OWWA OJT Alumnus
              </span>
              <span className="about-pill">
                <CheckCircle2 size={13} /> MERN &amp; PHP Developer
              </span>
              <span className="about-pill">
                <CheckCircle2 size={13} /> Open for Commission
              </span>
            </div>
          </div>

          {/* Capabilities Card */}
          <div className="card b-focus rv" onPointerMove={onPointerMove}>
            <h3 className="b-title">What I bring to every project</h3>
            <div className="focus-list">
              {coreStrengths.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="focus-item">
                    <div className="focus-icon">
                      <Icon size={16} />
                    </div>
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats Row */}
          {about.stats.map((stat, idx) => (
            <StatCard
              key={idx}
              targetNumber={stat.number}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
