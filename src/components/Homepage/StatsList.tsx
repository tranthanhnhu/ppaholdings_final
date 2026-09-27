"use client";

import { CountUp } from "@/components/UI/CountUp";

type StatItem = {
  value: string;
  unit: string;
  label: string;
};

export function StatsList({ items }: { items: StatItem[] }) {
  return (
    <div className="flex w-full flex-col border-t border-paa-accent">
      {items.map((item) => (
        <div
          key={item.label}
          className="group border-b border-paa-accent py-4 transition-transform duration-300 ease-out hover:scale-[1.03] origin-left"
        >
          <div className="flex flex-col gap-3 pr-4 pt-4">
            <div className="flex flex-col">
              <p className="text-[48px] font-light leading-[56px] text-paa-text lg:text-[64px] lg:leading-[72px]">
                <CountUp value={item.value} />
              </p>
              {item.unit ? (
                <p className="text-[24px] font-light leading-[32px] text-paa-accent lg:text-[32px] lg:leading-[40px]">
                  {item.unit}
                </p>
              ) : null}
            </div>
            <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-muted">
              {item.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
