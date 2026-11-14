import { useState, useEffect } from "react";
import { portfolioData } from "../data/portfolioData";
import type { ProjectItem } from "../data/portfolioData";

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
}

export function useGitHubProjects(username = "KuysJosh") {
  const [projects, setProjects] = useState<ProjectItem[]>(portfolioData.projects);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchRepos() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?sort=pushed&per_page=12`
        );

        if (!res.ok) {
          throw new Error(`GitHub API error: ${res.statusText}`);
        }

        const data: GitHubRepo[] = await res.json();

        if (!isMounted) return;

        // Map repos to project items with customized terminal preview and tags
        const formatted: ProjectItem[] = data
          .filter((repo) => repo.name !== "KuysJosh.github.io" && repo.name !== "portfolio")
          .map((repo) => {
            // Find existing curated details if available
            const existing = portfolioData.projects.find(
              (p) => p.name && p.name.toLowerCase() === repo.name.toLowerCase()
            );

            if (existing) {
              return {
                ...existing,
                url: repo.html_url,
                stars: repo.stargazers_count,
                forks: repo.forks_count,
              };
            }

            // Generate contextual terminal output based on language
            const lang = repo.language || "Code";
            let cmd = `$ git log -1 --oneline`;
            let output = [`commit ${repo.name.slice(0, 7)}`, `Branch: main (up-to-date)`];
            let glow = "rgba(123,140,255,.3)";

            if (lang === "PHP") {
              cmd = `$ php artisan serve`;
              output = [`✓ Server running on http://127.0.0.1:8000`, `✓ Database connection verified`];
              glow = "rgba(123,140,255,.35)";
            } else if (lang === "JavaScript" || lang === "TypeScript" || lang === "React") {
              cmd = `$ npm run build`;
              output = [`✓ compiled successfully`, `✓ production bundle ready`];
              glow = "rgba(94,225,255,.3)";
            } else if (lang === "HTML" || lang === "CSS") {
              cmd = `$ live-server --port=3000`;
              output = [`✓ Ready in 120ms`, `✓ Responsive layout verified`];
              glow = "rgba(74,222,128,.25)";
            }

            const tags = [lang];
            if (repo.topics && repo.topics.length > 0) {
              tags.push(...repo.topics.slice(0, 2));
            } else {
              tags.push("Open Source");
            }

            return {
              name: repo.name,
              title: repo.name.replace(/[-_]/g, " "),
              description:
                repo.description ||
                `Public repository developed by @${username}. Built with ${lang}.`,
              url: repo.html_url,
              tags,
              stars: repo.stargazers_count,
              forks: repo.forks_count,
              terminal: {
                command: cmd,
                output,
                glowColor: glow,
              },
            };
          });

        if (formatted.length > 0) {
          setProjects(formatted);
        }
      } catch (err) {
        console.warn("Could not fetch live GitHub repositories, using curated projects:", err);
        setError(err instanceof Error ? err.message : "Failed to fetch repositories");
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchRepos();

    return () => {
      isMounted = false;
    };
  }, [username]);

  return { projects, loading, error };
}
