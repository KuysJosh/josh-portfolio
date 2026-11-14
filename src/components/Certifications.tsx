import React from "react";
import { useCardSpotlight } from "../hooks/useCardSpotlight";
import { portfolioData } from "../data/portfolioData";

export const Certifications: React.FC = () => {
  const { onPointerMove } = useCardSpotlight();
  const { certifications } = portfolioData;

  return (
    <section id="certs">
      <div className="wrap">
        <div className="rv">
          <span className="k">/certifications</span>
          <h2>Training &amp; certificates.</h2>
        </div>

        <div className="certs">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="card rv"
              onPointerMove={onPointerMove}
            >
              <div className="ic">✓</div>
              <b>{cert.title}</b>
              <span>{cert.issuerYear}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

