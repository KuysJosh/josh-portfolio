import React from "react";
import { Code2, Server, Database, Terminal, Cpu } from "lucide-react";
import { useCardSpotlight } from "../hooks/useCardSpotlight";
import { portfolioData } from "../data/portfolioData";
import { TechIcon } from "./TechIcon";

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

  return (
    <section id="stack" className="section-stack">
      <div className="wrap">
        <div className="section-head rv">
          <span className="section-pill">Technical Expertise</span>
          <h2>Technologies &amp; systems I work with.</h2>
          <p className="section-sub">
            A practical stack covering modern full-stack web development, reliable database architecture, and day-to-day IT systems.
          </p>
        </div>

        <div className="stack">
          {stack.map((cat, idx) => {
            return (
              <div
                key={idx}
                className="card stack-card rv"
                onPointerMove={onPointerMove}
              >
                <div className="stack-card-head">
                  <div className="stack-icon-box">
                    {getIcon(cat.icon)}
                  </div>
                  <h3>{cat.title}</h3>
                </div>

                <div className="stack-pills-wrap">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="skill-pill"
                    >
                      <TechIcon name={skill} size={15} />
                      <span>{skill}</span>
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
