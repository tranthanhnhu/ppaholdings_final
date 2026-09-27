"use client";

import { useState } from "react";

type Stage = {
  title: string;
  companies: string[];
};

export function ValueChainStages({
  stages,
  current,
}: {
  stages: Stage[];
  current: number;
}) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex gap-4 overflow-x-auto pb-2 lg:gap-0">
      {stages.map((stage, i) => {
        const active = hovered === i || (hovered === null && i === current);
        const tone = active ? "text-paa-accent" : "text-paa-muted";

        return (
          <div
            key={stage.title}
            className="flex min-w-[180px] flex-1 flex-col gap-3 origin-top-left lg:min-w-0"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="flex items-center py-2">
              <span
                className={`size-2 shrink-0 rounded-full transition-colors duration-300 ${
                  active ? "bg-paa-accent" : "bg-paa-muted"
                }`}
              />
              {i < stages.length - 1 ? (
                <div
                  className={`h-px flex-1 transition-colors duration-300 ${
                    active ? "bg-paa-accent" : "bg-paa-muted"
                  }`}
                />
              ) : (
                <div className="h-px flex-1 bg-transparent" />
              )}
            </div>
            <p
              className={`font-medium tracking-[1.4px] transition-all duration-300 ${tone} ${
                active ? "text-[13px] leading-4" : "text-[11px] leading-[14px]"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </p>
            <p
              className={`font-medium transition-all duration-300 ${tone} ${
                active ? "text-[17px] leading-6" : "text-[14px] leading-5"
              }`}
            >
              {stage.title}
            </p>
            <div
              className={`leading-normal text-paa-muted transition-all duration-300 ${
                active ? "text-[13px]" : "text-[12px]"
              }`}
            >
              {stage.companies.map((c) => (
                <p key={c}>{c}</p>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
