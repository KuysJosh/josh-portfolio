import React, { useState } from "react";
import { useCardSpotlight } from "../hooks/useCardSpotlight";
import { useGitHubProjects } from "../hooks/useGitHubProjects";
import { portfolioData } from "../data/portfolioData";

export const Projects: React.FC = () => {
  const { onPointerMove } = useCardSpotlight();
  const { projects } = useGitHubProjects(portfolioData.githubUsername);
  const [filter, setFilter] = useState<string>("All");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const categories = ["All", "Web", "System", "PHP"];

  const filteredProjects = projects.filter((p) => {
    if (filter === "All") return true;
    if (filter === "PHP") return p.tags.some((t) => t.toLowerCase().includes("php"));
    if (filter === "Web") {
      return p.tags.some((t) =>
        ["react", "html", "web", "javascript", "typescript", "css"].some((k) =>
          t.toLowerCase().includes(k)
        )
      );
    }
    if (filter === "System") {
      return p.tags.some((t) =>
        ["system", "database", "docker", "devops", "network", "linux", "cloud", "security"].some(
          (k) => t.toLowerCase().includes(k)
        )
      );
    }
    return true;
  });

  const handleCopyCommand = (e: React.MouseEvent, cmd: string, idx: number) => {
    e.preventDefault();
    e.stopPropagation();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(cmd.replace(/^\$\s*/, ""));
      setCopiedIndex(idx);
      setTimeout(() => setCopiedIndex(null), 2000);
    }
  };

  const getLanguageColor = (tag: string) => {
    const t = tag.toLowerCase();
    if (t.includes("react") || t.includes("typescript")) return "#61dafb";
    if (t.includes("php")) return "#777bb4";
    if (t.includes("javascript")) return "#f7df1e";
    if (t.includes("html")) return "#e34c26";
    if (t.includes("css")) return "#264de4";
    if (t.includes("docker")) return "#2496ed";
    if (t.includes("mysql") || t.includes("database")) return "#00758f";
    return "var(--ice)";
  };

  return (
    <section id="work" className="alt">
      <div className="wrap">
        <div className="rv" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "20px" }}>
          <div>
            <span className="k">/projects</span>
            <h2>Selected projects.</h2>
          </div>

          {/* Filter Pills */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "clamp(24px, 4vw, 40px)" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: "8px 18px",
                  borderRadius: "99px",
                  fontSize: "13.5px",
                  fontWeight: 500,
                  fontFamily: "var(--mono)",
                  cursor: "pointer",
                  border: filter === cat ? "1px solid var(--ice)" : "1px solid var(--line-strong)",
                  background: filter === cat ? "rgba(76, 201, 240, 0.15)" : "rgba(255, 255, 255, 0.03)",
                  color: filter === cat ? "#fff" : "var(--mute)",
                  transition: "all 0.25s var(--ease)",
                  boxShadow: filter === cat ? "0 0 16px rgba(76, 201, 240, 0.25)" : "none",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="work">
          {filteredProjects.map((project, idx) => (
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
                    {project.name ? `github.com/${portfolioData.githubUsername}/${project.name}` : "terminal"}
                  </span>

                  <button
                    onClick={(e) => handleCopyCommand(e, project.terminal.command, idx)}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: copiedIndex === idx ? "var(--ok)" : "var(--mute)",
                      fontSize: "11px",
                      cursor: "pointer",
                      padding: "2px 6px",
                      fontFamily: "var(--mono)",
                      marginLeft: "8px",
                    }}
                    title="Copy command"
                  >
                    {copiedIndex === idx ? "✓" : "📋"}
                  </button>
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
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px" }}>
                  {project.tags.map((tag, tIdx) => {
                    const color = getLanguageColor(tag);
                    return (
                      <span
                        key={tIdx}
                        className="chip"
                        style={{
                          borderColor: `${color}40`,
                          color: color,
                          background: `${color}10`,
                        }}
                      >
                        ● {tag}
                      </span>
                    );
                  })}
                  {typeof project.stars === "number" && project.stars > 0 && (
                    <span className="chip" style={{ color: "#febc2e", borderColor: "#febc2e40" }}>
                      ★ {project.stars}
                    </span>
                  )}
                  {typeof project.forks === "number" && project.forks > 0 && (
                    <span className="chip" style={{ color: "var(--silver)" }}>
                      ⑂ {project.forks}
                    </span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div style={{ marginTop: "44px", textAlign: "center" }} className="rv">
          <a
            className="btn"
            href={portfolioData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "14px 28px",
              fontSize: "15px",
              fontWeight: 500,
            }}
          >
            Explore all repositories on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
};
