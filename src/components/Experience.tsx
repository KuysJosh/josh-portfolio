import React from "react";
import { useCardSpotlight } from "../hooks/useCardSpotlight";
import { portfolioData } from "../data/portfolioData";

export const Experience: React.FC = () => {
  const { onPointerMove } = useCardSpotlight();
  const { experience } = portfolioData;

  return (
    <section id="experience">
      <div className="wrap">
        <div className="rv">
          <span className="k">/experience</span>
          <h2>Where I’ve worked.</h2>
        </div>

        <div className="tl">
          {experience.map((item, idx) => (
            <div
              key={idx}
              className="card e rv"
              onPointerMove={onPointerMove}
              style={{
                position: "relative",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
                <small
                  style={{
                    background: "rgba(76, 201, 240, 0.1)",
                    border: "1px solid rgba(76, 201, 240, 0.25)",
                    padding: "3px 10px",
                    borderRadius: "99px",
                  }}
                >
                  {item.period}
                </small>
                <span style={{ fontSize: "12px", fontFamily: "var(--mono)", color: "var(--mute)" }}>
                  Verified Role
                </span>
              </div>
              <h3>{item.role}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
