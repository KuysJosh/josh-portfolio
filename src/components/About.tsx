import React from "react";
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
              <div className="t">
                <i />
                <i />
                <i />
                <span>{about.terminal.userHost}</span>
              </div>
              <pre>
                <span className="g">$</span> whoami
                {"\n"}
                <span className="s">josh</span> — IT professional
                {"\n"}
                <span className="g">$</span> cat focus.txt
                {"\n"}
                <span className="w">&gt;</span> web &amp; systems dev
                {"\n"}
                <span className="w">&gt;</span> networks &amp; security
                {"\n"}
                <span className="w">&gt;</span> troubleshooting
                {"\n"}
                <span className="g">$</span> location
                {"\n"}
                <span className="s">Cebu, PH</span> <span className="c"># UTC+8</span>
                {"\n"}
                <span className="g">$</span> status
                {"\n"}
                <span className="s">open to work</span>
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

