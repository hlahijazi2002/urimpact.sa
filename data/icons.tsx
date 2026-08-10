import React from "react";

// ─────────────────────────────────────────────
//  Centralised SVG icon set for URIMPACT
//  Usage: <Icon name="lightning" size={24} className="..." />
// ─────────────────────────────────────────────

export type IconName =
  // Problem cards
  | "lightning"
  | "scope3"
  | "chart-gap"
  | "roadmap"
  // Platform modules
  | "esg-module"
  | "ghg-module"
  | "decarb-module"
  | "nbs-module"
  // AI features
  | "ai-extract"
  | "emission-map"
  | "risk"
  | "benchmark"
  | "decarb-rec"
  // Satellite comparison – traditional
  | "field-visit"
  | "delayed"
  | "limited-coverage"
  | "high-cost"
  // Satellite comparison – automated
  | "realtime"
  | "full-coverage"
  | "cost-effective"
  | "transparent"
  // NBS section
  | "leaf"
  | "tree"
  | "water-drop"
  | "sun"
  | "globe";

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  color?: string;
}

const paths: Record<IconName, React.ReactNode> = {
  // ── Problem cards ────────────────────────────
  lightning: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 2 4.5 13.5H11L9 22l9.5-12H13L13 2Z"
    />
  ),
  scope3: (
    <>
      <circle cx="5" cy="12" r="2" />
      <circle cx="19" cy="5" r="2" />
      <circle cx="19" cy="19" r="2" />
      <path strokeLinecap="round" d="M7 12h5m2-4.5 2.5 2M14 16.5l2.5 1" />
      <path
        strokeLinecap="round"
        strokeDasharray="2 2"
        d="M5 10V6a2 2 0 0 1 2-2h8"
      />
    </>
  ),
  "chart-gap": (
    <>
      <polyline
        strokeLinecap="round"
        strokeLinejoin="round"
        points="3,17 8,10 13,14 18,6"
      />
      <line x1="3" y1="20" x2="21" y2="20" strokeLinecap="round" />
      <circle cx="18" cy="6" r="2" fill="currentColor" stroke="none" />
    </>
  ),
  roadmap: (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 17c3-4 5-4 9 0s6 4 9 0"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="3 2"
        d="M3 11c3-4 5-4 9 0s6 4 9 0"
      />
      <circle cx="12" cy="6" r="2" />
      <line x1="12" y1="8" x2="12" y2="11" strokeLinecap="round" />
    </>
  ),

  // ── Platform modules ─────────────────────────
  "esg-module": (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 17.5h7M17.5 14v7"
      />
    </>
  ),
  "ghg-module": (
    <>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M12 3c-2.5 3-2.5 6 0 9s2.5 6 0 9" />
      <path strokeLinecap="round" d="M3 12h18" />
      <path strokeLinecap="round" d="M4.5 7.5h15M4.5 16.5h15" />
    </>
  ),
  "decarb-module": (
    <>
      <polyline
        strokeLinecap="round"
        strokeLinejoin="round"
        points="3,18 8,11 13,14 21,4"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 4h4v4" />
      <path strokeLinecap="round" d="M3 21h18" />
    </>
  ),
  "nbs-module": (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 22V12" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 12C12 8 8 4 4 6c4 0 6 3 8 6Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 12c0-4 4-8 8-6-4 0-6 3-8 6Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 17c0-3-3-5-6-4 3 0 5 2 6 4Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 17c0-3 3-5 6-4-3 0-5 2-6 4Z"
      />
    </>
  ),

  // ── AI features ──────────────────────────────
  "ai-extract": (
    <>
      <rect x="3" y="3" width="18" height="14" rx="2" />
      <path strokeLinecap="round" d="M7 8h10M7 11h6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 17l2 4 2-4" />
      <line x1="17" y1="17" x2="17" y2="21" strokeLinecap="round" />
    </>
  ),
  "emission-map": (
    <>
      <circle cx="12" cy="10" r="3" />
      <path
        strokeLinecap="round"
        d="M12 2a8 8 0 0 1 8 8c0 5-8 13-8 13S4 15 4 10a8 8 0 0 1 8-8Z"
      />
      <path strokeLinecap="round" strokeDasharray="2 2" d="M5 19h14" />
    </>
  ),
  risk: (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.3 3.5 2 20h20L13.7 3.5a2 2 0 0 0-3.4 0Z"
      />
      <line x1="12" y1="10" x2="12" y2="14" strokeLinecap="round" />
      <circle cx="12" cy="17" r="0.5" fill="currentColor" />
    </>
  ),
  benchmark: (
    <>
      <line
        x1="18"
        y1="3"
        x2="18"
        y2="21"
        strokeLinecap="round"
        strokeDasharray="2 2"
      />
      <polyline
        strokeLinecap="round"
        strokeLinejoin="round"
        points="3,17 7,11 11,14 15,8"
      />
      <circle cx="15" cy="8" r="1.5" fill="currentColor" stroke="none" />
    </>
  ),
  "decarb-rec": (
    <>
      <circle cx="12" cy="12" r="9" />
      <polyline
        strokeLinecap="round"
        strokeLinejoin="round"
        points="9,12 11,14 15,10"
      />
      <path strokeLinecap="round" d="M12 7v1M12 16v1M7 12H6M18 12h-1" />
    </>
  ),

  // ── Satellite – traditional (problems) ───────
  "field-visit": (
    <>
      <circle cx="12" cy="8" r="4" />
      <path strokeLinecap="round" d="M6 20v-2a6 6 0 0 1 12 0v2" />
      <path strokeLinecap="round" strokeDasharray="2 2" d="M3 20h18" />
    </>
  ),
  delayed: (
    <>
      <circle cx="12" cy="12" r="9" />
      <polyline
        strokeLinecap="round"
        strokeLinejoin="round"
        points="12,7 12,12 16,14"
      />
      <path strokeLinecap="round" d="M19 3 21 5M5 3 3 5" />
    </>
  ),
  "limited-coverage": (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 2a10 10 0 1 0 10 10"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 2 22 4" />
      <line x1="2" y1="2" x2="22" y2="22" strokeLinecap="round" />
    </>
  ),
  "high-cost": (
    <>
      <circle cx="12" cy="12" r="9" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 7v1.5M12 15.5V17M9.5 9.5C9.5 8.1 10.6 7 12 7s2.5 1.1 2.5 2.5c0 2.5-5 2.5-5 5H17"
      />
    </>
  ),

  // ── Satellite – automated (solutions) ────────
  realtime: (
    <>
      <path strokeLinecap="round" d="M5.6 5.6A9 9 0 1 0 18.4 18.4" />
      <path strokeLinecap="round" d="M8.5 8.5A5 5 0 1 0 15.5 15.5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <path strokeLinecap="round" d="M12 2v2M12 20v2M2 12H4M20 12h2" />
    </>
  ),
  "full-coverage": (
    <>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M12 3c-2.5 3-2.5 6 0 9s2.5 6 0 9" />
      <path strokeLinecap="round" d="M3 12h18" />
      <polyline
        strokeLinecap="round"
        strokeLinejoin="round"
        points="8,9 12,7 16,9"
      />
    </>
  ),
  "cost-effective": (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 2 15.09 8.26 22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z"
      />
    </>
  ),
  transparent: (
    <>
      <rect x="3" y="3" width="18" height="14" rx="2" />
      <path strokeLinecap="round" d="M7 8h10M7 11h7" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 20h8M12 17v3" />
    </>
  ),
  // ── NBS section ──────────────────────────────
  leaf: (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 4C11 4 4 11 4 20c9 0 16-7 16-16Z"
      />
      <path strokeLinecap="round" d="M4 20 12 12" />
    </>
  ),
  tree: (
    <>
      <circle cx="12" cy="9" r="6" />
      <path strokeLinecap="round" d="M12 15v6" />
    </>
  ),
  "water-drop": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 2s7 8.5 7 13a7 7 0 1 1-14 0c0-4.5 7-13 7-13Z"
    />
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path
        strokeLinecap="round"
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
      />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M3 12h18" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3c2.5 2.5 4 5.5 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.5-4-9s1.5-6.5 4-9Z"
      />
    </>
  ),
};

export function Icon({ name, size = 24, className = "", color }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color ?? "currentColor"}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
