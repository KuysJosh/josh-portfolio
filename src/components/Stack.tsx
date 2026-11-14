import React from "react";
import { Code2, Server, Database, Terminal, Cpu } from "lucide-react";
import { useCardSpotlight } from "../hooks/useCardSpotlight";
import { portfolioData } from "../data/portfolioData";

export const Stack: React.FC = () => {
  const { onPointerMove } = useCardSpotlight();
  const { stack } = portfolioData;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 size={20} />;
      case "Server":
        return <Server size={20} />;
      case "Database":
        return <Database size={20} />;
      case "Terminal":
        return <Terminal size={20} />;
      default:
        return <Cpu size={20} />;
    }
  };

  const getCategoryColor = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes("mern") || t.includes("frontend")) return "#4cc9f0";
    if (t.includes("backend") || t.includes("systems")) return "#7b8cff";
    if (t.includes("database") || t.includes("storage")) return "#f72585";
    if (t.includes("tools") || t.includes("devops")) return "#10b981";
    return "var(--ice)";
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
                  {getIcon(cat.icon)}
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
