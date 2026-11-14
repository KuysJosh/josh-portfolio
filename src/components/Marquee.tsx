import React from "react";

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
          <span key={`${skill}-${index}`}>{skill}</span>
        ))}
      </div>
    </div>
  );
};

