import React from "react";
import { Sparkles, Briefcase, ArrowUpRight } from "lucide-react";
import { AvatarStage } from "./AvatarStage";
import { useTypewriter } from "../hooks/useTypewriter";
import { useMagnetic } from "../hooks/useMagnetic";

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
  headlineLine2 = "I build reliable IT solutions.",
  roles = ["IT Staff", "MERN Stack Developer", "Python & PHP Developer", "Systems & Network Support"],
  leadText = "Currently working as IT Staff based in Tacloban City, Leyte. I design, build, and support secure, high-performance web systems and databases. Open for freelance & commission projects.",
  experienceYears = "3+ years",
  experienceLabel = "in IT",
}) => {
  const typedRole = useTypewriter(roles);
  const primaryBtnMagnetic = useMagnetic(0.16, 0.26);
  const secondaryBtnMagnetic = useMagnetic(0.16, 0.26);

  return (
    <div className="hero" id="top">
      <div className="grid" aria-hidden="true" />
      <div className="wrap">
        <div>
          <div className="status fade" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
            <Briefcase size={13} color="var(--ok)" />
            <span>{statusText}</span>
          </div>

          <h1>
            <span className="l">
              <span>{headlineLine1}</span>
            </span>
            <span className="l">
              <span>{headlineLine2}</span>
            </span>
          </h1>

          <div className="role fade" style={{ animationDelay: ".5s" }}>
            &gt; <b>{typedRole}</b>
          </div>

          <p className="lead fade" style={{ animationDelay: ".65s" }}>
            {leadText}
          </p>

          <div className="btns fade" style={{ animationDelay: ".8s" }}>
            <a
              className="btn p"
              href="#contact"
              onPointerMove={primaryBtnMagnetic.onPointerMove}
              onPointerLeave={primaryBtnMagnetic.onPointerLeave}
              style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
            >
              <Sparkles size={16} /> Commission Me
            </a>
            <a
              className="btn"
              href="#work"
              onPointerMove={secondaryBtnMagnetic.onPointerMove}
              onPointerLeave={secondaryBtnMagnetic.onPointerLeave}
              style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
            >
              View Projects <ArrowUpRight size={16} />
            </a>
          </div>

          <div
            className="fade"
            style={{
              animationDelay: "1s",
              marginTop: "24px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              flexWrap: "wrap",
              fontSize: "12.5px",
              fontFamily: "var(--mono)",
              color: "var(--mute)",
            }}
          >
            <span>Core:</span>
            <span style={{ color: "var(--ice)", fontWeight: 500 }}>MERN Stack</span>
            <span>·</span>
            <span style={{ color: "var(--ice)", fontWeight: 500 }}>PHP &amp; MySQL</span>
            <span>·</span>
            <span style={{ color: "var(--ice)", fontWeight: 500 }}>Python</span>
            <span>·</span>
            <span style={{ color: "var(--ok)", fontWeight: 500 }}>IT Support</span>
          </div>
        </div>

        <AvatarStage
          experienceYears={experienceYears}
          experienceLabel={experienceLabel}
        />
      </div>
    </div>
  );
};
