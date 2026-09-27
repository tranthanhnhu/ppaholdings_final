"use client";

import { CountUp } from "@/components/UI/CountUp";

type FigureItem = { value: string; label: string };

export function FiguresList({ items }: { items: FigureItem[] }) {
  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-8">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex flex-1 flex-col gap-3 transition-transform duration-300 ease-out hover:scale-[1.04] origin-left"
        >
          <p className="text-[40px] font-light leading-none tracking-[-0.84px] text-paa-inverse lg:text-[56px] lg:leading-[64px]">
            <CountUp value={item.value} />
          </p>
          <p className="text-[11px] font-medium tracking-[1.4px] text-paa-inverse/80">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
