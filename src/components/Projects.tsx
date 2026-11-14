import React from "react";
import { useCardSpotlight } from "../hooks/useCardSpotlight";
import { portfolioData } from "../data/portfolioData";

export const Projects: React.FC = () => {
  const { onPointerMove } = useCardSpotlight();
  const { projects } = portfolioData;

  return (
    <section id="work" className="alt">
      <div className="wrap">
        <div className="rv">
          <span className="k">/projects</span>
          <h2>Selected projects.</h2>
        </div>

        <div className="work">
          {projects.map((project, idx) => (
            <a
              key={idx}
              className="card rv"
              href="#contact"
              onPointerMove={onPointerMove}
            >
              <div className="win">
                <div className="t">
                  <i />
                  <i />
                  <i />
                </div>
                <pre style={{ "--c1": project.terminal.glowColor } as React.CSSProperties}>
                  {project.terminal.command}
                  {"\n"}
                  {project.terminal.output.join("\n")}
                </pre>
              </div>

              <div className="body">
                <h3>
                  {project.title} <span>↗</span>
                </h3>
                <p>{project.description}</p>
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

