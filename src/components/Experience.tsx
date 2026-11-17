import React from "react";
import { Calendar, Building2, Briefcase } from "lucide-react";
import { useCardSpotlight } from "../hooks/useCardSpotlight";
import { portfolioData } from "../data/portfolioData";

export const Experience: React.FC = () => {
  const { onPointerMove } = useCardSpotlight();
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section-experience">
      <div className="wrap">
        <div className="section-head rv">
          <span className="section-pill">Career &amp; Background</span>
          <h2>Professional path &amp; experience.</h2>
          <p className="section-sub">
            Hands-on work in IT support, administrative data systems, and technical problem solving.
          </p>
        </div>

        <div className="timeline-wrap">
          {experience.map((item, idx) => {
            const isCurrent = item.period.toLowerCase().includes("present");
            return (
              <div
                key={idx}
                className="timeline-card rv"
                onPointerMove={onPointerMove}
              >
                <div className="timeline-meta-row">
                  <div className={`period-badge ${isCurrent ? "current" : ""}`}>
                    {isCurrent && <span className="period-dot" />}
                    <Calendar size={12} />
                    <span>{item.period}</span>
                  </div>

                  {item.company && (
                    <span className="company-tag">
                      <Building2 size={13} />
                      <span>{item.company}</span>
                    </span>
                  )}
                </div>

                <h3 className="role-title">
                  <Briefcase size={17} className="role-icon" />
                  <span>{item.role}</span>
                </h3>

                <p className="role-desc">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
