import React, { useState } from "react";
import { FolderGit2, ExternalLink, Star, GitFork, Copy, Check } from "lucide-react";
import { useCardSpotlight } from "../hooks/useCardSpotlight";
import { useGitHubProjects } from "../hooks/useGitHubProjects";
import { portfolioData } from "../data/portfolioData";
import { TechIcon } from "./TechIcon";

export const Projects: React.FC = () => {
  const { onPointerMove } = useCardSpotlight();
  const { projects } = useGitHubProjects(portfolioData.githubUsername);
  const [filter, setFilter] = useState<string>("All");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const categories = ["All", "MERN & React", "PHP & MySQL", "Tools"];

  const filteredProjects = projects.filter((p) => {
    if (filter === "All") return true;
    if (filter === "MERN & React") {
      return p.tags.some((t) =>
        ["mern", "react", "node", "javascript", "js", "html", "css"].some((k) =>
          t.toLowerCase().includes(k)
        )
      );
    }
    if (filter === "PHP & MySQL") {
      return p.tags.some((t) =>
        ["php", "mysql", "database", "archiving"].some((k) =>
          t.toLowerCase().includes(k)
        )
      );
    }
    if (filter === "Tools") {
      return p.tags.some((t) =>
        ["python", "docker", "system", "mediastream", "portal"].some((k) =>
          t.toLowerCase().includes(k)
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
    if (t.includes("javascript") || t === "js") return "#f7df1e";
    if (t.includes("html")) return "#e34c26";
    if (t.includes("css")) return "#264de4";
    if (t.includes("mysql") || t.includes("database")) return "#00758f";
    if (t.includes("python")) return "#4584b6";
    if (t.includes("docker")) return "#2496ed";
    return "var(--ice)";
  };

  return (
    <section id="work" className="alt">
      <div className="wrap">
        <div
          className="rv"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "16px",
            marginBottom: "clamp(16px, 3vw, 28px)",
          }}
        >
          <div>
            <span className="k">/projects</span>
            <h2>Selected projects.</h2>
          </div>

          {/* Filter Pills */}
          <div
            style={{
              display: "flex",
              gap: "6px",
              flexWrap: "wrap",
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: "6px 14px",
                  borderRadius: "99px",
                  fontSize: "12px",
                  fontWeight: 500,
                  fontFamily: "var(--mono)",
                  cursor: "pointer",
                  border: filter === cat ? "1px solid var(--ice)" : "1px solid var(--line-strong)",
                  background: filter === cat ? "rgba(76, 201, 240, 0.15)" : "rgba(255, 255, 255, 0.03)",
                  color: filter === cat ? "#fff" : "var(--mute)",
                  transition: "all 0.25s var(--ease)",
                  boxShadow: filter === cat ? "0 0 14px rgba(76, 201, 240, 0.25)" : "none",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2 Projects Per Row Grid */}
        <div className="work">
          {filteredProjects.map((project, idx) => (
            <a
              key={project.name || idx}
              className="card rv"
              href={project.url || `https://github.com/${portfolioData.githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              onPointerMove={onPointerMove}
              style={{
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                textDecoration: "none",
              }}
            >
              {/* Project Preview Image Banner */}
              {project.image && (
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "16 / 10",
                    background: "#080c18",
                    overflow: "hidden",
                    borderBottom: "1px solid var(--line)",
                  }}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} Preview`}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.4s var(--ease)",
                      display: "block",
                    }}
                    className="project-thumb"
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(180deg, transparent 60%, rgba(5, 7, 12, 0.65) 100%)",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              )}

              {/* Terminal Window Output */}
              <div className="win">
                <div className="t">
                  <i />
                  <i />
                  <i />
                  <span>
                    {project.name ? project.name : "terminal"}
                  </span>

                  <button
                    onClick={(e) => handleCopyCommand(e, project.terminal.command, idx)}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: copiedIndex === idx ? "var(--ok)" : "var(--mute)",
                      fontSize: "11px",
                      cursor: "pointer",
                      padding: "2px 4px",
                      fontFamily: "var(--mono)",
                      marginLeft: "auto",
                      display: "inline-flex",
                      alignItems: "center",
                    }}
                    title="Copy command"
                  >
                    {copiedIndex === idx ? <Check size={11} color="var(--ok)" /> : <Copy size={11} />}
                  </button>
                </div>
                <pre style={{ "--c1": project.terminal.glowColor } as React.CSSProperties}>
                  {project.terminal.command}
                  {"\n"}
                  {project.terminal.output.join("\n")}
                </pre>
              </div>

              {/* Body */}
              <div className="body" style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <h3>
                    <span>{project.title}</span>
                    <ExternalLink size={14} className="proj-arrow" />
                  </h3>
                  <p>{project.description}</p>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "4px", marginTop: "auto" }}>
                  {project.tags.slice(0, 3).map((tag, tIdx) => {
                    const color = getLanguageColor(tag);
                    return (
                      <span
                        key={tIdx}
                        className="chip"
                        style={{
                          borderColor: `${color}40`,
                          color: color,
                          background: `${color}10`,
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <TechIcon name={tag} size={11} />
                        {tag}
                      </span>
                    );
                  })}
                  {typeof project.stars === "number" && project.stars > 0 && (
                    <span className="chip" style={{ color: "#febc2e", borderColor: "#febc2e40" }}>
                      <Star size={9} style={{ display: "inline", verticalAlign: "middle" }} /> {project.stars}
                    </span>
                  )}
                  {typeof project.forks === "number" && project.forks > 0 && (
                    <span className="chip" style={{ color: "var(--silver)" }}>
                      <GitFork size={9} style={{ display: "inline", verticalAlign: "middle" }} /> {project.forks}
                    </span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div style={{ marginTop: "32px", textAlign: "center" }} className="rv">
          <a
            className="btn"
            href={portfolioData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "12px 24px",
              fontSize: "14px",
              fontWeight: 500,
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <FolderGit2 size={16} /> Explore All Repositories on GitHub <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};
