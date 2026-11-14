import React from "react";

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, size = 16, className = "" }) => {
  const norm = name.trim().toLowerCase();

  // React
  if (norm.includes("react")) {
    return (
      <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" className={className}>
        <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
        <g stroke="#61dafb" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  // JavaScript / JS
  if (norm === "javascript" || norm === "js") {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
        <rect width="32" height="32" rx="4" fill="#f7df1e" />
        <path
          d="M19.5 24.5c.7.4 1.5.7 2.4.7 1.4 0 2.2-.7 2.2-1.8v-9.7h3v9.8c0 3.3-2 4.8-4.9 4.8-1.5 0-2.8-.5-3.6-1.1l.9-2.7zm-8.8-.2c.6.3 1.3.6 2 .6 1.1 0 1.8-.5 1.8-1.4 0-.9-.6-1.3-1.8-1.8l-.8-.3c-2.1-.9-3.2-2.1-3.2-3.8 0-2.3 1.8-3.9 4.6-3.9 1.3 0 2.4.4 3.1.8l-.9 2.5c-.6-.3-1.3-.5-2.2-.5-1 0-1.6.5-1.6 1.2 0 .8.6 1.2 1.8 1.6l.8.3c2.3 1 3.3 2.1 3.3 3.9 0 2.4-1.8 4-4.8 4-1.6 0-2.9-.4-3.8-1l1.6-2.1z"
          fill="#000"
        />
      </svg>
    );
  }

  // TypeScript / TS
  if (norm.includes("typescript") || norm === "ts") {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
        <rect width="32" height="32" rx="4" fill="#3178c6" />
        <path d="M12.5 13h7v2.5h-2.2v9h-2.6v-9h-2.2V13zm8.5 7.8c.6.3 1.3.5 2 .5 1.1 0 1.8-.5 1.8-1.3 0-.8-.6-1.2-1.7-1.6l-.8-.3c-2-.8-3-2-3-3.6 0-2.2 1.7-3.8 4.4-3.8 1.2 0 2.2.3 2.9.7l-.8 2.3c-.6-.3-1.2-.5-2-.5-.9 0-1.5.5-1.5 1.1 0 .7.5 1.1 1.6 1.5l.8.3c2.2.9 3.1 2 3.1 3.7 0 2.3-1.7 3.8-4.6 3.8-1.5 0-2.7-.4-3.6-.9l1.4-2.2z" fill="#fff" />
      </svg>
    );
  }

  // HTML / HTML5
  if (norm.includes("html")) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
        <path d="M5 3l2.2 24.8L16 30.5l8.8-2.7L27 3H5z" fill="#e34f26" />
        <path d="M16 5.5v22.6l6.8-2.1L24.6 5.5H16z" fill="#f06529" />
        <path d="M16 11.5H9.8l.3 3.5H16V11.5zm0 6.8h-3l-.2-2.3h-3.4l.5 5.8 6.1 1.7v-3.5zm0-6.8v3.5h3.6l-.3 3.3h-3.3v3.5l4.3-1.2.6-6.6H16z" fill="#fff" />
      </svg>
    );
  }

  // CSS / CSS3
  if (norm.includes("css")) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
        <path d="M5 3l2.2 24.8L16 30.5l8.8-2.7L27 3H5z" fill="#1572b6" />
        <path d="M16 5.5v22.6l6.8-2.1L24.6 5.5H16z" fill="#33a9dc" />
        <path d="M16 11.5H9.8l.3 3.5H16V11.5zm0 6.8h-3l-.2-2.3h-3.4l.5 5.8 6.1 1.7v-3.5zm0-6.8v3.5h3.6l-.3 3.3h-3.3v3.5l4.3-1.2.6-6.6H16z" fill="#fff" />
      </svg>
    );
  }

  // Node.js
  if (norm.includes("node")) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
        <path d="M16 2.5l11.5 6.6v13.8L16 29.5 4.5 22.9V9.1L16 2.5z" fill="#5fa04e" />
        <path d="M16 10c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 9.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z" fill="#fff" />
      </svg>
    );
  }

  // Express.js
  if (norm.includes("express")) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
        <circle cx="16" cy="16" r="14" fill="#252525" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <path d="M9 11h8c2 0 3.5 1.2 3.5 3s-1.5 3-3.5 3h-5.5v4H9V11zm2.5 4.5h5c.8 0 1.5-.4 1.5-1.2s-.7-1.3-1.5-1.3h-5v2.5z" fill="#fff" />
      </svg>
    );
  }

  // PHP
  if (norm.includes("php")) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
        <ellipse cx="16" cy="16" rx="15" ry="9" fill="#777bb4" />
        <path
          d="M9 12h3.5c1.4 0 2.2.6 2 1.8-.2 1.3-1.3 2.2-2.7 2.2h-1.5l-.8 4H7.8l2.2-10zm1.7 3.5h1.2c.6 0 1.1-.3 1.2-.8.1-.5-.2-.7-.7-.7h-1.2l-.5 2.5zm6.5-3.5h1.7l-.8 4h2.2l.8-4h1.7l-2 10h-1.7l.8-4.5h-2.2l-.9 4.5h-1.7l2.1-10zm7 0h3.5c1.4 0 2.2.6 2 1.8-.2 1.3-1.3 2.2-2.7 2.2H25l-.8 4h-1.7l2.2-10zm1.7 3.5h1.2c.6 0 1.1-.3 1.2-.8.1-.5-.2-.7-.7-.7h-1.2l-.5 2.5z"
          fill="#fff"
        />
      </svg>
    );
  }

  // Python
  if (norm.includes("python")) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
        <path
          d="M15.9 3c-4.4 0-4.1 1.9-4.1 1.9l.1 2h4.2v.6H9.8S6.9 7.2 6.9 11.6s2.5 4.3 2.5 4.3h1.5v-2.1c0-2.4 2.1-2.3 2.1-2.3h4.2c2.1 0 1.9-1.9 1.9-1.9V5.8S19.5 3 15.9 3zm-2.4 1.3c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z"
          fill="#3776ab"
        />
        <path
          d="M16.1 29c4.4 0 4.1-1.9 4.1-1.9l-.1-2h-4.2v-.6h6.3s2.9.3 2.9-4.1-2.5-4.3-2.5-4.3h-1.5v2.1c0 2.4-2.1 2.3-2.1 2.3h-4.2c-2.1 0-1.9 1.9-1.9 1.9v3.8s-.4 2.8 3.2 2.8zm2.4-1.3c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z"
          fill="#ffd43b"
        />
      </svg>
    );
  }

  // MySQL
  if (norm.includes("mysql")) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
        <rect width="32" height="32" rx="4" fill="#00758f" />
        <path
          d="M8 22c3.5-1 6-5 6.5-10 .3 3 1.5 6 4.5 7.5 1-1.5 2-4 2-7.5 2.5 4 4.5 7 7 6-1-2-1.5-5-2-7 1.5 2 3.5 3.5 5 4-2-4-5-8-10-8-5.5 0-9 5-13 15z"
          fill="#f29111"
        />
      </svg>
    );
  }

  // MongoDB
  if (norm.includes("mongo")) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
        <path
          d="M16 2.5c-.5.5-5.2 5.5-5.2 12.3 0 5.4 3.7 9.5 5.2 10.7 1.5-1.2 5.2-5.3 5.2-10.7C21.2 8 16.5 3 16 2.5z"
          fill="#47a248"
        />
        <path d="M16 2.5v24.2c.4-.3 1-.8 1.4-1.2.2-.2.5-.4.7-.6 1.8-1.9 3.1-4.7 3.1-8.9 0-6.8-4.7-11.8-5.2-12.3v-.1z" fill="#499d4a" />
        <path d="M16 26.7v3.3c-.2 0-.4-.3-.6-.5-.3-.4-.5-1-.5-1.8 0-.4.4-.7 1.1-1z" fill="#3fa037" />
      </svg>
    );
  }

  // Git
  if (norm.includes("git") && !norm.includes("github")) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
        <path
          d="M30 14.2l-12.2-12.2c-.8-.8-2.2-.8-3 0L11.7 5.1l3.9 3.9c.9-.3 2 .1 2.6.7.6.6.8 1.6.6 2.5l3.8 3.8c.9-.2 1.9 0 2.5.6 1 1 1 2.6 0 3.6s-2.6 1-3.6 0c-.8-.8-.9-2-.4-2.9l-3.5-3.5v9.1c.3.2.6.5.7.8 1 1 1 2.6 0 3.6s-2.6 1-3.6 0c-1-1-1-2.6 0-3.6.3-.3.7-.6 1.1-.7v-9.3c-.4-.1-.8-.4-1.1-.7-1-1-1-2.6 0-3.6.3-.3.7-.5 1.1-.6L11.7 5 2 14.7c-.8.8-.8 2.2 0 3l12.2 12.2c.8.8 2.2.8 3 0L30 17.2c.8-.8.8-2.2 0-3z"
          fill="#f05032"
        />
      </svg>
    );
  }

  // Linux
  if (norm.includes("linux")) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
        <circle cx="16" cy="16" r="14" fill="#fcc624" />
        <circle cx="12" cy="12" r="2.5" fill="#000" />
        <circle cx="20" cy="12" r="2.5" fill="#000" />
        <path d="M16 15c-2 0-3 1.5-3 2.5s1 2 3 2 3-1 3-2-1-2.5-3-2.5z" fill="#ff7f00" />
        <path d="M10 21c2 3 10 3 12 0 0 2-4 4-6 4s-6-2-6-4z" fill="#000" />
      </svg>
    );
  }

  // Docker
  if (norm.includes("docker")) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
        <path
          d="M29.5 13.8c-.5-.3-1.6-.4-2.5 0-.2-1-.7-1.9-1.5-2.5-.2 0-.3.1-.3.2-.2 1.3.1 2.6.9 3.5-1.1.7-2.7.6-3.8.3-.4-.1-.7-.2-.9-.3H4c-.6 0-1.1.5-1.1 1.1 0 3.3 1.3 6.4 3.7 8.6 2.5 2.3 5.8 3.5 9.2 3.5 7.8 0 13.5-5 14.2-12.2.1-.8-.2-1.7-.5-2.2zm-22.3.2h2.3v2.3H7.2V14zm3.3 0h2.3v2.3h-2.3V14zm3.3 0h2.3v2.3h-2.3V14zm-3.3-3.3h2.3V13h-2.3v-2.3zm3.3 0h2.3V13h-2.3v-2.3zm3.3 0h2.3V13h-2.3v-2.3zm0 3.3h2.3v2.3h-2.3V14zm3.3 0h2.3v2.3H20.4V14zm0-3.3h2.3V13H20.4v-2.3z"
          fill="#2496ed"
        />
      </svg>
    );
  }

  // Vite
  if (norm.includes("vite")) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
        <path d="M29.5 6.3L16.8 28.9c-.3.5-1 .5-1.3 0L3.1 6.5c-.4-.6.1-1.3.7-1.2l12.7 2.3 12.3-2.5c.6-.1 1.1.6.7 1.2z" fill="#646cff" />
        <path d="M20.8 4.2L12.5 16h4.2l-3.2 8.5 9.8-12.8h-4.5l3.2-6.5c.3-.6-.3-1.3-.9-1z" fill="#ffd43b" />
      </svg>
    );
  }

  // MERN Stack
  if (norm.includes("mern")) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
        <rect width="32" height="32" rx="6" fill="#0c172b" stroke="#4cc9f0" strokeWidth="1.5" />
        <text x="4" y="21" fill="#4cc9f0" fontFamily="monospace" fontSize="11" fontWeight="bold">MERN</text>
      </svg>
    );
  }

  // REST APIs
  if (norm.includes("api") || norm.includes("rest")) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
        <circle cx="8" cy="16" r="4" fill="#4cc9f0" />
        <circle cx="24" cy="10" r="4" fill="#10b981" />
        <circle cx="24" cy="22" r="4" fill="#6c82ff" />
        <line x1="12" y1="16" x2="20" y2="10" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
        <line x1="12" y1="16" x2="20" y2="22" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
      </svg>
    );
  }

  // Default Code / Tool fallback
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
};
