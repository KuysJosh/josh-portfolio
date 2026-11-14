import React from "react";
import { portfolioData } from "../data/portfolioData";

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="wrap">
        <span>© 2026 {portfolioData.name}. Built with care.</span>
        <span>{portfolioData.location}</span>
      </div>
    </footer>
  );
};

