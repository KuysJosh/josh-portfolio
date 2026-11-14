import React from "react";
import { useCardSpotlight } from "../hooks/useCardSpotlight";
import { useGitHubProjects } from "../hooks/useGitHubProjects";
import { portfolioData } from "../data/portfolioData";

export const Projects: React.FC = () => {
  const { onPointerMove } = useCardSpotlight();
  const { projects } = useGitHubProjects(portfolioData.githubUsername);

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
              key={project.name || idx}
              className="card rv"
              href={project.url || `https://github.com/${portfolioData.githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              onPointerMove={onPointerMove}
            >
              <div className="win">
                <div className="t">
                  <i />
                  <i />
                  <i />
                  <span>
                    {project.name ? `github.com/${portfolioData.githubUsername}/${project.name}` : "bash"}
                  </span>
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
                <div>
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="chip">
                      {tag}
                    </span>
                  ))}
                  {typeof project.stars === "number" && project.stars > 0 && (
                    <span className="chip">★ {project.stars}</span>
                  )}
                  {typeof project.forks === "number" && project.forks > 0 && (
                    <span className="chip">⑂ {project.forks}</span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div style={{ marginTop: "36px", textAlign: "center" }} className="rv">
          <a
            className="btn"
            href={portfolioData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "12px 24px",
              fontSize: "15px",
            }}
          >
            Explore all repositories on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
};
