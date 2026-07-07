// Schlanke Inline-Icons (currentColor), damit keine Icon-Library nötig ist.
type P = { className?: string };
const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const IconLayers = (p: P) => (
  <svg {...base} className={p.className}>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5" />
  </svg>
);

export const IconShuffle = (p: P) => (
  <svg {...base} className={p.className}>
    <path d="M16 3h5v5" />
    <path d="M4 20 21 3" />
    <path d="M21 16v5h-5" />
    <path d="m15 15 6 6" />
    <path d="M4 4l5 5" />
  </svg>
);

export const IconChart = (p: P) => (
  <svg {...base} className={p.className}>
    <path d="M3 3v18h18" />
    <path d="m7 14 3-3 3 3 5-6" />
  </svg>
);

export const IconTarget = (p: P) => (
  <svg {...base} className={p.className}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="3.5" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
  </svg>
);

export const IconRefresh = (p: P) => (
  <svg {...base} className={p.className}>
    <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
    <path d="M3 21v-5h5" />
  </svg>
);

export const IconCalendar = (p: P) => (
  <svg {...base} className={p.className}>
    <rect x="3" y="4" width="18" height="17" rx="2" />
    <path d="M3 9h18M8 2v4M16 2v4" />
  </svg>
);

export const IconUpload = (p: P) => (
  <svg {...base} className={p.className}>
    <path d="M12 15V3m0 0L8 7m4-4 4 4" />
    <path d="M4 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" />
  </svg>
);

export const IconSpark = (p: P) => (
  <svg {...base} className={p.className}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
    <path d="M12 8a4 4 0 0 0 4 4 4 4 0 0 0-4 4 4 4 0 0 0-4-4 4 4 0 0 0 4-4Z" />
  </svg>
);

export const IconRocket = (p: P) => (
  <svg {...base} className={p.className}>
    <path d="M5 15c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2 0-2.8a2 2 0 0 0-3 0Z" />
    <path d="M9 13c4-8 9-9 12-9 0 3-1 8-9 12l-3-3Z" />
    <path d="M14.5 9.5 12 12" />
  </svg>
);

export const IconCheck = (p: P) => (
  <svg {...base} className={p.className}>
    <path d="m5 12 4.5 4.5L19 7" />
  </svg>
);

export const IconArrowRight = (p: P) => (
  <svg {...base} className={p.className}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconArrowDown = (p: P) => (
  <svg {...base} className={p.className}>
    <path d="M12 5v14M6 13l6 6 6-6" />
  </svg>
);

export const IconPencil = (p: P) => (
  <svg {...base} className={p.className}>
    <path d="M4 20h4L18.5 9.5a2 2 0 0 0-3-3L5 17v3Z" />
    <path d="M13.5 6.5l3 3" />
  </svg>
);

export const IconLock = (p: P) => (
  <svg {...base} className={p.className}>
    <rect x="4" y="10" width="16" height="10" rx="2" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
  </svg>
);
