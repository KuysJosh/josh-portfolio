import React from "react";
import { Award, CheckCircle2, ShieldCheck } from "lucide-react";
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
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  className="ic"
                  style={{
                    color: "var(--ok)",
                    borderColor: "rgba(16, 185, 129, 0.3)",
                    background: "rgba(16, 185, 129, 0.1)",
                  }}
                >
                  <Award size={20} />
                </div>
                <b>{cert.title}</b>
                <span>{cert.issuerYear}</span>
              </div>

              <div
                style={{
                  marginTop: "16px",
                  paddingTop: "10px",
                  borderTop: "1px solid var(--line)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    fontSize: "11px",
                    fontFamily: "var(--mono)",
                    color: "var(--ok)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    fontWeight: 600,
                  }}
                >
                  <CheckCircle2 size={13} />
                  Verified Training
                </span>
                <ShieldCheck size={14} color="var(--ok)" style={{ opacity: 0.7 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
