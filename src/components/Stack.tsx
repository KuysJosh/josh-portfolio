import React from "react";
import { useCardSpotlight } from "../hooks/useCardSpotlight";
import { portfolioData } from "../data/portfolioData";

export const Stack: React.FC = () => {
  const { onPointerMove } = useCardSpotlight();
  const { stack } = portfolioData;

  return (
    <section id="stack" className="alt">
      <div className="wrap">
        <div className="rv">
          <span className="k">/stack</span>
          <h2>Tools I work with.</h2>
        </div>

        <div className="stack">
          {stack.map((cat, idx) => (
            <div key={idx} className="card rv" onPointerMove={onPointerMove}>
              <div className="ic">{cat.icon}</div>
              <h3>{cat.title}</h3>
              {cat.skills.map((skill, sIdx) => (
                <span key={sIdx} className="pl">
                  {skill}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

