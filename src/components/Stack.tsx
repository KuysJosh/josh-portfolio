import React from "react";
import { useCardSpotlight } from "../hooks/useCardSpotlight";
import { portfolioData } from "../data/portfolioData";

export const Stack: React.FC = () => {
  const { onPointerMove } = useCardSpotlight();
  const { stack } = portfolioData;

  const getCategoryColor = (title: string) => {
    switch (title.toLowerCase()) {
      case "frontend":
        return "#4cc9f0";
      case "backend":
        return "#7b8cff";
      case "data & cloud":
        return "#f72585";
      case "ops & security":
        return "#10b981";
      default:
        return "var(--ice)";
    }
  };

  return (
    <section id="stack" className="alt">
      <div className="wrap">
        <div className="rv">
          <span className="k">/stack</span>
          <h2>Tools I work with.</h2>
        </div>

        <div className="stack">
          {stack.map((cat, idx) => {
            const accentColor = getCategoryColor(cat.title);
            return (
              <div
                key={idx}
                className="card rv"
                onPointerMove={onPointerMove}
                style={{
                  borderTop: `2px solid ${accentColor}40`,
                }}
              >
                <div
                  className="ic"
                  style={{
                    color: accentColor,
                    borderColor: `${accentColor}30`,
                    background: `${accentColor}12`,
                  }}
                >
                  {cat.icon}
                </div>
                <h3 style={{ color: accentColor }}>{cat.title}</h3>
                <div>
                  {cat.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="pl">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
