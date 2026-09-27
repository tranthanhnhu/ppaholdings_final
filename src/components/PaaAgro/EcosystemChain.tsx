"use client";

import { useState } from "react";

type Stage = {
  index: string;
  title: string;
  companies: string[];
  current?: boolean;
  note?: string;
};

export function EcosystemChain({ stages }: { stages: Stage[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex w-full flex-col">
      {stages.map((stage, i) => {
        const active = hovered === i || (hovered === null && stage.current);
        const isLast = i === stages.length - 1;

        return (
          <div
            key={stage.index}
            className="group flex gap-6 items-start"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="relative flex w-4 shrink-0 flex-col items-center pt-[3px]">
              <span
                className={`relative z-10 size-2.5 rounded-full transition-colors duration-300 ${
                  active ? "bg-paa-accent" : "bg-paa-inverse"
                }`}
              />
              {!isLast ? (
                <span
                  className={`absolute top-3 bottom-0 w-px ${
                    active ? "bg-paa-accent" : "bg-paa-inverse/35"
                  }`}
                />
              ) : null}
            </div>

            <div
              className={`flex min-w-0 flex-1 gap-8 pb-8 transition-all duration-300 ease-out origin-left ${
                active ? "scale-[1.04] text-paa-accent" : "text-paa-inverse"
              } ${isLast ? "pb-0" : ""}`}
            >
              <div className="flex w-full max-w-[360px] shrink-0 flex-col gap-1.5">
                <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px]">
                  {stage.index}
                </p>
                <p
                  className={`font-light tracking-[-0.4px] transition-all duration-300 ${
                    active
                      ? "text-[28px] leading-9 lg:text-[40px] lg:leading-[48px]"
                      : "text-[14px] leading-5 lg:text-[16px] lg:leading-6"
                  }`}
                >
                  {stage.title}
                </p>
                {stage.note && active ? (
                  <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-accent">
                    {stage.note}
                  </p>
                ) : null}
              </div>
              <div className="flex-1 text-[16px] leading-[26px] text-paa-inverse">
                {stage.companies.map((c) => (
                  <p key={c}>{c}</p>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
