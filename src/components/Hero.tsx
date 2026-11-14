import React from "react";
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
  statusText = "online · open to opportunities",
  headlineLine1 = "Hi, I’m Josh.",
  headlineLine2 = "I build reliable IT solutions.",
  roles = ["IT professional", "Full-stack developer", "Systems & network support"],
  leadText = "An IT professional from Cebu, Philippines. I design, build and support secure systems that teams can depend on.",
  experienceYears = "3+ years",
  experienceLabel = "in IT",
}) => {
  const typedRole = useTypewriter(roles);
  const primaryBtnMagnetic = useMagnetic(0.16, 0.26);

  return (
    <div className="hero" id="top">
      <div className="grid" aria-hidden="true" />
      <div className="wrap">
        <div>
          <div className="status fade">{statusText}</div>

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
              href="#work"
              onPointerMove={primaryBtnMagnetic.onPointerMove}
              onPointerLeave={primaryBtnMagnetic.onPointerLeave}
            >
              View projects ↗
            </a>
            <a className="btn" href="#contact">
              Contact me
            </a>
          </div>

          <div
            className="fade"
            style={{
              animationDelay: "1s",
              marginTop: "28px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              flexWrap: "wrap",
              fontSize: "13px",
              fontFamily: "var(--mono)",
              color: "var(--mute)",
            }}
          >
            <span>Core focus:</span>
            <span style={{ color: "var(--silver)" }}>Systems</span>
            <span>·</span>
            <span style={{ color: "var(--silver)" }}>Web Apps</span>
            <span>·</span>
            <span style={{ color: "var(--silver)" }}>Cloud &amp; DevOps</span>
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
