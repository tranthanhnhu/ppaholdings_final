"use client";

import { useState } from "react";

type Principle = {
  index: string;
  title: string;
  body: string;
};

export function ApproachList({ principles }: { principles: Principle[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-6">
      {principles.map((p, i) => {
        const active = hovered === i;

        return (
          <div key={p.index} className="contents">
            {i > 0 && (
              <span
                aria-hidden
                className="hidden shrink-0 text-[22px] font-light text-paa-accent lg:inline"
              >
                →
              </span>
            )}
            <article
              className="flex flex-1 flex-col gap-4 origin-left cursor-default transition-transform duration-300 ease-out"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <p
                className={`font-medium tracking-[1.4px] transition-all duration-300 ${
                  active
                    ? "text-[13px] leading-4 text-paa-accent"
                    : "text-[11px] leading-[14px] text-paa-accent"
                }`}
              >
                {p.index}
              </p>
              <h3
                className={`font-medium tracking-[-0.2px] transition-all duration-300 ${
                  active
                    ? "text-[26px] leading-8 text-paa-accent"
                    : "text-[22px] leading-7 text-paa-text"
                }`}
              >
                {p.title}
              </h3>
              <p
                className={`max-w-[360px] leading-[26px] transition-all duration-300 ${
                  active
                    ? "text-[17px] text-paa-text"
                    : "text-[16px] text-paa-muted"
                }`}
              >
                {p.body}
              </p>
            </article>
          </div>
        );
      })}
    </div>
  );
}
