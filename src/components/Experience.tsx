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
            >
              <small>{item.period}</small>
              <h3>{item.role}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

