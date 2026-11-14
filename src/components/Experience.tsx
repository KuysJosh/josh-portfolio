import { Calendar, Building2, Briefcase } from "lucide-react";
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
              style={{ position: "relative" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "4px",
                }}
              >
                <small
                  style={{
                    background: "rgba(76, 201, 240, 0.1)",
                    border: "1px solid rgba(76, 201, 240, 0.25)",
                    padding: "3px 10px",
                    borderRadius: "99px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <Calendar size={12} />
                  {item.period}
                </small>

                {item.company && (
                  <span
                    style={{
                      fontSize: "12px",
                      fontFamily: "var(--mono)",
                      color: "var(--mute)",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <Building2 size={12} />
                    {item.company}
                  </span>
                )}
              </div>

              <h3 style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                <Briefcase size={16} color="var(--ice)" />
                <span>{item.role}</span>
              </h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
