"use client";

import Image from "next/image";
import { useState } from "react";

type Item = {
  year?: string;
  title: string;
  body?: string;
};

export function TimelineGrid({ items }: { items: Item[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const year = items.find((item) => item.year)?.year;

  return (
    <>
      {year ? (
        <p className="mb-10 text-[56px] font-light leading-[64px] tracking-[-0.84px] text-paa-text lg:mb-14">
          {year}
        </p>
      ) : null}

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-x-20 lg:gap-y-14">
        {items.map((item, i) => {
          const active = hovered === i;

          return (
            <article
              key={`${item.title}-${i}`}
              className="flex flex-col gap-4 origin-left cursor-default"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="flex w-full items-center">
                <Image
                  src="/icons/timeline-dot.svg"
                  alt=""
                  width={8}
                  height={8}
                  className={`shrink-0 transition-transform duration-300 ${
                    active ? "scale-125" : "scale-100"
                  }`}
                />
                <div
                  className={`h-px flex-1 transition-colors duration-300 ${
                    active ? "bg-paa-accent" : "bg-paa-accent/70"
                  }`}
                />
              </div>
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
                className={`min-h-[52px] leading-[26px] transition-all duration-300 ${
                  active
                    ? "text-[17px] text-paa-text"
                    : "text-[16px] text-paa-text"
                }`}
              >
                {item.body || "\u00A0"}
              </p>
            </article>
          );
        })}
      </div>
    </>
  );
}
