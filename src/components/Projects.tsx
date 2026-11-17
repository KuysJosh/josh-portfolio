import React, { useState } from "react";
import { ArrowUpRight, Star, GitFork } from "lucide-react";
import { useCardSpotlight } from "../hooks/useCardSpotlight";
import { useGitHubProjects } from "../hooks/useGitHubProjects";
import { portfolioData } from "../data/portfolioData";
import { TechIcon } from "./TechIcon";

const GithubIcon: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const Projects: React.FC = () => {
  const { onPointerMove } = useCardSpotlight();
  const { projects } = useGitHubProjects(portfolioData.githubUsername);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "MERN & React", "PHP & MySQL", "Tools & Systems"];

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
    if (filter === "Tools & Systems") {
      return p.tags.some((t) =>
        ["python", "docker", "system", "mediastream", "portal"].some((k) =>
          t.toLowerCase().includes(k)
        )
      );
    }
    return true;
  });

  return (
    <section id="work" className="section-projects">
      <div className="wrap">
        <div className="projects-header rv">
          <div>
            <span className="section-pill">Selected Work</span>
            <h2>Systems &amp; web projects.</h2>
            <p className="section-sub">
              A curated collection of production systems, portals, and custom full-stack applications.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="filter-pill-group">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`filter-btn ${filter === cat ? "active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2 Projects Per Row Grid (Mobile & Desktop) */}
        <div className="work-grid">
          {filteredProjects.map((project, idx) => (
            <a
              key={project.name || idx}
              className="project-card rv"
              href={project.url || `https://github.com/${portfolioData.githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              onPointerMove={onPointerMove}
            >
              {/* Image Preview Banner */}
              {project.image ? (
                <div className="project-media">
                  <img
                    src={project.image}
                    alt={`${project.title} Preview`}
                    loading="lazy"
                    className="project-thumb"
                  />
                  <div className="project-media-overlay" />
                  <span className="project-badge">System</span>
                </div>
              ) : (
                <div className="project-media placeholder">
                  <GithubIcon size={28} />
                </div>
              )}

              {/* Card Content */}
              <div className="project-content">
                <div className="project-title-row">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-arrow-icon">
                    <ArrowUpRight size={15} />
                  </div>
                </div>

                <p className="project-desc">{project.description}</p>

                {/* Tech Tags with Brand Logos */}
                <div className="project-tags-row">
                  {project.tags.slice(0, 3).map((tag, tIdx) => (
                    <span key={tIdx} className="project-chip">
                      <TechIcon name={tag} size={12} />
                      <span>{tag}</span>
                    </span>
                  ))}
                  {typeof project.stars === "number" && project.stars > 0 && (
                    <span className="project-chip meta">
                      <Star size={10} /> {project.stars}
                    </span>
                  )}
                  {typeof project.forks === "number" && project.forks > 0 && (
                    <span className="project-chip meta">
                      <GitFork size={10} /> {project.forks}
                    </span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="projects-cta rv">
          <a
            className="btn btn-secondary"
            href={portfolioData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon size={16} />
            <span>Explore All Repositories on GitHub</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};
