import React from "react";
import { Award, CheckCircle2, ShieldCheck } from "lucide-react";
import { useCardSpotlight } from "../hooks/useCardSpotlight";
import { portfolioData } from "../data/portfolioData";

export const Certifications: React.FC = () => {
  const { onPointerMove } = useCardSpotlight();
  const { certifications } = portfolioData;

  return (
    <section id="certs" className="section-certs">
      <div className="wrap">
        <div className="section-head rv">
          <span className="section-pill">Certifications &amp; Training</span>
          <h2>Verified credentials &amp; seminars.</h2>
          <p className="section-sub">
            Formal technical certifications, on-the-job training, and developer conferences.
          </p>
        </div>

        <div className="certs-grid">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="cert-card rv"
              onPointerMove={onPointerMove}
            >
              <div className="cert-top">
                <div className="cert-icon-box">
                  <Award size={18} />
                </div>
                <span className="cert-verified">
                  <CheckCircle2 size={12} /> Verified
                </span>
              </div>

              <div className="cert-body">
                <h4 className="cert-title">{cert.title}</h4>
                <p className="cert-issuer">{cert.issuerYear}</p>
              </div>

              <div className="cert-footer">
                <span className="cert-seal">
                  <ShieldCheck size={13} />
                  <span>Completed Training</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
