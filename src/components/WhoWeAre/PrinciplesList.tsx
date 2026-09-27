"use client";

import { useState } from "react";

type Item = {
  index: string;
  title: string;
  english: string;
  body: string;
};

export function PrinciplesList({ items }: { items: Item[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:gap-8">
      {items.map((item, i) => {
        const active = hovered === i;

        return (
          <article
            key={item.index}
            className="flex flex-1 flex-col gap-3 origin-left cursor-default"
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
              {item.index}
            </p>
            <h3
              className={`font-medium tracking-[-0.2px] transition-all duration-300 ${
                active
                  ? "text-[26px] leading-8 text-paa-accent"
                  : "text-[22px] leading-7 text-paa-text"
              }`}
            >
              {item.title}
            </h3>
            <p
              className={`font-medium tracking-[1.4px] transition-all duration-300 ${
                active
                  ? "text-[13px] leading-4 text-paa-accent"
                  : "text-[11px] leading-[14px] text-paa-muted"
              }`}
            >
              {item.english}
            </p>
            <p
              className={`leading-[26px] transition-all duration-300 ${
                active
                  ? "text-[17px] text-paa-text"
                  : "text-[16px] text-paa-text"
              }`}
            >
              {item.body}
            </p>
          </article>
        );
      })}
    </div>
  );
}
