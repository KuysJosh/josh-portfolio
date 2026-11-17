import React from "react";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import { AvatarStage } from "./AvatarStage";
import { useTypewriter } from "../hooks/useTypewriter";
import { useMagnetic } from "../hooks/useMagnetic";
import { TechIcon } from "./TechIcon";
import { portfolioData } from "../data/portfolioData";

interface HeroProps {
  statusText?: string;
  headlineLine1?: string;
  headlineLine2?: string;
  roles?: string[];
  leadText?: string;
  experienceYears?: string;
  experienceLabel?: string;
}

export const Hero: React.FC<HeroProps> = ({
  statusText = "Currently working as IT Staff · Open for commission",
  headlineLine1 = "Hi, I’m Josh.",
  headlineLine2 = "Crafting dependable web systems & IT solutions.",
  roles = ["IT Staff", "MERN Stack Developer", "PHP & MySQL Specialist", "Python & Automation Builder"],
  leadText = "Currently working as IT Staff based in Tacloban City, Leyte. I design, build, and support secure, high-performance web systems and databases. Open for freelance & commission projects.",
  experienceYears = "3+ years",
  experienceLabel = "in IT",
}) => {
  const typedRole = useTypewriter(roles);
  const primaryBtnMagnetic = useMagnetic(0.14, 0.22);
  const secondaryBtnMagnetic = useMagnetic(0.14, 0.22);

  const heroTech = [
    { name: "MERN Stack", label: "MERN" },
    { name: "PHP", label: "PHP" },
    { name: "MySQL", label: "MySQL" },
    { name: "Python", label: "Python" },
    { name: "JavaScript", label: "JavaScript" },
  ];

  return (
    <section className="hero" id="top">
      <div className="hero-ambient" aria-hidden="true" />
      <div className="wrap">
        <div className="hero-content">
          <div className="status-pill fade">
            <span className="live-dot" />
            <span>{statusText}</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-name">{headlineLine1}</span>
            <span className="hero-statement">{headlineLine2}</span>
          </h1>

          <div className="role-badge fade" style={{ animationDelay: ".3s" }}>
            <span className="role-label">Specializing in</span>
            <strong className="role-text">{typedRole}</strong>
          </div>

          <p className="lead fade" style={{ animationDelay: ".45s" }}>
            {leadText}
          </p>

          <div className="btns fade" style={{ animationDelay: ".6s" }}>
            <a
              className="btn btn-primary"
              href="#contact"
              onPointerMove={primaryBtnMagnetic.onPointerMove}
              onPointerLeave={primaryBtnMagnetic.onPointerLeave}
            >
              Commission a Project
            </a>
            <a
              className="btn btn-secondary"
              href="#work"
              onPointerMove={secondaryBtnMagnetic.onPointerMove}
              onPointerLeave={secondaryBtnMagnetic.onPointerLeave}
            >
              <span>Explore Projects</span>
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Quick Direct Contacts */}
          <div className="hero-contact-strip fade" style={{ animationDelay: ".75s" }}>
            <a href={`tel:${portfolioData.phone}`} className="quick-pill" title="Call directly">
              <Phone size={13} />
              <span>{portfolioData.phoneFormatted}</span>
            </a>
            <a href={`mailto:${portfolioData.email}`} className="quick-pill" title="Email directly">
              <Mail size={13} />
              <span>{portfolioData.email}</span>
            </a>
            <span className="quick-pill static">
              <MapPin size={13} />
              <span>Tacloban City, Leyte</span>
            </span>
          </div>

          {/* Core Tech Stack Row */}
          <div className="hero-tech-row fade" style={{ animationDelay: ".9s" }}>
            <span className="tech-row-label">Core Stack:</span>
            <div className="tech-pills-list">
              {heroTech.map((tech) => (
                <span key={tech.name} className="hero-tech-pill">
                  <TechIcon name={tech.name} size={13} />
                  <span>{tech.label}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <AvatarStage
            experienceYears={experienceYears}
            experienceLabel={experienceLabel}
          />
        </div>
      </div>
    </section>
  );
};
