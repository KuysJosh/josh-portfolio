import React, { useState } from "react";
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
    const text = `josh — IT professional\nFocus:\n- web & systems dev\n- networks & security\n- troubleshooting\nLocation: Cebu, PH (UTC+8)\nStatus: open to work`;
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
          </div>

          <div className="card b-term rv" onPointerMove={onPointerMove}>
            <div className="term">
              <div className="t" style={{ justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                  <i />
                  <i />
                  <i />
                  <span>{about.terminal.userHost}</span>
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
                    transition: "all 0.2s",
                  }}
                  title="Copy terminal text"
                >
                  {copied ? "✓ Copied" : "Copy"}
                </button>
              </div>

              <pre>
                <span className="g">$</span> whoami
                {"\n"}
                <span className="s">josh</span> — IT professional
                {"\n\n"}
                <span className="g">$</span> cat focus.txt
                {"\n"}
                <span className="w">&gt;</span> web &amp; systems dev
                {"\n"}
                <span className="w">&gt;</span> networks &amp; security
                {"\n"}
                <span className="w">&gt;</span> troubleshooting
                {"\n\n"}
                <span className="g">$</span> location
                {"\n"}
                <span className="s">Cebu, PH</span> <span className="c"># UTC+8</span>
                {"\n\n"}
                <span className="g">$</span> status
                {"\n"}
                <span className="s" style={{ color: "var(--ok)" }}>● open to work</span>
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
