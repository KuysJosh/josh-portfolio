import React, { useState } from "react";
import { Terminal, Copy, Check, MapPin } from "lucide-react";
import { useCardSpotlight } from "../hooks/useCardSpotlight";
import { useAnimatedCounter } from "../hooks/useAnimatedCounter";
import { portfolioData } from "../data/portfolioData";

interface StatCardProps {
  targetNumber: number;
  suffix: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ targetNumber, suffix, label }) => {
  const { onPointerMove } = useCardSpotlight();
  const { ref, display } = useAnimatedCounter(targetNumber, suffix);

  return (
    <div className="card b-s rv" ref={ref} onPointerMove={onPointerMove}>
      <b>{display}</b>
      <span>{label}</span>
    </div>
  );
};

export const About: React.FC = () => {
  const { onPointerMove } = useCardSpotlight();
  const { about } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyTerminal = () => {
    const text = `josh — IT Staff & Full-Stack Developer\nStack:\n- MERN (MongoDB, Express, React, Node)\n- PHP & MySQL database systems\n- Python scripting\n- Modern HTML5, CSS3, & JS\nLocation: Tacloban City, Leyte, PH\nStatus: IT Staff · Open for commission`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="about">
      <div className="wrap">
        <div className="rv">
          <span className="k">{about.tag}</span>
          <h2>{about.title}</h2>
        </div>

        <div className="bento">
          <div className="card b-intro rv" onPointerMove={onPointerMove}>
            <p className="big">{about.leadParagraph}</p>
            <p>{about.subParagraph}</p>
            <div style={{ marginTop: "12px", display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12.5px", fontFamily: "var(--mono)", color: "var(--ice)" }}>
              <MapPin size={14} /> Based in Tacloban City, Leyte · Open for Commission
            </div>
          </div>

          <div className="card b-term rv" onPointerMove={onPointerMove}>
            <div className="term">
              <div className="t" style={{ justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                  <i />
                  <i />
                  <i />
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
                    <Terminal size={12} /> {about.terminal.userHost}
                  </span>
                </div>

                <button
                  onClick={handleCopyTerminal}
                  style={{
                    background: "rgba(255, 255, 255, 0.06)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "6px",
                    color: copied ? "var(--ok)" : "var(--mute)",
                    padding: "3px 8px",
                    fontSize: "11px",
                    cursor: "pointer",
                    fontFamily: "var(--mono)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    transition: "all 0.2s",
                  }}
                  title="Copy terminal text"
                >
                  {copied ? <Check size={11} color="var(--ok)" /> : <Copy size={11} />}
                  <span>{copied ? "Copied" : "Copy"}</span>
                </button>
              </div>

              <pre>
                <span className="g">$</span> whoami
                {"\n"}
                <span className="s">josh</span> — IT Staff &amp; Full-Stack Dev
                {"\n\n"}
                <span className="g">$</span> cat stack.txt
                {"\n"}
                <span className="w">&gt;</span> MERN (MongoDB, Express, React, Node)
                {"\n"}
                <span className="w">&gt;</span> PHP &amp; MySQL databases
                {"\n"}
                <span className="w">&gt;</span> Python scripting
                {"\n"}
                <span className="w">&gt;</span> HTML5, CSS3, &amp; JavaScript
                {"\n\n"}
                <span className="g">$</span> location
                {"\n"}
                <span className="s">Tacloban City, Leyte, PH</span> <span className="c"># UTC+8</span>
                {"\n\n"}
                <span className="g">$</span> status
                {"\n"}
                <span className="s" style={{ color: "var(--ok)" }}>● IT Staff · Open for commission</span>
              </pre>
            </div>
          </div>

          {about.stats.map((stat, idx) => (
            <StatCard
              key={idx}
              targetNumber={stat.number}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
