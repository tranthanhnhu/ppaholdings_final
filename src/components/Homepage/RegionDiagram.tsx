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

const NODES = [
  { key: "center", cx: 200, cy: 200, delay: 0 },
  { key: "north", cx: 200, cy: 95, delay: 120 },
  { key: "east", cx: 305, cy: 200, delay: 200 },
  { key: "south", cx: 200, cy: 305, delay: 280 },
  { key: "west", cx: 95, cy: 200, delay: 360 },
] as const;

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

  const labels: Record<(typeof NODES)[number]["key"], string> = {
    center,
    north,
    east,
    south,
    west,
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex w-full max-w-[520px] flex-col items-center gap-8">
      <svg
        viewBox="0 0 400 400"
        className="h-auto w-full"
        role="img"
        aria-label={caption}
      >
        {NODES.map((node) => {
          const isCenter = node.key === "center";
          return (
            <g
              key={node.key}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "scale(1)" : "scale(0.86)",
                transformOrigin: `${node.cx}px ${node.cy}px`,
                transition: `opacity 700ms ease ${node.delay}ms, transform 700ms ease ${node.delay}ms`,
              }}
            >
              <circle
                cx={node.cx}
                cy={node.cy}
                r={78}
                fill="none"
                stroke={isCenter ? "#c2995b" : "rgba(9,23,37,0.28)"}
                strokeWidth={1.25}
              />
              <text
                x={node.cx}
                y={node.cy}
                textAnchor="middle"
                dominantBaseline="central"
                fill={isCenter ? "#c2995b" : "#091725"}
                style={{
                  fontSize: isCenter ? 18 : 15,
                  fontWeight: isCenter ? 500 : 400,
                  letterSpacing: "0.02em",
                }}
              >
                {labels[node.key]}
              </text>
            </g>
          );
        })}
      </svg>
      <p
        className="max-w-[360px] text-center text-[14px] leading-6 text-paa-muted"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 700ms ease 480ms, transform 700ms ease 480ms",
        }}
      >
        {caption}
      </p>
    </div>
  );
}
