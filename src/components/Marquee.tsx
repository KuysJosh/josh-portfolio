import React from "react";
import { TechIcon } from "./TechIcon";

interface MarqueeProps {
  skills?: string[];
}

export const Marquee: React.FC<MarqueeProps> = ({
  skills = [
    "Networking",
    "Cloud",
    "Cybersecurity",
    "Web development",
    "Linux",
    "Databases",
    "Automation",
    "Tech support",
  ],
}) => {
  // Render twice for seamless continuous infinite marquee
  const trackItems = [...skills, ...skills];

  return (
    <div className="marq" aria-hidden="true">
      <div className="track">
        {trackItems.map((skill, index) => (
          <span
            key={`${skill}-${index}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <TechIcon name={skill} size={15} />
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

