"use client";

import { useEffect, useRef, useState } from "react";

type RegionDiagramProps = {
  center: string;
  north: string;
  east: string;
  south: string;
  west: string;
  caption: string;
};

const ACCENT = "#c2995b";
const MUTED = "rgba(9,23,37,0.28)";
const LABEL = "#091725";

/**
 * 4 region circles sit at N/E/S/W and are mutually tangent
 * (center-to-neighbor distance = 2R ⇒ OFFSET = R√2).
 * Laos keeps the same radius and still overlaps each region.
 */
const R = 68;
const CX = 200;
const CY = 200;
const OFFSET = R * Math.SQRT2;
const R_OUTER = OFFSET + R + 2;

const REGIONS = [
  { key: "north" as const, cx: CX, cy: CY - OFFSET, lx: 0, ly: -6, delay: 0.75 },
  { key: "east" as const, cx: CX + OFFSET, cy: CY, lx: 10, ly: 0, delay: 1.1 },
  { key: "south" as const, cx: CX, cy: CY + OFFSET, lx: 0, ly: 6, delay: 1.45 },
  { key: "west" as const, cx: CX - OFFSET, cy: CY, lx: -10, ly: 0, delay: 1.8 },
];

export function RegionDiagram({
  center,
  north,
  east,
  south,
  west,
  caption,
}: RegionDiagramProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const labels = { north, east, south, west } as const;
  // Slight crop around the outer ring
  const pad = 8;
  const view = R_OUTER * 2 + pad * 2;
  const origin = CX - R_OUTER - pad;

  return (
    <div
      ref={ref}
      className="flex w-full max-w-[420px] flex-col items-center gap-8"
    >
      <svg
        viewBox={`${origin} ${origin} ${view} ${view}`}
        className="h-auto w-full overflow-visible"
        role="img"
        aria-label={caption}
      >
        <defs>
          <style>{`
            @keyframes paa-core-pulse {
              0%, 100% { stroke-opacity: 0.65; }
              50% { stroke-opacity: 1; }
            }
            @keyframes paa-outer-flow {
              to { stroke-dashoffset: -28; }
            }
            .paa-core {
              animation: paa-core-pulse 3.2s ease-in-out infinite;
            }
            .paa-outer {
              animation: paa-outer-flow 9s linear infinite;
            }
            @media (prefers-reduced-motion: reduce) {
              .paa-core, .paa-outer { animation: none; }
            }
          `}</style>
        </defs>

        <circle
          className={visible ? "paa-outer" : undefined}
          cx={CX}
          cy={CY}
          r={R_OUTER}
          fill="none"
          stroke={ACCENT}
          strokeWidth={1.25}
          strokeDasharray="5 8"
          style={{
            opacity: visible ? 0.9 : 0,
            transform: visible ? "scale(1)" : "scale(0.9)",
            transformOrigin: `${CX}px ${CY}px`,
            transition:
              "opacity 800ms ease 2.35s, transform 900ms cubic-bezier(0.22, 1, 0.36, 1) 2.35s",
          }}
        />

        {REGIONS.map((r) => (
          <g
            key={r.key}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "scale(1)" : "scale(0.82)",
              transformOrigin: `${r.cx}px ${r.cy}px`,
              transition: `opacity 700ms ease ${r.delay}s, transform 750ms cubic-bezier(0.22, 1, 0.36, 1) ${r.delay}s`,
            }}
          >
            <circle
              cx={r.cx}
              cy={r.cy}
              r={R}
              fill="none"
              stroke={MUTED}
              strokeWidth={1.15}
            />
            <text
              x={r.cx + r.lx}
              y={r.cy + r.ly}
              textAnchor="middle"
              dominantBaseline="central"
              fill={LABEL}
              style={{ fontSize: 14, fontWeight: 400, letterSpacing: "0.02em" }}
            >
              {labels[r.key]}
            </text>
          </g>
        ))}

        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1)" : "scale(0.75)",
            transformOrigin: `${CX}px ${CY}px`,
            transition:
              "opacity 550ms ease 0.05s, transform 650ms cubic-bezier(0.22, 1, 0.36, 1) 0.05s",
          }}
        >
          <circle
            className={visible ? "paa-core" : undefined}
            cx={CX}
            cy={CY}
            r={R}
            fill="none"
            stroke={ACCENT}
            strokeWidth={1.6}
          />
          <text
            x={CX}
            y={CY}
            textAnchor="middle"
            dominantBaseline="central"
            fill={ACCENT}
            style={{ fontSize: 15, fontWeight: 500, letterSpacing: "0.04em" }}
          >
            {center}
          </text>
        </g>
      </svg>

      <p
        className="max-w-[400px] text-center text-[14px] leading-6 text-paa-muted"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(6px)",
          transition: "opacity 600ms ease 2.6s, transform 600ms ease 2.6s",
        }}
      >
        {caption}
      </p>
    </div>
  );
}
